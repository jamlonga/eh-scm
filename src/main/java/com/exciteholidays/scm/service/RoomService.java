package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Room;
import com.exciteholidays.scm.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

  private RoomRepository roomRepository;
  private SequenceGeneratorService sequenceGeneratorService;

  @Autowired
  public RoomService(RoomRepository roomRepository, SequenceGeneratorService sequenceGeneratorService) {
    this.roomRepository = roomRepository;
    this.sequenceGeneratorService = sequenceGeneratorService;
  }

  public Room save(Room room) {
    if (room.getId() == null) {
      room.setId(sequenceGeneratorService.generateSequence("room"));
    }
    roomRepository.save(room);
    return room;
  }

  public Iterable<Room> findAll() {
    return roomRepository.findAll();
  }

  public Iterable<Room> findByHotelId(Integer hotelId) {
    return roomRepository.findByHotelId(hotelId);
  }

}
