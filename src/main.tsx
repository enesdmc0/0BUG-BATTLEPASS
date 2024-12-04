import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "jotai";
import {
    ModalClaim,
    ModalThanks,
    ModalQuiz,
    ModalSpin,
    ModalBuyLevel,
    } from "./components/modal";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
    <ModalClaim />
    <ModalThanks />
    <ModalQuiz />
    <ModalSpin />
    <ModalBuyLevel />
  </Provider>
);
