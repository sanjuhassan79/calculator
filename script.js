 window.onload = function() {

     let input = document.getElementById('inputBox');
     let containe = document.getElementById('container');
     containe.addEventListener('click', (e) => {
         buttonClick(e.target.id);

     })
     let cals = document.getElementById('button=');
     cals.addEventListener('click', calculate)
     let c = document.getElementById('buttonc');
     c.addEventListener('click', buttonc)

     function buttonClick(buttonid) {

         if (buttonid != 'buttonc' && buttonid != 'button=') {

             let button = document.getElementById(buttonid);
             let tmp = buttonid;
             tmp = tmp.replace('button', '');
             entries(tmp);
         }
     }

     function entries(tmp) {
         input.value += tmp
     }

     function calculate() {
         if (input.value === '.') {
             alert('please enter a mathmatical expressionl');
             return;
         }
         input.value = eval(input.value);

     }

     function buttonc() {

         input.value = '';

     }
 }