import createCityBox from './createCity.js'
import { Community, City } from './cities.js';

let MyCommunity = new Community([]);

document.getElementById("root").addEventListener('click', (e) => {
    let searchName = e.target.parentNode.children[0].textContent;
    if (e.target && e.target.className === 'movein') {
        // console.log(e.target.parentNode.children[1].value)
        MyCommunity.cityArr.forEach((cityObj) => {
            (cityObj.name === searchName)? cityObj = cityObj.moveIn(Number(e.target.parentNode.children[1].value)): cityObj
        })
        // console.log(MyCommunity.cityArr);
    } else if (e.target && e.target.className === 'moveout') {
        // console.log(e.target.parentNode.children[1].value)
        MyCommunity.cityArr.forEach((cityObj) => {
            (cityObj.name === searchName)? cityObj = cityObj.moveOut(Number(e.target.parentNode.children[1].value)): cityObj
        })
    } else if (e.target && e.target.className === 'show') {
        MyCommunity.cityArr.forEach((cityObj) => {
            (cityObj.name === searchName)? cityObj = e.target.parentNode.children[5].textContent = cityObj.show().concat(cityObj.howbig()): cityObj
        })
    } else if (e.target && e.target.className === 'delete') {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        MyCommunity.deleteCity(searchName);
    }
})

document.getElementById('addCity').addEventListener('click', () => {
    document.getElementById('name-prompt').classList.remove("hide");
    document.getElementById('info-prompt').classList.add("hide");
})

document.getElementById('getTotal').addEventListener('click', () => {
    document.getElementById('info-prompt').classList.remove("hide");
    document.getElementById('name-prompt').classList.add("hide");
    let sum = MyCommunity.getPopulation();
    document.getElementById('info-panel').textContent = `Total balance of all your accounts are $ ${sum}`;
})

document.getElementById('getN').addEventListener('click', () => {
    document.getElementById('info-prompt').classList.remove("hide");
    document.getElementById('name-prompt').classList.add("hide");
    let max = MyCommunity.getMostNorthern();
    document.getElementById('info-panel').textContent = `Account with Highest balance is ${max}`;
})

document.getElementById('getS').addEventListener('click', () => {
    document.getElementById('info-prompt').classList.remove("hide");
    document.getElementById('name-prompt').classList.add("hide");
    let min = MyCommunity.getMostSouthern();
    document.getElementById('info-panel').textContent = `Account with Lowest balance is ${min}`;
})


document.getElementById('create-city').addEventListener('click', () => {
    //todo account name has to be unique;
    MyCommunity.createCity(document.getElementById("cityName").value, document.getElementById("cityLat").value, document.getElementById("cityLong").value, Number(document.getElementById("cityPop").value));
    console.log(MyCommunity.cityArr);
    let city = new City(document.getElementById("cityName").value, document.getElementById("cityLat").value, document.getElementById("cityLong").value, Number(document.getElementById("cityPop").value));
    let cardbox = document.createElement("div");
    createCityBox(cardbox, city);
    document.getElementById('root').appendChild(cardbox);
    document.getElementById('name-prompt').classList.add("hide");
})

window.addEventListener('click', (e) => {   
    if (!document.getElementById('name-prompt').contains(e.target) && 
        !document.getElementById("control-container").contains(e.target) &&
        !document.getElementById("name-prompt").contains(e.target)){
        document.getElementById('name-prompt').classList.add("hide");
        document.getElementById('info-prompt').classList.add("hide");
    }
})

