package woo.edu.c.controller;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import woo.edu.c.dao.BoardDao;
import woo.edu.c.service.BoardService;
import woo.edu.c.service.CalendarService;
import woo.edu.c.vo.CalendarVo;
import woo.edu.c.vo.testVo;

@Controller
public class BoardController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Inject
	private BoardService boardService;
	
	@Inject
	private CalendarService calendarService;
	
	
	// 메인 화면
	@RequestMapping(value = "/boardhome")
	public String home(Model model, HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("/boardhome");
		return "/boardhome";
	}
	
	// 게시판 조회 GET
	@RequestMapping(value = "boardList", method = RequestMethod.GET)
	public String boardList(Model model) throws Exception {
		logger.info("boardList");
		List<testVo> boards = boardService.test();
		model.addAttribute("boards", boards);
		return "boardList";
	}
		
	// 게시글 작성 GET
	@RequestMapping(value = "boardWrite", method = RequestMethod.GET)
	public String boardWrite(Model model) throws Exception {
		logger.info("boardWrite");
		return "boardWrite";
	}
	
	// 게시글 작성 POST
	@RequestMapping(value = "boardWrite", method = RequestMethod.POST)
	public String boardWrite(@ModelAttribute("vo") testVo vo) throws Exception {
		logger.info("boardWrite 전");
		boardService.insertBoard(vo);
		logger.info("boardWrite 후" + vo);
		logger.info("boardWrite 후");
		return "redirect:/boardList";
	}
	
	// 게시글 상세 조회 GET
	@RequestMapping(value = "/detailBoard", method = RequestMethod.GET)
	public String detailBoard(@RequestParam("boardNo") int boardNo, Model model) throws Exception {
		logger.info("detailBoard");
		testVo vo = boardService.detailBoard(boardNo);
		model.addAttribute("vo", vo);
		return "detailBoard";
	}
	
	// 게시글 삭제 POST
	@RequestMapping(value = "/deleteBoard", method = RequestMethod.POST)
	public String deleteBoard(@RequestParam("boardNo") int boardNo) throws Exception {
		logger.info("deleteBoard");
		boardService.deleteBoard(boardNo);
		return "redirect:/boardList";
	}
	
	// 게시글 수정 GET
	@RequestMapping(value = "updateBoard", method = RequestMethod.GET)
	public String updateBoardGet(@RequestParam("boardNo") int boardNo, Model model) throws Exception {
		logger.info("updateBoardGet");
		testVo vo = boardService.updateBoardGet(boardNo);
		model.addAttribute("vo", vo);
		logger.info("updateBoardGet후" + vo);
		return "updateBoard";
	}
	
	// 게시글 수정 POST
	@RequestMapping(value = "updateBoard", method = RequestMethod.POST)
	public String updateBoard(@ModelAttribute("vo") testVo vo) throws Exception {
		logger.info("updateBoard");
		logger.info("updateBoard전" + vo);
		logger.info("title" + vo.getTitle());
		logger.info("writter" + vo.getWritter());
		logger.info("content" + vo.getContent());
		logger.info("boardNo" + vo.getBoardNo());
		boardService.updateBoard(vo);
		logger.info("updateBoard후" + vo);
		logger.info("updateBoard후--------");
		return "redirect:/boardList";
	}
	
	// AJAX 게시글 조회 화면 이동 GET
	@RequestMapping(value = "boardListAjax", method = RequestMethod.GET)
	public String boardListAjaxGet() throws Exception {
		logger.info("boardListAjaxGet");
		return "boardListAjax";
	}
	
	// AJAX 게시글 조회 POST
	@RequestMapping(value = "boardListAjax", method = RequestMethod.POST)
	@ResponseBody
	public List<testVo> boardListAjax() throws Exception {
		logger.info("boardListAjax");
		List<testVo> boards = boardService.test();
		logger.info("boards" + boards);
		return boards;
	}
	
	// AJAX 게시글 삭제 DELETE
	@RequestMapping(value = "deleteBoardAjax", method = RequestMethod.DELETE)
	@ResponseBody
	public int deleteBoardAjax(@RequestBody testVo vo) throws Exception {
		logger.info("deleteBoard : " + vo);
		int boardNo = vo.getBoardNo();
		int deleteBoard = boardService.deleteBoard(boardNo);
		return deleteBoard;
	}
	
	// AJAX 게시글 작성 POST
	@RequestMapping(value = "boardWriteAjax", method = RequestMethod.POST)
	@ResponseBody
	public String boardWriteAjax(@RequestBody testVo vo) throws Exception {
		logger.info("boardWriteAjax : " + vo);
		boardService.insertBoard(vo);
		int boardNo = vo.getBoardNo();
		logger.info(String.valueOf(boardNo));
		return String.valueOf(boardNo);
	}
	
	// AJAX 게시글 상세 조회 POST
	@RequestMapping(value = "detailBoardAjax", method = RequestMethod.POST)
	@ResponseBody
	public testVo detailBoardAjax(@RequestBody testVo vo) throws Exception {
		int boardNo = vo.getBoardNo();
		logger.info("boardNo >>>" + boardNo);
		testVo detailBoard = boardService.detailBoard(boardNo);
		logger.info("detailBoard >>" + detailBoard);
		return detailBoard;
	}
	
	// test 화면 조회
	@RequestMapping(value = "/test")
	public String testHome(Model model, HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("/test");
		return "test";
	}
	
	// 계산기 화면 조회
	@RequestMapping(value = "/calcul")
	public String calculatorHome(Model model, HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("/calcul");
		return "calcul";
	}
	
	// 캘린더 화면 조회
	@RequestMapping(value = "/calendar")
	public String calendarHome(Model model, HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("/calendar");
		return "calendar";
	}
	
	// AJAX 스케줄 상세 조회 POST
	@RequestMapping(value = "/detailCalendar", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<CalendarVo>> detailCalendar(@RequestBody Map<String, Object> map) throws Exception {
		logger.info(" detailCalendar map : " + map);
		CalendarVo vo = new CalendarVo();
		logger.info(" detailCalendar vo : " + vo);
		vo.setCalYear(Integer.parseInt(map.get("calYear").toString()));
		vo.setCalMonth(Integer.parseInt(map.get("calMonth").toString()));
		vo.setCalDay((int)Double.parseDouble(map.get("calDay").toString()));
		logger.info("vo later : " + vo);
		
		List<CalendarVo> resultVoList = (List<CalendarVo>)calendarService.detailCalendar(vo);
		logger.info("detailCalendar resultVoList : " + resultVoList);
		
		return ResponseEntity.ok(resultVoList);
	}
	
	// AJAX 스케줄 작성 POST
	@RequestMapping(value = "insertCalendar", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> insertCalendar(@RequestBody CalendarVo vo) throws Exception {
		logger.info(" insertCalendar vo : " + vo);
		calendarService.insertCalendar(vo);
		int calNo = vo.getCalNo();
		return ResponseEntity.ok(calNo);
	}

	// AJAX 스케줄 삭제 DELETE
	@RequestMapping(value = "deleteCalendar", method = RequestMethod.DELETE)
	@ResponseBody
	public int deleteCalendar(@RequestBody CalendarVo vo) throws Exception {
		logger.info("deleteCalendar vo : " + vo);
		int calNo = vo.getCalNo();
		logger.info("delete calNo  : " + calNo);
		int deleteCalendar = calendarService.deleteCalendar(calNo);
		logger.info("delete deleteCalendar : " + deleteCalendar);
		return deleteCalendar;
	}
	
	// AJAX 스케줄 전체 조회 POST
	@RequestMapping(value = "allSchedule", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<CalendarVo>> allSchedule(@RequestBody CalendarVo vo) throws Exception {
		logger.info("allSchedule vo" + vo);
		List<CalendarVo> allSchedule = calendarService.allSchedule(vo);
		logger.info("allSchedule allSchedule" + allSchedule);
		return ResponseEntity.ok(allSchedule);
	}
	
}




