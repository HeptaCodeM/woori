package woo.edu.c.dao;

import java.util.List;

import woo.edu.c.vo.CalendarVo;

public interface CalendarDao {
	
	// 스케줄 상세 조회
	List<CalendarVo> detailCalendar(CalendarVo vo);
	
	// 스케줄 작성
	int insertCalendar(CalendarVo vo);
	
	// 스케줄 삭제
	int deleteCalendar(int calNo);
	
	// 스케줄 전체 조회
	List<CalendarVo> allSchedule(CalendarVo vo);
}
