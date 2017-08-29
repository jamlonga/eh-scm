package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Contract;
import com.exciteholidays.scm.domain.Room;
import com.exciteholidays.scm.domain.RoomOccupancy;
import com.exciteholidays.scm.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class RoomOccupancyService {

  private RoomOccupancyRepository roomOccupancyRepository;
  private SequenceGeneratorService sequenceGeneratorService;
  private RoomOccupancyTestRepository roomOccupancyTestRepository;
  private RoomRepository roomRepository;
  private ContractRepository contractRepository;
  private HotelRepository hotelRepository;

  @Autowired
  public RoomOccupancyService(RoomOccupancyRepository roomOccupancyRepository,
                              SequenceGeneratorService sequenceGeneratorService,
                              RoomOccupancyTestRepository roomOccupancyTestRepository,
                              RoomRepository roomRepository,
                              ContractRepository contractRepository,
                              HotelRepository hotelRepository) {
    this.roomOccupancyRepository = roomOccupancyRepository;
    this.sequenceGeneratorService = sequenceGeneratorService;
    this.roomOccupancyTestRepository = roomOccupancyTestRepository;
    this.roomRepository = roomRepository;
    this.contractRepository = contractRepository;
    this.hotelRepository = hotelRepository;
  }

  public RoomOccupancy save(RoomOccupancy roomOccupancy) {
    if (roomOccupancy.getId() == null) {
      roomOccupancy.setId(sequenceGeneratorService.generateSequence("room_occupancy"));
    }
    roomOccupancyRepository.save(roomOccupancy);
    return roomOccupancy;
  }

  public RoomOccupancy findByContractIdAndRoomId(Long contractId, Long roomId) {
    return roomOccupancyRepository.findByContractIdAndRoomId(contractId,roomId); //by using interface of CassandraRepository
    //return  roomOccupancyTestRepository.findByContractIdAndRoomId(contractId, roomId); // by using cassandraTemplate
  }

  public Iterable<RoomOccupancy> findAll() {
    Iterable<RoomOccupancy> roomOccupancyIterable = roomOccupancyRepository.findAll();
    return  roomOccupancyIterable;

  }

  public Iterable<RoomOccupancy> findByHotelId(Integer hotelId) {
    Iterable<Room> rooms = roomRepository.findByHotelId(hotelId);
    Iterable<Contract> contracts = contractRepository.findByHotelId(hotelId);

    List<RoomOccupancy> roomOccupancyList = new ArrayList<>();
    contracts.forEach( contract-> {
      rooms.forEach(room -> {
        RoomOccupancy roomOccupancy = roomOccupancyRepository.findByContractIdAndRoomId(contract.getId(),room.getId());
        if(roomOccupancy!=null) {
          roomOccupancyList.add(roomOccupancy);
        }
      });
    });

    return roomOccupancyList;
  }
}
