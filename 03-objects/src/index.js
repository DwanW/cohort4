import {Account, AccountController } from './account.js';
import functions from './functions.js'

let myAccController = new AccountController([]);


// let acc1 = new Account("Dwan", 100);
// let cardbox = document.createElement("div");
// functions.createAccCardBox(cardbox, acc1);
// document.getElementById("root").appendChild(cardbox);

document.getElementById("root").addEventListener('click', (e) => {
    let searchName = e.target.parentNode.children[0].textContent;
    if (e.target && e.target.className === 'deposit') {
        // console.log(e.target.parentNode.children[1].value)
        myAccController.accArr.forEach((accObj) => {
            (accObj.accName === searchName)? accObj = accObj.deposit(Number(e.target.parentNode.children[1].value)): accObj
        })
        // console.log(myAccController.accArr);
        // consolxe.log(acc1.totalBalance);
    } else if (e.target && e.target.className === 'withdraw') {
        // console.log(e.target.parentNode.children[1].value)
        myAccController.accArr.forEach((accObj) => {
            (accObj.accName === searchName)? accObj = accObj.withdraw(Number(e.target.parentNode.children[1].value)): accObj
        })
        // console.log(acc1.totalBalance);
    } else if (e.target && e.target.className === 'show') {
        myAccController.accArr.forEach((accObj) => {
            (accObj.accName === searchName)? accObj = e.target.parentNode.children[5].textContent = accObj.balance(): accObj
        })
    } 
})

document.getElementById('addAcc').addEventListener('click', () => {
    document.getElementById('name-prompt').classList.remove("hide");
    document.getElementById('info-prompt').classList.add("hide");
})

document.getElementById('getTotal').addEventListener('click', () => {
    document.getElementById('info-prompt').classList.remove("hide");
    document.getElementById('name-prompt').classList.add("hide");
})

document.getElementById('create-acc').addEventListener('click', () => {
    //todo account name has to be unique;
    myAccController.addAcc(document.getElementById("accName").value, Number(document.getElementById("accBalance").value));
    console.log(myAccController.accArr);
    let account = new Account(document.getElementById("accName").value, Number(document.getElementById("accBalance").value));
    let cardbox = document.createElement("div");
    functions.createAccCardBox(cardbox, account);
    document.getElementById('root').appendChild(cardbox);
    document.getElementById('name-prompt').classList.add("hide");
})

window.addEventListener('click', (e) => {   
    if (!document.getElementById('name-prompt').contains(e.target) && 
        !document.getElementById("control-container").contains(e.target) &&
        !document.getElementById("name-prompt").contains(e.target)){
        document.getElementById('name-prompt').classList.add("hide")
        document.getElementById('info-prompt').classList.add("hide");;
    }
})

