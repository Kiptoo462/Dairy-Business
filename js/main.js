//milk production per shed  
const shedA = 510;
const shedB = 308;
const shedC = 486;
const shedD = 572;

//total amount of milk of all the sheds

 let totalProduction = function () {
    let totalProduce = shedA + shedB + shedC + shedD;

    document.getElementById("shedA").innerHTML = shedA;
    document.getElementById("shedB").innerHTML = shedB;
    document.getElementById("shedC").innerHTML = shedC;
    document.getElementById("shedD").innerHTML = shedD;
    document.getElementById("total").innerHTML = totalProduce;

  }

//weekly  and yearly income 
let incomeOverTime = function (selling, time) {
  let days = 0;
  let incomePerWeek = 0;
  let incomePerYear = 0;
  if (time == 'week'){
    days = 7;
    incomePerWeek = averagePerDay() * selling * days;
    console.log('Your weekly income will be ksh ' + incomePerWeek);
  }
  else if (time =='year'){
    days = 365;
    incomePerYear = averagePerDay() * selling * days;
    console.log('Your yearly income will be ksh ' + incomePerYear);
  
  }
  else { 
    alert('Invalid time');
  }
 
}

// income per month in a leap year


var month = [ 
  {
  name: 'January', 
  days : 31,
  income : 0,
  newIncome : 0
  
 },
 {
  name: 'February', 
  days : 29,
  income : 0,
  newIncome : 0
 },
 {
  name: 'March', 
  days : 31,
  income : 0,
  newIncome : 0
 },
 {
  name: 'April', 
  days : 30,
  income : 0,
  newIncome : 0
 },
 {
  name: 'May', 
  days : 31,
  income : 0,
  newIncome : 0
 },
 {
  name: 'June', 
  days : 30,
  income : 0,
  newIncome : 0
 },
 {
  name: 'July', 
  days : 31,
  income : 0,
  newIncome : 0
 },
 {
  name: 'August', 
  days : 31,
  income : 0,
  newIncome : 0
 },
 {
  name: 'September', 
  days : 30,
  income : 0,
  newIncome : 0
 },
 {
  name: 'October', 
  days : 31,
  income : 0,
  newIncome : 0
 },
 {
  name: 'November', 
  days : 30,
  income : 0,
  newIncome : 0
 },
 {
  name: 'December', 
  days : 31,
  income : 0,
  newIncome : 0
 },
];

let getIncomePerMonth = function () {
  for( i = 0; i<12; i++) {
    month[i].income = 45 * averagePerDay() * month[i].days;
    console.log('Your income for ' + month[i].name + ' is ' + month[i].income );
  }
}

 
let getNewIncomePerMonth = function () {
  for( i = 0; i<12; i++) {
    month[i].newIncome = 49.60 * averagePerDay() * month[i].days;
    console.log( 'your new income for ' + month[i].name + ' is ' + month[i].newIncome);
    console.log( ' The diffrence in income is ' + ( month[1].newIncome - month[i].income));
  }
}
 
