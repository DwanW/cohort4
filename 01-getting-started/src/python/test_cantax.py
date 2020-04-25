from cantax import *
import pytest

def test_cantax():
    assert cantax(1) == 0.15
    assert cantax(2) == 0.3
    assert cantax(50000) == 7580.57
    assert cantax(100000) == 17991.78
    assert cantax(150000) == 30991.78
    assert cantax(180000) == 39677.59
    assert cantax(250000) == 61402.87





    # expect(functions.calculateTax(1)).toBe("$ 0.15");
    # expect(functions.calculateTax(2)).toBe("$ 0.30");
    # expect(functions.calculateTax(50000)).toBe("$ 7580.57");
    # expect(functions.calculateTax(100000)).toBe("$ 17991.78");
    # expect(functions.calculateTax(150000)).toBe("$ 30991.78");
    # expect(functions.calculateTax(180000)).toBe("$ 39677.59");
    # expect(functions.calculateTax(250000)).toBe("$ 61402.87");