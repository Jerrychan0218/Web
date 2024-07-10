//{ternary operator} condition ? expr1: expr2; //理念就是condition如果是true的話，就輸出expr1，如果是false就輸出expr2//

function isUserVaild(bool){
    return bool;
}

var answer = isUserVaild(true) ? "You are right":"you are wrong";

var antomatedAnswer = 
    "your account # is "+ (isUserVaild(false) ? "1234":"not availdable");

//{switch}//
function moveCommand(direction){
    var whatHappens;
    switch (direction){ //接下來要檢查direction輸入了甚麼//
        case "forward": // 如果direction 是 forward，執行下方coding//
            whatHappens = "you encounter a monster";
            break; // 結束迴圈，直接到return whatHappens
        case "back":
            whatHappens = "you arrived home";
            break;
        case "left":
            whatHappens = "found a river";
            break;
        case "forward":
            whatHappens = "run into a troll";
            break;
        default: //如果沒有輸入上面的direction，則輸出下方coding//
            whatHappens = "please enter a vaild direction";    
    }
    return whatHappens;
}
