import functions from './functions.js';

test('is my dom clicks working', () => {
    // Set up our document body
    const div = document.createElement('div');
    document.body.innerHTML =
        `<ol id="list">` +
        `<li>item 1</li>` +
        `<li>item 2</li>` +
        `<li>item 3</li>` +
        `</ol>`;
    let node = document.createElement("li");
    let textnode = document.createTextNode("new item");
    let nodelist = document.getElementById("list");

    // console.log(list.childNodes.length);
    expect(list.children.length).toBe(3);
    functions.add(node, textnode, 'list');
    expect(list.children.length).toBe(4);
    expect(list.lastChild.textContent).toBe('new item');
    // console.log(list.textContent);

    let node2 = document.createElement("li");
    let textnode2 = document.createTextNode("new item 2");

    functions.addStart(node2, textnode2, nodelist);
    // console.log(list.children.length);
    expect(list.children.length).toBe(5);
    expect(list.firstElementChild.textContent).toBe('new item 2');

    functions.remove(list);
    expect(list.children.length).toBe(4);
    // console.log(list.firstElementChild.textContent);
    expect(list.firstElementChild.textContent).toBe('item 1');

    functions.removeEnd(list);
    expect(list.children.length).toBe(3);
    // console.log(list.lastElementChild.textContent);
    expect(list.lastElementChild.textContent).toBe('item 3');

    // emulate a click on our button(zzz.... we are not suppose to do this...)
    // document.getElementById("add").addEventListener("click", () => functions.add());
    // document.getElementById("add-start").addEventListener('click', () => functions.addStart());
    // document.getElementById("remove").addEventListener('click', () => functions.remove());
    // document.getElementById("remove-end").addEventListener('click', () => functions.removeEnd());

    // document.getElementById('add').click();
    // expect(document.querySelectorAll("ol li").length).toBe(4);
    // document.getElementById('add-start').click();
    // expect(document.querySelectorAll("ol li")[0].innerHTML).toBe('new item');
    // document.getElementById('remove').click();
    // expect(document.querySelectorAll("ol li").length).toBe(4);
    // document.getElementById('remove-end').click();
    // expect(document.querySelectorAll("ol li")[2].innerHTML).toBe('item 3');
});

test('is my card clicks working', () => {
    document.body.innerHTML =
        `<div id="cardBasket">` +
        `</div>`;
    let cardbox= document.createElement("div");
    let cardheader = document.createElement("div");
    let cardtext = document.createTextNode("card");
    cardheader.appendChild(cardtext);
    let cardBasket = document.getElementById("cardBasket");
    cardBasket.appendChild(cardbox);
    cardbox.appendChild(cardheader);
    console.log(cardbox.children.length);
    console.log(cardbox.textContent);

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
    console.log(cardbox.children.length);
});