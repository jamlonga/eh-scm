package com.exciteholidays.scm.service;

import com.datastax.driver.core.LocalDate;
import com.exciteholidays.scm.domain.Hotel;
import com.exciteholidays.scm.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.cassandra.repository.MapId;
import org.springframework.data.cassandra.repository.support.BasicMapId;
import org.springframework.stereotype.Service;

import java.util.Date;

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
    Boolean enableSaving = false;
    if (hotel.getId() == null) {
       hotel.setId(sequenceGeneratorService.generateSequence("hotel"));
       hotel.setDateCreated(LocalDate.fromMillisSinceEpoch(new Date().getTime()));
       enableSaving = true;
    }else{
      Hotel currentHotel = findById(hotel.getId());
      if(currentHotel !=null){
        hotel.setDateCreated(currentHotel.getDateCreated());
        enableSaving=true;
      }
    }
    if(enableSaving) {
      hotel.setLastUpdated(LocalDate.fromMillisSinceEpoch(new Date().getTime()));
      hotelRepository.save(hotel);
    }else{
      return null;
    }
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

  public void delete(Long id) {
    MapId mapId = new BasicMapId();
    mapId.put("id",id);
    hotelRepository.delete(mapId);
  }
}
