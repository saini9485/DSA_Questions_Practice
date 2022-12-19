//Remove Duplicate
let arr = [1,2,3,2,1,4,5,8,5,7]
function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}
  
console.log(removeDuplicates(arr));

//2nd Solution 
