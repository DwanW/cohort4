import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

/* My Calculator eventListeners */

document.getElementById("calculate").addEventListener('click',
    (() => {
        document.getElementById("result").textContent = functions.calculate(
            Number(firstNumber.value),
            Number(secondNumber.value),
            method.value);
    })
);