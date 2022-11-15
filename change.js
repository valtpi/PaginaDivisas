const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/67eaf83ae8f42f8d330ffaed/latest/${moneda_one}`)
    .then(res => res.json() )
    .then(data => {
        const taza = data.conversion_rates[moneda_two];

        cambioEl.innerText = `1 ${moneda_one} =${taza} ${moneda_two}`;
        cantidadEl_two.value =(cantidadEl_one.value * taza).toFixed(2);
    } );
        
      
    }
   

monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
});


calculate();