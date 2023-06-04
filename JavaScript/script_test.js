// function sayHello(){
//     console.log("hello"); /*console.log有點像是把東西上傳到網頁上的感覺*/
// }

// sayHello();

// var sayBye = function(){
//     console.log("Bye");
// }

// sayBye(); 

// function sing(song){
//     console.log(song)
// }

function multiply(a,b){
    if (a>10 || b>10){
        return "It is too hard"
    } else{
        return a*b
    }
}

multiply(5,12);

// function checkDriverAge(age){
//     // var age = prompt("How old are you?");
//     if (Number(age) < 18){
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) === 18){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     } else if (Number(age) > 18){
//         alert("Power On. Enjoy the ride!");
//     }
// }

// /*data structure*/
// // var list = ["tiger", "cat", "bear"] /*放入字串列*/
// // var numbers = [1,2,3,4] /*放入數字列*/
// // var booleans = [true, false, true] /*放入二分列*/
// // var functionList = [function apple(){ /*function列*/
// //     console.log("apple")}];

// // var mixedList = ["apples",3,undefined,true,function apple(){
// // console.log("apple")}]; /*混合，但不建議這樣做，因為會變得很複雜*/

// var list = [ /*兩層list*/
//     ["tiger", "cat", "bear"]
// ];

// /*要拿出bear*/
// console.log(list[0][2]); /*list[0]是指第一欄row，[0][2]就是第一欄裡的第3個東西*/

// /*從list中刪除與增加東西*/
// list.shift(); /*刪除第一個，並將後面的東西往前移*/
// list.pop(); /*刪除最後一個*/
// list.push(); /*增加一個東西到最後方*/
// list.push("elephant"); /*現在list會是["cat", "elephant"]*/

// /*list合併*/
// list.concat(["bee", "dog", "deer"]); /*會變成["cat", "elephant","bee","dog","deer"]*/
// /*但是這邊的concat我們沒有把它變成一個var，所以我們用list來查詢現在的list狀況，還會是原本的["cat", "elephant"]*/

// var array = ["Banana","Apples", "Oranges", "Blueberries"];

// array.shift();
// array.sort(); /*按照字母來排序*/
// array.push("Kiwi");
// array.splice(0,1,melon); /*在0這個位置加入melon, 並移除他後面1個東西
// array.splice(0,1); /*在0這個位置開始，移除1個東西。
// var arrayn = array.reverse();

// /*object*/
// var user = {
//     name: "Jerry",
//     age: 28,
//     hobby: ["badminton", "sleep", "learning Japanese"]
// }

// /*要增加東西*/
// user.favouriteFood = "watermolon";

// /*要改東西*/
// user.age = 29;

// /*選東西*/
// user.hobby[1]; /*sleep*/

// /*object在list中*/
// var info = [
//     {
//         name: "Jerry",
//         age: 28,
//         hobby: ["badminton", "sleep", "learning Japanese"]
//     },
//     {
//         name:"Kay",
//         age: 27,
//         hobby: ["coding", "eating", "learning Japanese"]
//     }
// ]

// info[0].hobby[1]; /*sleep*/
