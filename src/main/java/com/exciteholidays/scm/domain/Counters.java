package com.exciteholidays.scm.domain;

import org.springframework.cassandra.core.PrimaryKeyType;
import org.springframework.data.cassandra.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.mapping.Table;

import java.io.Serializable;;

@Table("counters")
public class Counters implements Serializable {

  private static final long serialVersionUID = 1L;

  @PrimaryKeyColumn(
  name = "id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
  private String id;
  private Long seq;

  public Counters(String id, Long seq) {
    this.id = id;
    this.seq = seq;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Long getSeq() {
    return seq;
  }

  public void setSeq(Long seq) {
    this.seq = seq;
  }

}
