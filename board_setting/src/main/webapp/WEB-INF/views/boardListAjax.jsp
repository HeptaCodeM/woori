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
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->
<link rel="stylesheet" type="text/css" href="/resources/css/boardListAjax.css">
<script type="text/javascript" src="/resources/js/boardListAjax.js"></script>
<title>게시판 홈 Ajax</title>
</head>
<body>
	<h1>게시판</h1>
	
		<!-- 조회 -->
		<table class="table table-striped" id="boardListTable">
		</table>
		
		<!-- 글쓰기 btn -->
		<button class="btn btn-success" id="writeBtn" onclick="showWriteForm(); hideList();">글쓰기</button><br><br>
		
		<!-- boardWrite Form -->
		<form action="boardWriteAjax" method="post" id="writeForm" style="display:none;">
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
			
			<!-- 작성 btn -->
			<div id="writeBtn">
				<button type="button" class="btn btn-info" onclick="writeBoard()">작성</button>
			</div>
		</form>
		
		<!-- detailBoard Form -->
		<div id="detailTable" style="display:none;">
			<div>
		        <div id="divNum">번호</div>
		        	<div id="detailBoardNo"></div><br>
		        <div id="divTitle">제목</div>
		        	<div id="detailTitle"></div><br>
		        <div id="divWritter">작성자</div>
		        	<div id="detailWritter"></div><br>
		        <div id="divContent">내용</div>
					<div id="detailContent"></div><br>
			</div>
			
			<!-- 닫기 btn -->
			<button class="btn btn-primary" id="closeBtn" onclick="hideList()">닫기</button>
		</div>
</body>
</html>