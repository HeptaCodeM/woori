// 전역변수
var allBoards = "";

// load 시 실행
window.onload=function(){
	doGetAllBoard();
	console.log("실행됨");
}


// 게시글 삭제 deleteBoard
function deleteBoard(i){
	
	console.log("삭제할 인덱스 번호 " + i );
	
	if(confirm("삭제하시겠습니까?")){
		fetch('/deleteBoardAjax/', {
			method: 'DELETE',
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				boardNo: allBoards[i].boardNo
			})
		})
		.then(response => {
			if(response.ok){
				doGetAllBoard();
			} 
		})
	} else {
		return;
	}
}

// 게시글 목록 조회 doGetAllBoard
function doGetAllBoard(){
	fetch('./boardListAjax',{
		method : 'POST',
		headers : {
			"Content-Type":"application/json",
			"Accept":"application/json"
		},
		body: JSON.stringify,
	})
	.then(response => response.json())
	.then(result => {
		console.log("result: ", result);
		if(result != null){
			getAllBoard(result)
		} else {
			alert('실패')
		}
	});
	
	
	// 게시글 목록 HTML 조립 getAllBoard
	function getAllBoard(boards){
		var boardListTable = document.getElementById('boardListTable');
		var html = '';
		var htmlTr = '';
		boardListTable.innerHTML = '';
		allBoards = boards;
		console.log("JJS"+JSON.stringify(allBoards));
		
		htmlTr +='<tr>';
		htmlTr +='	<th><input type="checkbox" name="checkboxAll" value="checkboxAll" onclick="allCheck(this);">전체선택</th>';
		htmlTr +='	<th>번호</th>';
		htmlTr +='	<th id="titleTable">제목</th>';
		htmlTr +='	<th id="writerTable">작성자</th>';
		htmlTr +='	<th id="timeTable">날짜</th>';
		htmlTr +='	<th></th>';
		htmlTr +='</tr>';
		htmlTr +='<tr>';
		htmlTr +='	<th><button class="btn btn-danger" onclick="selectDelete();">선택삭제</button></th>';
		htmlTr +='	<th></th>';
		htmlTr +='	<th></th>';
		htmlTr +='	<th></th>';
		htmlTr +='	<th></th>';
		htmlTr +='	<th></th>';
		htmlTr +='</tr>';
		
		boardListTable.innerHTML+=htmlTr;
		
		for(var i=0;i<boards.length;i++){
			var formattedDate = formatDate(boards[i].createAt);
				
			html +='<tr>';
			html +='	<td><input type="checkbox" name="checkbox" onclick="selectCheck();"></td>';
			html +='	<td>'+boards[i].boardNo+'</td>';
			html +='	<td><a href="#" class="detail-link" onclick="detailBoard('+i+'); closeWriteForm();">'+boards[i].title+'</a></td>';
			html +='	<td>'+boards[i].writter+'</td>';
			html +='	<td>'+formattedDate+'</td>';
			html +='	<td><button class="btn btn-danger" onclick="deleteBoard('+i+'); hideList(); closeWriteForm();">삭제</button></td>';
			html +='</tr>';
				
		}	
		boardListTable.innerHTML+=html;
		
		console.log(boards);
	}	
	
	// 시간 yyyy-MM-dd HH:mm:ss 형식으로 변경 formatDate
	function formatDate(dateString) {
        var date = new Date(dateString);
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);
        var seconds = ('0' + date.getSeconds()).slice(-2);

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }
}

// 전체선택 체크박스 allCheck
function allCheck(allCheckElement){
	var allCh = document.getElementsByName('checkbox');
	
	allCh.forEach((checkbox) => {
		checkbox.checked = allCheckElement.checked;
	});
}

// 선택해제 시 전체 선택 해제 selectCheck
function selectCheck(){
	// 전체 체크박스
	var allCh = document.getElementsByName('checkbox');
	
	// 선택된 체크박스
	var checked = document.querySelectorAll('input[name="checkbox"]:checked');
	
	// checkboxAll
	var allChBox = document.getElementsByName('checkboxAll')[0];
	
	if(allCh.length == checked.length){
		allChBox.checked = true;
	} else {
		allChBox.checked = false;
	}
}

// 선택삭제 selectDelete
function selectDelete(){
	var selectedBoardNo = [];
	var checkedBox = document.querySelectorAll('input[name="checkbox"]:checked');
	
	if(checkedBox.length == 0){
		alert("삭제할 대상을 클릭하여 주십시오");
		return;
	}
	
	checkedBox.forEach(function(checkbox){
		var row = checkbox.closest('tr');
		if(row){
			var boardNo = row.cells[1].textContent;
			console.log(boardNo);
			selectedBoardNo.push(boardNo);
		}
	});
	console.log(selectedBoardNo);
	alert(selectedBoardNo);
	deleteSelectedBoards(selectedBoardNo);
}

