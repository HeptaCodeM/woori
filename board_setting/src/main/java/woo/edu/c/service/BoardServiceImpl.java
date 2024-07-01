package woo.edu.c.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import woo.edu.c.controller.HomeController;
import woo.edu.c.dao.BoardDao;
import woo.edu.c.vo.testVo;


@Service
@Primary
public class BoardServiceImpl implements BoardService{
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Resource
	private BoardDao boardDao;

	// 게시글 조회
	@Override
	public List<testVo> test() {
		return boardDao.test();
	}

	// 게시글 작성
	@Override
	public int insertBoard(testVo vo) {
		return boardDao.insertBoard(vo);
	}

	// 게시글 상세 조회
	@Override
	public testVo detailBoard(int boardNo) {
		return boardDao.detailBoard(boardNo);
	}

	// 게시글 삭제
	@Override
	public int deleteBoard(int boardNo) {
		return boardDao.deleteBoard(boardNo);
	}

	// 게시글 수정 GET
	@Override
	public testVo updateBoardGet(int boardNo) {
		return boardDao.updateBoardGet(boardNo);
	}
	
	// 게시글 수정 POST
	@Override
	public int updateBoard(testVo vo) {
		return boardDao.updateBoard(vo);
	}

	
}
