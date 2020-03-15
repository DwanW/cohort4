const createCityBox = (cardbox, cityObj) => {
    //create Account header
    let cardheader = document.createElement("div");
    let cardtext = document.createTextNode(`${cityObj.name}`);
    cardheader.appendChild(cardtext);

    cardheader.classList.add('cityHeader');

    //create card header inside card box
    cardbox.appendChild(cardheader);

    cardbox.classList.add('cityCard');
    //create input field
    let input1 = document.createElement('input');
    input1.setAttribute("type", "number");
    input1.setAttribute("placeholder", "Enter population");
    input1.classList.add("inputbox");
    cardbox.appendChild(input1);

    //create three button and text inside 
    let button1 = document.createElement("button");
    let button1txt = document.createTextNode("Move In");
    button1.appendChild(button1txt);

    let button2 = document.createElement("button");
    let button2txt = document.createTextNode("Move Out");
    button2.appendChild(button2txt);

    let button3 = document.createElement("button");
    let button3txt = document.createTextNode("Show");
    button3.appendChild(button3txt);

    cardbox.appendChild(button1);
    cardbox.appendChild(button2);
    cardbox.appendChild(button3);

    button1.classList.add('movein');
    button2.classList.add('moveout');
    button3.classList.add('show');

    let cardValue = document.createElement("div");
    cardValue.classList.add('result');
    cardbox.appendChild(cardValue);

    let button4 = document.createElement("button");
    button4.innerHTML = '<i class="fa fa-trash"></i>';
    button4.classList.add('delete');
    cardbox.appendChild(button4);
    return cardbox;
}

export default createCityBox;