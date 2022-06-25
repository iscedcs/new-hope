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
$(function() {
     $('#arrival_date').datetimepiker({
          minDate:new Date(),
          disabledates: [new Date()]
     });
});

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

function updateExtra(event) {
     event.preventDefault();
     const element = event.target;
     const other = document.querySelector(`#otherRooms-${element.id}`);
     if(element.checked == true){
          other.children[0].children[1].querySelector('.value').innerHTML = element.value;
          other.classList.remove('d-none');
          
     }else{
          other.classList.remove('d-none');
          other.classList.add('d-none');
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

function getCurrentDate() {
     const tempDate = new Date(Date.now());
     const currentDate = tempDate.toISOString().split('T')[0];
     return currentDate;
}



/*   Update summary   */
let bookForm = document.querySelector('form');
bookForm.addEventListener('input', updateSummary);
function updateSummary(event){
     
     let today = getCurrentDate();
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


function submitForm(event) {
     event.preventDefault();
     /* Form Object */
     const $form = {
          "servicetype": getItemValue('servicetype'),
          "home": {
               "bathroom": getItemValue('bathroom'),
               "bedroom": getItemValue('bedroom'),
               "dirtiness": getItemValue('dirtiness'),
               "kitchen": getItemValue('kitchen')
          },
          "extras": sumExtras().extras,
          "arrival": {
               "date": getItemValue('arrival_date'),
               "time": getItemValue('clean_time')
          },
          // "recurring": getItemValue('bathroom'),
          "user": {
               "firstname": getItemValue('fname'),
               "lastname": getItemValue('lname'),
               "email": getItemValue('email'),
               "phone": getItemValue('phone')
          },
          "location": {
               "address": getItemValue('address'),
               "apt": getItemValue('apt'),
               "city": getItemValue('city'),
               "state": getItemValue('state'),
               "zip": getItemValue('zip')
          },
          "discount": getItemValue('discount_code'),
          "comments": getItemValue('special_instructions'),
          "terms_and_conditions": getItemValue('tandc')
     };
     
     console.log($form);
}
