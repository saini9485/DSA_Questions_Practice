/*Q.1 Find Element 
Create an Array with the following elements: ```“Bike”, “Scooter”, “Car”,
 “Truck”, “JCB” , “Helicopter”```
 and return the 4th element from the Array. */ 

//  function findElement (){
//     let arr = ["Bike","Scooter","Car","Truck","Jcb","Helicopter"]
//         return (arr[3])
//  }
//  console.log(findElement())

/*Q.2 You are given an array arr, if the length of the array is greater than 5
 return “Hello” else return “World”   arr = [1, 2, 3 ,4 ,5 ,6, 7]  output =Hello*/

//  function Hello (arr){
//     if (arr>5){
//         return "Hello"
//     }else {
//         return "World"
//     }
//  }
//  console.log(Hello([1, 2, 3 ,4 ,5 ,6 ,7]))

/*Q.3 You are given an integer array as function parameters. Find and return the sum of the 
first and last element of the array  arr = [1, 2, 3 ,4 ,5 ,6, 7] output = 8*/

// function firstAndLastSum (arr){
//     let first = arr[0]
//     let last = arr.length
//     let sum = first+last;
//     return sum ;
// }
// console.log(firstAndLastSum ([1, 2, 3 ,4 ,5 ,6 ,7]))

/*Q.4 Aunt May wants to distribute candies to 5 childrens, you are given an array of 5 elements, each element depicts how many candies each child will get. 
Find and return how many candies Aunt May have in total. [1, 3, 4, 7, 5] OUTPUT = 20  */

// function Candle (arr){
//     let sum = 0;
// for(let i=0; i<arr.length;i++){
//     sum = sum+arr[i]
// }
// return sum
// }
// console.log(Candle([1, 3, 4, 7, 5]))

/*Q.5 You are given two arrays arr1 and arr2, concatenate arr1  and arr2, and return the resulting array.
arr1 = [1, 3] arr2= [2, 5] output = [1,3,2,5]
 */
// function addTwoArray (arr1,arr2){
//     let arr3 = arr1.concat(arr2)
//     return arr3
// }
// console.log(addTwoArray([1, 3],[2, 5]))

/*Q.6 Given a variable arr as function parameter, return “YES” if the given variable arr is an array else return “NO”
arr = [1,2,3] output = "Yes" arr = 5 output ="No" */

function isArray (arr){
    let result = Array.isArray(arr)
    if(result==true){
        return "Yes"
    }else{
        return "No"
    }
}
console.log(isArray([1,2,4]))