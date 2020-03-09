// import functions from './functions.js';
class Account {
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
        return `Account ${this.accName} total balance: $${this.totalBalance}`
    }
};

class AccountController  {
    constructor(accArr){
        this.accArr = accArr;
    }

    addAcc(accName, totalBalance){
        let newAcc = new Account(accName, totalBalance);
        let tempArr = [...this.accArr,newAcc];
        this.accArr = tempArr;
    }

    deleteAcc(accName){
        this.accArr.forEach((obj, idx)=> 
            (obj.accName === accName) ? this.accArr.splice(idx,1) : this.accArr);
    }

    renameAcc(accName, newName){
        this.accArr.forEach((obj)=> {
            (obj.accName === accName) ? obj.accName = newName : obj.accName;
        })
    }

    getTotal(){
        let total = 0;
        this.accArr.forEach((obj)=> {
            total += obj.totalBalance;
        })
        return total;
    }

    getMax(){
        let max = 0;
        let hAccName = '';
        this.accArr.forEach((obj)=> {
            (obj.totalBalance > max) ? (max= obj.totalBalance, hAccName= obj.accName) : max;
        })
        return hAccName;
    }
    
    getMin(){
        let min = this.accArr[0].totalBalance;
        let lAccName = this.accArr[0].accName;
        this.accArr.forEach((obj)=> {
            (obj.totalBalance < min) ? (min = obj.totalBalance, lAccName = obj.accName) : min;
        })
        return lAccName;
    }
};

export { Account, AccountController  };