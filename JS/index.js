const tombolaArray = [];

const tabelCells = function () {
  for (let i = 0; i < 90; i++) {
    tombolaArray.push([]);

    const cell = document.createElement("div");
    cell.classList.add("day");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    cell.appendChild(cellValue);

    const tombolaSection = document.getElementById("tombola");
    tombolaSection.appendChild(cell);
  }

  console.log("tombolaArray", tombolaArray);
};

const randomNumberGenerate = function () {
  const myRandomIndex = Math.floor(Math.random() * 91);
  const randomCell = document.querySelectorAll(".day")[myRandomIndex];

  randomCell.classList.add("selected");

  const specialNumber = randomCell.querySelector("h3").innerText;
  console.log("Il numero estratto è!!: " + specialNumber);
};

const myForm = document.getElementById("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", () => {
  randomNumberGenerate();
});

tabelCells();

const schedinaArray = [];
const schedinaCells = function () {
  for (let i = 0; i < 24; i++) {
    schedinaArray.push([]);

    const cell = document.createElement("div");
    cell.classList.add("day");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    cell.appendChild(cellValue);

    const schedinaSection = document.getElementById("schedinatombola");
    schedinaSection.appendChild(cell);
  }

  console.log("tombolaArray", schedinaArray);
};
schedinaCells();
