const book = {
    name: 'the twidle beyond success',
    author: 'mark hamond',
    publisher: 'long horn',
    year: '2019',
    description: function (){
        return `${this.name} was published by ${this.author} in ${this.year}`
    }
}

console.log(book.description());

console.log(Object.values(book));
console.log(Object.keys(book));

// ====== constructors
function books (name, author, publisher, year){
this.name = name,
this.author = author,
this.publisher = publisher,
this.year = year
// ======== prototype

books.prototype.getSummary =  () => `${this.name} was published in ${this.year}`;
}

// ============ instantiate

const book1 = new books('the art', 'martin raymond','long man', 2000);
console.log(book1.getSummary())
// ========= inheritance

function  magazine (name, author, publisher, year){
    this.name = name,
    this.author = author,
    this.publisher = publisher,
    this.year = year
}


magazine.prototype = Object.create(books.prototype);

const mag = new magazine('thebbart', 'marn rmond','longn', 2020);
magazine.prototype.constructor = magazine
console.log(mag.getSummary())


// ========== class objects === 

class car {
    constructor(brand,  make, model){
        this._brand = brand,
        this._make = make,
        this._model = model
    }
    get vehicle  () {
        return `${this._brand} ${this._make} model --> ${this._model}`;
    }
    set vehicle (status ){
        this._status = status
    }
    setComapany(cName, origin){
        this._cname = cName,
        this._origin = origin
    }
     review(){
        return `${this._brand} ${this._make} -- model ${this._model} ${this._status} to ${this._cname} ${this._origin}`
    }
} 

//===== instanttiate

const myCar = new car('bmw', 'x6', 2019);

console.log(myCar.vehicle);
myCar.vehicle = 'sold';
myCar.setComapany('ngizmo', 'kenya');
console.log(myCar);
console.log(myCar.review());
