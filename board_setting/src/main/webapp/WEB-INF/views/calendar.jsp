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
<link rel="stylesheet" type="text/css" href="/resources/css/calendar.css">
<script type="text/javascript" src="/resources/js/calendar.js"></script>
<title>캘린더 홈</title>
</head>
<body>
	<div class="calendar">
		<div class="calHeader">
		<br>
			<div id="yearTitle"></div>
			<br>
			<div class="calHeaderMonth">
				<a id="monthLeft" onclick="moveLeft()">&lt;</a>
				<div id="monthTitle"></div>
				<a id="monthRight" onclick="moveRight()">&gt;</a>
			</div>
		</div>
		<br>
		<div class="calMain">
			<div class="calMainDay" id="calDay">
				<div class="day">일</div>
				<div class="day">월</div>
				<div class="day">화</div>
				<div class="day">수</div>
				<div class="day">목</div>
				<div class="day">금</div>
				<div class="day">토</div>
			</div>
			<br>
			<div class="calDate" id="calendarDate"></div>
		</div>
	</div>
	<div class="container">
		<div id="calModal" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h3>스케줄 입력</h3>
						<div id="dateModal"></div>
					</div>
					<div class="modal-body">
						<table id="scheduleTable">
							<tr id="topTable">
								<th id="timeTr">시간</th>
								<th id="contentTr">내용</th>
								<th id="reqTr">중요</th>
								<th id="deleteTr">삭제</th>
							</tr>
							<tbody id="bodyTable"></tbody>
						</table>
						
						<br><br><br>
						<div>시간</div>
						<input id="timeInput" type="time" min="00:00" max="24:00">
						
						<br><br>
						<div>내용</div>
						<input id="textInput" type="text" placeholder="스케줄 내용을 입력해주세요">
						
						<br><br><br>
						<div id="checkboxContainer">
							<input id="checkboxInput" type="checkbox">
							<p id="checkboxNotice">중요 스케줄(체크 시 * 표시됩니다.)</p>
						</div>
					</div>
					<div class="modal-footer">
						<button id="cancelBtn" class="btn btn-default" onclick="cancel()">취소</button>
						<button id="saveBtn" class="btn btn-primary" onclick="save()">저장</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>













