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
<script type="text/javascript" src="/resources/js/calcul.js"></script>
<link rel="stylesheet" type="text/css" href="/resources/css/calcul.css">
<title>Calculator 홈</title>
</head>
<body>
	<h1>계산기!</h1>
	<div id="calcul">
		<div class="display">
			<input type="text" class="input" id="display" readonly />
		</div>
		<div class="buttons">
			<div>
				<button class="numBtn" onclick="num(7)">7</button>
				<button class="numBtn" onclick="num(8)">8</button>
				<button class="numBtn" onclick="num(9)">9</button>
				<button class="operator" onclick="operator('X')">X</button>
			</div>
			<div>
				<button class="numBtn" onclick="num(4)">4</button>
				<button class="numBtn" onclick="num(5)">5</button>
				<button class="numBtn" onclick="num(6)">6</button>
				<button class="operator" onclick="operator('-')">-</button>
			</div>
			<div>
				<button class="numBtn" onclick="num(1)">1</button>
				<button class="numBtn" onclick="num(2)">2</button>
				<button class="numBtn" onclick="num(3)">3</button>
				<button class="operator" onclick="operator('+')">+</button>
			</div>
			<div>
				<button class="delete" onclick="deleteDisplay()">Del</button>
				<button class="numBtn" onclick="num(0)">0</button>
				<button class="numBtn" onclick="num('.')">.</button>
				<button id="resultBtn" onclick="result()">=</button>
			</div>
		</div>
	</div>
</body>
</html>