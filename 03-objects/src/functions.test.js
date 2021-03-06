import {Account, AccountController } from './account.js';
import functions from './functions.js';

test("is my account dom working?", () => {
    document.body.innerHTML = 
    `<div class="accCard">`+
    `<div class="accHeader">Bob</div>` +
    `<input class="inputbox" placeholder="Enter fund here" type="number" />`+
    `<button class="deposit">Deposit</button>`+
    `<button class="withdraw">Withdraw</button>`+
    `<button class="show">Show</button>`+
    `<div class="result"></div>`+
    `<button class="delete"><i class="fa fa-user-times"></i></button>`+
    `</div>`;
    let acc1 = new Account("Bob", 1000);
    let cardbox = document.createElement("div");
    expect(functions.createAccCardBox(cardbox, acc1)).toEqual(document.body.childNodes[0]);
})