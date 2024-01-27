let inputArray= [];
const liveInput = document.querySelector('#liveInputs');
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