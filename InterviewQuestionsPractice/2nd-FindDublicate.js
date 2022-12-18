let array = [6, 9, 15, 6, 13, 9, 11, 15];
      let index = 0, newArr = [];
      const length = array.length; // to get length of array
      function findDuplicates(arr) {
         for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                  newArr[index] = arr[i];
                  index++;
               }
            }
         }
         return newArr;
      }
      console.log(findDuplicates( [6, 9, 15, 6, 13, 9, 11, 15]))