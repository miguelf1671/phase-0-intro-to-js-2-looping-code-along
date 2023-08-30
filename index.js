// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`);
// }

// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
        debugger;
    
    }
    return gifts;
}

function writeCards(name, event) {
    let namesArray = [];
    for (let i = 0; i < name.length; i++) {
    namesArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    
    }
    return namesArray;
    

}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }

}

// wrapGifts(gifts);

writeCards(["Charlie", "Samip", "Ali"], "birthday");