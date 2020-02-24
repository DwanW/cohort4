
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
