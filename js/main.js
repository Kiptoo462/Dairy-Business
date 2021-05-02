//milk production per day per shed and total amount of milk of all the shed
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



