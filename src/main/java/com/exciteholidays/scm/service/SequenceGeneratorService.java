package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Counters;
import com.exciteholidays.scm.repository.CounterRepository;
import org.springframework.stereotype.Service;

@Service
public class SequenceGeneratorService {
  private final CounterRepository counterRepository;

  public SequenceGeneratorService(CounterRepository counterRepository) {
    this.counterRepository = counterRepository;
  }

  public Long generateSequence(String tableName){
    counterRepository.updateSequence(tableName);
    Counters counters = counterRepository.findOne(tableName);
    return  counters.getSeq();
  }

}
