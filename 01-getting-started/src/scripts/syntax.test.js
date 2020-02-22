import functionGroup1 from './syntax'

test('Check the defineVars', () => {
    expect(functionGroup1.defineVar(-1)).toBe("number");
    expect(functionGroup1.defineVar(0)).toBe("number");
    expect(functionGroup1.defineVar(10)).toBe("number");
    expect(functionGroup1.defineVar("bob")).toBe("string");
    expect(functionGroup1.defineVar("")).toBe("string");
    expect(functionGroup1.defineVar("120")).toBe("string");
    expect(functionGroup1.defineVar(true)).toBe("boolean");
    expect(functionGroup1.defineVar(false)).toBe("boolean");
    expect(functionGroup1.defineVar([])).toBe("array");
    expect(functionGroup1.defineVar(null)).toBe("null");
    expect(functionGroup1.defineVar({"lion": 2, "bird": 3})).toBe("object");
    expect(functionGroup1.defineVar(undefined)).toBe("undefined");

    expect(functionGroup1.definePass(49)).toBe("failed");
    expect(functionGroup1.definePass(50)).toBe("sucess");
    
    expect(functionGroup1.defineFunction(1,3)).toBe(4);
    expect(functionGroup1.defineFunction("my"," polo")).toBe("my polo");

    expect(functionGroup1.addArrStart([1,2,3])).toBe("Steve");
    expect(functionGroup1.addArrEnd([3,2,3])).toBe("Steve");
    expect(functionGroup1.changeArrIdx([99, "ab"])).toBe("Wendy");

    expect(functionGroup1.forLoop(["It", " is", " cold", " today"])).toBe("It is cold today");
    expect(functionGroup1.forInLoop({ a: 1, b: 2, c: 3})).toBe("abc");
    expect(functionGroup1.whileLoop("5")).toBe("555");
    expect(functionGroup1.doWhileLoop("apple")).toBe("apple is received");
    expect(functionGroup1.forEachfunction(["red","green","blue"])).toBe("the three colors are red green blue");

    expect(functionGroup1.objReadFirstKey({"fire":"burns", "ice":"freezes", "electricity": "paralyzes"})).toBe("the first property is fire and the value is burns");
});
