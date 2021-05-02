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
   let averageShedA = producePerShed[0]/record;
   console.log('Your production in shed A ' + averageShedA + ' litres per day');
   let averageShedB = producePerShed[1]/record;
   console.log('Your production in shed B ' + averageShedB + ' litres per day');
   let averageShedC = producePerShed[2]/record;
   console.log('Your production in shed C ' + averageShedC + ' litres per day');
   let averageShedD = producePerShed[3]/record;
   console.log('Your production in shed D ' + averageShedD + ' litres per day');
   let averageProducePerDay= averageShedA+averageShedB+averageShedC+averageShedD;
   console.log('Your total production is ' + averageProducePerDay + ' litres per day');
  }
  
averagePerDay();