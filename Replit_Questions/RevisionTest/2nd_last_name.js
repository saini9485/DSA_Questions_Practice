Question:-1 // Extract the Last Name from the given string
//input => Air Campus output =>  Campus
function lastName (str){
let lastName = str.split(" ").pop()
return lastName
}
console.log(lastName("Air Campus"))