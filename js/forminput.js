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
     let extra_items = document.querySelectorAll('.extras');
     let extras = {};
     for (var extra_item of extra_items){
          extra_item.addEventListener('click', function(){
               if(this.checked == true) {
                    push
                    extras.name = this.value;
                    console.log(this.value);
               } else {
                    delete extras.this.name;
                    console.log('you have unchecked the checkbox');
               }
          })
     }
     const pay = {
               "service_type": document.getElementById('servicetype').value,
               "home": {
                    "bathroom": document.getElementById('bathroom_no').value,
                    "bedroom": document.getElementById('bedroom_no').value,
                    "dirtiness": document.getElementById('dirtiness').value,
                    "kitchen": document.getElementById('kitchen_no').value
               },
               "extras": extras,
               // {
               //      "inside_oven": document.getElementById('inside_oven').value,
               //      "walls": document.getElementById('walls').value,
               //      "inside_windows": document.getElementById('inside_window').value,
               //      "inside_the_fridge": document.getElementById('inside_the_fridge').value,
               //      "inside_cabinets": document.getElementById('inside_cabinets').value,
               //      "organization": document.getElementById('organization').value,
               //      "inside_dishwasher": document.getElementById('inside_dishwasher').value,
               //      "inside_garage": document.getElementById('inside_garage').value,
               //      "microwave": document.getElementById('microwave').value,
               //      "laundry": document.getElementById('laundry').value,
               //      "blinds": document.getElementById('blinds').value,
               //      "inside_washer": document.getElementById('inside_washer_dryer').value
               // },
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
     
          
          console.log(pay);
          console.log(discount);
          console.log(extras);
}