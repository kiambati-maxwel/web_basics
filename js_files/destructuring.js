 

// ============= destructuring objects

const voxel = {x: 3.6, y:7.4, z:6.54};

const {x:a, y:b, z:c} = voxel; // a=3.6 b=7.4 c=6.54

const AVG_TEMPs = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrow(avgTemps){
    "use strict";
    const {tomorrow : tempOfTmr} = avgTemps;
    return tempOfTmr;
};

console.log(getTempOfTmrow(AVG_TEMPs));


//  ======== destructure local fore-cast

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorow: {min: 73.3, max: 84.6}
};

function getMaxTmr(forecast){
    "use strict";

    const {tomorow : {max : maxOfTmr}}  = forecast;

    return maxOfTmr;
}

console.log(getMaxTmr(LOCAL_FORECAST));

// =========== destructuring arrays

const[z, x, , y] = [1, 2, 3, 4, 5, 6];

console.log(z, x, y);

let aa = 8, bb = 6;
(() => {
    "use strict"
    [aa, bb] = [bb, aa]

})();

console.log(aa);

// ======= rest array destructure

const source = [1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list){
    const [, , ...array] = list ;

    return array;
}

const arr = removeFirstTwo(source);

console.log(arr);

// ======= object passinng destructuring

const stats = {
    maxx: 56.88,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    minn: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({maxx, minn}){
        return (maxx + minn)/2.0;
    }
})();

console.log(half(stats));