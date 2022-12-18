// FInd the maximum repeating number in array also number of count 
function maximumRepeatedNumber (arr){
    let maxCount = 0;
    let element_Maximum;
    let count = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++
            }
            if(count>maxCount){
                maxCount = count
                element_Maximum = arr[i]
            }
        }
    }
    return  element_Maximum;
}
console.log(maximumRepeatedNumber( [1,2,3,3,4,5,6,6,6,7,7,0,0,0,6]))