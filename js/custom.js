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

function sumExtras(){
     const extras = ['inside_oven','walls', 'inside_window', 'inside_the_fridge', 'inside_cabinets', 'organization', 'inside_dishwasher', 'inside_garage', 'microwave', 'laundry', 'blinds', 'inside_washer_dryer'];

     let sum = 0;
     let extras_text = [];
     extras.forEach((extra) => {
          const item = getItemValue(extra);
          sum += parseFloat(item.value);
          if(item.value > 0) extras_text.push(item);
     });
     return {
          'extras': extras_text,
          'sum': sum
     };
}

function updateExtra() {
     $('.extraSect input:checkbox').each(function(index, element) {
          const otherRooms = document.querySelector('#otherRooms');

          let extras_insideOven = document.querySelector('#inside_oven');
          if (extras_insideOven.checked) {
               otherRooms.innerHTML += `
                    <li class="list-group-item">
                         <div class="d-flex justify-content-between">
                              <div><span>  ${getItemValue(extra).text}</span></div>
                              <div><span>$</span><span> ${getItemValue(extra).value}</span></div>
                         </div>
                    </li>
               `;
          } else {
               otherRooms.innerHTML = ``;
          };
          let extras_walls = document.querySelector('#walls');
          if (extras_walls.checked) {
               extwalls = document.querySelector('#walls').value
          } else {
               extwalls = "0";
          };
          let extras_insideWindow = document.querySelector('#inside_window');
          if (extras_insideWindow.checked) {
               extinsideWindow = document.querySelector('#inside_window').value
          } else {
               extinsideWindow = "0";
          };
          let extras_insideTheFridge = document.querySelector('#inside_the_fridge');
          if (extras_insideTheFridge.checked) {
               extinsideTheFridge = document.querySelector('#inside_the_fridge').value
          } else {
               extinsideTheFridge = "0";
          };
          let extras_insideCabinets = document.querySelector('#inside_cabinets');
          if (extras_insideCabinets.checked) {
               extinsideCabinets = document.querySelector('#inside_cabinets').value
          } else {
               extinsideCabinets = "0";
          };
          let extras_organization = document.querySelector('#organization');
          if (extras_organization.checked) {
               extorganization = document.querySelector('#organization').value
          } else {
               extorganization = "0";
          };
          let extras_insideDishwasher = document.querySelector('#inside_dishwasher');
          if (extras_insideDishwasher.checked) {
               extinsideDishwasher = document.querySelector('#inside_dishwasher').value
          } else {
               extinsideDishwasher = "0";
          };
          let extras_insideGarage = document.querySelector('#inside_garage');
          if (extras_insideGarage.checked) {
               extinsideGarage = document.querySelector('#inside_garage').value
          } else {
               extinsideGarage = "0";
          };
          let extras_microwave = document.querySelector('#microwave');
          if (extras_microwave.checked) {
               extmicrowave = document.querySelector('#microwave').value
          } else {
               extmicrowave = "0";
          };
          let extras_laundry = document.querySelector('#laundry');
          if (extras_laundry.checked) {
               extlaundry = document.querySelector('#laundry').value
          } else {
               extlaundry = "0";
          };
          let extras_blinds = document.querySelector('#blinds');
          if (extras_blinds.checked) {
               extblinds = document.querySelector('#blinds').value
          } else {
               extblinds = "0";
          };
          let extras_insideWasherDryer = document.querySelector('#inside_washer_dryer');
          if (extras_insideWasherDryer.checked) {
               extinsideWasherDryer = document.querySelector('#inside_washer_dryer').value
          } else {
               extinsideWasherDryer = "0";
          };
     });
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
     

     let bedroom = parseInt(getItemValue('bedroom').value);
     let servicetype = parseInt(getItemValue('servicetype').value);
     let dirtiness = parseFloat(getItemValue('dirtiness').value);
     let bathroom = parseFloat(getItemValue('bathroom').value);
     let kitchen = parseFloat(getItemValue('kitchen').value);
     let fullRoomCost = (bedroom + servicetype) * dirtiness;

     let subTotal = fullRoomCost + bathroom + kitchen + sumExtras().sum;
     let totalPrice = subTotal;

     setText('bedroomNo', getItemValue('bedroom').text);
     setText('bedroomPrice', parseInt(fullRoomCost));
     
     setText('bathroomNo', getItemValue('bathroom').text);
     setText('bathroomPrice', getItemValue('bathroom').value);
     
     setText('kitchenNo', getItemValue('kitchen').text);
     setText('kitchenPrice', getItemValue('kitchen').value);

     setText('cleanUpDate', getItemValue('arrival_date').value);
     setText('cleanUpTime', getItemValue('clean_time').value);

     setText('subTotal', subTotal);
     setText('totalPrice', totalPrice);



}

/* Service Type */

/* About your home */