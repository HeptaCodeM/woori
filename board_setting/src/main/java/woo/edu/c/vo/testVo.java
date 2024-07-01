package woo.edu.c.vo;

import java.util.Date;

public class testVo {

	private int boardNo;
	private String title;
	private String writter;
	private String content;
	private Date createAt;
	
	public int getBoardNo() {
		return boardNo;
	}
	
	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getWritter() {
		return writter;
	}
	
	public void setWritter(String writter) {
		this.writter = writter;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public Date getCreateAt() {
		return createAt;
	}
	
	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}
	
	@Override
	public String toString() {
		return "testVo [boardNo=" + boardNo + ", title=" + title + ", writter=" + writter + ", content=" + content
				+ ", createAt=" + createAt + "]";
	}
}
