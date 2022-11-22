Question:-1 //You are given a string which conatins both words and numbers. Return all the numbers present in the string as an array
function Numbers (str){
    let arr = str.split(" ")
    let numbers = arr.filter(Number)
    const toNumbers = numbers.map(Number)
    return toNumbers
}
console.log(Numbers("1 jan 2000"))