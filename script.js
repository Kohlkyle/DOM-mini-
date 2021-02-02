"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let moneyForm = document.querySelector(".money-form");
let makeMoney = document.querySelector(".make-money");
let onButton = document.querySelector(".on")
let offButton = document.querySelector(".off")
let toggleButton = document.querySelector(".toggle")
let endButton = document.querySelector(".end")
let bulb = document.querySelector(".bulb")
let switches = document.querySelectorAll(".switch")

let buttons = document.querySelectorAll(".button");
let coinContainer = document.querySelector(".coin-container");

buttons.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = parseInt(snack.getAttribute("data-cost"));
    total += amount;
    totalParagraph.textContent = `Total:$${total}`;
  });
});

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault;
  let snapshot = new FormData(moneyForm);
  let quantity = snapshit.get("amount");
  let type = snapshot.get("type")
  for(let i = 0; i< quantity; i++)
  let newCoin = document.createElement("div")
  newCoin.textContent = type
  newCoin.classlist.add(type, "coin")
  coinContainer.append(newCoin)
  newCoin.addEventListener("click", ()=>{
    newCoin.remove()
  })
  coinContainer.append(newCoin)
});
console.dir(moneyForm)


onButton.addEventListener("click", () => {
  bulb.classList.add("light")
})

offButton.addEventListener("click", () => {
  bulb.classList.remove("light")
})

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light")
})

endButton.addEventListener("click", () => {
  bulb.remove();
  switches.forEach((item) => {
    item.disabled = true
  })
})