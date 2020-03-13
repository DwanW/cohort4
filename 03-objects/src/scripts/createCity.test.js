import {City} from './cities.js';
import createCityBox from './createCity.js';

test("is my city dom working?", () => {
    document.body.innerHTML = 
    `<div class="cityCard">`+
    `<div class="cityHeader">city2</div>`+
    `<input class="inputbox" placeholder="Enter population here" type="number" />`+
    `<button class="movein">Move In</button>`+
    `<button class="moveout">Move Out</button>`+
    `<button class="show+sphere">Show</button>`+
    `<button>How Big</button>`+
    `<div class="result"></div>`+
    `<button class="delete"><i class="fa fa-user-times" /></button>`+
    `</div>`;
    let city1 = new City("city2", "40° N","140° W", 2000);
    let cardbox = document.createElement("div");
    expect(createCityBox(cardbox, city1)).toEqual(document.body.childNodes[0]);
})