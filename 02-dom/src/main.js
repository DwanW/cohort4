//eventlisteners

document.getElementById("body-container").addEventListener('click', (e) => {
    console.log(e.target);
})

document.getElementById("show").addEventListener('click',() => {
    console.log(document.querySelectorAll("ol li"));
})

document.getElementById("add").addEventListener("click", () =>{
    var node = document.createElement("li");
    var textnode = document.createTextNode("new item");
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
})

document.getElementById("add-start").addEventListener('click', () =>{
    var node = document.createElement("li");
    var textnode = document.createTextNode("new item");
    node.appendChild(textnode);
    var nodelist = document.getElementById("list");
    nodelist.insertBefore(node, nodelist.childNodes[0]);
})

document.getElementById("remove").addEventListener('click', () =>{
    var list = document.getElementById("list");
    list.removeChild(list.firstElementChild);
})

document.getElementById("remove-end").addEventListener('click', () =>{
    var list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
})