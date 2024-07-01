<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->
<link rel="stylesheet" type="text/css" href="/resources/css/boardList.css">
<title>게시판 홈</title>
</head>
<body>
	<h1>게시판</h1>
	<div id="boardListDiv">
		<table class="table table-striped" id="boardListTable">
			<tr>
				<th>번호</th>
				<th id="titleTable">제목</th>
				<th id="writerTable">작성자</th>
				<th id="timeTable">날짜</th>
			</tr>
			<c:forEach items="${boards}" var="board">
				<tr>
					<td>${board.boardNo}</td>
					<td><a href="detailBoard?boardNo=${board.boardNo}">${board.title}</a></td>
					<td>${board.writter}</td>
					<td>
						<fmt:formatDate value="${board.createAt}" pattern="yyyy-MM-dd HH:mm:ss"/>
					</td>
				</tr>
			</c:forEach>
		</table>
	</div>
	<a href="boardWrite">
		<button class="btn btn-success" id="writeBtn">글쓰기</button>
	</a>
</body>
</html>