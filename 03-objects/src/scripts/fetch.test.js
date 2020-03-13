import functions from './fetch.js';


const data = [{"name":"Arne","surname":"Lauwers","gender":"male","region":"Belgium"},{"name":"Nadia","surname":"Lăzărescu","gender":"female","region":"Romania"},{"name":"Vedat","surname":"Bensoy","gender":"male","region":"Turkey"},{"name":"Bartolomej","surname":"Valenta","gender":"male","region":"Slovakia"},{"name":"Upendra","surname":"Kyestha","gender":"male","region":"Nepal"},{"name":"Lavinia","surname":"Firulescu","gender":"female","region":"Romania"},{"name":"Nora","surname":"Seciu","gender":"female","region":"Romania"},{"name":"Sam","surname":"Back","gender":"male","region":"New Zealand"},{"name":"Λεωτυχίδας","surname":"Τομαραίοι","gender":"male","region":"Greece"},{"name":"Despina","surname":"Butnariu","gender":"female","region":"Romania"}];

test("is my fetch function working?", async ()=> {
    expect(functions.getFirstName(data)).toBe("Arne");
    expect(functions.getAllFirstNames(data)).toEqual(["Arne", "Nadia", "Vedat", "Bartolomej", "Upendra", "Lavinia", "Nora", "Sam", "Λεωτυχίδας", "Despina"]);
    await functions.workWithData();
})