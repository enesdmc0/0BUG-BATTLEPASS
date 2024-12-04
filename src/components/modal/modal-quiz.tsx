import { Modal } from "./modal";
import {
  missionPassedAtom,
  modalQuizAtom,
  quiz,
  wastedAtom,
  dailyQuize,
  useLang,
} from "../../lib/jotai";
import { useAtom, useSetAtom } from "jotai";
import { HOVER_EFFECTS } from "../../lib/constants";
import { useState } from "react";
import { MissionPassed, Wasted } from "../index";
import { cn } from "../../lib/utils.ts";

export const ModalQuiz = () => {
  const setModalQuiz = useSetAtom(modalQuizAtom);
  const setWasted = useSetAtom(wastedAtom);
  const setMissionPassed = useSetAtom(missionPassedAtom);
  const lang = useLang();
  const [getQuiz] = useAtom(quiz);

  const setDailyQuize = useSetAtom(dailyQuize);

  const [answer, setAnswer] = useState<boolean>(false);
  const [currentChoose, setCurrentChoose] = useState<number | null>(null);

  enum QuestionChoose {
    "A)" = 0,
    "B)",
    "C)",
    "D)",
  }

  const handleClick = () => {
    if (!answer) {
      setWasted(true);
      setTimeout(() => {
        setWasted(false);
        setModalQuiz(false);
        setCurrentChoose(null);
      }, 3000);
    } else if (answer) {
      setMissionPassed(true);
      setTimeout(() => {
        setMissionPassed(false);
        setModalQuiz(false);
        setCurrentChoose(null);
      }, 3000);
    }
    setDailyQuize(true);
  };

  const handleCurrentChoose = (i: number) => {
    setAnswer(getQuiz.answers[i].correct);
    setCurrentChoose(i);
  };

  return (
    <>
      <Modal
        atom={modalQuizAtom}
        className="w-[84rem] h-[42.938rem] border-color1 flex flex-col items-center justify-between space-y-4 "
      >
        <div className="w-[60.188rem]">
          <p className="text-[8.125rem] text-white font-black italic leading-[9.813rem] text-center">
            {lang.modal_quiz.title_1}
            <span className="text-color1"> {lang.modal_quiz.title_2}</span>
          </p>
          <div className="bg-color1 h-px w-full" />
          <p className="text-white text-[1.375rem] text-center leading-[1.625rem] mt-1">
            {lang.modal_quiz.description}
          </p>
        </div>
        <div className="w-full space-y-4">
          <p className="border-05 border-[#FFFFFF33] h-[6.875rem] bg-[#FFFFFF1A] text-[2rem] text-white flex items-center justify-center">
            {getQuiz.question}
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {getQuiz.answers.map((x, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleCurrentChoose(i)}
                  className={cn(
                    "border-05 border-[#FFFFFF33]  leading-[2.375rem] text-color5 font-bold text-[2rem] py-4",
                    i === currentChoose
                      ? "bg-[#FFFFFF1A]/30"
                      : "bg-[#FFFFFF1A]",
                    HOVER_EFFECTS
                  )}
                >
                  {QuestionChoose[i]} {x.title}
                </button>
              );
            })}
          </div>
        </div>
        <button
          onClick={handleClick}
          className={cn(
            "text-[2rem] font-bold gradient9 w-full text-color5 leading-[2.438rem] py-4 border-05 border-[#FFFFFF33] hover:bg-color1/50 transition-all duration-300 ",
            HOVER_EFFECTS
          )}
        >
          {lang.modal_quiz.button_text}
        </button>
      </Modal>
      <Wasted />
      <MissionPassed />
    </>
  );
};
