const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
	calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		updateScreen(event.target.value);
	});
});

let preNumber = "";
let calculationOperator = "";
let currentnumber = "0";

const inputNumber = (number) => {
	if (currentnumber === "0") {
		currentnumber = number;
	} else {
		currentnumber += number;
	}
};
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentnumber);
	});
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});

const inputOperator = (operator) => {
	if (calculationOperator == "") {
		prevNumber = currentnumber;
	}
	calculationOperator = operator;
	currentnumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
	calculate();
	updateScreen(currentnumber);
});

const calculate = () => {
	let result = "";
	switch (calculationOperator) {
		case "+":
			result =
				parseFloat(prevNumber) +
				parseFloat(currentnumber);
			break;
		case "-":
			result =
				parseFloat(prevNumber) -
				parseFloat(currentnumber);
			break;
		case "*":
			result =
				parseFloat(prevNumber) *
				parseFloat(currentnumber);
			break;
		case "/":
			result =
				parseFloat(prevNumber) /
				parseFloat(currentnumber);
			break;
		default:
			break;
	}
	currentnumber = result;
	calculationOperation = "";
};

// const equalSign = document.querySelector(".equal-sign");
// equalSign.addEventListener("click", () => {
// 	calculate();
// 	updateScreen(currentnumber);
// });

const clearAll = () => {
	prevNumber = "";
	calculationOperator;
	currentNumber = "0";
};
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
	clearAll();
	updateScreen(currentnumber);
});
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentnumber);
});

inputDecimal = (dot) => {
	if (currentnumber.includes(".")) {
		return;
	}
	currentnumber += dot;
};
