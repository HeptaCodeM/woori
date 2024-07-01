// 전역변수 설정
let firstNumber = ''; // 첫 번째 입력한 숫자
let operatorSymbol = ''; // 연산자
let resultDisplay = false; // 화면에 결과 값이 없으면 false

// 숫자 클릭 함수 num
function num(a){
	var input = document.querySelector('.input');
	
	// 화면에 결과 값이 있을 때 숫자 버튼을 누르면 input 값 초기화
	if(resultDisplay){
		input.value = '';
		resultDisplay = false;
	}
	
	var parts = input.value.split(/[\+\-\X]/);
	var currentParts = parts[parts.length - 1];
	
	if(a == '.' && currentParts.includes('.')){
		return;
	}
	
	if(a == '.'){
		if(input.value == '' || input.value.endsWith('+') || input.value.endsWith('-') || input.value.endsWith('X')){
			input.value += '0' + a;
			console.log("input.value1 " + input.value);
		} else {
			input.value += a;
			console.log("input.value2 " + input.value);
		}
	} else {
		input.value += a;
		console.log("input.value3 " + input.value);
	}
	console.log("input.value4 " + input.value);
}

// 연산자 클릭 함수 operator
function operator(op){
	var input = document.querySelector('.input');
	var currentInput = input.value;
	console.log("currentInput " + currentInput);
	
	// 첫 번째 숫자
	firstNumber = currentInput;
	console.log("firstNumber " + firstNumber);
	
	// 화면에 결과 값이 있을 때 연산자 버튼을 누르면 input 값 초기화
	if(resultDisplay){
		input.value = '';
		resultDisplay = false;
		return;
		// input에 값이 없을 때 연산자 버튼을 누르면 return
	} else if(currentInput == '' || ['+','-','X'].includes(currentInput.slice(-1)) || currentInput.slice(-1) == '.'){
		return;
	} else {
		input.value += op;
		operatorSymbol = op;
	}
	console.log("operatorSymbol " + operatorSymbol);
}

// 결과 클릭 함수 result
function result(){
	var input = document.querySelector('.input');
	
	// 현재 input 값
	var currentInput = input.value;
	console.log("result() currentInput " + currentInput);
	
	// 두 번째 숫자는 현재 input 값에서 연산자를 기준으로 split해서 첫 번째 인덱스를 가져옴
	// ex) 78 + 89 -> 89
	var secondNumber = currentInput.split(operatorSymbol)[1];
	console.log("firstNumber " + firstNumber);
	console.log("secondNumber " + secondNumber);
	
	// 첫 번째 숫자와 두 번째 숫자가 없으며 return
	if(!firstNumber || !secondNumber){
		return;
	}
	
	// 결과 버튼을 누르면 input 값 초기화
	input.value = '';
	
	var result;
	
	// switch case 문 사용
	switch(operatorSymbol){
		case '+' :
			// parseFloat로 소숫점 2번 째 자리까지
			result = parseFloat(firstNumber) + parseFloat(secondNumber);
			break;
		case '-' :
			result = parseFloat(firstNumber) - parseFloat(secondNumber);
			break;
		case 'X' :
			result = parseFloat(firstNumber) * parseFloat(secondNumber);
			break;
		default:
			return;
	}
	
	// input에 계산한 result 대입
	input.value = result;
	
	// 첫 번째 숫자와 연산자 초기화
	firstNumber = '';
	operatorSymbol = '';
	resultDisplay = true;
}

// 삭제 클릭 함수 deleteDisplay
function deleteDisplay(){
	var input = document.querySelector('.input');
	var currentValue = input.value;
	
	// 현재 입력되어있는 input 값을 substring 해서 뒤에서부터 삭제한 후
	// 화면에 보여지는 input에 대입
	input.value = currentValue.substring(0, currentValue.length - 1);
}







