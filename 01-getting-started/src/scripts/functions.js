
const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1*num2;
    },

    divide: (num1, num2) => {
        return num1/num2;
    },

    calculate: (num1, num2, method)=> {
        switch(method){
            case 'add':
                return functions.add(num1, num2);
                break;
            case 'subtract':
                return functions.subtract(num1, num2);
                break;
            case 'multiply':
                return functions.multiply(num1, num2);
                break
            case 'divide':
                return functions.divide(num1,num2);
        }
    },

    calculateTax: (num) => {
        return (num > 214368)? `$ ${((num - 214368) * 0.33 + 49644.31).toFixed(2)}` :
        (num > 150473)? `$ ${((num - 150473) * 0.29 + 31114.76).toFixed(2)}` :
        (num > 97069)? `$ ${((num - 97069) * 0.26 + 17229.72).toFixed(2)}` :
        (num > 48535)? `$ ${((num - 48535) * 0.205 + 7280.25).toFixed(2)}` :
        `$ ${(num * 0.15).toFixed(2)}`;
    },

    isEven: (num) => {
        if (num < Number.MAX_VALUE){
            let remainder = num % 2;
            if (remainder === 0){
                return true;
            } else {
                return false;
            };
        } else {
            return "number is too big";
        }
    }
};

export default functions;
