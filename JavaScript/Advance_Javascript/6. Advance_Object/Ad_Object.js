// //reference type
// var object1 = {value:10}; //object是獨立的
// var object2 = object1;
// var object3 = {value:10};
// object1 === object3 //false
// object1 === object2 // true

// //context *this 只會出現在function之中
// var getGender = function(){
//     return this.gender; // this的意義在於它出現在哪個背景之下，就會有不同意義
//   };
  
//   var people1 = {
//     gender: 'female',
//     getGender: getGender
//   };
  
//   var people2 = {
//     gender: 'male',
//     getGender: getGender
//   };
  
//   console.log( people1.getGender() ); //這邊的getGender就是在people1裡面的getGender，所以輸出的是female
//   console.log( people2.getGender() ); //這邊的getGender就是在people2裡面的getGender, 輸出的是male

// //獨立函式
// var a = function{
//     console.log(this); // this = windows
// }
// //物件的方法
// let obj = {
//     game : 'action',
//     level : 100,
//     test: function(){
//         console.log(this); //this = obj
//         console.log(this.game) // 會輸出 action
//     }
// };

//instantiation 如果有需要不斷重複建立Object(物件)，用class配合this來建立物件是更有效率的，他是要建立的Object的模板
class Phone {
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){ //function
        return 2021 - this.year;
    }
}

//inheritance 繼承
class mobile extends Phone{ //用mobile繼承Phone類別，有種連動的感覺
    constructor(number, year, is_waterproof, salary){
        console.log(this);
        super(number,year,is_waterproof) //super會去抓父類別Phone的參數，
        this.salary = salary;
    }
}

const phone1 = new Phone("123", 2020, false); //建構一個叫做Phone的ㄔㄨ
console.log(phone1)

// var phone1 = { //如果我們要每支手機這樣創建會非常麻煩，所以要用class ^
//     number: "123",
//     year: 2020,
//     is_waterproof: false,
//     phone_age: function(){
//         return 2021-this.year;
//     }
// }

// var phone2 = {
//     number: "345",
//     year: 2020,
//     is_waterproof: true,
//     phone_age: function(){
//         return 2021-this.year;
//     }
// }

// var phone3 = {
//     number: "678",
//     year: 2020,
//     is_waterproof: false,
//     phone_age: function(){
//         return 2021-this.year;
//     }
// }

// //=============================
// class Player{
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//     }
// }