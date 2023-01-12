module.exports = function toReadable (number) {
    let numToString = number.toString();
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const addDos = ['hundred', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const stringNumber = number.toString();
    const numCut = numToString.substring(1); 
    const numcutDoub = numCut.slice(0, -1);
    const numLastCh = numToString.substring(2);    
    let result;

    if (number === 0) {
        result = units[0]
    } else if (number >= 100 && number%100 === 0) {result = `${units[numToString[0]]} ${addDos[0]}`
    } else if (number < 20){ result = units[number] 
    } else if (number >= 20 && number < 100) {
      (Number(numCut%10) == 0) ? result = (addDos[number/10]) : result = (`${addDos[Math.floor(number/10)]} ${units[numCut]}`)
    } else if (numToString.length == 3) {
     if (number%100 === 0) {
       result = `${units[numToString[0]]} ${addDos[0]}`
    } else if (Number(numCut) <= 19 ) {  result = `${units[numToString[0]]} ${addDos[0]} ${units[Number(numCut)]}`
    } else if (Number(numCut) > 19 && Number(numCut)%10 == 0) { result = `${units[numToString[0]]} ${addDos[0]} ${addDos[numcutDoub]}`
    } else if (numLastCh > 0) { result = `${units[numToString[0]]} ${addDos[0]} ${addDos[numcutDoub]} ${units[numLastCh]}`}
    }

    return result;
};
