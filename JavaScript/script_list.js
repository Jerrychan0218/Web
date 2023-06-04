var button = document.getElementById("enter"); /*如果只選button，會回傳button的array，所以要選取[0]*/
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// button.addEventListener("click", function(){ /*addEventListener是一個可以指定tag function 的function，還有其他mouse或是keyborad的動作可以用，第二個參數是當第一參數執行後要觸發的事件*/
//     /*設定條件是輸入的字串如果多於0，就啟動。不然直接按enter不會有字串跑出來*/
//     if(input.value.length > 0){
//         /*我們要求按下去之後，先建立一個var 叫li，然後在document裡創造一個li element*/
//         var li = document.createElement("li");
//         /*然後我們在li element裡輸入文字input的文字(value)*/
//         li.appendChild(document.createTextNode(input.value));
//         /*然後我們要把這個li 加到ul的最後面*/
//         ul.appendChild(li);
//         /*當我們完成了一次新增，就讓輸入欄變回空白*/
//         input.value = "";
//     }   
// })

// input.addEventListener("keypress", function(event){ /*addEventListener是一個可以指定tag function 的function，還有其他mouse或是keyborad的動作可以用，第二個參數是當第一參數執行後要觸發的事件*/
//     /*設定條件是輸入的字串如果多於0，就啟動。不然直接按enter不會有字串跑出來*/
//     if(input.value.length > 0 && event.keyCode === 13){
//         /*我們要求按下去之後，先建立一個var 叫li，然後在document裡創造一個li element*/
//         var li = document.createElement("li");
//         /*然後我們在li element裡輸入文字input的文字(value)*/
//         li.appendChild(document.createTextNode(input.value));
//         /*然後我們要把這個li 加到ul的最後面*/
//         ul.appendChild(li);
//         /*當我們完成了一次新增，就讓輸入欄變回空白*/
//         input.value = "";
//     }   
// })

/*我們嘗試把上面的東西變簡單*/
/*首先我們計算input內容的長度，以預備等等用*/
function inputLength(){
    return input.value.length;
}
/*然後我們設定function*/
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = "";
}

/*設定滑鼠Click完後的動作*/
function addListClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }    
}

button.addEventListener("click", addListClick);
input.addEventListener("keypress", addListAfterKeypress);