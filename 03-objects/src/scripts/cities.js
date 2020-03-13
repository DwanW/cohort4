const fetch = require("node-fetch");

class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `${this.name}${this.latitude}${this.longitude}${this.population}`;
    }

    movedIn(num) {
        this.population += num;
    }

    movedOut(num) {
        this.population -= num;
    }

    howBig(){
        this.population > 100000 ? "City":
        this.population > 20000 ? "Large Town" :
        this.population > 1000 ? "Town" :
        this.population > 100 ? "Village" : Hamlet;
    }
};

class Community  {
    constructor(accArr){
        this.accArr = accArr;
    }

    whichSphere(){
        return `Northern Hemisphere or Southern Hemisphere`;
    }

    getMostNorthern(accName){
        this.accArr.forEach((obj, idx)=> 
            (obj.accName === accName) ? this.accArr.splice(idx,1) : this.accArr);
    }

    getMostsouthern(accName, newName){
        this.accArr.forEach((obj)=> {
            (obj.accName === accName) ? obj.accName = newName : obj.accName;
        })
    }

    getPopulation (){
        let total = 0;
        this.accArr.forEach((obj)=> {
            total += obj.totalBalance;
        })
        return total;
    }

    createCity(){
        let max = 0;
        let hAccName = '';
        this.accArr.forEach((obj)=> {
            (obj.totalBalance > max) ? (max= obj.totalBalance, hAccName= obj.accName) : max;
        })
        return hAccName;
    }
    
    deleteCity(){
        let min = this.accArr[0].totalBalance;
        let lAccName = this.accArr[0].accName;
        this.accArr.forEach((obj)=> {
            (obj.totalBalance < min) ? (min = obj.totalBalance, lAccName = obj.accName) : min;
        })
        return lAccName;
    }
};

export { City, Community };
