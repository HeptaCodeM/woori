package woo.edu.c.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import woo.edu.c.controller.HomeController;
import woo.edu.c.vo.CalendarVo;

@Repository
public class CalendarDaoImpl implements CalendarDao {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Inject
	private SqlSession sql;
	
	private static String namespace = "calendarMapper";
	
	// 스케줄 상세 조회
	@Override
	public List<CalendarVo> detailCalendar(CalendarVo vo) {
		return sql.selectList(namespace + ".detailCalendar", vo);
	}

	// 스케줄 작성
	@Override
	public int insertCalendar(CalendarVo vo) {
		return sql.insert(namespace + ".insertCalendar", vo);
	}

	// 스케줄 삭제
	@Override
	public int deleteCalendar(int calNo) {
		return sql.delete(namespace + ".deleteCalendar", calNo);
	}

	@Override
	public List<CalendarVo> allSchedule(CalendarVo vo) {
		return sql.selectList(namespace + ".allSchedule", vo);
	}
}
