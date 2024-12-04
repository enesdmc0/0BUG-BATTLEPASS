import { atom, useAtomValue } from "jotai";


export const modalClaimAtom = atom<boolean>(false);
export const modalThanksAtom = atom<boolean>(false);
export const modalBuyLevelAtom = atom<boolean>(false);
export const modalQuizAtom = atom<boolean>(false);
export const modalSpinAtom = atom<boolean>(false);

export const wastedAtom = atom<boolean>(false);
export const missionPassedAtom = atom<boolean>(false);
export const youWinAtom = atom<boolean>(false);

export const productWonAtom = atom<boolean>(false);
export const productWonDetailAtom = atom({
    id: 1,
    title: 'Chocolate Bar',
    image: 'free1',
    isClaimed: false,
    amount: 1,
    type: "free"
});

export const freeProduct = atom([
    {
        "id": 1,
        "title": "10Kgoldchain",
        "image": "10kgoldchain.png",
        "amount": 1,
        "isClaimed": true
    },
    {
        "id": 2,
        "title": "Acetone",
        "image": "acetone.png",
        "amount": 1,
        "isClaimed": true
    },
    {
        "id": 3,
        "title": "Advancedkit",
        "image": "advancedkit.png",
        "amount": 2,
        "isClaimed": true
    },
    {
        "id": 4,
        "title": "Advancedlockpick",
        "image": "advancedlockpick.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 5,
        "title": "Advscope Attachment",
        "image": "advscope_attachment.png",
        "amount": 5,
        "isClaimed": false
    },
    {
        "id": 6,
        "title": "Aluminum",
        "image": "aluminum.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 7,
        "title": "Aluminumoxide",
        "image": "aluminumoxide.png",
        "amount": 4,
        "isClaimed": false
    },
    {
        "id": 8,
        "title": "Antipatharia Coral",
        "image": "antipatharia_coral.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 9,
        "title": "Armor",
        "image": "armor.png",
        "amount": 2,
        "isClaimed": false
    },
    {
        "id": 10,
        "title": "Bandage",
        "image": "bandage.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 11,
        "title": "Bank Card",
        "image": "bank_card.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 12,
        "title": "Barrel Attachment",
        "image": "barrel_attachment.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 13,
        "title": "Beer",
        "image": "beer.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 14,
        "title": "Bellend Muzzle Brake",
        "image": "bellend_muzzle_brake.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 15,
        "title": "Binoculars",
        "image": "binoculars.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 16,
        "title": "Boocamo Attachment",
        "image": "boocamo_attachment.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 17,
        "title": "Brushcamo Attachment",
        "image": "brushcamo_attachment.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 18,
        "title": "Casinochips",
        "image": "casinochips.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 19,
        "title": "Certificate",
        "image": "certificate.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 20,
        "title": "Cleaningkit",
        "image": "cleaningkit.png",
        "amount": 1,
        "isClaimed": false
    }
])
export const premiumProduct = atom([
    {
        "id": 1,
        "title": "Clip Attachment",
        "image": "clip_attachment.png",
        "amount": 1,
        "isClaimed": true
    },
    {
        "id": 2,
        "title": "Cocaine Baggy",
        "image": "cocaine_baggy.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 3,
        "title": "Cocaineleaf",
        "image": "cocaineleaf.png",
        "amount": 3,
        "isClaimed": false
    },
    {
        "id": 4,
        "title": "Coffee",
        "image": "coffee.png",
        "amount": 4,
        "isClaimed": false
    },
    {
        "id": 5,
        "title": "Coke Brick",
        "image": "coke_brick.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 6,
        "title": "Coke Small Brick",
        "image": "coke_small_brick.png",
        "amount": 7,
        "isClaimed": false
    },
    {
        "id": 7,
        "title": "Cola",
        "image": "cola.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 8,
        "title": "Certificate",
        "image": "certificate.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 9,
        "title": "Armor",
        "image": "armor.png",
        "amount": 9,
        "isClaimed": false
    },
    {
        "id": 10,
        "title": "Beer",
        "image": "beer.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 11,
        "title": "Casinochips",
        "image": "casinochips.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 12,
        "title": "Bandage",
        "image": "bandage.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 13,
        "title": "Binoculars",
        "image": "binoculars.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 14,
        "title": "Cleaningkit",
        "image": "cleaningkit.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 15,
        "title": "Advscope Attachment",
        "image": "advscope_attachment.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 16,
        "title": "Brushcamo Attachment",
        "image": "brushcamo_attachment.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 17,
        "title": "Acetone",
        "image": "acetone.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 18,
        "title": "Advancedkit",
        "image": "advancedkit.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 19,
        "title": "Advancedlockpick",
        "image": "advancedlockpick.png",
        "amount": 1,
        "isClaimed": false
    },
    {
        "id": 20,
        "title": "Antipatharia Coral",
        "image": "antipatharia_coral.png",
        "amount": 1,
        "isClaimed": false
    }
])
export const profil = atom({
    "name": "Enes",
    "avatar": "",
    "identifier": "123123",
    "cash": 1231,
    "bank": 12312
})
export const level = atom(8)
export const xp = atom(200)
export const buyLevelPrice = atom(5000)
export const credit = atom(4)
export const dailyQuize = atom<boolean>(false);
export const dailySpin = atom<boolean>(false);
export const premium = atom<boolean>(true);

export const ending = atom("2024-09-23T23:09:00");

export const quiz = atom({
    "question": "Where can players buy or rent properties in the city?",
    "answers": [
        {
            "title": "Realty Central",
            "correct": false
        },
        {
            "title": "Property Haven",
            "correct": false
        },
        {
            "title": "Real Estate Royale",
            "correct": true
        },
        {
            "title": "Housing Hub",
            "correct": false
        }
    ]
})

