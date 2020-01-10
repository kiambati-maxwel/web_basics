const company = [
    {name:'glitch', category:'tech', start:2007, end:2013},
    {name:'actopus', category:'finance', start:1901, end:2000},
    {name:'BFN', category:'agricultuer', start:1988, end:1997},
    {name:'aculusshift', category:'tech', start:1887, end:1900},
    {name:'Owen', category:'mechanics', start:2011, end:2055},
    {name:'jahdin', category:'auto', start:1500, end:1899},
    {name:'rawlens antedion', category:'fashion', start:1960, end:2024},
    {name:'opensrc', category:'energy', start:2005, end:2013}
]

const ages = [23,54,67,88,47,93,33,89,31,77,45,85,78,52,33,63]

// for(let i=0; i<company.length; i++){
//     console.log(company[i].name);
// }

// ========= for each asynchronous callbacks
company.forEach(company => {
    console.log(company.name)
});

//======== filter

const filterages= ages.filter(age => age>33);

const filCompany = company.filter(cat => cat.category === 'tech').map(category => category.name)

console.log(filterages);
console.log(filCompany);

// ======= map  company names

const cNames = company.map(element => element.name);

console.log(cNames)

// =========== sort ==

const sortCompany = company.sort(function(v1, v2){
    if(v1.start > v2.start){
        return 1;
    }else{
        return -1;
    }
}).map(company => company.start);

console.log(sortCompany)

const sortAgain = company.sort((value1, value2) => value1>value2).map(company => `${company.name} ${company.start} `);

console.log(sortAgain)

const sortAges = ages.sort((value1, value2) => value1>value2? 1: -1);

console.log(sortAges)

//============= reduce 

const getSum = ages.reduce(function(total, age){
    return total + age;
},0)
console.log(getSum);

const ageSum = ages.reduce((total, age) => total + age);

console.log(ageSum)