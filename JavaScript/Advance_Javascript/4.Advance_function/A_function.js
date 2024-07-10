const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    } 
    return second;
}

const newFunc = first();
newFunc;

//Closures
//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b; //相當於我們在function a 裡面加function b
curriedMultiply(3)(4); //12
const multiplyby5 = curriedMultiply(5); 
multiplyby5(5); //25，multiplyby5 是 a function，5 是 b function
multiplyby5(10); //50

//compose
const compose = (f, g) => (a) => f(g(a)); //f, g 都是function
//假設
const sum = (num) => num + 1;
compose(sum, sum)(5) //f與g都是sum function，a 是 5，結果為7
//因為a = 5，先跑g(a) = sum(5) = 6，f(6) = sum(6) = 7，最後return 7