export const spinProducts = atom([
    {
        "name": "Product-1",
        "image": "spin1.png",
        "probability": 1
    },
    {
        "name": "Product-2",
        "image": "spin2.png",
        "probability": 1
    },
    {
        "name": "Product-3",
        "image": "spin3.png",
        "probability": 3
    },
    {
        "name": "Product-4",
        "image": "spin4.png",
        "probability": 3
    },
    {
        "name": "Product-5",
        "image": "spin5.png",
        "probability": 2
    },
    {
        "name": "Product-6",
        "image": "spin6.png",
        "probability": 2
    },
    {
        "name": "Product-7",
        "image": "spin7.png",
        "probability": 3
    },
    {
        "name": "Product-8",
        "image": "spin8.png",
        "probability": 2
    }
])

export const dailyMissions = atom([
    {
        "title": "Use Nitrous-1",
        "description": "Buy Nitrous or Get and Use it on your vehicle",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Use Nitrous-2",
        "description": "Buy Nitrous or Get and Use it on your vehicle",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Use Nitrous-3",
        "description": "Buy Nitrous or Get and Use it on your vehicle",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Use Nitrous-4",
        "description": "Buy Nitrous or Get and Use it on your vehicle",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Use Nitrous-5",
        "description": "Buy Nitrous or Get and Use it on your vehicle",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Use Nitrous-6",
        "description": "Buy Nitrous or Get and Use it on your vehicle",
        "value": 5,
        "totalValue": 5
    },
])

export const weeklyMissions = atom([
    {
        "title": "Weekly Mission 1",
        "description": "Weekly Mission 1 Description",
        "value": 5,
        "totalValue": 5
    }, {
        "title": "Weekly Mission 1",
        "description": "Weekly Mission 1 Description",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Weekly Mission 1",
        "description": "Weekly Mission 1 Description",
        "value": 5,
        "totalValue": 5
    }, {
        "title": "Weekly Mission 1",
        "description": "Weekly Mission 1 Description",
        "value": 3,
        "totalValue": 5
    }, {
        "title": "Weekly Mission 1",
        "description": "Weekly Mission 1 Description",
        "value": 2,
        "totalValue": 5
    }, {
        "title": "Weekly Mission 1",
        "description": "Weekly Mission 1 Description",
        "value": 3,
        "totalValue": 5
    },
])

export const premiumAtom = atom<boolean>(false);
export const isDailySpinAtom = atom<boolean>(false);

export const dailyOrWeeklyMissionsAtom = atom<"daily" | "weekly">('daily');

export const wheelRotationAtom = atom<number>(0);
export const activeWheelProductIDAtom = atom<null | number>(null);

export const redeemCodeListAtom = atom([
    "1231241231",
    "asdasdada",
    "sadada",
    "test"
])

export const langAtom = atom({
    "modal_buy_level": {
        "title_1": "BUY",
        "title_2": "LEVELS",
        "description": "Boost your Battle Pass experience by unlocking additional levels.",
        "button_text": "Buy for $"
    },
    "modal_claim": {
        "title_1": "BATTLE",
        "title_2": "PASS",
        "description": "The new season pass is here! Complete daily and weekly quests, Earn BP points, and earn rewards for each Battle Pass level you earn",
        "button_text": "Claim Your BattlePass"
    },
    "modal_quiz": {
        "title_1": "DAILY",
        "title_2": "QUIZ",
        "description": "Jump into the daily RP challenge! Answer a question, earn rewards. Your knowledge matters. Choose wisely, claim your rewards, and become an RP star!",
        "button_text": "Submit Your Answer",
        "wasted": "wasted",
        "mission_passed": {
            "title_1": "mission passed!",
            "title_2": "+300XP"
        },
    },
    "modal_thanks": {
        "title_1": "YOUR BATTLE PASS",
        "title_2": "JOURNEY BEGINS!",
        "description": "Thanks for grabbing the Battle Pass! Get ready for exclusive missions and epic rewards. Your support keeps the game rolling!",
        "button_text": "Continue"
    },
    "modal_spin": {
        "title_1": "EVERY DAY",
        "title_2": "Lucky Spin",
        "description1": "Big rewards await your spin.",
        "description2": "Try your luck and see what you win!",
        "description3": "Unlock your winning potential with additional spins!",
        "button_text_1": "Spin",
        "button_text_2": "23h 59m 59s",
        "button_text_3": "Get Spin",
        "button_text_3_subtitle": "(2 Credits)",
        "you_won": {
            "title_1": "Congratulations",
            "title_2": "YOU",
            "title_3": "WON!!!",
            "button_text": "Claim",
            "won_amount": "$25,000",
            "won_product": "Cheque"
        }
    },
    "go_back": "GO BACK",



    "header": {
        "title_1": "BATTLE",
        "title_2": "PASS",
        "description": "The new season pass is here! Complete daily and weekly quests, Earn BP points, and earn rewards for each Battle Pass level you earn"
    },
    "upgrade_button": {
        "upgraded": "Upgraded",
        "no_upgraded": "Get Battle Pass"
    },
    "daily_spin": "Daily Spin",
    "daily_quiz": "Daily Quiz",
    "language": {
        "mainTitle": "BattlePass",
        "mainDescriotion": "The new season pass is here! Complete daily and weekly quests, Earn BP points, and earn rewards for each Battle Pass level you earn",
        "dailySpin": "Daily Spin",
        "dailyQuize": "Dailty Quize",
        "days": "Days",
        "hours": "hours"

    },
});

export function useLang() {
    return useAtomValue(langAtom)
}