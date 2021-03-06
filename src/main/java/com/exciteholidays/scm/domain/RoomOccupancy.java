package com.exciteholidays.scm.domain;

import com.datastax.driver.core.LocalDate;
import org.springframework.cassandra.core.Ordering;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.Column;
import org.springframework.data.cassandra.mapping.Indexed;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

import java.io.Serializable;
import java.util.Date;

@Table("room_occupancy")
public class RoomOccupancy implements Serializable {

  private static final long serialVersionUID = 1L;

  @PrimaryKeyColumn(
    name = "contract_id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
  @Column(value="contract_id")
  private Long contractId;

  @PrimaryKeyColumn(
    name = "room_id", ordinal = 1, type = PrimaryKeyType.PARTITIONED)
  @Column(value="room_id")
  private Long roomId;

  @Column(value="max_pax")
  private Integer maxPax;

  @Column(value="min_pax")
  private Integer minPax;

  @Column(value="max_adt")
  private Integer maxAdt;

  @Column(value="min_adt")
  private Integer minAdt;

  @Column(value="max_chd")
  private Integer maxChd;

  @Column(value="max_adt_chd")
  private Integer maxAdtChd;

  @Column(value="baby_cot")
  private Boolean babyCot;

  @Column(value="order_sort")
  private Integer order_sort;

  @Column(value="date_created")
  private LocalDate dateCreated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  @Column(value="last_updated")
  private LocalDate lastUpdated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  public RoomOccupancy() {
  }

  public Long getRoomId() {
    return roomId;
  }

  public void setRoomId(Long roomId) {
    this.roomId = roomId;
  }

  public Long getContractId() {
    return contractId;
  }

  public void setContractId(Long contractId) {
    this.contractId = contractId;
  }

  public Integer getMaxPax() {
    return maxPax;
  }

  public void setMaxPax(Integer maxPax) {
    this.maxPax = maxPax;
  }

  public Integer getMinPax() {
    return minPax;
  }

  public void setMinPax(Integer minPax) {
    this.minPax = minPax;
  }

  public Integer getMaxAdt() {
    return maxAdt;
  }

  public void setMaxAdt(Integer maxAdt) {
    this.maxAdt = maxAdt;
  }

  public Integer getMinAdt() {
    return minAdt;
  }

  public void setMinAdt(Integer minAdt) {
    this.minAdt = minAdt;
  }

  public Integer getMaxChd() {
    return maxChd;
  }

  public void setMaxChd(Integer maxChd) {
    this.maxChd = maxChd;
  }

  public Integer getMaxAdtChd() {
    return maxAdtChd;
  }

  public void setMaxAdtChd(Integer maxAdtChd) {
    this.maxAdtChd = maxAdtChd;
  }

  public Boolean getBabyCot() {
    return babyCot;
  }

  public void setBabyCot(Boolean babyCot) {
    this.babyCot = babyCot;
  }

  public Integer getOrder_sort() {
    return order_sort;
  }

  public void setOrder_sort(Integer order_sort) {
    this.order_sort = order_sort;
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
