let principal=100000;
let rate=0.1447142426;
let n=1;
let time=3;

let amount=principal*(1+rate/n)**(n*time);


let compoundInterest=amount-principal;

console.log("Compound Interest after 3 years is:" + compoundInterest.toFixed(0));