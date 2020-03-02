
const functions = {
    add: () => {
        var node = document.createElement("li");
        var textnode = document.createTextNode("new item");
        node.appendChild(textnode);
        document.getElementById('list').appendChild(node);
    },

    addStart: () => {
        var node = document.createElement("li");
        var textnode = document.createTextNode("new item");
        node.appendChild(textnode);
        var nodelist = document.getElementById("list");
        nodelist.insertBefore(node, nodelist.childNodes[0]);
    },

    remove: () => {
        var list = document.getElementById("list");
        list.removeChild(list.firstElementChild);
    },

    removeEnd: () => {
        var list = document.getElementById("list");
        list.removeChild(list.lastElementChild);
    }
}
export default functions;