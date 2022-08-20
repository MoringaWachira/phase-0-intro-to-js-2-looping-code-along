// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    // for (let i = 0; i < gifts.length; i++) {
    //     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //     debugger;
    // }
    
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        i++;
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);



function writeCards(stringName, eventName) {
    const message = []
    for (let counter = 0; counter < stringName.length; counter++) {
        message.push(`Thank you, ${stringName[counter]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));


// while loop

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
    }








