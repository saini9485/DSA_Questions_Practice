//we have to revese the array without using in bluit function 
// let arr = [1,2,3,4,5,6,7,8,9]
// // console.log(arr.reverse())
// for(i = arr.length; i>0; i-- ){
//     console.log(i)
// }

//now we have to reverse multiple digit number 
let arr = [1, 10, 20, 50, undefined, , null, 40, 33, 16, 99]
let reverse = arr.sort (function (a,b) {
    return b-a
})
console.log(reverse) //[ 99, 50, 40, 33, 20, 16, 10, 1, null, undefined, <1 empty item> ]