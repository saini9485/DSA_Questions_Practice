Question: -1//Given a array containing both strings and numbers, remove all 
//the numbers and concat all the strings. Return the resulting string

function isString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "string")
            if (str == "") {
                str += arr[i]
            } else {
                str += " " + arr[i]
            }
    }
    return str
}
console.log(isString(['Hello', 'World', 123]))