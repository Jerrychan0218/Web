// // let & const new way for declaring the variable//

// const player = 'bobby'; //const = constant，內容是不能更改的，所以有東西不希望被改到的話，請用const//
// let exp = 100; //let 則是可以改動的//
// let wizaedLevel = false;

// if(exp > 90){
//     let wizardLevel = true;
//     console.log(wizardLevel); //true// 
// }

// console.log(wizaedLevel); //false//
// //這邊我們會認為應該要變成true，但let的適用範圍會限制在if裡，所以只有if裡面的wizardLevel有變成true//

// const obj = {
//     player: 'Jerry',
//     exp: 120,
//     level: false
// }

// // const player = obj.player;
// // const exp = obj.exp;
// // let level = false;

// const {player, exp} = obj; //等於const player = obj.player; const exp = obj.exp;
// let { level } = obj; //等於let level = false;

// const name = 'john snow'
// const obj = {
//     [name]: 'hello',
//     [1+2]:'hihi'
// }

// obj //3:'hihi', john snow: 'hello'

// const a = 'Simon';
// const b = true;
// const c = {};

// const obj = {
//     a,
//     b,
//     c
// }

//template string//
//一般我們在句子裡要加入自定義的東西，會是這樣
const greeting = "hello" + name + "i am" + yname + "nice to meet you";
//但我們也可以這樣//
const name = "tom";
const yname = "jerry";
const age = 18;

const greetingf = `hello ${name} i am ${yname}. i am now ${age+10} years old. Nice to meet you`; //``裡面的所有東西都會變成string//

greetingf

//default arguements
function greet(name = '', age = 30, pet = "cat"){
    return `hello ${name} i am ${yname}. i am now ${age+10} years old. Nice to meet you`; //``裡面的所有東西都會變成string//
}

//symbol 少用
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo"); //雖然sym2 跟sym3是一樣的，但用了symbol它們各自會變成獨特的東西，所以sym2不等於sym3

// arrow functions
function add(a,b){
    return a+b;
}
//等於
const add = (a,b) => a+b // 如果function裡面沒有其他東西，只有return，就可以用這個方法