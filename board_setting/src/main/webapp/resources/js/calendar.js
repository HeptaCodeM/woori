// 전역변수
var allCalendar = "";
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var schedules = [];

// 스케줄 전체 조회 allSchedule
function allSchedule(){
	return fetch('/allSchedule', {
		method: 'POST',
		headers: {
			"Content-Type":"application/json",
			"Accept":"application/json"
		},
		body: JSON.stringify({})
	})
	.then(response => response.json())
	.then(data => {
		schedules = data; // 스케줄 전체 리스트를 schedules에 담기
		console.log("schedules : " + schedules);
		return data;
	});
}

// 처음 실행 시
window.onload=function(){
	allSchedule().then(() => {
        renderCalendar();
    });
	console.log("실행됨");
}

// 캘린더 실행 renderCalendar
function renderCalendar(){
	// 캘린더
	var calendarDate = document.getElementById("calendarDate");
	console.log(calendarDate);
	
	// 월
	var monthTitle = document.getElementById("monthTitle");
	console.log(monthTitle);
	
	// 년도
	var yearTitle = document.getElementById("yearTitle");
	console.log(yearTitle);
	
	// 달의 첫 번째 날의 요일
	var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
	console.log(firstDayOfMonth);
	
	// 달에 몇 일
	var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
	console.log(daysInMonth);
	
	// 한 주의 시작 요일 (0~6)
	var startDayOfWeek = firstDayOfMonth.getDay();
	console.log(startDayOfWeek);
	
	// 현재 월
	monthTitle.innerHTML = currentMonth + 1;
	console.log(monthTitle);
	
	// 현재 년도
	yearTitle.innerHTML = currentYear;
	console.log(yearTitle);
	
	var html = "";
	var dayCounter = 0;
	
	// 빈 칸의 수를 세서 div 추가
	for(var i = 0; i < startDayOfWeek; i++){
		var row = Math.floor(dayCounter/7);
		html += `<div class="dateEmpty"></div>`;
		dayCounter++;
	}
	
	// 빈 칸이 아닌 부분 날짜로 채우기
	for(var i = 1; i <= daysInMonth; i++){
		var row = Math.floor(dayCounter/7);
		var date = new Date(currentYear, currentMonth, i); // 현재 날짜
		var dayOfWeek = date.getDay(); // 요일
		var className = 'date';
		
		// 토요일이면 saturday를, 일요일이면 sunday 클래스를 추가
		if(dayOfWeek == 6){
			className += ' saturday';
		} else if(dayOfWeek == 0){
			className += ' sunday';
		}
		
		// schedules의 배열에서 날짜와 일치하면 true
		var hasSchedule = schedules.some(schedule =>
			new Date(schedule.calDate).getFullYear() == date.getFullYear() &&
			new Date(schedule.calDate).getMonth() == date.getMonth() &&
			new Date(schedule.calDate).getDate() == date.getDate() 
		);
		
		// has-schedule 클래스 추가
		if(hasSchedule) {
			className += ' has-schedule';
		}
		
		html += '<div class="'+ className +'" data-toggle="modal" data-target="#calModal" onclick="detailCalendar('+ i +')">'+ i +'</div>';
		dayCounter++;
	}
	
	// 마지막 주에 빈 칸 추가
	if(dayCounter % 7 !== 0){
		for(var i = dayCounter % 7; i < 7; i++){
			html += '<div class="dateEmpty"></div>';
			dayCounter++;
		}
	}
	
	// html 조립
	calendarDate.innerHTML = html;
}

// 전월 이동 moveLeft
function moveLeft(){
	currentMonth--;
	if(currentMonth < 0){ // 현재 월은 -1 된 상태
		currentMonth = 12;
		currentMonth--;
		currentYear--;
	}
	allSchedule().then(() => {
        renderCalendar();
    });
}

// 후월 이동 moveRight
function moveRight(){
	currentMonth++;
	if(currentMonth > 11){
		currentMonth = -1;
		currentMonth++;
		currentYear++;
	}
	allSchedule().then(() => {
        renderCalendar();
    });
}

// 스케줄 상세 조회 detailCalendar
function detailCalendar(i) {
	// 스케줄 게시판 DOM 탐색
	var bodyTable = document.getElementById('bodyTable');
	bodyTable.innerHTML = '';
	
	// 상세 조회한 날짜의 월
	var monthTitle = document.getElementById("monthTitle");
	var monthNumber = monthTitle.innerText.trim();
	console.log(monthNumber);
	
	// 상세 조회한 날짜의 년도
	var yearTitle = document.getElementById("yearTitle");
	var yearNumber = yearTitle.innerText.trim();
	console.log(yearNumber);
	
	// 상세 조회한 날짜의 일
	console.log("내가 누른 날짜의 day" + i);
	
	fetch('/detailCalendar', {
		method: 'POST',
		headers: {
			'Content-Type':'application/json',
			"Accept":"application/json"
		},
		body: JSON.stringify({
			calYear: yearNumber,
			calMonth: monthNumber,
			calDay: parseInt(i)
		})
	})
	.then(response => response.text())
	.then(text => {
		console.log("textextextext : " + text);
		
		// 해당 날에 스케줄이 없을 경우, 년월일만 출력
		if(text == '[]'){
			var formDate = yearNumber + '년 ' + monthNumber + '월 ' + i + '일';
            console.log(formDate);

            document.getElementById('dateModal').innerText = formDate;
            return;
		}
		return JSON.parse(text);
	})
	.then(data => {
		console.log(data);
		
		// 값이 없다면 return
		if(!data) return;
		
		var bodyTable = document.getElementById('bodyTable');
		var html = '';
		
		// 일정 tr td 조립
		for(var i = 0; i < data.length; i++){
			// 값이 null 이 아닌 경우와 null 인 경우
			var calTime = data[i].calTime !== null ? data[i].calTime : '';
			var calReq = data[i].calReq !== null ? data[i].calReq : '';
			var calDate = data[i].calDate !== null ? data[i].calDate : '';
			var calContents = data[i].calContents !== null ? data[i].calContents : '';
			console.log("calTime" + calTime);
			console.log("calReq" + calReq);
			console.log("calDate" + calDate);
			console.log("calContents" + calContents);
			
			html += '<tr>';
			html += 	'<td id="modalCalNo">'+ data[i].calNo +'</td>'; // hidden 상태
			html += 	'<td id="timeTable">'+ data[i].calTime +'</td>';
			html += 	'<td id="contentTable">'+ data[i].calContents +'</td>';
			html += 	'<td id="reqTable">'+ (data[i].calReq == 'true' ? '*' : '') +'</td>';
			html += 	'<td id="deleteTable">'+ (data[i].calTime == '' ? '' : '<a onclick="deleteCalendar()">x</a>') +'</td>';
			html += '</tr>';
			
			var date = new Date(data[i].calDate);
			var formDate = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일';
			
			document.getElementById('dateModal').innerText = formDate;
		}
		bodyTable.innerHTML += html;
	});
}

