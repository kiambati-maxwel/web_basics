const a = [1, -56, 55.78, 22, -16, 2e-1, 6, -8];

const mappi = arr  => {
    const duoblePveInt = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*2);
    return duoblePveInt;
}

export {mappi}

console.log(mappi(a));

const capString = (string) => string.toUpperCase();

export{capString}
