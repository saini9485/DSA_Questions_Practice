Questions:-1 //Find two sum Index => Input: nums = [2,7,11,15], target = 9 output => Output: [0,1]
Solution:-1 // BrutForce Approach

function twoSum (nums, target){
for(let i=0; i<nums.length; i++){
    for(let j=i; j<nums.length; j++){
        if(nums[i]+nums[j]==target){
            return [i,j];
        }
    }
}
}
console.log(twoSum([2,7,11,15,17,19]))
