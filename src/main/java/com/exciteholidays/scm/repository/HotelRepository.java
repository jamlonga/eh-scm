package com.exciteholidays.scm.repository;

import com.exciteholidays.scm.domain.Hotel;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

public interface HotelRepository extends CassandraRepository<Hotel> {
  @Query("Select * from hotel where name = ?0 allow filtering")
  public Hotel findByName(String name);

  @Query("Select * from hotel_sort_by_id limit 15")
  public Iterable<Hotel> sortById();
}
