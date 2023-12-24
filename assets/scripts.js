// GLOBALS ----------------------------
const ROOT_DIV = document.getElementById('root');

let box;
let userName = "";


// GIFT CLICK AND USER HANDLES ----------
const unwrapGift = (element) => {
    ROOT_DIV.removeChild(element);

    startSnowing();
    setCardMessage();
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
        this.element = document.createElement('div');
        this.element.style.width = this.size + "px";
        this.element.style.height = this.size + "px";
        this.element.classList = "snowFlake";
        this.element.style.left = `${getRandom(100)}vw`;
    }
}

const getRandom = (options) => {
    return Math.floor(Math.random() * options);
}

const startSnowing = () => {
    const snowArray = [];

    // call this for each snowflake object
    let randomNumber = getRandom(10) + 10;

    for (let i = 0; i < randomNumber; i++) {
        let snowFlake = new Snow(getRandom(50), getRandom(100), getRandom(20));
        snowArray.push(snowFlake);
        setTimeout(() => {
            ROOT_DIV.append(snowArray[i].element);
        }, getRandom(3000) * i);
    }

}

// startSnowing();

// CARD GREETINGS ----------------------------
const setCardMessage = () => {
    const bottomDiv = document.createElement('div');
    bottomDiv.className = "fadeUpBg";

    bottomDiv.innerText = `Happy Holidays ${userName}!\nWishing you and yours all the best for the new year!\nIan and Family`;

    const giftDiv = document.createElement('div');
    giftDiv.classList = "gift";

    bottomDiv.append(giftDiv);

    ROOT_DIV.append(bottomDiv);
}

// setCardMessage();
