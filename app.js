const form = document.querySelector(".form");
const billDOM = document.querySelector(".bill");
const numberDOM = document.querySelector(".number");
const serviceDOM = document.querySelector("select");
function calculateTip() {}

form.addEventListener("submit", function(e) {
  e.preventDefault;
  let billValue = billDOM.value;
  let numberValue = numberDOM.value;
  let serviceValue = serviceDOM.value;
  let tip = (Number(billValue) * Number(serviceValue)) / 100;
  let totalAmount = tip + Number(billValue);
  let eachperson = totalAmount / Number(numberValue);

  if (billValue === "") {
    showError(billDOM, "field cannot be empty");
  } else if (billValue < 0) {
    showError(billDOM, "bill cannot be less than 0");
  } else {
    removeError(billDOM);
  }

  if (numberValue === "") {
    showError(numberDOM, "field cannot be empty");
  } else if (numberValue <= 0) {
    showError(numberDOM, "value cannot be less than 0 equal to");
  } else {
    removeError(numberDOM);
  }

  if (serviceValue === "") {
    showError(serviceDOM, "you have to choose a service");
  } else {
    removeError(serviceDOM);
  }
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  resultDiv.innerHTML = `<p>Tip amount: <b>#${tip.toFixed(2)}</b></p>
                          <p>Total amount: <b>#${totalAmount.toFixed(2)}</b></p>
                          <p>Each person owes: <b>#${eachperson.toFixed(
                            2
                          )}</b></p>

  `;
  form.append(resultDiv);

  console.log(tip, eachperson);
});
function showError(input, message) {
  let formControl = input.parentElement;
  let errorMessage = formControl.querySelector(".error");
  errorMessage.textContent = message;
}
function removeError(input) {
  let formControl = input.parentElement;
  let errorMessage = formControl.querySelector(".error");
  errorMessage.textContent = "";
}
