import functions from './functions.js';

export default class Account {
    constructor(accName, totalBalance){
        this.accName = accName;
        this.totalBalance = totalBalance;
    }

    deposit(amount){
        this.totalBalance += amount;
    }

    withdraw(amount){
        this.totalBalance -= amount;
    }

    balance(){
        return `${this.accName} have a total balance of $${this.totalBalance}`
    }
};
