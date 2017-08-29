package com.exciteholidays.scm.domain;

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

  @PrimaryKeyColumn(
    name = "hotel_id",
    ordinal = 0,
    type = PrimaryKeyType.CLUSTERED,
    ordering = Ordering.ASCENDING)
  private Long hotelId;

  @Column(value="room_type_id")
  private Integer roomTypeId;

  @Column(value="room_name")
  private String roomName;

  @Column(value="date_created")
  private Date dateCreated;

  @Column(value="last_updated")
  private Date lastUpdated;

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
