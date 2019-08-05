let predefined = [11,10,24]
let temp = [...predefined];
let duplicateElements = []

/**
 * Store the input from user and splits into the array
 */
const split=()=>{
    duplicateElements = []
    let input = document.getElementById("inputArea").value;
    let splitArr = input.split(',')
    afterSplit(splitArr)
    displayValues(temp, duplicateElements)
}

/**
 * splits the input on the basis of - and check for blank input
 * @param {object} splitArr - Array of numbers and range
 */
const afterSplit=(splitArr)=>{
    for(let i=0; i<splitArr.length;i++){
        if(splitArr[i].includes('-')){
            range(splitArr[i])
        } else {
            if(splitArr[i]!=''){
                addNum(parseInt(splitArr[i]));
            }  
        }
    }
}

/**
 * Check whther the input number is repeated or not and push it to respective array
 * @param {number} num - Integer
 */
const addNum=(num)=>{
    if(temp.includes(num)){

        if(!duplicateElements.includes(num))
            duplicateElements.push(num)
    }
    else{
        temp.push(num)
    }
}


/**
 * Check whether key pressed is valid or not
 * @param {object} evnt - DOM Obect
 * @returns {boolean} - returns true if input is number and special characters - and ,
 */
const validate=(evnt)=>{
    var iKeyCode = evnt.keyCode;   
    if((iKeyCode == 44 || iKeyCode == 45) || (iKeyCode >= 48 && iKeyCode <= 57))
        return true
    return false;
}

/**
 * Prints the final list and duplicate values
 * @param {object} temp 
 * @param {object} duplicateElements 
 */
const displayValues =(temp, duplicateElements)=>{
    console.log("Final List:"+temp)
    console.log("Duplicates:"+duplicateElements)
}
/**
 * Generate the numbers between the specified range
 * @param {object} splitArr 
 */
const range=(splitArr)=>{
    let startIndex = parseInt(splitArr.split('-')[0]);
    let endIndex = parseInt(splitArr.split('-')[1]);
    for(let i=startIndex; i<=endIndex;i++){
        addNum(i)
    }
}

/**
 * Resets the values
 */
window.onclick=()=>{
    temp = [...predefined];
    // duplicateElements =[]
}