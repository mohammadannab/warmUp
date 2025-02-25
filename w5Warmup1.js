var operateOnNumbers = function (firstNumber, secondNumber, func) {
	return func(firstNumber, secondNumber)
}

//complete the following functions

var addition = function(x, y) {
	return x + y;
}

var subtraction = function(x, y){
	return  x - y;
}

var multiplication = function(x, y){
	return  x * y;
}


var division = function(x, y){
	if(y === 0){
		return "Can’t divide by Zero";
	}else{
		return x / y;
	}
}


//If you call the following functions they should return these values
//operateOnNumbers(2, 2, addition) -> 4
//operateOnNumbers(4, 2, subtraction) -> 2
//operateOnNumbers(3, 3, multiplication) -> 9
//operateOnNumbers(4, 2, division) -> 2
//operateOnNumbers(3, 0, division) -> “Can’t divide by Zero”
