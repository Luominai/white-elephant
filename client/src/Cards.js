const cards = [
    createCard("inflation", "increase all gift prices by 5%", 0),
    createCard("deflation", "decrease all gift prices by 5%", 0),

    createCard("overvalue", "increase the price of a gift by 10%", 1),
    createCard("devalue", "decrease the price of a gift by 10%", 1),

    createCard("planned obsolescence", "decrease the price of a tech gift by 30%", 1),
    createCard("android", "decrease the price of an iphone 16 pro max by 50%", 1),

    createCard("extra tasty", "increase the price of a food gift by 20", 1),
    createCard("aging", "increase the price of a practical gift by 20", 1),
    createCard("nuclear fallout", "increase all food and practical gift prices by 200%", 0),
    createCard("covid", "increase the price of a tissues by 100%", 1),

    createCard("musical training", "increase the price of an instrument gift by 30. can apply to hatsune miku", 1),
    createCard("there can only be one", "decrease the price of a gift containing a number in its name by an amount proportional to the number", 1),
    createCard("trendy", "increase the price of a novelty or toy gift by 50", 1),
]
const effectMap = {
    "inflation": ({G}) => {
        G.gifts.forEach((gift) => gift.price *= 1.05)
    },
    "deflation": ({G}) => {
        G.gifts.forEach((gift) => gift.price *= .95)
    },
    "overvalue": ({gift}) => {
        gift.price *= 1.1
    },
    "devalue": ({gift}) => {
        gift.price *= .9
    },
    "planned obsolescence": ({G}) => {
        G.gifts.forEach((gift) => { if(gift.type === "tech") {gift.price *= .7} })
    },
    "android": ({gift}) => {
        if (gift.name === "iphone 16 pro max") {gift.price *= .5}
    },
    "extra tasty": ({gift}) => {
        if (gift.type === "food") {gift.price += 20}
    },
    "aging": ({gift}) => {
        if (gift.type === "practical") {gift.price += 20}
    },
    "nuclear fallout": ({G}) => {
        G.gifts.forEach((gift) => { if(gift.type === "food" || gift.type === "practical") {gift.price *= 3} })
    },
    "covid": ({gift}) => {
        if(gift.name === "tissues") {gift.price *= 2}
    },
    "musical training": ({gift}) => {
        if(gift.type === "instrument" || gift.name === "hatsune miku") {gift.price += 30}
    },
    "there can only be one": ({gift}) => {
        if(gift.name === "iphone 16 pro max") {gift.price /= 16}
        if(gift.name === "25 pounds of rice") {gift.price /= 25}
        if(gift.name === "1728 kazoos") {gift.price /= 1728}
    },
    "trendy": ({gift}) => {
        if(gift.type === "novelty" || gift.type === "toy") {gift.price += 50}
    },
}

function randomCard() {
    return cards[Math.floor(Math.random() * cards.length)]
}

function createCard(name, description, targetCount) {
    return {
        name: name,
        description: description,
        targetCount: targetCount
    }
}

export {randomCard, effectMap}
