<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="/WEB-INF/views/common/common.jsp" %>
<%@ include file="/WEB-INF/views/common/nav.jsp" %>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/resources/css/updateBoard.css">
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>글 수정</title>
</head>
<body>
	<h1>게시글 수정</h1>
	<form action="updateBoard" method="post" id="updateForm">
		<input type="hidden" id="boardNo" name="boardNo" value="${vo.boardNo}">
		<div class="form-group" id="titleForm">
			<label>제목</label>
			<input type="text" class="form-control" name="title" id="title" value="${vo.title}">
		</div>
		<div class="form-group" id="writerForm">
			<label>작성자</label>
			<input type="text" class="form-control" name="writter" id="writter" value="${vo.writter}">
		</div>
		<div id="contentForm">
			<label>내용</label>
			<div class="form-group">
				<textarea class="form-control" rows="8" name="content" id="content">${vo.content}</textarea>
			</div>
		</div>
		<div id="updateBtn">
			<button type="button" class="btn btn-info" id="submitButton">수정</button>
			<button type="button" class="btn btn-primary" onclick="location.href='boardList'">목록</button>
		</div>
	</form>
</body>

<script type="text/javascript">
	document.getElementById("submitButton").addEventListener("click", function(event){
		var title = document.getElementById("title").value;
		var writter = document.getElementById("writter").value;
		var content = document.getElementById("content").value;
		var boardNo = document.getElementById("boardNo").value;
		console.log(title);
		console.log(writter);
		console.log(content);
		console.log(boardNo);

		if(writter == ""){
			alert("작성자를 입력해주세요");
			return false;
		}
		if(title == ""){
			alert("제목을 입력해주세요");
			return false;
		}
		if(content == ""){
			alert("내용을 입력해주세요");
			return false;
		}

		document.getElementById("updateForm").submit();
	});
</script>

</html>













