let inputArray= [];
let firtstNum;
let operationBoolean = false;
let decimalBoolean = false;


//display text
const liveInput = document.querySelector('#liveInputs');
const computedOutput = document.querySelector('#computed')
//number buttons 
const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
//clear delete erase
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const eraseButton = document.querySelector('#erase');
//operation buttons
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multButton = document.querySelector('#multiply');
const divButton = document.querySelector('#divide')
//misc buttons
const enterButton = document.querySelector('#enter');
const decimalButton = document.querySelector('#decimal');

zeroButton.addEventListener("click", () =>{
    if(inputArray.length >0){
        inputArray.push(0);
        liveInput.textContent = inputArray.join('');
    }
});

oneButton.addEventListener("click", () =>{
    inputArray.push(1);
    liveInput.textContent = inputArray.join('');
});

twoButton.addEventListener("click", ()=>{
    inputArray.push(2);
    liveInput.textContent = inputArray.join('');
});
threeButton.addEventListener("click", ()=>{
    inputArray.push(3);
    liveInput.textContent = inputArray.join('');
});
fourButton.addEventListener("click", ()=>{
    inputArray.push(4);
    liveInput.textContent = inputArray.join('');
});
fiveButton.addEventListener("click", ()=>{
    inputArray.push(5);
    liveInput.textContent = inputArray.join('');
});
sixButton.addEventListener("click", ()=>{
    inputArray.push(6);
    liveInput.textContent = inputArray.join('');
});
sevenButton.addEventListener("click", ()=>{
    inputArray.push(7);
    liveInput.textContent = inputArray.join('');
});
eightButton.addEventListener("click", ()=>{
    inputArray.push(8);
    liveInput.textContent = inputArray.join('');
});
nineButton.addEventListener("click", ()=>{
    inputArray.push(9);
    liveInput.textContent = inputArray.join('');
});

clearButton.addEventListener("click", ()=> {
    clear();
    decimalBoolean = false;
});

deleteButton.addEventListener("click", () => {
    inputArray.length = inputArray.length -1;
    liveInput.textContent = inputArray.join('');
    if(!liveInput.textContent.includes('.')){
        decimalBoolean = false;
    }
})

eraseButton.addEventListener("click", ()=> {
    inputArray.shift();
    liveInput.textContent = inputArray.join('')
    if(!liveInput.textContent.includes('.')){
        decimalBoolean = false;
    } 
});


plusButton.addEventListener("click", () => {
    
        decimalBoolean = false;
    
        if ((inputArray.length > 0 && !operationBoolean)){
            computedOutput.textContent = liveInput.textContent + '+'; 
            firtstNum = liveInput.textContent;
            liveInput.textContent = '0';
            inputArray.length = 0;
            operationBoolean = true;
        }
        else if(operationBoolean && inputArray.length > 0 ){
            calc();
            operationBoolean = true;
            firtstNum = computedOutput.textContent;
            computedOutput.textContent = computedOutput.textContent + "+"; 
        }
        else if(!(computedOutput === '') && inputArray.length>0){
            firtstNum = computedOutput.textContent
            if(!computedOutput.textContent.includes('+')){
                computedOutput.textContent = computedOutput.textContent + '+';
            }
            operationBoolean = true;
            inputArray.length = 0;
        }
    
});

minusButton.addEventListener("click", () => {
    decimalBoolean = false;
        if ((inputArray.length > 0 && !operationBoolean)){
            computedOutput.textContent = liveInput.textContent + '-'; 
            firtstNum = liveInput.textContent;
            liveInput.textContent = '0';
            inputArray.length = 0;
            operationBoolean = true;
        }
        else if(operationBoolean && inputArray.length > 0 ){
            calc();
            operationBoolean = true;
            firtstNum = computedOutput.textContent;
            computedOutput.textContent = computedOutput.textContent + "-"; 
        }
        else if(!(computedOutput === '') && inputArray.length>0){
            firtstNum = computedOutput.textContent
            if(!computedOutput.textContent.includes('-')){
                computedOutput.textContent = computedOutput.textContent + '-';
            }
            operationBoolean = true;
            inputArray.length = 0;
        }
    
    });
multButton.addEventListener("click", () => {
    decimalBoolean = false;
        if ((inputArray.length > 0 && !operationBoolean)){
            computedOutput.textContent = liveInput.textContent + '*'; 
            firtstNum = liveInput.textContent;
            liveInput.textContent = '0';
            inputArray.length = 0;
            operationBoolean = true;
        }
        else if(operationBoolean && inputArray.length > 0 ){
            calc();
            operationBoolean = true;
            firtstNum = computedOutput.textContent;
            computedOutput.textContent = computedOutput.textContent + "*"; 
        }
        else if(!(computedOutput === '') && inputArray.length>0){
            firtstNum = computedOutput.textContent
            if(!computedOutput.textContent.includes('*')){
                computedOutput.textContent = computedOutput.textContent + '*';
            }
            operationBoolean = true;
            inputArray.length = 0;
        }
    
});

divButton.addEventListener("click", () => {
    decimalBoolean = false;
        if ((inputArray.length > 0 && !operationBoolean)){
            computedOutput.textContent = liveInput.textContent + '/'; 
            firtstNum = liveInput.textContent;
            liveInput.textContent = '0';
            inputArray.length = 0;
            operationBoolean = true;
        }
        else if(operationBoolean && inputArray.length > 0 ){
            calc();
            operationBoolean = true;
            firtstNum = computedOutput.textContent;
            computedOutput.textContent = computedOutput.textContent + "-"; 
        }
        else if(!(computedOutput === '') && inputArray.length>0){
            firtstNum = computedOutput.textContent
            if(!computedOutput.textContent.includes('/')){
                computedOutput.textContent = computedOutput.textContent + '/';
            }
            operationBoolean = true;
            inputArray.length = 0;
        }
    
});

decimalButton.addEventListener("click", () => {
    if (!(decimalBoolean)){
        inputArray.push('.');
        liveInput.textContent = inputArray.join('');
        decimalBoolean = true;
    }
})

enterButton.addEventListener("click", ()=>{
    calc();
    decimalBoolean = false;
});

function clear(){
    inputArray.length = 0;
    computedOutput.textContent ='';
    liveInput.textContent = '0';
    operationBoolean = false;
}


function addition(numA, numB){
    return numA + numB;
}

function subtraction(numA, numB){
    return numA - numB;
}

function  multiplication(numA, numB){
    return numA * numB;
}

function  division(numA, numB){
    if(numB === 0){
        alert("can not divide by 0")
    }

    else{
        return numA / numB;
    }
}

function calc(){
    if(computedOutput.textContent.includes('+')){
        computedOutput.textContent = addition(parseFloat(firtstNum), parseFloat(liveInput.textContent))
    }
    else if(computedOutput.textContent.includes('-')){
        computedOutput.textContent = subtraction(parseFloat(firtstNum), parseFloat(liveInput.textContent))
    }
    else if(computedOutput.textContent.includes('*')){
        computedOutput.textContent = multiplication(parseFloat(firtstNum), parseFloat(liveInput.textContent))
    }
    else if(computedOutput.textContent.includes('/')){
        computedOutput.textContent = division(parseFloat(firtstNum), parseFloat(liveInput.textContent))
    }
    if(operationBoolean){
        inputArray.length = 0;
        liveInput.textContent = '0';
    }
    operationBoolean = false;
}