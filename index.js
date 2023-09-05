let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16)

    document.querySelector("body").addEventListener("click", function (e) {
        if (e.target.tagName != "BUTTON") {
            click = !click;
        }
    })

    let btnPopup = document.getElementById("popup");
    btnPopup.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    })
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.appendChild(div);
    }

}

function getSize() {
    let input = document.getElementById("input");
    let message = document.getElementById("message");

    if (input.value == "") {
        message.textContent = "Insert a valid number";
        console.log(message)
    }
    else if (input.value < 0 || input.value > 100) {
        message.textContent = "Provide a number from 1 and 100"
    }
    else {
        message.textContent = "";
        return input.value;
    }

}

function colorDiv() {
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if (color == "white") {
            this.style.backgroundColor = "white";
        }
        else {
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}