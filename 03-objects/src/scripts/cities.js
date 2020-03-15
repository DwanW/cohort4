class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population} People.`;
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
        if (Number(cityObj.latitude) > 0){
            return "North Hemisphere";
        } else if(Number(cityObj.latitude) < 0 ){
            return "South Hemisphere";
        } else {
            return "Equator";
        }
    }

    getMostNorthern(){
        let mostN = 0;
        let cityName = '';
        this.cityArr.forEach((city)=> {
                (Number(city.latitude) > mostN) ? (mostN = Number(city.latitude), cityName = city.name) :mostN;
        })
        return cityName;
    }

    getMostSouthern(){
        let mostS = 0;
        let cityName = '';
        this.cityArr.forEach((city)=> {
                (Number(city.latitude) < mostS) ? (mostS = Number(city.latitude), cityName = city.name) :mostS;

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
            (city.name === cityName) ? (deleteCity = city, this.cityArr.splice(idx,1)) : this.accArr);
        return deleteCity;
    }
};

export { City, Community };
