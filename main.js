function getSelectOption(item){
  return document.getElementById(item).options[document.getElementById(item).selectedIndex].text;
}
function getSelectValue(item){
  return document.getElementById(item).options[document.getElementById(item).selectedIndex].value;
}
function getItemValue(item){
  return document.getElementById(item).value;
}
function setText(name, value){
  document.getElementById(name).innerText = value;
}
function setValue(name, value){
  document.getElementById(name).value = value;
}
function setFreqVal() {
  if (document.querySelector('input[name="how_often"]:checked').value == 1) {
    freqVal = "One Time";
  } else if (document.querySelector('input[name="how_often"]:checked').value == 1.2) {
    freqVal = "Monthly";
  } else if (document.querySelector('input[name="how_often"]:checked').value == 2) {
    freqVal = "BiWeekly";
  } else {
    freqVal = "Weekly";
  } return freqVal;
}
function getExtDet() {
  const otherRooms = document.querySelector('#otherRooms');
  const extDetails = document.getElementsByClassName("extras");
  for (var i = 0; i < extDetails.length; i++) {
    if (extDetails[i].checked == true) {
      otherRooms.innerHTML += `
        <li class="list-group-item">
            <div class="d-flex justify-content-between">
                  <div><span>  ${extDetails[i].name}</span></div>
                  <div><span>$</span><span> ${extDetails[i].value}</span></div>
            </div>
        </li>
      `;
    }

  }
}
function getExtTot() {
  const extDetails = document.getElementsByClassName("extras");
  let extTot = 0; 
  for (var i = 0; i < extDetails.length; i++) {
    if (extDetails[i].checked == true) {
      extTot += parseInt(extDetails[i].value);  
    }
  }
  return extTot;
}
function addDirtPrice(){
  const dirtPrice = getSelectValue('dirtiness');
  return dirtPrice;
}
function getInitCost(){
  const initCost = addDirtPrice() * (parseInt(getItemValue('servicetype')) + parseInt(getItemValue('bedroom_no')));
  return initCost;
}
function getSubTotal() {
  let subTotal = 0;
  subTotal += getInitCost();
  subTotal += getExtTot();
  return subTotal;
}
function getDiscountPrice(){
  let discountPrice = 0;
  let discountCode = getItemValue('discount_code');
  if (discountCode === "DISCOUNT5") {
    discountPrice = getSubTotal() * 0.05;
  } else if (discountCode === "DISCOUNT10") {
    discountPrice = getSubTotal() * 0.1;
  }
  return discountPrice;
}
function showDiscount() {
  const discountSpan = document.querySelector('#discountSpan'); 
  if (getItemValue('discount_code') === "DISCOUNT5") {
    discountSpan.innerHTML = `
    <li class="list-group-item">
        <div class="d-flex justify-content-between">
              <div>DISCOUNT</div>
              <div><span>$-</span><span>${getDiscountPrice()}</span></div>
        </div>
    </li>
    `;
  } else if (getItemValue('discount_code') === "DISCOUNT10") {
    discountSpan.innerHTML = `
    <li class="list-group-item">
        <div class="d-flex justify-content-between">
              <div>DISCOUNT</div>
              <div><span>$-</span><span>${getDiscountPrice()}</span></div>
        </div>
    </li>
    `;
  } else {
    discountSpan.innerHTML = '';
  }
}

function onLoadBookingSummary() {
  getInitCost();
  const tempDate = new Date(Date.now());
  const currentDate = tempDate.toISOString().split('T')[0];
  setValue('arrival_date', currentDate);
  setFreqVal();
  setText('bedroomNo', getSelectOption("bedroom_no"));
  setText('bedroomPrice', getInitCost());
  setText('bathroomNo',getSelectOption('bathroom_no'));
  setText('bathroomPrice', getItemValue('bathroom_no'));
  setText('kitchenNo',getSelectOption('kitchen_no'));
  setText('kitchenPrice', getItemValue('kitchen_no'));
  getExtDet();
  setText('cleanUpDate', getItemValue('arrival_date'));
  setText('cleanUpTime', getItemValue('clean_time'));
  setText('frequency', freqVal);
  setText('subTotal', getSubTotal())
  showDiscount();
};
window.onload = onLoadBookingSummary;