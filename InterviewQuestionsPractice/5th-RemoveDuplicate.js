//Remove Duplicate
let arr = [1,2,3,2,1,4,5,8,9]
function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}
  
console.log(removeDuplicates(arr));


