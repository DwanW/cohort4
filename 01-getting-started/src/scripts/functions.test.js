import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(101)).toBe("extra large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('is the number even?', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(1)).toBe(false);
    expect(functions.isEven(1.2e1000)).toBe("number is too big");
});

test('is my calculator working?', () => {
    expect(functions.calculate(1,2,'add')).toBe(3);
    expect(functions.calculate(6,5,'add')).toBe(11);
    expect(functions.calculate(10,3,'subtract')).toBe(7);
    expect(functions.calculate(19,2,'subtract')).toBe(17);
    expect(functions.calculate(33,3,'multiply')).toBe(99);
    expect(functions.calculate(7,9,'multiply')).toBe(63);
    expect(functions.calculate(1,2,'divide')).toBe(0.5);
    expect(functions.calculate(81,9,'divide')).toBe(9);
});

test("is my tax calculated correctly?", ()=>{
    expect(functions.calculateTax(1)).toBe("$ 0.15");
    expect(functions.calculateTax(2)).toBe("$ 0.30");
    expect(functions.calculateTax(50000)).toBe("$ 7580.57");
    expect(functions.calculateTax(100000)).toBe("$ 17991.78");
    expect(functions.calculateTax(150000)).toBe("$ 30991.78");
    expect(functions.calculateTax(180000)).toBe("$ 39677.59");
    expect(functions.calculateTax(250000)).toBe("$ 61402.87");
});

test("is my array method working correctly?", ()=>{
    expect(functions.addArrayInput(1, [])).toEqual([1]);
    expect(functions.addArrayInput("bobby", [3,8,1])).toEqual([3,8,1,"bobby"]);
    expect(functions.sumArrayInput([5,8,0,4])).toBe(17);
    expect(functions.sumArrayInput([3,99,7,5])).toBe(114);
});

test("is my dictionary method working correctly?", ()=>{
    expect(functions.lookUpKey("AB", {"AB":"Alberta", "BC":"British Columbia"})).toBe("Alberta");
    expect(functions.lookUpKey("PE", {"NL":"Newfoundland and Labrador", "PE":"Prince Edward Island"})).toBe("Prince Edward Island");
    expect(functions.lookUpKey("CD", {"AB":"Alberta", "BC":"British Columbia"})).toBe("no such key in the dictionary");
});