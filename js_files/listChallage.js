const results = {
    sucess: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["noa-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(array){
    const resultDispArray = [];

    for(let i = 0; i<array.length; i++){
        resultDispArray.push(`<li class = "text-warning"> ${array[i]}</li>`)
    }

    return resultDispArray;
}


console.log(makeList(results.failure))