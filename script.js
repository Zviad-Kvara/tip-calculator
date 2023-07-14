const billInput = document.getElementById("bill-input");
// ------tip------
const tipBtns = document.getElementsByClassName("tip-btns");
const tips = Array.from(tipBtns);
// ---------------
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount-txt");
const totalResult = document.getElementById("total-amount");
const reset = document.getElementById("reset-btn");
const validation = document.getElementById("validation");
const custom = document.getElementById("custom-input");

let billValue = 0;
let tipsValue = 0;
let peopleValue = 0;
let total = 0;
let tipResult = 0;
billInput.addEventListener("input", event => {
  // save billValue in variable
  billValue = parseInt(event.target.value);
  // make calculation-----see below
  calculation();
});

for (let i = 0; i < tips.length; i++) {
  // listen to every button
  tips[i].addEventListener("click", event => {
    // save button click
    tipsValue = parseInt(event.target.innerText);

    tips.map(item => {
      if (parseInt(item.innerText) === tipsValue) {
        item.style.background = "#9FE8DF";
      } else {
        item.style.background = "#00474B";
      }
    });
    calculation();
  });
}

peopleInput.addEventListener("input", event => {
  peopleValue = parseInt(event.target.value);
  if (peopleValue === 0) {
    validation.innerText = "Cant be Zero";
    peopleInput.style.border = "solid #E17052";
  } else {
    validation.innerText = "";
    peopleInput.style.border = "none";
  }
  calculation();
});
// reset button-reset all
reset.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  tipsValue = "";
  totalResult.innerText = "0.00$";
  tipAmount.innerText = "0.00$";
  custom.value = "";
  tips.forEach(button => {
    button.style.backgroundColor = "#00474B";
  });
});
// custom calculation
custom.addEventListener("input", event => {
  tipsValue = parseInt(event.target.value);
  calculation();
});

function calculation() {
  // calculate total
  total = ((billValue + (billValue * tipsValue) / 100) / peopleValue).toFixed(
    2
  );
  // calculate tipResult
  tipResult = ((billValue * tipsValue) / 100 / peopleValue).toFixed(2);
// errors
  if (
    peopleValue === 0 ||
    peopleValue === "" ||
    isNaN(total) ||
    tipResult === 0 ||
    isNaN(tipResult)
  ) {
    totalResult.innerText = "0.00$";
    tipAmount.innerText = "0.00$";
  } else {
    totalResult.innerText = `${total}$`;
    tipAmount.innerText = `${tipResult}$`;
  }
}
