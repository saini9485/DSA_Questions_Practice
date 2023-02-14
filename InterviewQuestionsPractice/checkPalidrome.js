// //check palindrome  in javascript without using in build method 
// function checkPalindrome (n){
//     let len = n.lenght-1;
//     for(i=0; i<len/2; i++){
//         let f = n[i]
//         let b = len-i
//         if(!f == b){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// console.log(checkPalindrome("arora"))
  function check_palindrome( str )
    {
      let j = str.length -1;
      for( let i = 0 ; i < j/2 ;i++)
      {
        let x = str[i];//forward character 
        let y = str[j-i];//backward character
        if( x != y)
        {
          // return false if string not match
          return false;
        }
      }
      /// return true if string is palindrome
      return true;
       
    }
    console.log(check_palindrome(121))

    Solution:-2 
    function isPalindrome(str) {
      const len = str.length;
      for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
          return false;
        }
      }
      return true;
    }
    console.log(isPalindrome("arora"))