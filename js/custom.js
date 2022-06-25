/* Form Object */
const $form = {
     "servicetype": '',
     "home": {
          "bathroom": '',
          "bedroom": '',
          "dirtiness": '',
          "kitchen": ''
     },
     "extras": {
          "inside_oven": '',
          "walls": '',
          "inside_windows": '',
          "inside_the_fridge": '',
          "inside_cabinets": '',
          "organization": '',
          "inside_dishwasher": '',
          "inside_garage": '',
          "microwave": '',
          "laundry": '',
          "blinds": '',
          "inside_washer": ''
     },
     "arrival": {
          "date": '',
          "time": ''
     },
     "recurring": '',
     "user": {
          "firstname": '',
          "lastname": '',
          "email": '',
          "phone": ''
     },
     "location": {
          "address": '',
          "apt": '',
          "city": '',
          "state": '',
          "zip": ''
     },
     "discount": '',
     "comments": '',
     "card_details": {
          "card_number": '',
          "month": '',
          "year": '',
          "cvc": ''
     },
     "terms_and_conditions": false,
     "total_price": ''
};

function getElementValue(elementId){
     const element = document.querySelector('#' + elementId);

     if(element.classList.contains('read-selectbox')){
          return element.value;
     }

     if(element.classList.contains('read-checkbox')){
          return (element.checked) ? element.value : 0;
     }

     if(element.classList.contains('read-textbox')){
          return element.value;
     }

     if(element.classList.contains('read-datebox')){
          return element.value;
     }
     return 'null';
}

function getElementText(elementId){
     const element = document.querySelector('#' + elementId);
     if(element.type == 'select-one'){
          return element.options[element.selectedIndex].text;
     }

     if(element.type == 'checkbox'){
          return element.name;
     }

     if(element.type == 'text'){
          return element.name;
     }

     if(element.type == 'date'){
          return element.name;
     }
     return 'Class not found';
}
function getItemValue(item){
     return {
          'text': getElementText(item),
          'value': getElementValue(item)
     }
}

function getCurrentDate() {
     const tempDate = new Date(Date.now());
     const currentDate = tempDate.toISOString().split('T')[0];
     return currentDate;
}

function setText(elementId, value){
     document.querySelector('#' + elementId).innerText = value;
}

/*   Update summary   */
let bookForm = document.querySelector('form');
bookForm.addEventListener('input', updateSummary);
function updateSummary(event){
     let bedroom = parseInt(getElementValue('bedroom'));
     let servicetype = parseInt(getElementValue('servicetype'));
     let dirtiness = parseFloat(getElementValue('dirtiness'));
     let bathroom = parseFloat(getElementValue('bathroom'));
     let kitchen = parseFloat(getElementValue('kitchen'));
     let fullRoomCost = (bedroom + servicetype) * dirtiness;

     let subTotal = fullRoomCost + bathroom + kitchen;
     let totalPrice = subTotal;

     setText('bedroomNo', getElementText('bedroom'));
     setText('bedroomPrice', parseInt(fullRoomCost));
     
     setText('bathroomNo', getElementText('bathroom'));
     setText('bathroomPrice', getElementValue('bathroom'));
     
     setText('kitchenNo', getElementText('kitchen'));
     setText('kitchenPrice', getElementValue('kitchen'));

     setText('cleanUpDate', getElementValue('arrival_date'));
     setText('cleanUpTime', getElementValue('clean_time'));

     setText('subTotal', subTotal);
     setText('totalPrice', totalPrice);
     

}

/* Service Type */

/* About your home */