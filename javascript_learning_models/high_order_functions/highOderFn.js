
// ============ high order increment function
const increment = (() => {
return (number, value = 1) => {
        return number + value;
    }
})();

console.log(increment(6, 6));

// ============= high order function sum
const sum = (function(){
  return function sum(x, y, z){
      const args = [x, y, z];
      return args.reduce((a, b) => a + b, 0)
  };
})();

console.log(sum(1, 2, 3));

// ============== rest operator

const SUM = (function(){
    return function SUM(...args){  //coverts args into an array args
        return args.reduce((a, b) => a + b, 0)
    };
  })();
  
  console.log(sum(1, 3, 7, 9));

//   ============= spread operator

const arr1 = ['jan', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
  arr2 = [...arr1];
  arr1[0] = 'potato' 
})();

console.log(arr2);