// 선택삭제 for문
function deleteSelectedBoards(selectedBoardNo){
	selectedBoardNo.forEach(function(boardNo){
		deleteBoardCheckBox(boardNo);
	});
}

// 선택삭제 fetch deleteBoardCheckBox
function deleteBoardCheckBox(boardNo){
	console.log("삭제할 인덱스 번호 " + boardNo );
	
	fetch('/deleteBoardAjax/', {
		method: 'DELETE',
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify({
			boardNo: boardNo
		})
	})
	.then(response => {
		if(response.ok){
			doGetAllBoard();
		} 
	})
	return;
}


// 글쓰기 폼 보여주기 showWriteForm
function showWriteForm(){
	var form = document.getElementById('writeForm');
	if(form.style.display == 'none'){
		form.style.display = 'block';
	} else {
		form.style.display = 'none';
		document.getElementById('title').value = "";
		document.getElementById('writter').value = "";
		document.getElementById('content').value = "";
	}
}

// 글쓰기 폼 닫기 closeWriteForm
function closeWriteForm(){
	var closeForm = document.getElementById('writeForm');
	closeForm.style.display = 'none';
	document.getElementById('title').value = "";
	document.getElementById('writter').value = "";
	document.getElementById('content').value = "";
}

// 행 삽입 insertRow
function insertRow(data, title, writter, content){
	var table = document.getElementById("boardListTable");
	var newRow = table.insertRow(1);
	
	// 시간 yyyy-MM-dd HH:mm:ss 형식으로 변경 formatDate
	function formatDate(date){
		var year = date.getFullYear();
		var month = ('0' + (date.getMonth() + 1)).slice(-2);
		var day = ('0' + date.getDate()).slice(-2);
		var hours = ('0' + date.getHours()).slice(-2);
		var minutes = ('0' + date.getMinutes()).slice(-2);
		var seconds = ('0' + date.getSeconds()).slice(-2);
		
		return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
	}
	var formattedDate = formatDate(new Date());
	
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	
	
	cell1.innerHTML = data;
	cell2.innerHTML = '<a href="#" class="detail-link" data-board-no="'+ data +'" onclick="detailBoard('+ data +'); closeWriteForm();">'+title+'</a>';
	cell3.innerHTML = writter;
	cell4.innerHTML = formattedDate;
	cell5.innerHTML = '<button class="btn btn-danger" onclick="deleteBoard('+ data +'); hideList(); closeWriteForm();">삭제</button>';
	
	console.log(cell1.innerHTML);
	console.log(cell2);
	console.log(cell3);
	console.log(cell4);
	console.log(cell5);
	
	newRow.querySelector('.detail-link').addEventListener('click', function(event){
		event.preventDefault();
		var boardNo = this.getAttribute('data-board-no');
		detailBoard(boardNo);
	})
}

// 글쓰기 버튼 클릭 시 boardWriteAjax 호출 writeBoard
function writeBoard(){
	var title = document.getElementById("title").value;
	var writter = document.getElementById("writter").value;
	var content = document.getElementById("content").value;
	
	if(title == ""){
		alert("제목을 입력해주세요");
		return false;
	}
	if(writter == ""){
		alert("작성자를 입력해주세요");
		return false;
	}
	if(content == ""){
		alert("내용을 입력해주세요");
		return false;
	}
	
	var data = {
			title: title,
			writter: writter,
			content: content
	};
	
	fetch('/boardWriteAjax',{
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(data => {
		insertRow(data, title, writter, content);
		closeWriteForm();
		doGetAllBoard();
	});
}

// 게시글 상세 조회 detailBoard
function detailBoard(i){
	
	console.log("내가 누른 리스트의 인덱스 "+i);
	console.log("내가 누른 리스트의 boardNo "+allBoards[i].boardNo);
	
	fetch('/detailBoardAjax',{
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			boardNo: allBoards[i].boardNo
		})
	})
	.then(response => response.json())
	.then(data => {
		document.getElementById('detailBoardNo').innerText = data.boardNo;
		document.getElementById('detailTitle').innerText = data.title;
		document.getElementById('detailWritter').innerText = data.writter;
		document.getElementById('detailContent').innerText = data.content;
		
		document.getElementById('detailTable').style.display = 'block';
	});
}

// 게시글 상세 조회 폼 숨기기 hideList
function hideList(){
	$("#detailTable").hide();
}












