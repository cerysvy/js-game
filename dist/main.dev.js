"use strict";

var espresso = document.getElementById("espresso");
var lemonJuice = document.getElementById("lemon-juice");
var simpleSyrup = document.getElementById("simple-syrup");
var cremeDeMure = document.getElementById("creme-de-mure");
var vodka = document.getElementById("vodka");
var gin = document.getElementById("gin");
var coffeeLiqueur = document.getElementById("cof-liq");
var ice = document.getElementById("ice");
var shake = document.getElementById("shake");
espresso.addEventListener("click", function () {
  answersArray.push(espresso.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
lemonJuice.addEventListener("click", function () {
  answersArray.push(lemonJuice.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
simpleSyrup.addEventListener("click", function () {
  answersArray.push(simpleSyrup.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
cremeDeMure.addEventListener("click", function () {
  answersArray.push(cremeDeMure.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
vodka.addEventListener("click", function () {
  answersArray.push(vodka.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
gin.addEventListener("click", function () {
  answersArray.push(gin.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
coffeeLiqueur.addEventListener("click", function () {
  answersArray.push(coffeeLiqueur.innerHTML.toLowerCase());
  answersArray.sort();
  console.log(answersArray);
});
ice.addEventListener("click", function () {
  answersArray.push(ice.innerHTML.toLowerCase());
  console.log(answersArray);
});
shake.addEventListener("click", function () {
  answersArray.push(shake.innerHTML.toLowerCase());
  console.log(answersArray);
  console.log(equals(answersArray, espressoMartiniArray));
});

var equals = function equals(answersArray, espressoMartiniArray) {
  return JSON.stringify(answersArray) === JSON.stringify(espressoMartiniArray);
};

var answersArray = [];
var espressoMartiniArray = ["coffee liqueur", "espresso", "vodka", "ice", "shake"];