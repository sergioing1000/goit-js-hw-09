import Notiflix from 'notiflix';


const createPromisesButton = document.querySelector('button[type="submit"]');

const delayInput = document.getElementsByName("delay")[0];
const delayStepInput = document.getElementsByName("step")[0];
const amountInput = document.getElementsByName("amount")[0];

createPromisesButton.addEventListener("click", function(event) {
        
  event.preventDefault();

  let amountValue = amountInput.value;
  
  const esperaInic = parseFloat(delayInput.value);

  const delayStepValue = parseFloat(delayStepInput.value);

  setTimeout(function() {

    if (amountValue > 0){
      for (let i = 1; i <= amountValue; i++){
        setTimeout(() => {
          createPromise(i, delayStepValue);
        }, i * delayStepValue)
      }
    }
  }, esperaInic);
 
});


function createPromise(iteracion, delayS) {
    
  const shouldResolve = Math.random() > 0.5;

    if (shouldResolve) {
      Notiflix.Notify.info(`PROMESA No. ${iteracion} :  RESUELTA`);
    } else {
      Notiflix.Notify.failure(`PROMESA No. ${iteracion} NO SE RESOLVIO.`);
    }
    console.log("instruccion 1");  
}