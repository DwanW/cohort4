import { City, Community} from "./cities.js";

test("is my city working?", () => {
    const cityofCalgary = new City("Calgary", '51.0447', '-114.0719', 1360000);
    const city2 = new City("two", '52.0447', '-114.0729', 25000);
    const city3 = new City("three", '53.0447', '-114.0739', 3000);
    const city4 = new City("four", '54.0447', '-114.0749', 500);
    const city5 = new City("five", '55.0447', '-114.0759', 20);
    expect(cityofCalgary.name).toBe('Calgary');
    expect(cityofCalgary.latitude).toBe('51.0447');
    expect(cityofCalgary.longitude).toBe('-114.0719');
    expect(cityofCalgary.population).toBe(1360000);
    expect(cityofCalgary.show()).toBe("Latitude: 51.0447, Longitude: -114.0719, Population: 1360000 People.");
    cityofCalgary.movedIn(200);
    expect(cityofCalgary.population).toBe(1360200);
    cityofCalgary.movedOut(1000000);
    expect(cityofCalgary.population).toBe(360200);
    expect(cityofCalgary.howBig()).toBe("City");
    expect(city2.howBig()).toBe("Large Town");
    expect(city3.howBig()).toBe("Town");
    expect(city4.howBig()).toBe("Village");
    expect(city5.howBig()).toBe("Hamlet");
})


test("is my community working?", () => {
    const mainController = new Community([]);
    expect(mainController.cityArr).toEqual([]);

    mainController.createCity("city1", "10","-100", 20);
    expect(mainController.cityArr[0]).toEqual({"name": "city1", "latitude": "10", "longitude": "-100","population": 20});
    mainController.createCity("city2", "40","-140", 2000);
    mainController.createCity("city3", "-20","110", 90000);
    mainController.createCity("city4", "-50","-90", 10000);
    mainController.createCity("city5", "0","-140", 120000);
    expect(mainController.whichSphere(mainController.cityArr[0])).toBe("North Hemisphere");
    expect(mainController.whichSphere(mainController.cityArr[2])).toBe("South Hemisphere");
    expect(mainController.whichSphere(mainController.cityArr[4])).toBe("Equator");
    expect(mainController.cityArr.length).toBe(5);
    mainController.deleteCity("city1");
    expect(mainController.cityArr.length).toBe(4);
    mainController.deleteCity("calgary");
    expect(mainController.cityArr.length).toBe(4);
    expect(mainController.cityArr[3]).toEqual({"name": "city5", "latitude": "0", "longitude": "-140","population": 120000});
    expect(mainController.getMostNorthern()).toBe("city2");
    expect(mainController.getMostSouthern()).toBe("city4");
    expect(mainController.getPopulation()).toBe(222000);
    mainController.deleteCity("city2");
    mainController.createCity("city1", "0","-100", 20);
    expect(mainController.getMostNorthern()).toBe("");
    mainController.deleteCity("city3");
    mainController.deleteCity("city4");
    mainController.createCity("city3", "0","-100", 20);
    expect(mainController.getMostSouthern()).toBe("");
})