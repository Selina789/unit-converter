let lengthCount = document.getElementById("length-count");
let volumeCount = document.getElementById("volume-count");
let massCount = document.getElementById("mass-count");
let convertButton = document.getElementById("convert-button");
let inputNum = document.getElementById("input-value");

convertButton.addEventListener("click", function(){
  if(inputNum.value == 0){
    lengthCount.textContent = "";
    volumeCount.textContent = "";
    massCount.textContent = "";
  }
  else{
    lengthConvert();
    volumeConvert();
    massConvert();
  }
})

function lengthConvert(){
  let meters = (inputNum.value * 3.281).toFixed(2);
  let feet = (inputNum.value / 3.281).toFixed(2);
  lengthCount.textContent = `${inputNum.value} meters =  ${meters} feet || ${inputNum.value} feet = ${feet} meters`;
}

function volumeConvert(){
  let liters = (inputNum.value * 0.264).toFixed(2);
  let gallons = (inputNum.value / 0.264).toFixed(2);
  volumeCount.textContent = `${inputNum.value} liters =  ${liters} gallons || ${inputNum.value} gallons = ${gallons} liters`;
}

function massConvert(){
  let kilos = (inputNum.value * 2.204).toFixed(2);
  let pounds = (inputNum.value / 2.204).toFixed(2);
  massCount.textContent = `${inputNum.value} kilos =  ${kilos} pounds || ${inputNum.value} pounds = ${pounds} kilos`;
}