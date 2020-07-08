function Queue() {
    collection = [];
    this.print = () => {
        console.log(collection);
    };

    this.enqueue = element => {
        collection.push(element);
    };

    this.dequeue = () => {
        return collection.shift();
    };

    this.front = () => {
        return collection[0];
    };

    this.size = () => {
        return collection.length();
    };
    this.isEmpty = () => {
        return (collection === 0);
    };
};

queue1 = new Queue();

const array = [1, 4, 5, 6, 7, 'g', 65, 7];

array.forEach(e => {
    queue1.enqueue(e);
});

queue1.print();

// --------------------------------------------------------------------------------------
function PriorityQueue() {
    let collection = [];
    this.printCollection = function () {
        (console.log(collection));
    };
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;

            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                };
                if (!added) {
                    collection.push(element);
                };

            };
        };
    };

    this.dequeue = function () {
        let value = collection.shift();
        return value[0];
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
};

const pq = new PriorityQueue();
pq.enqueue(['bit org' , 2]);
pq.enqueue(['jackie', 4]);
pq.printCollection();

// pq.enqueue(['essie', 1]);
// pq.enqueue(['tomas', 3]);
// pq.printCollection();
// pq.dequeue();
// pq.printCollection();
// pq.front();
// pq.printCollection();