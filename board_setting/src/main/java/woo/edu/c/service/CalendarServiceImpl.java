package woo.edu.c.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import woo.edu.c.controller.HomeController;
import woo.edu.c.dao.CalendarDao;
import woo.edu.c.vo.CalendarVo;

@Service
public class CalendarServiceImpl implements CalendarService {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Resource
	private CalendarDao calendarDao;
	
	// 스케줄 상세 조회
	@Override
	public List<CalendarVo> detailCalendar(CalendarVo vo) {
		return calendarDao.detailCalendar(vo);
	}

	// 스케줄 작성
	@Override
	public int insertCalendar(CalendarVo vo) {
		return calendarDao.insertCalendar(vo);
	}

	// 스케줄 삭제
	@Override
	public int deleteCalendar(int calNo) {
		return calendarDao.deleteCalendar(calNo);
	}

	// 스케줄 전체 조회
	@Override
	public List<CalendarVo> allSchedule(CalendarVo vo) {
		return calendarDao.allSchedule(vo);
	}
}
