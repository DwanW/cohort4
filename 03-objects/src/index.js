import {Account, AccountController } from './account.js';
import functions from './functions.js'

let acc1 = new Account("Dwan", 100);
let cardbox = document.createElement("div");
functions.createAccCardBox(cardbox, acc1);
document.getElementById("root").appendChild(cardbox);

document.getElementById("root").addEventListener('click', (e) => {
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