const billInput = document.getElementById("bill-input");
// --------tip-btns--------
const tips = document.getElementsByClassName("tip-btns");
const tipsArray = Array.from(tips);
// ------------------------
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount-txt");
const totalResult = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");
const validation = document.getElementById("validation");

let billValue = 0;
let tipsValue = 0;
let peopleValue = 0;
let total = 0;
let tipResult = 0;
billInput.addEventListener("input", event => {
  billValue = parseInt(event.target.value);
  calculation();
});

for (let i = 0; i < tipsArray.length; i++) {
  tipsArray[i].addEventListener("click", event => {
    tipsValue = parseInt(event.target.innerText);
    calculation();
  });
}

peopleInput.addEventListener("input", event => {
  peopleValue = parseInt(event.target.value);
  if (peopleValue === 0) {
    validation.innerText = "Cant be Zero";
    peopleInput.style.border= "solid #E17052";
  } else {
    validation.innerText = "";
    peopleInput.style.border="none"
  }
  calculation();
});

function calculation() {
  total = ((billValue + billValue * (tipsValue / 100)) / peopleValue).toFixed(
    2
  );

  if (peopleValue === 0 || peopleValue.length === 0 || isNaN(total) || isNaN(tipResult)|| tipResult === 0) {
    totalResult.innerText = "0.00$";
    tipAmount.innerText = "0.00$";
  } else {
    totalResult.innerText = `${total}$`;
    tipAmount.innerText = `${tipResult}$`;
  }

  tipResult = ((billValue * tipsValue) / 100 / peopleValue).toFixed(2);
}

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  tipsValue = 0;
  totalResult.innerText = "0.00$";
  tipAmount.innerText = "0.00$";
});
