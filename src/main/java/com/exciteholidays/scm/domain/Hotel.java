package com.exciteholidays.scm.domain;
import org.springframework.cassandra.core.Ordering;
import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.Column;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;
import java.io.Serializable;
import java.util.Date;

@Table("hotel")
public class Hotel implements Serializable {

  private static final long serialVersionUID = 1L;


  @PrimaryKeyColumn(
    name = "id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
  private Long id;

  @PrimaryKeyColumn(
    name = "name",
    ordinal = 0,
    type = PrimaryKeyType.CLUSTERED,
    ordering = Ordering.ASCENDING)
  private String name;

  @Column
  private String address;

  @Column(value="post_code")
  private String postCode;

  @Column(value="country_id")
  private Integer countryId;

  @Column(value="date_created")
  private Date dateCreated ;

  @Column(value="last_updated")
  private Date lastUpdated ;

  @Column (value = "order_enable")
  private Boolean orderEnable ;

  public Hotel() {
  }

  public Hotel(String name) {
    this.name = name;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPostCode() {
    return postCode;
  }

  public void setPostCode(String postCode) {
    this.postCode = postCode;
  }

  public Integer getCountryId() {
    return countryId;
  }

  public void setCountryId(Integer countryId) {
    this.countryId = countryId;
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

  public Boolean getOrderEnable() {
    return orderEnable;
  }

  public void setOrderEnable(Boolean orderEnable) {
    this.orderEnable = orderEnable;
  }
}
