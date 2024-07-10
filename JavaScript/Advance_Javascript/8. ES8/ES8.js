.padStart()
.padEnd()

const x = (
    a,
    b,
    c,
    d,
    e,
    ) => {
        console.log(a)
};

x(1,2,3,4)

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index)=>{
    console.log(key, obj[key]);
}) // username0 Santa...

Object.values(obj).forEach(value => {
    console.log(value);
}) // Santa ...

Object.entries(obj).forEach(value => {
    console.log(value);
})//["username0", "Santa"]...

//穿插一個小插曲，map的用法
//let arr = [3,4,5];
// for(let i = 0; i < arr.length; i++){
    //arr[i] = arr[i] * 3;
//}; 
//console.log(arr); [9,12,15]

// let mix = arr.map(function(element){
    //return element * 3;
//});

//console.log(mix); [9,12,15]

