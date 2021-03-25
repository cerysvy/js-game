const readyButton = document.getElementById("ready-button");
const recipe = document.getElementById("recipe");
const bar = document.getElementById("bar");

readyButton.addEventListener("click", () => {
    recipe.classList.add("hide");
    bar.classList.remove("hide");
  });

const espresso = document.getElementById("espresso");
const lemonJuice = document.getElementById("lemon-juice");
const simpleSyrup = document.getElementById("simple-syrup");
const cremeDeMure = document.getElementById("creme-de-mure");

const vodka = document.getElementById("vodka");
const gin = document.getElementById("gin");
const coffeeLiqueur = document.getElementById("cof-liq");

const ice = document.getElementById("ice");
const shake = document.getElementById("shake");



espresso.addEventListener("click", () => {
  answersArray.push(espresso.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

lemonJuice.addEventListener("click", () => {
  answersArray.push(lemonJuice.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

simpleSyrup.addEventListener("click", () => {
  answersArray.push(simpleSyrup.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

cremeDeMure.addEventListener("click", () => {
  answersArray.push(cremeDeMure.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

vodka.addEventListener("click", () => {
  answersArray.push(vodka.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

gin.addEventListener("click", () => {
  answersArray.push(gin.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

coffeeLiqueur.addEventListener("click", () => {
  answersArray.push(coffeeLiqueur.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});

ice.addEventListener("click", () => {
  answersArray.push(ice.innerHTML.toLowerCase());
  console.log(answersArray);
});

shake.addEventListener("click", () => {
  answersArray.push(shake.innerHTML.toLowerCase());
  console.log(answersArray);
  console.log(equals(answersArray, espressoMartiniArray));
});


const equals = (answersArray, espressoMartiniArray) => JSON.stringify(answersArray) === JSON.stringify(espressoMartiniArray);

const answersArray = [];
const espressoMartiniArray = ["coffee liqueur", "espresso", "vodka", "ice", "shake"]
