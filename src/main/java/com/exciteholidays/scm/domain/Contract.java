package com.exciteholidays.scm.domain;

import com.datastax.driver.core.LocalDate;
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

  @Column(value="hotel_id")
  private Long hotelId;

  @Column(value="begin_stay_date")
  private Date beginStayDate;

  @Column(value="end_stay_date")
  private Date endStayDate;

  @Column(value="date_created")
  private LocalDate dateCreated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  @Column(value="last_updated")
  private LocalDate lastUpdated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

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

  public LocalDate getDateCreated() {
    return dateCreated;
  }

  public void setDateCreated(LocalDate dateCreated) {
    this.dateCreated = dateCreated;
  }

  public LocalDate getLastUpdated() {
    return lastUpdated;
  }

  public void setLastUpdated(LocalDate lastUpdated) {
    this.lastUpdated = lastUpdated;
  }
}
