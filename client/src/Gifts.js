const gifts = [
    createGift("pikachu", 23, "toy", "https://m.media-amazon.com/images/I/61sK3NBL5qL._AC_UL480_QL65_.jpg"),
    createGift("kirby", 10, "toy", "https://m.media-amazon.com/images/I/61QUA0JpL5L._AC_UL480_QL65_.jpg"),
    createGift("junimo", 15, "toy", "https://m.media-amazon.com/images/I/71HU+-k31iL._AC_UL480_QL65_.jpg"),

    createGift("lightsaber chopsticks", 10, "novelty", "https://m.media-amazon.com/images/I/71Xz3sRAwHL._AC_UL480_QL65_.jpg"),
    createGift("ugly sweater", 35, "novelty", "https://m.media-amazon.com/images/I/81UOHAKY2dL._AC_UL480_QL65_.jpg"),
    createGift("santa hat", 8, "novelty", "https://m.media-amazon.com/images/I/51Gb8GLccNL._AC_UL480_QL65_.jpg"),

    createGift("socks", 13, "practical", "https://m.media-amazon.com/images/I/91d4cYTJm6L._AC_UL480_QL65_.jpg"),
    createGift("tissues", 19, "practical", "https://m.media-amazon.com/images/I/71irzJj3+UL._AC_UL480_QL65_.jpg"),
    createGift("gift card", 50, "practical", "https://m.media-amazon.com/images/I/81i94-svTyL._AC_UL480_QL65_.jpg"),

    createGift("chocolates", 24, "food", "https://m.media-amazon.com/images/I/91lsYZ6ICTL._AC_UL480_QL65_.jpg"),
    createGift("25 pounds of rice", 25, "food", "https://m.media-amazon.com/images/I/71eRUOX-++L._AC_UL480_QL65_.jpg"),
    createGift("candy canes", 13, "food", "https://m.media-amazon.com/images/I/91w3EXNgq3L._AC_UL480_QL65_.jpg"),

    createGift("drone", 170, "tech", "https://m.media-amazon.com/images/I/71Tc1-HWn-L._AC_UL480_QL65_.jpg"),
    createGift("hatsune miku", 200, "tech", "https://m.media-amazon.com/images/I/41Pb-hoEkAL._AC_UL480_QL65_.jpg"),
    createGift("iphone 16 pro max", 1300, "tech", "https://m.media-amazon.com/images/I/21XG-UGqpcL._AC_UY246_QL65_.jpg"),

    createGift("guitar", 230, "instrument", "https://m.media-amazon.com/images/I/71egVBGwOfL._AC_UL480_QL65_.jpg"),
    createGift("1728 kazoos", 400, "instrument", "https://m.media-amazon.com/images/I/71T5ZuqNjIL._AC_UL480_QL65_.jpg"),
    createGift("digital piano", 110, "instrument", "https://m.media-amazon.com/images/I/91K5Jqu0rUL._AC_UL480_QL65_.jpg")
]

function randomGift() {
    return gifts[Math.floor(Math.random() * gifts.length)]
}

function createGift(name, price, type, image, revealed = false, owner = null) {
    return {
        name: name,
        price: price,
        type: type,
        image: image,
        revealed: revealed,
        owner: owner
    }
}

export {randomGift}

// {name: "pikachu", price: 23, type: "toy", image: "https://m.media-amazon.com/images/I/61sK3NBL5qL._AC_UL480_QL65_.jpg"},
// {name: "kirby", price: 10, type: "toy", image: "https://m.media-amazon.com/images/I/61QUA0JpL5L._AC_UL480_QL65_.jpg"},
// {name: "junimo", price: 15, type: "toy", image: "https://m.media-amazon.com/images/I/71HU+-k31iL._AC_UL480_QL65_.jpg"},

// {name: "lightsaber chopsticks", price: 10, type: "novelty", image: "https://m.media-amazon.com/images/I/71Xz3sRAwHL._AC_UL480_QL65_.jpg"},
// {name: "ugly sweater", price: 35, type: "novelty", image: "https://m.media-amazon.com/images/I/81UOHAKY2dL._AC_UL480_QL65_.jpg"},
// {name: "santa hat", price: 8, type: "novelty", image: "https://m.media-amazon.com/images/I/51Gb8GLccNL._AC_UL480_QL65_.jpg"},

// {name: "socks", price: 13, type: "practical", image: "https://m.media-amazon.com/images/I/91d4cYTJm6L._AC_UL480_QL65_.jpg"},
// {name: "tissues", price: 19, type: "practical", image: "https://m.media-amazon.com/images/I/71irzJj3+UL._AC_UL480_QL65_.jpg"},
// {name: "gift card", price: 50, type: "practical", image: "https://m.media-amazon.com/images/I/81i94-svTyL._AC_UL480_QL65_.jpg"},

// {name: "chocolates", price: 24, type: "food", image: "https://m.media-amazon.com/images/I/91lsYZ6ICTL._AC_UL480_QL65_.jpg"},
// {name: "25 pounds of rice", price: 25, type: "food", image: "https://m.media-amazon.com/images/I/71eRUOX-++L._AC_UL480_QL65_.jpg"},
// {name: "candy canes", price: 13, type: "food", image: "https://m.media-amazon.com/images/I/91w3EXNgq3L._AC_UL480_QL65_.jpg"},

// {name: "drone", price: 170, type: "tech", image: "https://m.media-amazon.com/images/I/71Tc1-HWn-L._AC_UL480_QL65_.jpg"},
// {name: "hatsune miku", price: 200, type: "tech", image: "https://m.media-amazon.com/images/I/41Pb-hoEkAL._AC_UL480_QL65_.jpg"},
// {name: "iphone 16 pro max", price: 1300, type: "tech", image: "https://m.media-amazon.com/images/I/21XG-UGqpcL._AC_UY246_QL65_.jpg"},

// {name: "guitar", price: 230, type: "instrument", image: "https://m.media-amazon.com/images/I/71egVBGwOfL._AC_UL480_QL65_.jpg"},
// {name: "1728 kazoos", price: 400, type: "instrument", image: "https://m.media-amazon.com/images/I/71T5ZuqNjIL._AC_UL480_QL65_.jpg"},
// {name: "digital piano", price: 110, type: "instrument", image: "https://m.media-amazon.com/images/I/91K5Jqu0rUL._AC_UL480_QL65_.jpg"}