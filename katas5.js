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
        // console.log(typeof each)
        if(newArray.find(element => element===each)==undefined){
            newArray.push(each)
            // console.log(typeof each)
        }
    })
    // console.log(typeof array)
    // console.log(typeof newArray)
    return newArray
}

//Conta Valores
function countValues(array){
    let newArray = []
    let newArray2 = []
    array.forEach(each=>{
        // console.log(typeof each)
        if(newArray.find(element => element===each)==undefined){
            newArray.push(each)
            // newArray2.push(`${each}(1)`)
            newArray2.push(1)
            // console.log(typeof each)
        }
        else{
            newArray2[newArray.indexOf[each]]++
            // let elementArray =newArray2[newArray2.indexOf(newArray.indexOf(each))]
            // elementArray = elementArray.replace()

        }

    })
    for (let i=0;i<=newArray.length;i++){
        newArray[i]=`${newArray[i]}(${newArray2[i]})`
        console.log(newArray[i])
    }
    // console.log(typeof array)
    // console.log(typeof newArray)
    return newArray
}
