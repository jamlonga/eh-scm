package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Hotel;
import com.exciteholidays.scm.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.cassandra.repository.MapId;
import org.springframework.data.cassandra.repository.support.BasicMapId;
import org.springframework.stereotype.Service;

@Service
public class HotelService {

  private HotelRepository hotelRepository;
  private SequenceGeneratorService sequenceGeneratorService;

  @Autowired
  public HotelService(HotelRepository hotelRepository,
                      SequenceGeneratorService sequenceGeneratorService) {
    this.hotelRepository = hotelRepository;
    this.sequenceGeneratorService = sequenceGeneratorService;
  }

  public Hotel save(Hotel hotel) {
      if (hotel.getId() == null) {
         hotel.setId(sequenceGeneratorService.generateSequence("hotel"));
      }
      hotelRepository.save(hotel);
      return hotel;
  }

  public Hotel findById(Long id) {

    MapId mapId = new BasicMapId();
    mapId.put("id",id);
    return hotelRepository.findOne(mapId);
  }

  public Iterable<Hotel> findAll() {
    return hotelRepository.findAll();
  }

  public Iterable<Hotel> findAllWithSortById() {
    return hotelRepository.sortById();
  }
}
