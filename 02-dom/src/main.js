import functions from './functions.js';

//eventlisteners


document.getElementById("body-container").addEventListener('click', (e) => {
    console.log(e.target);
})

document.getElementById("show").addEventListener('click', () => {
    console.log(document.querySelectorAll("ol li"));
})

document.getElementById("add").addEventListener("click", () => functions.add());

document.getElementById("add-start").addEventListener('click', () => functions.addStart());

document.getElementById("remove").addEventListener('click', () => functions.remove());

document.getElementById("remove-end").addEventListener('click', () => functions.removeEnd());

