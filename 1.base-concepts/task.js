"use strict"

function solveEquation(a, b, c) {

  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;

  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  } else if (d === 0) {
    x1 = -b / (2 * a);
    return [x1];
  }
  return arr;
}
console.log(solveEquation());


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthlyPercent = percent / 100 / 12;
  let mortgageBody = amount - contribution;
  let monthlyPayment = mortgageBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)))
  console.log(monthlyPayment)
  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));;
}
console.log(calculateTotalMortgage());