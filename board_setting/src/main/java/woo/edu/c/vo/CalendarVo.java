package woo.edu.c.vo;

import java.util.Date;

public class CalendarVo {

	private int calNo;
	private int calYear;
	private int calMonth;
	private int calDay;
	private String calTime;
	private String calReq;
	private Date calDate;
	private String calContents;
	
	public int getCalNo() {
		return calNo;
	}
	
	public void setCalNo(int calNo) {
		this.calNo = calNo;
	}
	
	public int getCalYear() {
		return calYear;
	}
	
	public void setCalYear(int calYear) {
		this.calYear = calYear;
	}
	
	public int getCalMonth() {
		return calMonth;
	}
	
	public void setCalMonth(int calMonth) {
		this.calMonth = calMonth;
	}
	
	public int getCalDay() {
		return calDay;
	}

	public void setCalDay(int calDay) {
		this.calDay = calDay;
	}

	public String getCalTime() {
		return calTime;
	}
	
	public void setCalTime(String calTime) {
		this.calTime = calTime;
	}
	
	public String getCalReq() {
		return calReq;
	}
	
	public void setCalReq(String calReq) {
		this.calReq = calReq;
	}
	
	public Date getCalDate() {
		return calDate;
	}
	
	public void setCalDate(Date calDate) {
		this.calDate = calDate;
	}
	
	public String getCalContents() {
		return calContents;
	}
	
	public void setCalContents(String calContents) {
		this.calContents = calContents;
	}
	
	@Override
	public String toString() {
		return "CalendarVo [calNo=" + calNo + ", calYear=" + calYear + ", calMonth=" + calMonth + ", calDay=" + calDay
				+ ", calTime=" + calTime + ", calReq=" + calReq + ", calDate=" + calDate + ", calContents="
				+ calContents + "]";
	}
}
