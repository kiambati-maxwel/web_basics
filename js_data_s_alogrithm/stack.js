// stacks

// functions: push, pop, peek, length

var letters = []; // -- this is the stack

var word = 'racecer';

var rword = '';

// put letter into letters stack
for(let i=0; i<word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order 
for(let i=0; i<word.length; i++){
    rword += letters.pop();
} 


if(word === rword){
    console.log('is a palindrome');
}else{
    console.log('is not a palindrome');
}