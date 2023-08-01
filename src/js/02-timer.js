const botonStart = document.querySelector('[data-start]');
const textInput = document.getElementById('datetime-picker');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');


import swal from 'sweetalert';

let fechaActual = new Date();

let resta = 0;                

console.log(`La fecha actual es: ${fechaActual}`);

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

script.onload = function() {
  var scriptUI = document.createElement('script');
  scriptUI.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
  document.head.appendChild(scriptUI);

  scriptUI.onload = function() {

    $(document).ready(function() {
    
    var dateTimePicker = $('#datetime-picker');

    
    dateTimePicker.datepicker({
      dateFormat: 'yy-mm-dd', 
      timeFormat: 'HH:mm:ss', 
      showSecond: true, 
      showMillisec: false, 
      showMicrosec: false, 
      position: {
        my: 'center top',
        at: 'center bottom',
        of: dateTimePicker,
        collision: 'fit'
      },
      beforeShow: function(input, inst) {
        inst.dpDiv.addClass('custom-datepicker');
      },
      onSelect: function(dateText, inst) {
        let selectedDate = new Date(dateText); 
        selectedDate.setHours(selectedDate.getHours() + 5);
                
        console.log(selectedDate);

        resta = selectedDate - fechaActual;
        console.log(resta);

        if (resta < 0){
            swal(`ERROR`, `Debes escoger una fecha en el Futuro `, "error");
        }
      }

    });

    // Estilos para el botón "Start"
    $('button[data-start]').css({
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    });

    // Estilos para el contenedor del temporizador
    $('.timer').css({
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px'
    });

    // Estilos para cada campo del temporizador
    $('.field').css({
      textAlign: 'center',
      margin: '0 20px'
    });

    // Estilos para el valor del campo del temporizador
    $('.value').css({
      fontSize: '24px',
      fontWeight: 'bold'
    });

    // Estilos para la etiqueta del campo del temporizador
    $('.label').css({
      fontSize: '14px',
      color: '#888'
    });
  });


  };
};

botonStart.addEventListener('click', function() {

  //container.insertAdjacentHTML('afterend', sliderHTML);
  //let slider = document.querySelector('[type="range"]');

  if (resta < 0){
            swal(`ERROR`, `Debes escoger una fecha en el Futuro `, "error");
  }
  else {
    console.log(`${resta}`);
    let diasF = Math.floor(resta / 1000 / 3600 / 24);
    let horasF = Math.floor((resta - (diasF * 24 * 3600 * 1000)) / 1000 / 3600);
    let minutosF = Math.floor((resta - (diasF * 24 * 3600 * 1000) - (horasF * 3600 * 1000)) / 1000 / 60);
    let segundosF = Math.floor((resta - (diasF * 24 * 3600 * 1000) - (horasF * 3600 * 1000) - (minutosF * 60 * 1000)) / 1000);
    
    
    let intervalId;

    intervalId = setInterval(function () {


      daysElement.innerHTML = `${diasF}`;
      hoursElement.innerHTML =  `${horasF}`;
      minutesElement.innerHTML = `${minutosF}`;
      secondsElement.innerHTML = `${segundosF}`;

      segundosF--;
      if (segundosF < 0) {
        segundosF = 59;
        minutosF--;

        if (minutosF < 0) {
          minutosF = 59;
          horasF--;
          
          if (horasF < 0) {
            horasF = 59;
            diasF--;

            if (diasF <0) {
              swal("BIEN HECHO", "Ha llegado el día", "success");
              clearInterval(intervalId);  
            }       
          }
        }
      }
    }, 800);
    
  }
});