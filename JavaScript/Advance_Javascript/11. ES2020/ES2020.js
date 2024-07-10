//Bigint javascript 有所謂的MAX SAFE INTEGER, 最高值是9007199254740991, 超過這個值就會計算錯誤
//bigint可以幫我們繼續計算
9007199254740991n + 10n // 9007199254741001n
9007199254740991 + 10 // 9007199254741000

let will_pokemon = {
    pikachu:{
        species: 'mouse',
        height: 0.4,
        weight: 6
    }
}

let jc_pokemon = {
    pichu:{
        species: 'mouse',
        height: 0.8,
        weight: 9
    }
}

let weight = will_pokemon.pikachu.weight
console.log('weight', weight) //6

let weight2 = jc_pokemon.pikachu.weight
console.log('weight', weight);//error 

// optional chaining operator ?

if(jc_pokemon && jc_pokemon.pikachu && jc_pokemon.pikachu.weight){
    let weight2 = jc_pokemon.pikachu.weight
    console.log(weight2)
} else{
    let weight2 = undefined
    console.log(weight2)
} //undefined 因為jc_polemon裡沒有pikachu

//上面一大串可以用下面的代替
let weight3 = jc_pokemon?.pikachu?.weight
console.log(weight3) //undefined 因為jc_polemon裡沒有pikachu

//Nullish coalescing operator ??
let jc_pokemon2 = {
    pikachu:{
        species: 'mouse',
        height: 0.8,
        weight: 9,
        power: 0
    }
}

let power = jc_pokemon2?.pikachu?.power?? 'no power' // ?? 是檢查內容是null還是undefined。||是or 他檢查值
console.log(power) //0
//------------------------------------
let jc_pokemon3 = {
    pikachu:{
        species: 'mouse',
        height: 0.8,
        weight: 9,
        power: 0
    }
}

let power2 = jc_pokemon3?.pikachu?.power|| 'no power' // ?? 是檢查內容是null還是undefined。||是or 他檢查值
console.log(power) //no power
