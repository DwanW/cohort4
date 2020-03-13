const fetch = require("node-fetch");
const functions = {
    getFirstName: (data) => {
        return data[0].name;
    },
    getAllFirstNames:(data)=> {
        return data.map((person)=> person.name);
    },
    url: 'https://uinames.com/api/?amount=10',

    async getUsers() {
        try {
            const response = await fetch(functions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await functions.getUsers();
        console.log(functions.getFirstName(data));
        console.log(functions.getAllFirstNames(data));
    },
}

export default functions;