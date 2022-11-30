// Code your solutions in this file

function writeCards(names,event) {
let newArray=[];

for (let i=0; 1 <names.length; i++) {
    let eventMessage= 'Thank you, ${names[i]} ,for the wonderful ${event} gift!';
    newArray.push(eventMessage)
}
return newArray
}
