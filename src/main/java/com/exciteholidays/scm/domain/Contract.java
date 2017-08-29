package com.exciteholidays.scm.domain;

import org.springframework.cassandra.core.Ordering;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.Column;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

import java.io.Serializable;
import java.util.Date;

@Table("contract")
public class Contract implements Serializable {

  private static final long serialVersionUID = 1L;

  @PrimaryKeyColumn(
    name = "id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
  private Long id;

  @PrimaryKeyColumn(
    name = "hotel_id",
    ordinal = 0,
    type = PrimaryKeyType.CLUSTERED,
    ordering = Ordering.ASCENDING)
  private Long hotelId;

  @Column(value="begin_stay_date")
  private Date beginStayDate;

  @Column(value="end_stay_date")
  private Date endStayDate;

  @Column(value="date_created")
  private Date dateCreated;

  @Column(value="last_updated")
  private Date lastUpdated;

  public Contract() {
  }

  public static long getSerialVersionUID() {
    return serialVersionUID;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getHotelId() {
    return hotelId;
  }

  public void setHotelId(Long hotelId) {
    this.hotelId = hotelId;
  }

  public Date getBeginStayDate() {
    return beginStayDate;
  }

  public void setBeginStayDate(Date beginStayDate) {
    this.beginStayDate = beginStayDate;
  }

  public Date getEndStayDate() {
    return endStayDate;
  }

  public void setEndStayDate(Date endStayDate) {
    this.endStayDate = endStayDate;
  }

  public Date getDateCreated() {
    return dateCreated;
  }

  public void setDateCreated(Date dateCreated) {
    this.dateCreated = dateCreated;
  }

  public Date getLastUpdated() {
    return lastUpdated;
  }

  public void setLastUpdated(Date lastUpdated) {
    this.lastUpdated = lastUpdated;
  }
}
