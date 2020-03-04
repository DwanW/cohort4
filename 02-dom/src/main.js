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
    functions.add(node, textnode, 'list')
});

document.getElementById("add-start").addEventListener('click', () => {
    let node = document.createElement("li");
    let textnode = document.createTextNode("new item");
    let nodelist = document.getElementById("list");
    functions.addStart(node, textnode, nodelist)
});

document.getElementById("remove").addEventListener('click', () => {
    let list = document.getElementById("list");
    functions.remove(list)
});

document.getElementById("remove-end").addEventListener('click', () => {
    let list = document.getElementById("list");
    functions.removeEnd(list)
});


// event lisntener for cards, and what I'm feeling right now? (╯°□°）╯︵ ┻━┻)

var cardID = 1;

document.getElementById("addCard").addEventListener('click', () => {
    //append card box
    let cardbox = document.createElement("div");
    functions.createCard(cardbox,cardID);
    cardBasket.appendChild(cardbox);
    cardID++;
});

document.getElementById("cardBasket").addEventListener("click", (e) => {
    if (e.target && e.target.className === 'delete'){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    } else if (e.target && e.target.className === 'addafter'){
        if (e.target.parentNode.parentNode.children.length === 1){
            let cardbox = document.createElement("div");
            functions.createCard(cardbox,cardID);
            cardBasket.appendChild(cardbox);
            cardID++;
        } else {
            let cardbox = document.createElement("div");
            functions.createCard(cardbox,cardID);
            e.target.parentNode.parentNode.insertBefore(cardbox, e.target.parentNode.nextSibling);
            cardID++;
        }
    } else if (e.target && e.target.className === 'addbefore'){
        let cardbox = document.createElement("div");
        functions.createCard(cardbox,cardID);
        e.target.parentNode.parentNode.insertBefore(cardbox, e.target.parentNode);
        cardID++;
    }
})

//parentNode
