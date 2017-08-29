package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Contract;
import com.exciteholidays.scm.domain.Room;
import com.exciteholidays.scm.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractService {

  private ContractRepository contractRepository;
  private SequenceGeneratorService sequenceGeneratorService;

  @Autowired
  public ContractService(ContractRepository contractRepository, SequenceGeneratorService sequenceGeneratorService) {
    this.contractRepository = contractRepository;
    this.sequenceGeneratorService = sequenceGeneratorService;
  }

  public Contract save(Contract contract) {
    if (contract.getId() == null) {
      contract.setId(sequenceGeneratorService.generateSequence("contract"));
    }
    contractRepository.save(contract);
    return contract;
  }

  public Iterable<Contract> findAll() {
    return contractRepository.findAll();
  }

  public Iterable<Contract> findByHotelId(Integer hotelId) {
    return contractRepository.findByHotelId(hotelId);
  }
}
