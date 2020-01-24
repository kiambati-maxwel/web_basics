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

// ===== loop through an array of arrays and return an array with the sum of the inner arrays

const number  = [
    [1, 2 , 4 ],
    [5, 6, 1, 2],
    [3, 7, 1, 4, 6, 4]
];

//  === expected results --> [5, 14, 25]

function numbers (numbers){
    let sums = [];
    let s = 0;
    for (let i = 0; i<numbers.length; i++){        
        for(let j = 0; j<numbers[i].length; j++){
            s += numbers[i][j];
        }
        sums.push(s);
    }
    return sums;
}

console.log(numbers(number))
console.log(number[1].length);

//  === a function rangeSum(number) that adds up the rangeOf numbers beginning from zero AND should take both +ve and -ve intengers







// ==== return an array with the average in the following 

var st = [
    { 
      name: "Mary", 
      age: 10, 
      grades: [90, 88, 95]
    }, 
    {
      name: "Joseph", 
      age: 11, 
      grades: [80, 100, 90, 96]
    }
  ];

   function avg (students){
      students.forEach(element => {
          console.log(st.age);
      });
  }

  avg(st);

//  SORT BY HEIGHT 
// some people are standing in a row in a park. There are trees between them which connot be moved. Your task to rearrange the people by their heights in a not-descending order without moving the trees.
// ex.
//a = [-1, 150, 190, 170, -1, -1, 160, 100]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a){
    const arr1 = []; //store position
    const arr2 = []; //store values not = to -1

    a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val) // ternary operator

        // if(val === -1){
        //     arr1.push(i);
        // }else{
        //     arr2.push(val);
        // }
    );

    const sortArr = arr2.sort((a,b) => a-b);// sort from highest to lowest {b-a will sort from highest to lowest}


    arr1.forEach((val,  i/* index*/) => sortArr.splice(arr1[i], 0, -1));

    return sortArr

}
const a = [-1, 150, 190, 170, -1, -1, 160, 100];

console.log(sortByHeight(a));

