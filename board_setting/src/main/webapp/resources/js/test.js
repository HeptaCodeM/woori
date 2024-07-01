// 구구단 showGuGuDan
function showGuGuDan(){
	// select 태그를 DOM 탐색
	var selectElement = document.getElementById("selectBtn");
	console.log(selectElement);
	
	// 탐색한 select 태그의 value 값
	var selectOption = selectElement.value;
	console.log(selectOption);
	
	// 구구단이 나올 showDiv를 DOM 탐색
	var showDiv = document.getElementById("showDiv");
	
	// showDiv를 초기화
	showDiv.innerHTML = "";
	
	// 단수를 선택하지 않았을 때 "단을 선택하세요"라는 문구 출력
	if(selectOption == 0){
		showDiv.innerHTML = "단을 선택하세요";
	} else {
		// gugudan으로 HTML 조립
		var gugudan = "";
		gugudan += "<br>";
		for(var i = 1; i <= 9; i++){
			// 선택한 단 x (1~9) = 결과 값 for문 반복
			gugudan += selectOption + "x" + i + "=" + (selectOption * i) + "</br>";
		}
		showDiv.innerHTML = gugudan;
	}
}

// 색상변경 changeColor
function changeColor(){
	// 순서 선택하는 select 태그의 값 DOM 탐색
	var numSelect = document.getElementById("numSelect").value;
	console.log(numSelect);
	
	// 색상 선택하는 select 태그의 값 DOM 탐색
	var colorSelect = document.getElementById("colorSelect").value;
	console.log(colorSelect);
	
	// 순서를 선택하지 않았을 경우 alert
	if(numSelect == "none"){
		alert("변경할 번호를 선택해주세요");
		return;
	}
	
	// 색상을 선택하지 않았을 경우 alert
	if(colorSelect == "none"){
		alert("변경할 색상을 선택해주세요");
		return;
	}
	
	// id가 numDiv인 div의 자식 div DOM 탐색 
	var divs = document.querySelectorAll("#numDiv > div");
	console.log(divs);
	
	// 순서를 "전체"로 선택했을 때
	if(numSelect == "all"){
		// 자식 div의 색상을 선택한 색상으로 변경 for문 반복
		divs.forEach(function(div){
			div.style.color = colorSelect;
		});
	} else {
		// numSelect의 value 값에 Div가 붙은 id를 DOM 탐색 -> numDiv의 id
		var selectDiv = document.getElementById(numSelect + "Div");
		if(selectDiv){
			// numDiv의 색상을 전부 초기화 for문 반복
			divs.forEach(function(div){
				div.style.color = "";
			});
			// 선택된 div를 선택한 색상으로 변경
			selectDiv.style.color = colorSelect;
		}
	}
}

// 색상 및 번호 초기화 resetColor
function resetColor(){
	// id가 numDiv인 div의 자식 div DOM 탐색 
	var divs = document.querySelectorAll("#numDiv > div");
	
	// numSelect DOM 탐색
	var numSelectElement = document.getElementById("numSelect");
	
	// colorSelect DOM 탐색
	var colorSelectElement = document.getElementById("colorSelect");
	
	// 모든 div 색상 초기화 for문 반복
	divs.forEach(function(div){
		div.style.color = "";
	});
	
	// select 태그의 선택된 순서와 색상 초기화
	numSelectElement.value = "none";
	colorSelectElement.value = "none";
}

// 숫자 표 만들기 choiceNumber
function choiceNumber(){
	// input 태그의 값 DOM 탐색
	var num = document.getElementById('inputNum').value;
	console.log(num);
	
	// showNum DOM 탐색
	var showNum = document.getElementById('showNum');
	console.log(showNum);
	
	// showNum div 초기화
	showNum.innerHTML = '';
	
	var table = '';
	
	// n을 1로 초기화
	var n = 1;
	
	// table에 HTML 조립
	table += "<br><table id='numberTable' border=1>";
	
	// 행의 갯수만큼 반복 ex) num이 1일 경우 (1/4) = 0.25 이므로 Math.ceil로 올림  따라서 행은 1줄
	// ex) num이 5일 경우 (5/4) = 1.25 이므로 올림 따라서 행은 2줄
	for(var i = 1; i <= Math.ceil(num/4); i++){
		table += "<tr>";
		// 각 행에 4개의 셀 추가
		for(var k = 1; k <= 4; k++){
			// n이 num(입력한 값) 이하면 셀 추가
			if(n <= num){
				table += ("<td>"+ n +"</td>");
				n++;
			} else {
				// num 값을 초과하면 X가 들어간 빈 셀 추가
				table += "<td>X</td>";
			}
		}
		table += "</tr>";
	}
	table += "</table>";
	
	// showNum div에 table로 조립한 HTML 추가
	showNum.innerHTML = table;
}









