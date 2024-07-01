<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<ul class="nav nav-tabs">
	<li role="presentation" class="home"><a href="/">Home</a></li>
	<li role="presentation" class="dropdown board">
	<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">게시판<span class="caret"></span></a>
		<ul class="dropdown-menu" role="menu">
			<li><a href="boardList">게시판 목록</a></li>
			<li><a href="boardListAjax">게시판 목록 Ajax</a></li>
		</ul>
	</li>
	<li role="presentation" class="test"><a href="test">TEST</a></li>
	<li role="presentation" class="calcul"><a href="calcul">계산기</a></li>
	<li role="presentation" class="calendar"><a href="calendar">캘린더</a></li>
</ul>
<script>
$(document).ready(function() {
	console.log("[네비게이션바] 적용 jsp");
	var loc = location.pathname.split("/");
	var pathParts = loc[loc.length - 1];
	console.log("loc => "+loc);
	console.log("pathParts => "+pathParts);
	// 해당 페이지에 맞는 네비게이션바 강조 옵션 적용
	if(loc.indexOf("boardList") > -1){
		$(".board").addClass("active");
	}else if(loc.indexOf("boardListAjax") > -1){
		$(".board").addClass("active");
	}else if(loc.indexOf("test") > -1){
		$(".test").addClass("active");
	}else if(loc.indexOf("calcul") > -1){
		$(".calcul").addClass("active");
	}else if(loc.indexOf("calendar") > -1){
		$(".calendar").addClass("active");
	}else{
		$(".home").addClass("active");
	}
});
</script>