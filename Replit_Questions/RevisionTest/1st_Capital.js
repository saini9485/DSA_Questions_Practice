Question: -1//Given a sentence, capitalize the first character of each word.
//input=> this is aircampus output=> This Is Aircampus
function evenCapital(str){

    let Capital = str.split(' ');  
        let CapitalizedWords = [];  
        Capital.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        return CapitalizedWords.join(' ');  
    }  
    console.log(evenCapital("this is aircampus"))
    exports.evenCapital = evenCapital;