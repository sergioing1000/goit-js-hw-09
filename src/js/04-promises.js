import Notiflix from 'notiflix';


const createPromisesButton = document.querySelector('button[type="submit"]');

const delayInput = document.getElementsByName("delay")[0];
const delayStepInput = document.getElementsByName("step")[0];
const amountInput = document.getElementsByName("amount")[0];

createPromisesButton.addEventListener("click", function(event) {
        
  event.preventDefault();

  const amountValue = amountInput.value;
  
  const esperaInic = parseFloat(delayInput.value);

  const delayStepValue = parseFloat(delayStepInput.value);

  setTimeout(function () {
    
    executePromises(amountValue, delayStepValue)
      .then(() => {
        console.log("Todas las promesas completadas.");
      })
      .catch(error => {
        console.error("Error:", error);
      });

  }, esperaInic);
 
});


async function executePromises(nveces, delayStepValue) {
  if (nveces > 0){
      for (let i = 1; i <= nveces; i++){
        await createPromise(i, delayStepValue);
      }
  }
}

function createPromise(i, delayS) {
  return new Promise(resolve => {
    setTimeout(() => {

      console.log("Promise", i);
        const shouldResolve = Math.random() > 0.5;

        if (shouldResolve) {
          Notiflix.Notify.info(`PROMESA No. ${i} :  RESUELTA`);
        } else {
          Notiflix.Notify.failure(`PROMESA No. ${i} NO SE RESOLVIO.`);
        }
        resolve();
    }, delayS);

  });
}