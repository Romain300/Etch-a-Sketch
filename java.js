function generateRandomColor() {
    let color = "#"
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor((Math.random() * 16))];
    }
    return color;
}

function changeBackgroundColor() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = generateRandomColor();
        });
    });
};


function createColumnGrid() {
    const mainContainer = document.querySelector(".container");
    for( let i = 0; i < 16; i++) {
        let newContainer = document.createElement("div");
        newContainer.classList.add("container02");
        for( let j = 0; j < 16; j++) {
            let newElement = document.createElement("div");
            newElement.classList.add("block");
            newContainer.appendChild(newElement);
        }
        mainContainer.appendChild(newContainer);      
    };
    changeBackgroundColor();
};


function resizingGrid() {
    const resizeButton = document.querySelector("#resizeButton");
    resizeButton.addEventListener("click", () => {
         const size = parseInt(prompt("Enter a number to choose your grid size: "));
         console.log(size);
         const mainContainer = document.querySelector(".container");
         if (isNaN(size) === true ||  size < 0 || size > 100) {
            alert("Please enter a valid number between 0 and 100 included")
         } else if (isNaN(size) === false) {
            mainContainer.textContent = "";
             for( let i = 0; i < size; i++) {
                let newContainer = document.createElement("div");
                newContainer.classList.add("container02");
                for( let j = 0; j < size; j++) {
                    let newElement = document.createElement("div");
                    newElement.classList.add("block");
                    newContainer.appendChild(newElement);
                }
                mainContainer.appendChild(newContainer);      
            };
            changeBackgroundColor();
         };
    })
};

createColumnGrid();
resizingGrid();


