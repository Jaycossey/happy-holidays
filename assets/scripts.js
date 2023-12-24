// GLOBALS ----------------------------
const ROOT_DIV = document.getElementById('root');

let box;
let userName = "";


// GIFT CLICK AND USER HANDLES ----------
const unwrapGift = (element) => {
    ROOT_DIV.removeChild(element);

    startSnowing();
}

const handleSubmit = () => {
    console.log("click");
    userName = document.querySelector('.nameInput').value;
    console.log(`Hello, ${userName}`);

    unwrapGift(box);
}

const welcomePage = () => {
    const card = document.createElement('div');
    card.classList = "welcome";
    
    const input = document.createElement('input');
    input.classList = "nameInput";
    input.value = "";
    input.placeholder = "Your name here!";

    const submitButton = document.createElement('button');
    submitButton.classList = "submit";
    submitButton.innerText = "Click Here to Unwrap!";
    submitButton.addEventListener('click', handleSubmit);

    card.append(input, submitButton);
    box = card;

    ROOT_DIV.append(card);
}

document.onload = welcomePage();

// SNOW INTO HAPPY HOLS!!! -----------------

class Snow {
    constructor(size, position, speed) {
        this.size = size;
        this.position = position;
        this.speed = speed;
    }
}

const startSnowing = () => {
    const snowArray = [];

    
}