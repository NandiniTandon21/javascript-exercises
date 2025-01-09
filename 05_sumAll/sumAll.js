
const sumAll = function(a, b) {
    let sum =0 
    if(a<0 || b<0 || !(Number.isInteger(a)) || !(Number.isInteger(b)) || isNaN(a) || isNaN(b)){
        return 'ERROR'
    }
   if(b>a){
    start =a ;
    end=b;
   }
   else{
    start =b;
    end=a;
   }
sum = Math.abs(((end*(end+1))/2)-start+1)
console.log('@@sum = ', sum )
return sum 
};

// Do not edit below this line
module.exports = sumAll;
