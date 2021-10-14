// Palavras ao contrário
function reverseString(string){
    return string.split("").reverse().join("")
}

// Sentença ao contrário 
function reverseSentence(string){
    return string.split(" ").reverse().join(" ")
}

// Menor Valor
function minimumValue(array){
    let min = array[0]
    array.forEach(number=>{
        min=min<=number?min:number
    })
    return min
}

// Maior Valor
function maximumValue(array){
    let min = array[0]
    array.forEach(number=>{
        min=min>=number?min:number
    })
    return min
}

//Resto do Valor
function restOfIt(dividend, divisor){
    return dividend%divisor
}

//Valores Diferentes  
function diftValues(array){
    let newArray = []
    array.forEach(each=>{
        if(newArray.find(element => element===each)==undefined){
            newArray.push(each)
        }
    })
    return newArray
}

//Conta Valores Diferentes
function countValues(array){
    let newArray = []
    let newArray2 = []
    array.forEach(each=>{
        if(newArray.find(element => element===each)==undefined){
            newArray.push(each)
            newArray2.push(1)
        }
        else{
            newArray2[newArray.indexOf(each)]++
        }
    })
    let result = []
    for (let i=0;i<newArray.length;i++){
        result.push(`${newArray[i]}(${newArray2[i]})`)
    }
    return result
}
