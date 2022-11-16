const convertBtn = document.getElementById("convert-btn");
const lengthTxt = document.getElementById("length-txt");
const volumeTxt = document.getElementById("volume-txt");
const massTxt = document.getElementById("mass-txt");

convertBtn.addEventListener("click", function () {
  value = document.getElementById("convert-box").value;

  // Length
  let metersToFeet = value * 3.281;
  let feetToMeters = value / 3.281;

  // Volume
  let literToGallon = value / 3.785;
  let gallonToLiter = value * 3.785;

  // Mass
  let kiloToPound = value * 2.205;
  let poundToKilo = value / 2.205;

  lengthTxt.innerHTML = `${value} meters = ${metersToFeet.toFixed(
    3
  )} feet | ${value} feet = ${feetToMeters.toFixed(3)} meters`;

  volumeTxt.innerHTML = `${value} liters = ${literToGallon.toFixed(
    3
  )} gallons | ${value} gallons = ${gallonToLiter.toFixed(3)} liters`;

  massTxt.innerHTML = `${value} kilos = ${kiloToPound.toFixed(
    3
  )} pounds | ${value} pounds = ${poundToKilo.toFixed(3)} kilos`;

  document.getElementById("convert-box").value = "";
});