// 취소 버튼 cancel
function cancel() {
	// 모달창 hide
	var modal = document.getElementById('calModal');
	$(modal).modal('hide');
	
	// 일정 html 초기화
	var bodyTable = document.getElementById('bodyTable');
	bodyTable.innerHTML = '';
	
	// 입력란 초기화
	document.getElementById('timeInput').value = '';
	document.getElementById('textInput').value = '';
	document.getElementById('checkboxInput').checked = false;

	allSchedule().then(() => {
        renderCalendar();
    });
}

// 저장 버튼 save
function save() {
	// 월
	var monthTitle = document.getElementById("monthTitle");
	var monthNumber = monthTitle.innerText.trim();
	console.log(monthNumber);
	
	// 년도
	var yearTitle = document.getElementById("yearTitle");
	var yearNumber = yearTitle.innerText.trim();
	console.log(yearNumber);
	
	// YYYY년 MM월 dd일 형식
	var date = document.getElementById('dateModal').innerText;
	console.log("date" + date);
	
	// 날짜 형식
	var formDate = formatDate(date);
	console.log("formDate" + formDate);
	
	// 일
	var day = getDay(date);
	console.log("day" + day);
	
	// 시간 입력 input
	var timeInput = document.getElementById('timeInput').value;
	console.log(timeInput);
	
	// 내용 입력 input
	var textInput = document.getElementById('textInput').value;
	console.log(textInput);
	
	// 중요 checkbox
	var checkbox = document.getElementById('checkboxInput').checked;
	console.log(checkbox);
	
	// 시간 input 비웠을 때
	if(timeInput == ""){
		alert("시간을 입력해주세요")
		return false;
	}
	
	// 내용 input 비웠을 때
	if(textInput == ""){
		alert("내용을 입력해주세요")
		return false;
	}
	
	fetch('/insertCalendar', {
		method: 'POST',
		headers: {
			'Content-Type':'application/json',
			"Accept":"application/json"
		},
		body: JSON.stringify({
			calYear: yearNumber,
			calMonth: monthNumber,
			calDay: day,
			calTime: timeInput,
			calContents: textInput,
			calReq: checkbox,
			calDate: formDate
		})
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		detailCalendar(day);
	})
	// 저장 버튼 눌렀을 때 input과 checkbox 초기화
	document.getElementById('timeInput').value = '';
	document.getElementById('textInput').value = '';
	document.getElementById('checkboxInput').checked = false;
}

// YYYY-MM-dd 날짜 변환 formatDate
function formatDate(date) {
	// 4 자리 숫자 년, 1~2 자리 숫자 월, 1~2 자리 숫자 일
    var regex = /(\d{4})년 (\d{1,2})월 (\d{1,2})일/;
    
    // data 에서 regex 와 매칭되는 부분을 찾아 배열로 반환
    var matches = date.match(regex);
    
    if (matches) {
        var year = parseInt(matches[1], 10); // 첫 번째 그룹을 10진수로
        var month = parseInt(matches[2], 10); // 두 번째 그룹을 10진수로
        var day = parseInt(matches[3], 10); // 세 번째 그룹을 10진수로
        // 2자리로 맞추고 앞자리가 비면 0으로 채워줌
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    } 
}

// 일(day) 구하기 getDay
function getDay(date){
	 var regex = /(\d{4})년 (\d{1,2})월 (\d{1,2})일/;
	 var matches = date.match(regex);
	 
	 if (matches) {
		 return parseInt(matches[3], 10);
	 }
}

// 스케줄 삭제 deleteCalendar
function deleteCalendar(){
	// YYYY년 MM월 dd일 형식
	var date = document.getElementById('dateModal').innerText;
	console.log("date" + date);
	
	// 일
	var day = getDay(date);
	console.log("day" + day);
	
	// hidden 되어있는 calNo
	var modalCalNo = document.getElementById('modalCalNo').innerText;
	console.log("삭제할 modalCalNo " + modalCalNo);
	
	fetch('/deleteCalendar', {
		method: 'DELETE',
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify({
			calNo: modalCalNo
		})
	})
	.then(response => response.json())
	.then(data => {
		console.log(data);
		detailCalendar(day);
	})
	return;
}
















