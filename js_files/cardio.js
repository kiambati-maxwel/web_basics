// ======= algorithm for adding arguments in a function

// ===== es5

function addAll(){
    var args = Array.prototype.slice.call(arguments);
    var total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(addAll(1,4,43))

// ========= es6 reduce rest-operator foreach

function  addALL(...numbers){
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}

console.log(addALL(3,4,5,6,));

// reduce
const addReduce = (...num) =>  num.reduce((acumulator, currentV) => acumulator + currentV);

console.log(addReduce(5, 6,99, 9, 3, 7, 9));

// ======== prime numbers

function primeNo (upto){
 let totalSum = 0;

 function checkForPrime(i){
     for(let j = 2; j<i; j++){
         if(i%j === 0){
             return false;
         }
     }
     return true;
 }

  for(let i = 2; i<=upto; i++){
     if((checkForPrime(i))){
         totalSum += i;
     }
 }
 return totalSum;
}

console.log(primeNo(100));

// =========== seek and destroy 
// ====================== solution one
// ========================== indexOf filter

//  ==== seekAndDestroy([1,2, 3, 6 'hello'], 1, 6) === [2,3,'hello']

function seekAndDestroy(arr){
    const args = Array.from(arguments);

    function filterArray(arr){
        // returns true if not in array
        return args.indexOf(arr) === -1;
    } 
    return arr.filter(filterArray);
}
console.log(seekAndDestroy([3,10,6,4,'yes', 'bana'],10,6,4 ));

// solution two ...rest filter include

function seekDestroy(arr, ...rest){
    return arr.filter(value => !rest.includes(value));
}
console.log(seekDestroy([3,10,6,4,'yes', 'bana'],10,6, ));


// ====== return statement 
function test (){
    
};

console.log(test());

