// define attributes / variables
//   number
//   string
//   boolean
//   array
//   dictionary / objects
//   undefined
// sample if / else
// functions
//   parameters
//   returns
// arrays
//   add to the front
//   add to the end
//   update values
// loops 
//   for
//   for/in
//   while
//   do while
//   forEach (with array and function)
// Objects / Dictionaries
//   declare object
//   lookup key to retrieve value


const functionGroup1 = {
    // Function below determines the type of varibles;
    defineVar: (item) => {
        if (typeof item === "number") return "number";
        if (typeof item === "string") return "string";
        if (typeof item === "boolean") return "boolean";
        if (typeof item === "object"){
            if (Array.isArray(item) === true) return "array";
            if (item === null)  return "null";
            return "object"
        }
        if (typeof item === "undefined") return "undefined";
        return "not identified";
    },

    // Function below test if else conditions;
    definePass: (item) => {
        if (item > 49) return "sucess";
        else return "failed";
    },

    // Function below shows how parameter and return works in a function;
    defineFunction: (para1, para2) => {
        return para1 + para2;
        // function exits after it returns
    },

    // Function below excutes several array methods;
    addArrStart: (arr) => {
        arr.unshift("Steve");
        return arr[0];
    },
    addArrEnd: (arr) => {
        arr.push("Steve");
        return arr[arr.length - 1];
    },
    changeArrIdx: (arr) => {
        arr[0] = "Wendy";
        return arr[0];
    },

    // Functions below runs different loop method
    forLoop: (arr) => {
        let myString = '';
        for (let i = 0; i<arr.length; i++){
            myString += arr[i]
        };
        return myString;
    },
    forInLoop: (obj) => {
        let myString2 = '';
        let item;
        for (item in obj){
            myString2 += item
        };
        return myString2;
    },
    whileLoop: (data) => {
        let i = 0;
        let myString3 = '';
        while (i < 3){
            myString3 += data;
            i++;
        };
        return myString3;
    },
    doWhileLoop: (data) => {
        let i = 0;
        let myString4 = '';
        do {
            myString4 += `${data} is received`;
            i++;
        }
        while (i < 0);
        return myString4;
    },
    forEachfunction: (arr) => {
        let colors ='the three colors are';
        arr.forEach((x)=> colors+= ` ${x}`);
        return colors;
    },

    //object manipulation
    objReadFirstKey: (obj) => {
        let arr = Object.entries(obj);
        return `the first property is ${arr[0][0]} and the value is ${arr[0][1]}`
    }
};

export default functionGroup1; 