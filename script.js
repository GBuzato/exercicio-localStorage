const main = document.getElementsByTagName('main')[0];
const divH2 = document.getElementById('divh2');

function createButton() {
    const buttonGrey = document.createElement('button');
    buttonGrey.style.backgroundColor = 'grey';
    buttonGrey.style.color = 'white';
    buttonGrey.style.width = '40px';
    buttonGrey.style.height = '40px';
    buttonGrey.style.borderRadius = '50%';
    buttonGrey.style.marginTop = '10px';
    buttonGrey.style.border = '0';
    buttonGrey.style.margin = '5px';
    divH2.appendChild(buttonGrey);

    const buttonPink = document.createElement('button');
    buttonPink.style.backgroundColor = 'pink';
    buttonPink.style.color = 'white';
    buttonPink.style.width = '40px';
    buttonPink.style.height = '40px';
    buttonPink.style.borderRadius = '50%';
    buttonPink.style.marginTop = '10px';
    buttonPink.style.border = '0';
    buttonPink.style.margin = '5px';
    divH2.appendChild(buttonPink);

    const buttonBlack = document.createElement('button');
    buttonBlack.style.backgroundColor = 'black';
    buttonBlack.style.color = 'white';
    buttonBlack.style.width = '40px';
    buttonBlack.style.height = '40px';
    buttonBlack.style.borderRadius = '50%';
    buttonBlack.style.marginTop = '10px';
    buttonBlack.style.border = '0';
    buttonBlack.style.margin = '5px';
    divH2.appendChild(buttonBlack);
}
createButton();

function changeBackgroundColor() {
    
}