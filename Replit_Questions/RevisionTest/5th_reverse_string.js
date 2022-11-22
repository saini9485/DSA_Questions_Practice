Questins:-1//Given a string, reverse each word of the string and then return the string.
//input => this is aircampus output => siht si supmacria
function strRev(str){
    let reverseWord = str.split(" ").map(word => word.split("").reverse().join(""));
   return reverseWord.join(" ");
 }

  console.log( strRev("this is aircampus"));
