package com.exciteholidays.scm.web.controller;

import com.exciteholidays.scm.domain.Hotel;
import com.exciteholidays.scm.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/scm/v1/hotels")
public class HotelController {

    private final HotelService hotelService;

    @Autowired
    public HotelController(HotelService hotelService) {
      this.hotelService = hotelService;
    }


    @GetMapping(path = "")
    public Iterable<Hotel> getAll() {
        return hotelService.findAllWithSortById();
    }

    @GetMapping(path = "/{id}")
    public Hotel get(@PathVariable("id") Long id) {
        return hotelService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Hotel> save(@RequestBody Hotel hotel) {
        Hotel savedHotel = hotelService.save(hotel);

      return new ResponseEntity<>(savedHotel, HttpStatus.CREATED);
    }

/*
    @PutMapping
    public ResponseEntity<Hotel> update(@RequestBody Hotel hotel) {
        Hotel savedHotel = hotelService.update(hotel);
        return new ResponseEntity<>(savedHotel, HttpStatus.CREATED);
    }

*/
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        hotelService.delete(id);
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }


}
