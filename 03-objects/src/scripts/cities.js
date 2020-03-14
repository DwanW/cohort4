// const fetch = require("node-fetch");

class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `${this.name} ${this.latitude} ${this.longitude} ${this.population}`;
    }

    movedIn(num) {
        this.population += num;
    }

    movedOut(num) {
        this.population -= num;
    }

    howBig(){
        return (this.population > 100000) ? "City":
        (this.population > 20000) ? "Large Town" :
        (this.population > 1000) ? "Town" :
        (this.population > 100) ? "Village" : "Hamlet";
    }
};

class Community  {
    constructor(cityArr){
        this.cityArr = cityArr;
    }

    whichSphere(cityObj){
        if (cityObj.latitude.match("N")){
            return "North Hemisphere";
        } else if(cityObj.latitude.match("S")){
            return "South Hemisphere";
        } else {
            return "Equator";
        }
    }

    getMostNorthern(){
        let mostN = 0;
        let cityName = '';
        this.cityArr.forEach((city)=> {
            if (city.latitude.includes('° N')){
                let latitudeNum = Number(city.latitude.replace('° N', ''));
                (latitudeNum > mostN) ? (mostN = latitudeNum, cityName = city.name) :mostN;
            }
        })
        return cityName;
    }

    getMostSouthern(){
        let mostS = 0;
        let cityName = '';
        this.cityArr.forEach((city)=> {
            if (city.latitude.includes('° S')){
                let latitudeNum = Number(city.latitude.replace('° S', ''));
                (latitudeNum > mostS) ? (mostS = latitudeNum, cityName = city.name) :mostS;
            }
        })
        return cityName;
    }

    getPopulation (){
        let total = 0;
        this.cityArr.forEach((city)=> {
            total += city.population;
        })
        return total;
    }

    createCity(name, lat, long, pop){
        let newCity = new City(name, lat, long, pop);
        let tempArr = [...this.cityArr,newCity];
        this.cityArr = tempArr;
    }
    
    deleteCity(cityName){
        let deleteCity;
        this.cityArr.forEach((city, idx)=> 
            (city.name === cityName) ? (deleteCity = {"key":idx, ...city}, this.cityArr.splice(idx,1)) : this.accArr);
        return deleteCity;
    }
};

export { City, Community };
