// logics
// remove_one
// function remove_one() {
// if(input_value.innerHTML.length == 1) {
// input_value.innerHTML = '0';
// }
// let j = input_value.innerHTML;
// if(j.includes('%' || '/' || '+' || '-' || '*')) {
// if(j.includes(' ')) {
//         let a = j.replace(/[^\w\s]/gi, '');
//         input_value.innerHTML = a;
// } else {

// j = Math.floor(j/10);
// input_value.innerHTML = j;

// solution
// function solution() {
// if(input_value.value.includes(' ')) {
//     if(input_value.value.includes('%' || '÷' || '+' || '-' || '*')) {
//         // input_value.value = Number(input_value.value);
//         let val = input_value.value.split(' ');

//     }
// }
//     let ans = eval(input_value.innerHTML);
//     document.getElementById('input').innerHTML = ans;
// }

let input_value = document.getElementById("input");

// Clear input
function clearAll() {
  input_value.innerHTML = "0";
}

// Remove one character
function remove_one() {
  if (input_value.innerHTML.length > 1) {
    // it willl start from 0 index and will delete the last one
    input_value.innerHTML = input_value.innerHTML.slice(0, -1);
  } else {
    input_value.innerHTML = "0";
  }
}

// Append numbers
function appendNumber(num) {
  if (input_value.innerHTML === "0") {
    input_value.innerHTML = num;
  } else {
    input_value.innerHTML += num;
  }
}

// Append operator
function appendOperator(op) {
  let lastChar = input_value.innerHTML.slice(-1);
  if ("+-*/".includes(lastChar)) {
    // replace last operator if user clicks again
    input_value.innerHTML = input_value.innerHTML.slice(0, -1) + op;
  } else {
    input_value.innerHTML += op;
  }
}

// Append decimal point after the current number
function add_point() {
  // Split the display text at every operator (+, -, *, /)
  let parts = input_value.innerHTML.split(/[\+\-\*\/]/);

  // Check the last number (after the last operator)
  // If it doesn't already have a decimal point, add one
  if (!parts[parts.length - 1].includes(".")) {
    input_value.innerHTML += ".";
  }
}

// percentage solver
function add_percentage() {
  // Get the current number from the display and store into val variable
  let val = parseFloat(input_value.innerHTML);

  // If it is a valid number, divide it by 100, it will check condtion that is this really a number or not
  if (!isNaN(val)) {
    input_value.innerHTML = val / 100;
  }
}

// Calculate the result
function solution() {
  try {
    // Use eval() to evaluate the expression
    let ans = eval(input_value.innerHTML);
    input_value.innerHTML = ans;
  } catch {
    input_value.innerHTML = "Error";
  }
}
