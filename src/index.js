module.exports = function toReadable (number) {
    let basicNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let uniqueTwoDigitsNumber = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tenthRankNumbers = ["" , "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred = ["hundred"];

    if (number === 0){
        return basicNumbers[0];
    }

    number = number.toString().split('');
    let digitsCount = number.length;

    switch(digitsCount){
        case 1: return basicNumbers[number];
        case 2: 
            if(number[0] === "1"){
                return uniqueTwoDigitsNumber[number[1]];
            } else if (number[1] === "0"){
                return tenthRankNumbers[number[0]];
            } else {
                return tenthRankNumbers[number[0]] + " " + basicNumbers[number[1]];
            }
        case 3: 
            if(!+number[1] && !+number[2]){
                return basicNumbers[number[0]] + " " + hundred;
            }else if(!+number[2]){
                if(number[1] === "1"){
                    return basicNumbers[number[0]] + " " + hundred + " " + uniqueTwoDigitsNumber[0];
                }
                return basicNumbers[number[0]] + " " + hundred + " " +tenthRankNumbers[number[1]];
            }else if(number[1] === "0"){
                return basicNumbers[number[0]] + " " + hundred + " " +basicNumbers[number[2]];
            }else if(number[1] === "1"){
                return basicNumbers[number[0]] + " " + hundred + " " +uniqueTwoDigitsNumber[number[2]];
            }else{
                return basicNumbers[number[0]] + " " + hundred + " " +tenthRankNumbers[number[1]] + " " + basicNumbers[number[2]];
            }
        default:
            return NaN;
    }
}
