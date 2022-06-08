// TEST
console.log('Form inputs come here');

let formInputs =[];

const addFeilds = (ev)=>{
     ev.preventDefault();  //to stop the form submitting
     let serviceType = {
          id: Date.now(),
          type: document.getElementById('servicetype').value
      }
      formInputs.push(serviceType);
      document.forms[0].reset();

      //for display purposes only
      console.warn('added' , {formInputs} );
}
document.getElementById('booking').addEventListener('click', addFeilds);