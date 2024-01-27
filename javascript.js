let inputArray= [];
let firtstNum;
let operationBoolean = false;

let x = "ssssss";

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
//misc buttons
const enterButton = document.querySelector('#enter');

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
    inputArray.length = 0;
    liveInput.textContent = '0';
});

deleteButton.addEventListener("click", () => {
    inputArray.length = inputArray.length -1;
    liveInput.textContent = inputArray.join('');
})

eraseButton.addEventListener("click", ()=> {
    inputArray.shift();
    liveInput.textContent = inputArray.join('')
});

plusButton.addEventListener("click", () => {
    if (inputArray.length > 0 && !operationBoolean){
        computedOutput.textContent = liveInput.textContent + '+'; 
        firtstNum = liveInput.textContent;
        liveInput.textContent = '0';
        inputArray.length = 0;
        operationBoolean = true;
    }
});

enterButton.addEventListener("click", ()=>{
    if(computedOutput.textContent.includes('+')){
        computedOutput.textContent = addition(parseInt(firtstNum), parseInt(liveInput.textContent))};
    
    if(operationBoolean){
        inputArray.length = 0;
        liveInput.textContent = '0';
    }
    operationBoolean = false;
});



function addition(numA, numB){
    return numA + numB;
}