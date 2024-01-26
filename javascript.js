let inputArray= [];
const liveInput = document.querySelector('#liveInputs');
const zeroButton = document.querySelector('#0');

zeroButton.addEventListener("click", () =>{
    inputArray.push(0);
    liveInput.textContent = inputArray;
});