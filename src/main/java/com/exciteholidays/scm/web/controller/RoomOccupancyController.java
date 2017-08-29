package com.exciteholidays.scm.web.controller;

import com.exciteholidays.scm.domain.*;
import com.exciteholidays.scm.service.ContractService;
import com.exciteholidays.scm.service.HotelService;
import com.exciteholidays.scm.service.RoomOccupancyService;
import com.exciteholidays.scm.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/scm/v1/occupancy")
public class RoomOccupancyController {

  private final HotelService hotelService;
  private final ContractService contractService;
  private final RoomService roomService;
  private final RoomOccupancyService roomOccupancyService;
  private static final Logger LOGGER = LoggerFactory.getLogger(RoomOccupancyController.class);


  @Autowired
  public RoomOccupancyController(HotelService hotelService, ContractService contractService, RoomService roomService, RoomOccupancyService roomOccupancyService) {
    this.hotelService = hotelService;
    this.contractService = contractService;
    this.roomService = roomService;
    this.roomOccupancyService = roomOccupancyService;
  }

  @GetMapping(path = "/list")
  public ResponseEntity<Iterable<RoomOccupancy>> findAll() {
    Iterable<RoomOccupancy> roomOccupancyIterable= roomOccupancyService.findAll();
    return new ResponseEntity<>(roomOccupancyIterable, HttpStatus.OK);
  }

  @GetMapping(path = "/room")
  public ResponseEntity<RoomOccupancy> findByContractAndRoom(@RequestParam (name = "contract_id", required = true) Long contractId,
                                                                               @RequestParam (name = "room_id", required = true) Long roomId) {
    RoomOccupancy roomMView = roomOccupancyService.findByContractIdAndRoomId(contractId,roomId);
    return new ResponseEntity<>(roomMView, HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<Iterable<RoomOccupancy>> findByHotelId(@RequestParam (name = "hotel_id", required = true) Integer hotelId) {
    Iterable<RoomOccupancy> roomOccupancyIterable= roomOccupancyService.findByHotelId(hotelId);
    return new ResponseEntity<>(roomOccupancyIterable, HttpStatus.OK);
  }
  @PostMapping(path = "/bulk_create")
  public ResponseEntity<String> save() {
/*
    for (int i=0;i<10000;i++) {
      Hotel hotel = new Hotel();
      hotel.setName("Hotel Test"+i);
      hotel.setOrderEnable(true);
      hotelService.save(hotel);
      LOGGER.debug("h:"+i);
      System.out.println("h:"+i);

    }*/
    Iterable<Hotel> hotels = hotelService.findAll();
  /*  hotels.forEach(hotel -> {
        for (int j = 0; j < 5; j++) {
          Contract contract = new Contract();
          contract.setHotelId(hotel.getId());
          contractService.save(contract);
          LOGGER.debug("c:"+j);
          System.out.println("c:"+j);
        }
        for (int j = 0; j < 10; j++) {
          Room room = new Room();
          room.setHotelId(hotel.getId());
          room.setRoomName("Room Test"+j);
          roomService.save(room);
          LOGGER.debug("r:"+j);
          System.out.println("r:"+j);
        }
      }
    );
*/

    Iterable<Contract> contracts = contractService.findAll();
    contracts.forEach(contract -> {
      Iterable<Room> rooms = roomService.findByHotelId(Integer.parseInt(contract.getHotelId().toString()));
        rooms.forEach(room -> {
            RoomOccupancy roomOccupancy = new RoomOccupancy();
            roomOccupancy.setContractId(contract.getId());
            roomOccupancy.setRoomId(room.getId());
            roomOccupancy.setMaxAdt(4);
            roomOccupancy.setBabyCot(false);
            roomOccupancy.setMaxAdtChd(0);
            roomOccupancy.setMaxChd(0);
            roomOccupancy.setMaxPax(4);
            roomOccupancy.setMinAdt(1);
            roomOccupancyService.save(roomOccupancy);
            LOGGER.debug("save contract:" + contract.getId() + " , room:" + room.getId());

        });
      }
    );

    return new ResponseEntity<>("Finish", HttpStatus.CREATED);
  }

  /*
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
  */
}
