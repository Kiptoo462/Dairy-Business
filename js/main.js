//milk production per shed  
//
let record = 0;

let producePerShed = new  Array(0, 0, 0, 0);
let recordMilkPerShed = function (shedA, shedB, shedC, shedD){
  producePerShed[0] += shedA;
  producePerShed[1] += shedB;
  producePerShed[2] += shedC;
  producePerShed[3] += shedD;
  record++;
}
recordMilkPerShed(510, 308, 486, 572);
console.log(producePerShed);
console.log(record);

//total amount of milk of all the sheds

 let averagePerDay = function () {
   let averageShedA = Math.ceil(producePerShed[0]/record);
   console.log('Your production in shed A ' + averageShedA + ' litres per day');
   let averageShedB = Math.ceil(producePerShed[1]/record);
   console.log('Your production in shed B ' + averageShedB + ' litres per day');
   let averageShedC = Math.ceil(producePerShed[2]/record);
   console.log('Your production in shed C ' + averageShedC + ' litres per day');
   let averageShedD = Math.ceil(producePerShed[3]/record);
   console.log('Your production in shed D ' + averageShedD + ' litres per day');
   let averageProducePerDay= averageShedA+averageShedB+averageShedC+averageShedD;
   console.log('Your total production is ' + averageProducePerDay + ' litres per day');
   return averageProducePerDay;
  }
  
averagePerDay();
 
//weekly  and yearly income 
let generateIncome = function (selling, time) {
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
generateIncome(45, 'year');
generateIncome(45, 'week');

// income per month in a leap year


var month = [ 
  {
  name: 'January', 
  days : 31,
  income : 0
 },
 {
  name: 'February', 
  days : 29,
  income : 0
 },
 {
  name: 'March', 
  days : 31,
  income : 0
 },
 {
  name: 'April', 
  days : 30,
  income : 0
 },
 {
  name: 'May', 
  days : 31,
  income : 0
 },
 {
  name: 'June', 
  days : 30,
  income : 0
 },
 {
  name: 'July', 
  days : 31,
  income : 0
 },
 {
  name: 'August', 
  days : 31,
  income : 0
 },
 {
  name: 'September', 
  days : 30,
  income : 0
 },
 {
  name: 'October', 
  days : 31,
  income : 0
 },
 {
  name: 'November', 
  days : 30,
  income : 0
 },
 {
  name: 'December', 
  days : 31,
  income : 0
 },
];

let getIncomePerMonth = function () {
  for( i = 0; i<12; i++) {
    month[i].income = 45 * averagePerDay() * month[i].days;
    console.log('Your income for ' + month[i].name + ' is ' + month[i].income ) 
  }
}
getIncomePerMonth();