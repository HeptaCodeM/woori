package woo.edu.c.dao;

import java.util.List;

import woo.edu.c.vo.testVo;

public interface BoardDao {

	// 게시글 조회
	List<testVo> test();
	
	// 게시글 작성
	int insertBoard(testVo vo);
	
	// 게시글 상세 조회
	testVo detailBoard(int boardNo);
	
	// 게시글 삭제
	int deleteBoard(int boardNo);
	
	// 게시글 수정 GET
	testVo updateBoardGet(int boardNo);
	
	// 게시글 수정 POST
	int updateBoard(testVo vo);
}
