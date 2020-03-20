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