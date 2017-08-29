package com.exciteholidays.scm.repository;

import com.exciteholidays.scm.domain.Counters;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

public interface CounterRepository extends CassandraRepository<Counters> {
  @Query("Select * from counters where id = ?0")
  public Counters findOne(String tableName);

  @Query("Update counters set seq = seq+1 where id = ?0")
  public void updateSequence(String tableName);
}
