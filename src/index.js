const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split("");
    let len = arr.length;
    let tempArr = [];
    let retStr = "";
    let tempStr;
    
    for (let i = 0; i < len; i += 10){ 
        for (let j = i; j < i+10; j++){
            if (arr[j] == 1){
                if (arr[j+1]==1){
                    tempArr.push("-");     
                } else {
                    tempArr.push(".");   
                }
                j += 1;
            } 
        }
        
        if (tempArr.length){  
            retStr += MORSE_TABLE[tempArr.join("")]; 
        } else {
            retStr += " ";
        }
        tempArr.length = 0;
    }
    return retStr;
}
module.exports = {
    decode
}
