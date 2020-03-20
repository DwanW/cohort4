import React from 'react';

class Community extends React.Component{
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

    render(){
        return (
            <React.Fragment>
                        <div id="control-container">
            <button id="addCity">Create City</button>
            <button id="getTotal">Population</button>
            <button id="getN">Most Northern</button>
            <button id="getS">Most Southern</button>
        </div>
        <div class="hide name-prompt" id="name-prompt">
            <div class="prompt-header">Creating New City</div>
            <div id="name-prompt-action">
                <input class ="promptinput" type="text" id="cityName" placeholder="City Name"/>
                <input class ="promptinput" type="text" id="cityLat" placeholder="Latitude"/>
                <input class ="promptinput" type="text" id="cityLong" placeholder="Longitude"/>
                <input class ="promptinput" type="number" id="cityPop" placeholder="Population"/>
                <button id="create-city">Create this City</button>
            </div>
        </div>
        <div class="hide name-prompt" id="info-prompt">
            <div class="prompt-header">City Information</div>
            <div id = "info-panel">
            </div>
        </div>
            </React.Fragment>
        )
    }
};