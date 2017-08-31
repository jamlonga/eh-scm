package com.exciteholidays.scm.repository;

import com.exciteholidays.scm.domain.RoomOccupancy;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

public interface RoomOccupancyRepository extends CassandraRepository<RoomOccupancy> {

  @Override
  @Query("Select * from room_occupancy limit 15")
  Iterable<RoomOccupancy> findAll();

  @Query("Select * from room_occupancy where contract_id = ?0 and room_id = ?1 limit 1")
  public RoomOccupancy findByContractIdAndRoomId(Long contractId, Long roomId);
}
