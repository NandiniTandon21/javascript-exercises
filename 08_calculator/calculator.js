const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let count = 0
  for(a of arr){
    count=count+a
  }
  return count
	
};

const multiply = function(arr) {
  let count = 1
  for(a of arr){
    count=count*a
  }
  return count

};

const power = function(a,b) {
	return Math.pow(a,b)
};

let fact =1
const factorial = function(a) {
  if(a==0){
    return 1
  }
  return a * factorial(a-1)
  
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
