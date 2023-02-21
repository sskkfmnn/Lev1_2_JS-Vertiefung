console.log("");

const inputNumber = document.querySelector("form input[type='number']");
const output = document.getElementById("result");

function weather() {
    if (inputNumber.value <= 2) {
        output.innerHTML = "schlecht";
    } else if (inputNumber.value <=5) {
        output.innerHTML = "okay";
    } else if (inputNumber.value <=7) {
        output.innerHTML = "gut";
    } else if (inputNumber.value <= 10) {
        output.innerHTML = "super";
    }
}