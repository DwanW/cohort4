import functions from './functions.js';

//eventlisteners


document.getElementById("body-container").addEventListener('click', (e) => {
    console.log(e.target);
})

document.getElementById("show").addEventListener('click', () => {
    console.log(document.querySelectorAll("ol li"));
})

document.getElementById("add").addEventListener("click", () => {
    let node = document.createElement("li");
    let textnode = document.createTextNode("new item");
    functions.add(node, textnode, 'list')});

document.getElementById("add-start").addEventListener('click', () => {
    let node = document.createElement("li");
    let textnode = document.createTextNode("new item");
    let nodelist = document.getElementById("list");
    functions.addStart(node, textnode, nodelist)});

document.getElementById("remove").addEventListener('click', () => {
    let list = document.getElementById("list");
    functions.remove(list)});

document.getElementById("remove-end").addEventListener('click', () => {
    let list = document.getElementById("list");
    functions.removeEnd(list)});


// event lisntener for cards, and what I'm feeling right now? (╯°□°）╯︵ ┻━┻)

// document.querySelectorAll('delete').addEventListener('click', (e) => {
//     console.log(e.target);
// });

document.getElementById("addCard").addEventListener('click', () => {
    //create card box
    let cardbox= document.createElement("div");
    cardBasket.appendChild(cardbox);

    //create card header
    let cardheader = document.createElement("div");
    let cardtext = document.createTextNode("card");
    cardheader.appendChild(cardtext);

    cardheader.classList.add('cardhead');

    //create card header inside card box
    cardbox.appendChild(cardheader);

    cardbox.classList.add('cardbox');

    //create three button and text inside 
    let button1 = document.createElement("button");
    let button1txt = document.createTextNode("Add Before");
    button1.appendChild(button1txt);

    let button2 = document.createElement("button");
    let button2txt = document.createTextNode("Add After");
    button2.appendChild(button2txt);

    let button3 = document.createElement("button");
    let button3txt = document.createTextNode("Delete");
    button3.appendChild(button3txt);
    cardbox.appendChild(button1);
    cardbox.appendChild(button2);
    cardbox.appendChild(button3);
    
    button3.classList.add('delete');

})