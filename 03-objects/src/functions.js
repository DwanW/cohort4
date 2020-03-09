const functions = {
    createAccCardBox: (cardbox, accObj) => {
        //create Account header
        let cardheader = document.createElement("div");
        let cardtext = document.createTextNode(`${accObj.accName}`);
        cardheader.appendChild(cardtext);

        cardheader.classList.add('accHeader');

        //create card header inside card box
        cardbox.appendChild(cardheader);

        cardbox.classList.add('accCard');
        //create input field
        let input1 = document.createElement('input');
        input1.setAttribute("type", "number");
        input1.setAttribute("placeholder", "Enter fund here");
        input1.classList.add("inputbox");
        cardbox.appendChild(input1);

        //create three button and text inside 
        let button1 = document.createElement("button");
        let button1txt = document.createTextNode("Deposit");
        button1.appendChild(button1txt);

        let button2 = document.createElement("button");
        let button2txt = document.createTextNode("Withdraw");
        button2.appendChild(button2txt);

        let button3 = document.createElement("button");
        let button3txt = document.createTextNode("Show");
        button3.appendChild(button3txt);
        cardbox.appendChild(button1);
        cardbox.appendChild(button2);
        cardbox.appendChild(button3);

        button1.classList.add('deposit');
        button2.classList.add('withdraw');
        button3.classList.add('show');

        let cardValue = document.createElement("div");
        cardValue.classList.add('result');
        cardbox.appendChild(cardValue);
        return cardbox;
    },
}

export default functions;