const billInput = document.getElementById("bill-input");
// ----------tip-btns
const tips = document.getElementsByClassName("tip-btns");
const tipsArray = Array.from(tips);
// ------------------
const peopleInput = document.getElementById("people");
const totalResult = document.getElementById("total-amount");

let billValue = 0;
let tipsValue = 0;
let peopleValue = 0;
let total = 0;
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
  calculation();
});

// calculation
function calculation() {
  total = (billValue + (billValue * (tipsValue / 100)) / peopleValue).toFixed(
    2
  );

  if ((peopleValue === 0) | (peopleValue === peopleValue.length)) {
    totalResult.innerText = "0.00$";
  } else {
    totalResult.innerText = `${total}$`;
  }
}
