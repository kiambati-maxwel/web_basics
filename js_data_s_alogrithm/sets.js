//  sets 
function mySet(){

    // --------------------------------------- es6 methods -------------------------------------------------

    // the var collection will hold the set
    let collection = [];
    // this method will check for the presence of an element return true or false
    this.has = function(element){
        return(collection.indexOf(element)!== -1);
    };

    // this method will return all values of the set 
    this.values = function(){
        return collection;
    };
    // this function will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }return false;
    };
    // this method will return the size of the set
    this.size = function(){
        return collection.length;
    };

    // ----------------------------------------------------------------------------------------------------

    // this method will return return the union of a set
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach((e)=>{
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method will return the intersection of the two sets on a new set
    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firtSet = this.values();
    firtSet.forEach(function(e){
        if(otherSet.has(e)){
            intersectionSet.add(e);
        };
    });
    return intersectionSet;   
}

// this method returns the difference of the two sets
this.difference = function(otherSet){
    let differenceSet = new mySet();
    let firtSet = this.values();
firtSet.forEach(function(e){
    if(!otherSet.has(e)){
        differenceSet.add(e);
    };
});
return differenceSet;   
}

// this method will test id the set is a subset of a different set
this.subset = function(otherSet){
    let firstSet = this.values();
    return firstSet.every(function(value){
        return otherSet.has(value);
    });
};
};

setA = new mySet();


setA.add( "a");
setA.add( "c");
setA.add( "d");
setA.add( "e");
setA.add( "f");

setB= new mySet();
setB.add( "a");
setB.add( "c");
setB.add( "d");
setB.add( "e");

console.log(setB.subset(setA));

console.log( setA.values());
console.log(setB.values());
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());

setA.remove('a');
console.log(setA.values());

// const setA = ["a", "b", "c", "d"];
// const setB = ["a", "b", "c", "d", "e", "f", "g"];

// setA.add("e");
// setA.values(setA);