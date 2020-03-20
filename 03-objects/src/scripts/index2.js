import createCityBox from './createCity.js'
import { Community, City } from './cities.js';
// const fetch = require("node-fetch");

const url = "http://localhost:5000/";

const getData = async () => {
    try {
        const response = await fetch(url + "all");
        const data = await response.json();
        return data;
    } catch (error) {
        // console.error('Error:', error);
        throw (error);
    }
}

const initData = async () => {
    const data = await getData();
    let cData = [];
    data.forEach((obj) => {
        let cities = new City(obj.name, obj.latitude, obj.longitude, Number(obj.population));
        cData = [...cData,cities];
    });
    let MyCommunity = new Community(cData);
    // console.log(cData);

    //event listeners
    // console.log(MyCommunity.cityArr)

    MyCommunity.cityArr.forEach((obj) => {
        let cardbox = document.createElement("div");
        createCityBox(cardbox, obj);
        document.getElementById('root').appendChild(cardbox);
    })

    document.getElementById("root").addEventListener('click', async (e) => {
        let searchName = e.target.parentNode.children[0].textContent;
        console.log(e.target.parentNode.parentNode.children[0]);
        if (e.target && e.target.className === 'movein') {
            // console.log(e.target.parentNode.children[1].value)
            let updatedObj;
            MyCommunity.cityArr.forEach((cityObj, idx) => {
                (cityObj.name === searchName) ? cityObj = (updatedObj = cityObj, cityObj.movedIn(Number(e.target.parentNode.children[1].value))) : cityObj;
            })
            const nData = await getData();
            let updatedServerObj;
            nData.forEach((obj)=>{
                (obj.name === updatedObj.name)? (updatedServerObj = {"key":obj.key,...updatedObj}):obj;
            })
            console.log(updatedObj);
            const response = await fetch(url + "update", {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(updatedServerObj)
            });
            const newData = await response.json();
            console.log(newData);
            e.target.parentNode.children[5].classList.remove("fadeIn");
            // console.log(MyCommunity.cityArr);
        } else if (e.target && e.target.className === 'moveout') {
            // console.log(e.target.parentNode.children[1].value)
            let updatedObj;
            MyCommunity.cityArr.forEach((cityObj, idx) => {
                (cityObj.name === searchName) ? (updatedObj = cityObj, cityObj.movedOut(Number(e.target.parentNode.children[1].value))) : cityObj
            })
            const nData = await getData();
            let updatedServerObj;
            nData.forEach((obj)=>{
                (obj.name === updatedObj.name)? (updatedServerObj = {"key":obj.key,...updatedObj}):obj;
            })
            
            const response = await fetch(url + "update", {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(updatedServerObj)
            });
            const newData = await response.json();
            console.log(newData);
            e.target.parentNode.children[5].classList.remove("fadeIn");
        } else if (e.target && e.target.className === 'show') {
            MyCommunity.cityArr.forEach((cityObj) => {
                (cityObj.name === searchName) ? cityObj = e.target.parentNode.children[5].textContent = cityObj.show()+"It is " + cityObj.howBig() + " sized and is located at " + MyCommunity.whichSphere(cityObj) + ".": cityObj
            })
            e.target.parentNode.children[5].classList.add("fadeIn");
        } else if (e.target && e.target.className === 'delete') {
            console.log(e.target);
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            //post remove data
            let deleteData = MyCommunity.deleteCity(searchName);
            const nData = await getData(); 
            let deleteServerData;
            nData.forEach((obj)=>{
                (obj.name === deleteData.name)? deleteServerData = obj :obj;
            })
            const response = await fetch(url + "delete", {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(deleteServerData)
            });
            const newData = await response.json();
            console.log(newData);
        } else{
            console.log('clicked on an element with no event listner');
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
        document.getElementById('info-panel').textContent = `Total population of all cities: ${sum}`;
    })

    document.getElementById('getN').addEventListener('click', () => {
        document.getElementById('info-prompt').classList.remove("hide");
        document.getElementById('name-prompt').classList.add("hide");
        let max = MyCommunity.getMostNorthern();
        document.getElementById('info-panel').textContent = `The Most Northern City is ${max}`;
    })

    document.getElementById('getS').addEventListener('click', () => {
        document.getElementById('info-prompt').classList.remove("hide");
        document.getElementById('name-prompt').classList.add("hide");
        let min = MyCommunity.getMostSouthern();
        document.getElementById('info-panel').textContent = `The Most Southern City is ${min}`;
    })


    document.getElementById('create-city').addEventListener('click', async () => {
        //todo account name has to be unique;
        MyCommunity.createCity(document.getElementById("cityName").value, document.getElementById("cityLat").value, document.getElementById("cityLong").value, Number(document.getElementById("cityPop").value));
        console.log(MyCommunity.cityArr);
        let city = new City(document.getElementById("cityName").value, document.getElementById("cityLat").value, document.getElementById("cityLong").value, Number(document.getElementById("cityPop").value));
        let cardbox = document.createElement("div");
        createCityBox(cardbox, city);
        //post city obj;
        let key = 0;
        const nData = await getData();
        nData.forEach((obj) => {
            (obj.key === key) ? key++ : key;
        })
        let cityData = { "key": key, ...city };
        const response = await fetch(url + "add", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(cityData)
        });
        const newData = await response.json();
        console.log(newData);
        document.getElementById('root').appendChild(cardbox);
        document.getElementById('name-prompt').classList.add("hide");
    })

    window.addEventListener('click', (e) => {
        if (!document.getElementById('name-prompt').contains(e.target) &&
            !document.getElementById("control-container").contains(e.target) &&
            !document.getElementById("name-prompt").contains(e.target)) {
            document.getElementById('name-prompt').classList.add("hide");
            document.getElementById('info-prompt').classList.add("hide");
        }
    })
}

initData();
