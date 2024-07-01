<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="/WEB-INF/views/common/common.jsp" %>
<%@ include file="/WEB-INF/views/common/nav.jsp" %>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/resources/css/boardWrite.css">
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>글 작성</title>
</head>
<body>
	<h1>게시글 작성</h1>
	<form action="boardWrite" method="post" onsubmit="return validationForm()">
		<div class="form-group" id="titleForm">
			<label>제목</label>
			<input type="text" class="form-control" name="title" id="title" placeholder="제목을 입력하세요">
		</div>
		<div class="form-group" id="writerForm">
			<label>작성자</label>
			<input type="text" class="form-control" name="writter" id="writter" placeholder="작성자를 입력하세요">
		</div>
		<div id="contentForm">
			<label>내용</label>
			<div class="form-group">
				<textarea class="form-control" rows="8" name="content" id="content" placeholder="내용을 입력하세요"></textarea>
			</div>
		</div>
		<div id="writeBtn">
			<button type="submit" class="btn btn-info">작성</button>
			<button type="button" class="btn btn-primary" onclick="location.href='boardList'">목록</button>
		</div>
	</form>
</body>

<script type="text/javascript">
	function validationForm(){
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
	}
</script>

</html>













