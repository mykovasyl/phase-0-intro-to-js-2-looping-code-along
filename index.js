
function writeCards(birthdayNames, eventType) {
    let birthdayMessages = [];
    for (let i = 0; i < birthdayNames.length; i++) {
        birthdayMessages.push(`Thank you, ${birthdayNames[i]}, for the wonderful ${eventType} gift!`); 

    }
    return birthdayMessages;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer--;
    }
    return integer;
}
