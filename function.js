
function addition_number() // назва функції
    {
    	var n_1 = document.getElementById("number_1"); // беремо відповідний елемент з id = "number_1"
	  	var n_2 = document.getElementById("number_2"); // беремо відповідний елемент з id = "number_2"

	  	var n_1_value =  n_1.value; /* отримуємо їхнє значення */
	  	var n_2_value =  n_2.value;
	 	
	 	var n_1_number = parseFloat(n_1_value); /* перетворюємо в число */
	 	var n_2_number = parseFloat(n_2_value);

     	var res = document.getElementById('res'); // беремо відповідний елемент з id = "res"
      	res.innerHTML = n_1_number + n_2_number;
    }

function subtraction_number() 
    {
      	var n_1 = document.getElementById("number_1");
	  	var n_2 = document.getElementById("number_2");
		
	  	var n_1_value =  n_1.value;
	  	var n_2_value =  n_2.value;
	 	
	 	var n_1_number = parseFloat(n_1_value);
	 	var n_2_number = parseFloat(n_2_value);	
     	var res = document.getElementById('res');
      	res.innerHTML = n_1_number - n_2_number;
    }

function clear_number() 
    {	
	var n_0=''
      	var n_1 = document.getElementById("number_1");
	  	var n_2 = document.getElementById("number_2");
	  	var res = document.getElementById('res');
	    n_1.value = n_0;
	  	n_2.value = n_0;

      	res.innerHTML = "";

    }