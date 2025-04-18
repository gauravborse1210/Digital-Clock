"use strict";

const number = document.querySelectorAll("input");
const screen = document.querySelector(".screen");

number.forEach(function (e) {
  e.addEventListener("click", function () {
    const operators = ["+", "-", "*", "/"];
    const lastChar = screen.value.slice(-1); //Print only last value

    if (e.value === "AC") {
      screen.value = "";
    } else if (e.value === "DE") {
      screen.value = String(screen.value).slice(0, -1); //Print value except last one
    } else if (operators.includes(e.value)) {
      //First checking the condition is met or not
      if (operators.includes(lastChar)) {
        screen.value = screen.value.slice(0, -1) + e.value; //In this first take a value except last one and append whatever current operator
      } else {
        // Append the operator if the last character is not an operator
        screen.value += e.value;
      }
    } else if (e.value === ".") {
      // Check if '.' is already present in the current number
      const currentNumber = screen.value.split(/[\+\-\*\/]/).pop(); //[] = This means: "Match any one of these characters: +, -, *, or /." // /= The slashes denote the beginning and end of the regex. Without the slashes, JavaScript wouldn't understand that you're writing a regex.
      if (!currentNumber.includes(".")) {
        screen.value += e.value; // Append '.' if it doesn't already exist
      }
    } else if (e.value === "=") {
      if (screen.value && !operators.includes(lastChar)) {
        screen.value = eval(screen.value); // Calculate the result
      } else {
        screen.value = "Invalid";
      }
    } else {
      screen.value += e.value;
    }
  });
});
