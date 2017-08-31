package com.exciteholidays.scm.domain;

import com.datastax.driver.core.LocalDate;
import org.springframework.cassandra.core.Ordering;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.Column;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

import java.io.Serializable;
import java.util.Date;

@Table("room")
public class Room implements Serializable {

  private static final long serialVersionUID = 1L;

  @PrimaryKeyColumn(
    name = "id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
  private Long id;

  @Column(value="hotel_id")
  private Long hotelId;

  @Column(value="room_type_id")
  private Integer roomTypeId;

  @Column(value="room_name")
  private String roomName;

  @Column(value="date_created")
  private LocalDate dateCreated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  @Column(value="last_updated")
  private LocalDate lastUpdated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  public Room() {
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

  public Integer getRoomTypeId() {
    return roomTypeId;
  }

  public void setRoomTypeId(Integer roomTypeId) {
    this.roomTypeId = roomTypeId;
  }

  public String getRoomName() {
    return roomName;
  }

  public void setRoomName(String roomName) {
    this.roomName = roomName;
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
