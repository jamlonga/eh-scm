package com.exciteholidays.scm.domain;
import com.datastax.driver.core.LocalDate;
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

  @Column (value = "name")
  private String name;

  @Column (value = "address")
  private String address;

  @Column(value="post_code")
  private String postCode;

  @Column(value="country_id")
  private Integer countryId;

  @Column(value="date_created")
  private LocalDate dateCreated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  @Column(value="last_updated")
  private LocalDate lastUpdated = LocalDate.fromMillisSinceEpoch(new Date().getTime());

  @Column (value = "order_enable")
  private Boolean orderEnable = true;

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

  public Boolean getOrderEnable() {
    return orderEnable;
  }

  public void setOrderEnable(Boolean orderEnable) {
    this.orderEnable = orderEnable;
  }
}
