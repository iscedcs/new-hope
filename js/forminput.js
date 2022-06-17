function getItemValue(item){
     if(document.getElementById(item)) 
          return document.getElementById(item).value || 0;
     return 0;
}

let bookNow = document.querySelector("#bookNow");
bookNow.addEventListener('click', function(event) {
     event.preventDefault();
})

let newHopeForm = document.querySelector('form');

newHopeForm.addEventListener('input', bookingObject);

function bookingObject(event){

     function getTotalPrice(){
          let totalPrice = parseInt(getItemValue("servicetype")) + parseInt(getItemValue("bathroom_no")) + parseInt(getItemValue("bedroom_no")) + parseInt(getItemValue("dirtiness")) + parseInt(getItemValue("kitchen_no")) + parseInt(extinsideoven) + parseInt(extwalls) + parseInt(extinsideWindow) + parseInt(extinsideTheFridge) + parseInt(extinsideCabinets) + parseInt(extorganization) + parseInt(extinsideDishwasher) + parseInt(extinsideGarage) + parseInt(extmicrowave) + parseInt(extlaundry) + parseInt(extblinds) + parseInt(extinsideWasherDryer) ;
          if (document.querySelector('input[name = "how_often"]:checked').value == 1) {
               totalPrice *= 1
          } else if (document.querySelector('input[name = "how_often"]:checked').value == 2){
               totalPrice *= 2
          } else if (document.querySelector('input[name = "how_often"]:checked').value == 4)(
               totalPrice *=4
          );
          addDiscountCode();
          return totalPrice;
     
          function addDiscountCode() {
               if (getItemValue('discount_code') === "DISCOUNT5") {
                    totalPrice = (totalPrice - (totalPrice * 0.05));
               }
               else if (getItemValue('discount_code') == "DISCOUNT10") {
                    totalPrice = (totalPrice - (totalPrice * 0.1));
               }
               else if (getItemValue('discount_code') == "DISCOUNT15") {
                    totalPrice = (totalPrice - (totalPrice * 0.15));
               }
               else if (getItemValue('discount_code') == "DISCOUNT20") {
                    totalPrice = (totalPrice - (totalPrice * 0.2));
               }
               else if (getItemValue('discount_code') == "DISCOUNT90") {
                    totalPrice = (totalPrice - (totalPrice * 0.9));
               } else {
                    totalPrice = totalPrice;
               }
          }
     }
     
     let expdate = document.getElementById('expiry_date').value.split("/");
     let expiry_month = expdate[0];
     let expiry_year = expdate[1];
     let tot_price = "500,000";
     let extras_insideOven = document.querySelector('#inside_oven');
     if (extras_insideOven.checked) {
          extinsideoven = document.querySelector('#inside_oven').value
     } else {
          extinsideoven = "0";
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
     const pay = {
               "service_type": getItemValue('servicetype'),
               "home": {
                    "bathroom": getItemValue('bathroom_no'),
                    "bedroom": getItemValue('bedroom_no'),
                    "dirtiness": getItemValue('dirtiness'),
                    "kitchen": getItemValue('kitchen_no')
               },
               "extras": {
                    "inside_oven": extinsideoven,
                    "walls": extwalls,
                    "inside_windows": extinsideWindow,
                    "inside_the_fridge": extinsideTheFridge,
                    "inside_cabinets": extinsideCabinets,
                    "organization": extorganization,
                    "inside_dishwasher": extinsideDishwasher,
                    "inside_garage": extinsideGarage,
                    "microwave": extmicrowave,
                    "laundry": extlaundry,
                    "blinds": extblinds,
                    "inside_washer": extinsideWasherDryer
               },
               "arrival": {
                    "date": getItemValue('arrival_date'),
                    "time": getItemValue('clean_time')
               },
               "recurring": document.querySelector('input[name = "how_often"]:checked').value,
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
               "card_details": {
                    "card_number": getItemValue('card_number'),
                    "month": expiry_month,
                    "year": expiry_year,
                    "cvc": getItemValue('cvc')
               },
               "terms_and_conditions": document.getElementById('tandc').checked,
               "total_price": tot_price
          };
     const discount = {
          "code": getItemValue('discount_code')
     }
     
     const bedroomNo = document.getElementById('bedroom_no').options[document.getElementById('bedroom_no').selectedIndex].text;
     document.querySelector('#bedroomNo').innerText = bedroomNo;

     const bedroomPrice = parseInt(getItemValue('bedroom_no')) + parseInt(getItemValue('kitchen_no')) + parseInt(getItemValue('servicetype')) + parseInt(getItemValue('bathroom_no'));
     document.querySelector('#bedroomPrice').innerText = bedroomPrice;

     const otherRooms = document.querySelector('#otherRooms');
     const bathroomNo = document.getElementById('bathroom_no').options[document.getElementById('bathroom_no').selectedIndex].text;
     const bathroomPrice = getItemValue('bathroom_no');
     const kitchenNo = document.getElementById('kitchen_no').options[document.getElementById('kitchen_no').selectedIndex].text;
     const kitchenPrice = getItemValue('kitchen_no');
     otherRooms.innerHTML = `
               <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                         <div><span> ${bathroomNo}</span></div>
                         <div><span>$</span><span> ${bathroomPrice}</span></div>
                    </div>
               </li>
     `;
     otherRooms.innerHTML += `
               <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                         <div><span>  ${kitchenNo}</span></div>
                         <div><span>$</span><span> ${kitchenPrice}</span></div>
                    </div>
               </li>
     `;

     
     console.clear();
     console.log(pay);
     console.log(getItemValue('servicetype'));
     console.log(getTotalPrice());
     console.log(bedroomNo);
}