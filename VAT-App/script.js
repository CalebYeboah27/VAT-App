"use strict";

const calcTaxBtn = document.querySelector(".calc-tax");

const taxToBePaid = document.querySelector(".tax-to-be-paid");

const setTaxToPage = function () {
  const taxPayable = (rate) => (value) => value + value * rate;

  let totalAmount = document.querySelector(".total-amount");
  const valTotalAmount = Number(totalAmount.value);
  if (!valTotalAmount) {
    taxToBePaid.classList.add("warning");
    taxToBePaid.textContent = "Please, enter a valid amount";
    return;
  } else {
    taxToBePaid.classList.add("success");

    taxToBePaid.textContent = `GH₵ ${taxPayable(0.23)(valTotalAmount)}`;
    totalAmount.value = "";
  }
};

calcTaxBtn.addEventListener("click", setTaxToPage);
