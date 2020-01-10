var contacts = [
    {
        firstName: "james",
        secondName: "anderson",
        number: "0799413666",
        likes: ["balling", "hokey", "coding"]
    },
    {
        firstName: "mercy",
        secondName: "ayon",
        number: "0756788902",
        likes: ["chill", "alias", "trial2"]
    },
    {
        firstName: "peter",
        secondName: "paker",
        number: "0733400111",
        likes: ["monkeys", "giraffs", "melons"]
    }
]

const lookup = ( name, prop) => {
for(var i = 0; i<contacts.length; i++){
    if(contacts[i].firstName === name){
        return contacts[i][prop] || prop + " not found";
    }
}
return "no such contact "
}

console.log(lookup("james", "likes"))

const randomNo = () => Math.floor(Math.random() * 20);

console.log(randomNo());

const randomRanged = (maxNum, minNum) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(randomRanged(50, 100));

function convert (num){
    return parseInt(num, 16)
}

console.log(convert("c"))

