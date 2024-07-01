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
<script type="text/javascript" src="/resources/js/test.js"></script>
<link rel="stylesheet" type="text/css" href="/resources/css/test.css">
<title>TEST 홈</title>
</head>
<body>
<div id="test">
	<div id="test1">
		<div>TEST1 - 구구단</div><br>
		<select id="selectBtn">
			<option value="0">선택</option>
			<option value="1">1단</option>
			<option value="2">2단</option>
			<option value="3">3단</option>
			<option value="4">4단</option>
			<option value="5">5단</option>
			<option value="6">6단</option>
			<option value="7">7단</option>
			<option value="8">8단</option>
			<option value="9">9단</option>
		</select>
		<button id="calBtn" onclick="showGuGuDan()">계산</button>
		<div id="showDiv"></div>
	</div>
	
	<div id="test2">
		<div>TEST2 - 색상변경</div><br>
		<div id="numDiv">
			<div id="firstDiv">첫번째</div>
			<div id="secondDiv">두번째</div>
			<div id="thirdDiv">세번째</div>
			<div id="fourthDiv">네번째</div>
		</div>
		<br>
		<select id="numSelect">
			<option value="none">선택</option>
			<option value="all">전체</option>
			<option value="first">첫번째</option>
			<option value="second">두번째</option>
			<option value="third">세번째</option>
			<option value="fourth">네번째</option>
		</select>
		<select id="colorSelect">
			<option value="none">선택</option>
			<option value="red">빨강</option>
			<option value="blue">파랑</option>
			<option value="yellow">노랑</option>
			<option value="green">초록</option>
		</select>
		<button id="changeBtn" onclick="changeColor()">변경</button>
		<button id="resetBtn" onclick="resetColor()">초기화</button>
	</div>
	
	<div id="test3">
		<div>TEST3 - 숫자 표</div><br>
		<input id="inputNum">
		<button id="choiceBtn" onclick="choiceNumber();">선택</button>
		<div id="showNum"></div>
	</div>
</div>
</body>
</html>