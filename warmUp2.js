// 1-write a function that returns the product of any number by 3.
function multiply(x){
		var product = x * 3;
		return product;
	}
// 2-complete the following function multiply to return the result of multiplying of x and y
	function multiply(x,y){
		var product = x * y;
		return product;
	}

// 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting is 
// 	(5/9) * (fahrenheit-32);
	function toCelsius(fahrenheit){
		var celcius = (5/9) * (fahrenheit-32);
		return celcius;
	}

// 4-Define a function named "sqArea", and make it display square area if you knew the length of its side. 

function sqArea(side){
	var area = 0;
	
	if(side > 0){
		area = side * side;
		return area;
	} else {
		console.log("error");
	}
}