import {Account, AccountController } from './account.js';

const functions = {
    createAccCardBox: (cardbox, accObj) => {
        //create Account header
        let cardheader = document.createElement("div");
        let cardtext = document.createTextNode(`${accObj.accName}`);
        cardheader.appendChild(cardtext);

        cardheader.classList.add('accHeader');

        //create card header inside card box
        cardbox.appendChild(cardheader);

        cardbox.classList.add('accCard');
        //create input field
        let input1 = document.createElement('input');
        input1.setAttribute("type", "number");
        input1.setAttribute("placeholder", "Enter fund here");
        input1.classList.add("inputbox");
        cardbox.appendChild(input1);

        //create three button and text inside 
        let button1 = document.createElement("button");
        let button1txt = document.createTextNode("Deposit");
        button1.appendChild(button1txt);

        let button2 = document.createElement("button");
        let button2txt = document.createTextNode("Withdraw");
        button2.appendChild(button2txt);

        let button3 = document.createElement("button");
        let button3txt = document.createTextNode("Show");
        button3.appendChild(button3txt);
        cardbox.appendChild(button1);
        cardbox.appendChild(button2);
        cardbox.appendChild(button3);

        button1.classList.add('deposit');
        button2.classList.add('withdraw');
        button3.classList.add('show');

        let cardValue = document.createElement("div");
        cardValue.classList.add('result');
        cardbox.appendChild(cardValue);
        return cardbox;
    },
    // createNewAcc: (accName, balance) => {
    //     return accName,balance; 
    // }
}


let acc1 = new Account("Dwan", 100);
let cardbox = document.createElement("div");
functions.createAccCardBox(cardbox, acc1);
root.appendChild(cardbox);

root.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'deposit') {
        // console.log(e.target.parentNode.children[1].value)
        acc1.deposit(Number(e.target.parentNode.children[1].value));
        // console.log(acc1.totalBalance);
    } else if (e.target && e.target.className === 'withdraw') {
        // console.log(e.target.parentNode.children[1].value)
        acc1.withdraw(Number(e.target.parentNode.children[1].value));
        // console.log(acc1.totalBalance);
    } else if (e.target && e.target.className === 'show') {
        e.target.parentNode.children[5].textContent = acc1.balance();
    }
})

export default functions;