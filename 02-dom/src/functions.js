
const functions = {
    add: (node, textnode, listId) => {
        node.appendChild(textnode);
        return document.getElementById(listId).appendChild(node);
    },

    addStart: (node, textnode, listnode) => {
        node.appendChild(textnode);
        return listnode.insertBefore(node, listnode.children[0]);
    },

    remove: (list) => {
        list.removeChild(list.firstElementChild);
    },

    removeEnd: (list) => {
        list.removeChild(list.lastElementChild);
    },

    createCard: (cardbox,cardID) => {
    //create card header
    let cardheader = document.createElement("div");
    let cardtext = document.createTextNode(`Card ${cardID}`);
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
    
    button1.classList.add('addbefore');
    button2.classList.add('addafter');
    button3.classList.add('delete');
    }
}
export default functions;
