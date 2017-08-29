package com.exciteholidays.scm.repository;

import com.exciteholidays.scm.domain.Room;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

public interface RoomRepository extends CassandraRepository<Room> {

  @Query("Select * from room_by_hotel_view where hotel_id =?0")
  public Iterable<Room> findByHotelId(Integer hotelId);


}
