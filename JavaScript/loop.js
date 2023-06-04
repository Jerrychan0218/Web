var todos = [
    "clean room",
    "brush teeth",
    "exercise", 
    "study javascript",
    "eat healthy"
];


var todosplus = [
    "clean room!",
    "brush teeth!",
    "exercise!", 
    "study javascript!",
    "eat healthy!"
];

/*var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    console.log(todos[i], i);
};*/

/*for loop的另一種做法，跟上面的結果是一模一樣的*/
//forEach就是直接運行()裡的功能到每一項的意思//
todos.forEach(function hi(todo, i){ /*function(內容, index)*/
    console.log(todo, i)
});

/*再簡便一點的說明*/
/*function logTodos(todo, i){
    console.log(todo, i);
}*/

/*todos.forEach(logTodos);
todosplus.forEach(logTodos);*/

/*while loop*/
var counterOne = 0; 
while (counterOne < 10) { /*while 會先看條件是否符合再開始*/
    console.log(counterOne);
    counterOne++
}

var counterTwo = 10
do { /*do loop會先跑，再看是否合乎條件*/
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);