
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
    }
}
export default functions;