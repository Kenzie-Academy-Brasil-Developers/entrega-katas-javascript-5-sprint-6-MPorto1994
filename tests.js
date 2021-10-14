// Palavras ao contrário
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString1()
 function testeReverseString2() {
    let result = reverseString("HPpoj   8(Oh(Y8h");
    let expected = "h8Y(hO(8   jopPH";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString2()

// Sentença ao contrário 
 function testeReverseSentence1() {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseSentence1()
 function testeReverseSentence2() {
    let result = reverseSentence("HPpoj   8(Oh(Y8h");
    let expected = "8(Oh(Y8h   HPpoj";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseSentence2()

// Menor Valor
function testMinimumValue1() {
    let result = minimumValue([-2,3,4,0,5,7,-87,12]);
    let expected = -87;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
testMinimumValue1()
function testMinimumValue2() {
    let result = minimumValue([2,3,4,2,5,7,87,12]);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
testMinimumValue2()

// Maior Valor
function testMaximumValue1() {
    let result = maximumValue([-2,3,4,0,5,7,-87,12]);
    let expected = 12;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testMaximumValue1()
function testMaximumValue2() {
    let result = maximumValue([2,3,4,2,5,7,87,12]);
    let expected = 87;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testMaximumValue2()

// Calcula o Resto
function  testCalculateRemainder1() {
    let result = restOfIt(12,5);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testCalculateRemainder1()
function  testCalculateRemainder2() {
    let result = restOfIt(16,8);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testCalculateRemainder2()

 //Valores Diferentes 
function  testDistinctValues1() {
    let result = diftValues([1,1,2,1,3,54,5,67,2]);
    let expected = [1,2,3,54,5,67];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues1()
function  testDistinctValues2() {
    let result = diftValues([-10,10,5,9,101,88,101]);
    let expected = [-10,10,5,9,101,88];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues2()

//Valores diferentes Contados
function  testCountValues1() {
    let result = countValues([1,1,2,1,3,54,5,67,2]);
    let expected = ["1(3)","2(2)","3(1)","54(1)","5(1)","67(1)"];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues1()
function  testCountValues2() {
    let result = countValues([-10,10,5,9,101,101]);
    let expected = ["-10(1)","10(1)","5(1)","9(1)","101(2)"];
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
// testCountValues2()
