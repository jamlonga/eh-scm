package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Hotel;
import com.exciteholidays.scm.repository.HotelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;

    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Hotel save(Hotel hotel) {
        if (hotel.getId() == null) {
            hotel.setId(UUID.randomUUID());
        }
        this.hotelRepository.save(hotel);
        return hotel;
    }

    @Override
    public Hotel update(Hotel hotel) {
        Hotel existingHotel = this.hotelRepository.findOne(hotel.getId());
        if (existingHotel != null) {
          this.hotelRepository.update(hotel);
        }
        return hotel;
    }

    @Override
    public Hotel findOne(UUID uuid) {
        return this.hotelRepository.findOne(uuid);
    }

    @Override
    public void delete(UUID uuid) {
        Hotel hotel = this.hotelRepository.findOne(uuid);
        if (hotel != null) {
            this.hotelRepository.delete(uuid);
        }
    }

    @Override
    public List<Hotel> findHotelsInState(String state) {
        return this.hotelRepository.findByState(state);
    }

    @Override
    public List<Hotel> findAll() {
        return this.hotelRepository.findAll();
    }
}
