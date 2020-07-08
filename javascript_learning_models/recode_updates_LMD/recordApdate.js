var collection = {
    2548: {
        album: `slipery when wet`,
        artist: `bon janvi`,
        tracks: [
            "let it rock",
            "the hate you give"
        ]
    },
    2468: {
        album: `1999`,
        artist: `prince`,
        tracks: [
            "1999",
            "moan of mtunui"
        ]
    },
    5439: {
        albam: "abba Gold"
    }
} 

// save a copy of the original record ....
var collectionCopy = JSON.parse (JSON.stringify(collection));

var myfunction = (id, prop, value) => {
    
    if(value === ""){
        delete collection[id][prop];
    }
    else if(prop === "tracks"){
         collection[id][prop] = collection[id][prop] ||  []; 
         collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }


    return collection;
}

console.log(myfunction("2468", "tracks", "agle"));
