let cards = [];

function writeCards(names, eventName) {
    for(let i = 0; i < names.length; i++) {
        const newMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        cards.push(newMessage);
    }

    return cards;
}

function countDown(anyNumber) {
    let i = 0;
    while (i <= anyNumber) {
        console.log(anyNumber - i);
        //console.log(anyNumber);
        i++;
    }
}

