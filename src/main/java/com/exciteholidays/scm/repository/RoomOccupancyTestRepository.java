package com.exciteholidays.scm.repository;

import com.datastax.driver.core.querybuilder.QueryBuilder;
import com.datastax.driver.core.querybuilder.Select;
import com.exciteholidays.scm.domain.RoomOccupancy;
import org.springframework.data.cassandra.core.CassandraOperations;
import org.springframework.data.repository.Repository;

@org.springframework.stereotype.Repository
public class RoomOccupancyTestRepository {

  private final CassandraOperations cassandraTemplate;

  public RoomOccupancyTestRepository(CassandraOperations cassandraTemplate) {
    this.cassandraTemplate = cassandraTemplate;
  }

  public RoomOccupancy save(RoomOccupancy roomOccupancy) {
    return cassandraTemplate.insert(roomOccupancy);
  }

  public RoomOccupancy update(RoomOccupancy roomOccupancy) {
    return cassandraTemplate.update(roomOccupancy);
  }

  public RoomOccupancy findOne(Integer roomId) {
    return cassandraTemplate.selectOneById(RoomOccupancy.class, roomId);
  }

  public void delete(Integer roomId) {
    cassandraTemplate.deleteById(RoomOccupancy.class, roomId);
  }

  public RoomOccupancy findByContractIdAndRoomId(Integer contractId, Integer roomId) {
    Select select = QueryBuilder.select().from(" room_occupancy");
    select.where(QueryBuilder.eq("contract_id", contractId));
    select.where(QueryBuilder.eq("room_id", roomId));
    return cassandraTemplate.selectOne(select, RoomOccupancy.class);
  }

}
