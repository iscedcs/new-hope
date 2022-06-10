document.addEventListener('submit', function (event) {
     event.preventDefault();
});

let newHopeForm = document.getElementById('bookingform');
newHopeForm.addEventListener('input', bookingSummary);
function bookingSummary(event){
     let expdate = document.getElementById('expiry_date').value.split("/");
     let expiry_month = expdate[0];
     let expiry_year = expdate[1];
     let tot_price = "500,000";
     let extras_insideOven = document.querySelector('#inside_oven');
     if (extras_insideOven.checked) {
          extinsideoven = document.getElementById('inside_oven').value
     } else {
          extinsideoven = "0";
     };
     let extras_walls = document.querySelector('#walls');
     if (extras_walls.checked) {
          extwalls = document.getElementById('walls').value
     } else {
          extwalls = "0";
     };
     let extras_insideWindow = document.querySelector('#inside_window');
     if (extras_insideWindow.checked) {
          extinsideWindow = document.getElementById('inside_window').value
     } else {
          extinsideWindow = "0";
     };
     let extras_insideTheFridge = document.querySelector('#inside_the_fridge');
     if (extras_insideTheFridge.checked) {
          extinsideTheFridge = document.getElementById('inside_the_fridge').value
     } else {
          extinsideTheFridge = "0";
     };
     let extras_insideCabinets = document.querySelector('#inside_cabinets');
     if (extras_insideCabinets.checked) {
          extinsideCabinets = document.getElementById('inside_cabinets').value
     } else {
          extinsideCabinets = "0";
     };
     let extras_organization = document.querySelector('#organization');
     if (extras_organization.checked) {
          extorganization = document.getElementById('organization').value
     } else {
          extorganization = "0";
     };
     let extras_insideDishwasher = document.querySelector('#inside_dishwasher');
     if (extras_insideDishwasher.checked) {
          extinsideDishwasher = document.getElementById('inside_dishwasher').value
     } else {
          extinsideDishwasher = "0";
     };
     let extras_insideGarage = document.querySelector('#inside_garage');
     if (extras_insideGarage.checked) {
          extinsideGarage = document.getElementById('inside_garage').value
     } else {
          extinsideGarage = "0";
     };
     let extras_microwave = document.querySelector('#microwave');
     if (extras_microwave.checked) {
          extmicrowave = document.getElementById('microwave').value
     } else {
          extmicrowave = "0";
     };
     let extras_laundry = document.querySelector('#laundry');
     if (extras_laundry.checked) {
          extlaundry = document.getElementById('laundry').value
     } else {
          extlaundry = "0";
     };
     let extras_blinds = document.querySelector('#blinds');
     if (extras_blinds.checked) {
          extblinds = document.getElementById('blinds').value
     } else {
          extblinds = "0";
     };
     let extras_insideWasherDryer = document.querySelector('#inside_washer_dryer');
     if (extras_insideWasherDryer.checked) {
          extinsideWasherDryer = document.getElementById('inside_washer_dryer').value
     } else {
          extinsideWasherDryer = "0";
     };
     const pay = {
               "service_type": document.getElementById('servicetype').value,
               "home": {
                    "bathroom": document.getElementById('bathroom_no').value,
                    "bedroom": document.getElementById('bedroom_no').value,
                    "dirtiness": document.getElementById('dirtiness').value,
                    "kitchen": document.getElementById('kitchen_no').value
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
                    "date": document.getElementById('arrival_date').value,
                    "time": document.getElementById('clean_time').value
               },
               "recurring": document.querySelector('input[name = "how_often"]:checked').value,
               "user": {
                    "firstname": document.getElementById('fname').value,
                    "lastname": document.getElementById('lname').value,
                    "email": document.getElementById('email').value,
                    "phone": document.getElementById('phone').value
               },
               "location": {
                    "address": document.getElementById('address').value,
                    "apt": document.getElementById('apt').value,
                    "city": document.getElementById('city').value,
                    "state": document.getElementById('state').value,
                    "zip": document.getElementById('zip').value
               },
               "discount": document.getElementById('discount_code').value,
               "comments": document.getElementById('special_instructions').value,
               "card_details": {
                    "card_number": document.getElementById('card_number').value,
                    "month": expiry_month,
                    "year": expiry_year,
                    "cvc": document.getElementById('cvc').value
               },
               "terms_and_conditions": document.getElementById('tandc').checked,
               "total_price": tot_price
          };
          const discount = {
               "code": document.getElementById('discount_code').value,
               "total_price": tot_price
          }
     
          console.clear();
          // console.log(pay);
          // console.log(discount);
          console.log(pay.extras.inside_oven);
          console.log(pay.extras.walls);
          console.log(pay.extras.inside_windows);
          console.log(pay.extras.inside_the_fridge);
          console.log(pay.extras.organization);
          console.log(pay.extras.inside_cabinets);
          console.log(pay.extras.inside_dishwasher);
          console.log(pay.extras.inside_garage);
          console.log(pay.extras.microwave);
          console.log(pay.extras.laundry);
          console.log(pay.extras.blinds);
          console.log(pay.extras.inside_washer);
}