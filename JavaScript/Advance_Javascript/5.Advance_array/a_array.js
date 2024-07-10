//Advance Arrays

const array = [1, 2, 4, 8]; 
const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2); //forEach只是遍歷
})

console.log('forEach', double); //forEach, [2,4,8,16]

//map, filter, reduce
//map

const mapArray = array.map((num) => {
    return num * 2; //直接return 到mapArray
});

//或是 
const mapArray2 = array.map(num => num*2); 

console.log('map', mapArray); //map, [2,4,8,16]

//filter
const filterArray = array.filter(num => {
    return num > 5 //array裡面的每個數會跟5比，符合條件的就會加入filterArray
})
//或是
const filterArray2 = array.filter(num => num > 5);
console.log(filter, filterArray2);

//reduce 可以同時執行map 跟 filter
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
},0) //這邊的0是reduce的第二個參數，是accumulator的默認直