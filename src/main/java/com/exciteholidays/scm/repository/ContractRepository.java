package com.exciteholidays.scm.repository;

import com.exciteholidays.scm.domain.Contract;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

public interface ContractRepository extends CassandraRepository<Contract> {

  @Query("Select * from contract_by_hotel_id where hotel_id =?0")
  Iterable<Contract> findByHotelId(Integer hotelId);
}
