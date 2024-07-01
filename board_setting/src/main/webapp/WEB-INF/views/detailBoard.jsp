<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/views/common/common.jsp" %>
<%@ include file="/WEB-INF/views/common/nav.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/resources/css/detailBoard.css">
<title>글 상세</title>
</head>
<body>
	<h1>게시글 상세</h1>
		<table id="detailTable">
			<tr>
		        <th>번호</th>
		        <td>${vo.boardNo}</td>
		    </tr>
		    <tr>
		        <th>제목</th>
		        <td>${vo.title}</td>
		    </tr>
		    <tr>
		        <th>작성자</th>
		        <td>${vo.writter}</td>
		    </tr>
		    <tr>
		        <th>내용</th>
		    </tr>
		</table>
		<div id="contentDiv">${vo.content}</div></br>
		<div id="detailBtn">
			<button type="button" class="btn btn-info" onclick="location.href='updateBoard?boardNo=${vo.boardNo}'">수정</button>
			<button type="button" class="btn btn-danger" onclick="deleteBoard()">삭제</button>
			<button type="button" class="btn btn-primary" onclick="location.href='boardList'">목록</button>
		</div>
		
		<form action="/deleteBoard" method="post" id="deleteForm">
			<input type="hidden" name="boardNo" value="${vo.boardNo}">
		</form>
</body>

<script type="text/javascript">
	function deleteBoard(){
		document.getElementById("deleteForm").submit();
	}
</script>


</html>