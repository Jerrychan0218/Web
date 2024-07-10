const basket = ['apples', 'orange', 'grapes'];

const detailedBasket = {
    apple : 5,
    orange : 10,
    grapes: 1000
}

//1
for (let i = 0; i <basket.length; i++){
    console.log(basket[i]);
} // apple, orange, grapes

//2
basket.forEach(item => {
    console.log(item);
})

//for of
//iterating
for(item of basket){
    console.log(item);
} // apples, orange, grapes 

//for in
//enumerating - object
for(item in detailedBasket){
    console.log(item)
} // apple, orange, grapes

