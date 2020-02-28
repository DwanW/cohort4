import functionGroup1 from './syntax'

test('Check the Syntax', () => {
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

    expect(functionGroup1.isOverFifty(49)).toBe("failed");
    expect(functionGroup1.isOverFifty(50)).toBe("success");
    
    expect(functionGroup1.defineFunction(1,3)).toBe(4);
    expect(functionGroup1.defineFunction("my"," polo")).toBe("my polo");

    expect(functionGroup1.addArrStart([1,2,3],"Steve")).toEqual(["Steve",1,2,3]);
    expect(functionGroup1.addArrStart([3,2,3],"Bob")).toEqual(["Bob",3,2,3]);
    expect(functionGroup1.addArrEnd([3,2,3],"Steve")).toEqual([3,2,3, "Steve"]);
    expect(functionGroup1.addArrEnd([3,28,3],"Bob")).toEqual([3,28,3, "Bob"]);
    expect(functionGroup1.changeArrIdx([99, "ab"], "Wendy", 0)).toEqual(["Wendy", "ab"]);
    expect(functionGroup1.changeArrIdx([99, "ab", "rain"], "code", 1)).toEqual([99, "code", "rain"]);

    expect(functionGroup1.forLoop(["It", " is", " cold", " today"])).toBe("It is cold today");
    expect(functionGroup1.forLoop(["It", " is", " warm", " today"])).toBe("It is warm today");
    expect(functionGroup1.forInLoop({ a: 1, b: 2, c: 3})).toBe("abc");
    expect(functionGroup1.forInLoop({ "red": 1, "blue": 2, "green": 3})).toBe("redbluegreen");
    expect(functionGroup1.whileLoop("5")).toBe("555");
    expect(functionGroup1.whileLoop("99")).toBe("999999");
    expect(functionGroup1.doWhileLoop("apple")).toBe("apple is received");
    expect(functionGroup1.doWhileLoop("pear")).toBe("pear is received");
    expect(functionGroup1.forEachfunction(["red","green","blue"])).toBe("the three colors are red green blue");
    expect(functionGroup1.forEachfunction(["purple","cyan","black"])).toBe("the three colors are purple cyan black");

    expect(functionGroup1.objReadFirstKey({"fire":"burns", "ice":"freezes", "electricity": "paralyzes"})).toBe("the first property is fire and the value is burns");
    expect(functionGroup1.objReadFirstKey({"dark":"currupts", "ice":"freezes", "electricity": "paralyzes"})).toBe("the first property is dark and the value is currupts")
});
