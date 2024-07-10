const flattened = [[0,1],[2,3],[4,5]].reduce((a,b) => { // reduce： a = accumulation, b = current value, e.g. a = [0,1], b = [2,3]
    return a.concat(b) // a合併b
}, []); // a的原始值是[]

const flattened2 = [[0,1],[2,3],[4,5]].reduce((a2,b2) => { // reduce： a = accumulation, b = current value, e.g. a = [0,1], b = [2,3]
    debugger; //會讓瀏覽器暫停運作程式碼，並開始debug模式，可以看到程式一步一步怎麼運作．
    return a2.concat(b2) // a合併b
}, []); // a的原始值是[]


