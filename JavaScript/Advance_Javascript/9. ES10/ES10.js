const array = [1,2,3,4,5]
array.flat(); //[1,2,3,4,5] 

const array2 = [1,[2,3],[4,5]]
array2.flat(); //[1,2,3,4,5]

const array3 = [1,2,[3,4,[5]]]
array3.flat(); // [1,2,3,4,[5]]

const array4 = [1,2,[3,4,[5]]]
array4.flat(2); // [1,2,3,4,5]

const x = ["bob","jerry",,,"cindy"]
x.flat(); //["bob","jerry","cindy"]

const b = [1,[[[1]]],[[2]]] 
const jurassicParkChaos =  b.flatMap(creature => creature + "a") 
//[1a,1a,2a]

const email1 = '        hi'
const email2 = 'hi        '

console.log(email1.trimStart()); //hi
console.log(email2.trimEnd()); //hi


user = [['comanderTom', 23], ['j', 40], ['hi',12]]
Object.fromEntires(user); // ['comanderTom':23],['j':40],['hi':12]

//try catch block 試行try裡的，如果出錯就執行catch

try {
    4+5
} catch{
    console.log('you messed up')
} // 9

try{
    bob+4
} catch{
    console.log('you mess')
} // you mess; 因為bob是未定義的東西