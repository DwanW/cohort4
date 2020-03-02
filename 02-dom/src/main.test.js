import functions from './functions.js';

test('is my add click working', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '<ol id="list">' +
        '<li>item 1</li>' +
        '<li>item 2</li>' +
        '<li>item 3</li>' +
        '</ol>' +
        '<button id="add">Add</button>' +
        '<button id="add-start">Add start</button>' +
        '<button id="remove">Remove</button>' +
        '<button id="remove-end">Remove end</button>' +
        '</div>';

    //emulate a click on our button
    document.getElementById("add").addEventListener("click", () => functions.add());
    document.getElementById("add-start").addEventListener('click', () => functions.addStart());
    document.getElementById("remove").addEventListener('click', () => functions.remove());
    document.getElementById("remove-end").addEventListener('click', () => functions.removeEnd());

    document.getElementById('add').click();
    expect(document.querySelectorAll("ol li").length).toBe(4);
    document.getElementById('add-start').click();
    expect(document.querySelectorAll("ol li")[0].innerHTML).toBe('new item');
    document.getElementById('remove').click();
    expect(document.querySelectorAll("ol li").length).toBe(4);
    document.getElementById('remove-end').click();
    expect(document.querySelectorAll("ol li")[2].innerHTML).toBe('item 3');

});