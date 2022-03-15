// Code your solutions in this file
function writeCards(name, message) {

    let cards = [];
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`);
        
      }
    return cards
}

function countDown(n) {
    for (let countDown = n; countDown >= 0; countDown--) {
        console.log(countDown);
      } 
}
countDown(10);