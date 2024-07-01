package woo.edu.c.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import woo.edu.c.controller.HomeController;
import woo.edu.c.vo.testVo;

@Repository
public class BoardDaoImpl implements BoardDao {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Inject
	private SqlSession sql;
	
	private static String namespace = "boardMapper";

	// 게시글 조회
	@Override
	public List<testVo> test() {
		return sql.selectList(namespace + ".test");
	}

	// 게시글 작성
	@Override
	public int insertBoard(testVo vo) {
		return sql.insert(namespace + ".insertBoard", vo);
	}

	// 게시글 상세 조회
	@Override
	public testVo detailBoard(int boardNo) {
		return sql.selectOne(namespace + ".detailBoard", boardNo);
	}

	// 게시글 삭제
	@Override
	public int deleteBoard(int boardNo) {
		return sql.delete(namespace + ".deleteBoard", boardNo);
	}

	// 게시글 수정 GET
	@Override
	public testVo updateBoardGet(int boardNo) {
		return sql.selectOne(namespace + ".updateBoardGet", boardNo);
	}
	
	// 게시글 수정 POST
	@Override
	public int updateBoard(testVo vo) {
		return sql.update(namespace + ".updateBoard", vo);
	}

}
