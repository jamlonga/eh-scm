package com.exciteholidays.scm.web.controller;

import com.exciteholidays.scm.domain.Hotel;
import com.exciteholidays.scm.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/scm/v1/hotels")
public class HotelController {

    private final HotelService hotelService;

    @Autowired
    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping(path = "")
    public List<Hotel> getAll() {
        return this.hotelService.findAll();
    }
    @GetMapping(path = "/{id}")
    public Hotel get(@PathVariable("id") UUID uuid) {
        return this.hotelService.findOne(uuid);
    }

    @PostMapping
    public ResponseEntity<Hotel> save(@RequestBody Hotel hotel) {
        Hotel savedHotel = this.hotelService.save(hotel);
        return new ResponseEntity<>(savedHotel, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Hotel> update(@RequestBody Hotel hotel) {
        Hotel savedHotel = this.hotelService.update(hotel);
        return new ResponseEntity<>(savedHotel, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") UUID uuid) {
        this.hotelService.delete(uuid);
        return new ResponseEntity<>("Deleted", HttpStatus.ACCEPTED);
    }

    @GetMapping(path = "/fromstate/{state}")
    public List<Hotel> findHotelsInState(@PathVariable("state") String state) {
        return this.hotelService.findHotelsInState(state);
    }
}
