package com.exciteholidays.scm.service;

import com.exciteholidays.scm.domain.Hotel;

import java.util.List;
import java.util.UUID;

public interface HotelService {
    Hotel save(Hotel hotel);
    Hotel update(Hotel hotel);
    Hotel findOne(UUID uuid);
    void delete(UUID uuid);

    List<Hotel> findHotelsInState(String state);
    List<Hotel> findAll();
}
