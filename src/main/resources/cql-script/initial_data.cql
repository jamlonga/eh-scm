
CREATE KEYSPACE eh_scm
WITH replication = {
'class' : 'SimpleStrategy',
'replication_factor' : 4
};

use eh_scm;

CREATE TABLE counters (
id text,
seq counter,
PRIMARY KEY (id)
);

CREATE TABLE contract (
  hotel_id int,
  id int,
  begin_stay_date date,
  date_created date,
  end_stay_date date,
  last_updated date,
  PRIMARY KEY (id,hotel_id)
);

CREATE TABLE hotel (
  name text,
  id int,
  address text,
  country_id int,
  date_created date,
  last_updated date,
  post_code text,
  order_enable boolean,
  PRIMARY KEY (id,name)
);

CREATE TABLE room (
  hotel_id int,
  id int,
  date_created date,
  last_updated date,
  room_name text,
  room_type_id int,
  PRIMARY KEY (id,hotel_id)
);


CREATE TABLE room_occupancy (
  id int,
  contract_id int,
  room_id int,
  baby_cot boolean,
  date_created date,
  last_updated date,
  max_adt int,
  max_adt_chd int,
  max_chd int,
  max_pax int,
  min_adt int,
  min_chd int,
  min_pax int,
  order_sort int,
  PRIMARY KEY (id, contract_id, room_id)
);

CREATE MATERIALIZED VIEW hotel_sort_by_id AS
SELECT *
FROM hotel
WHERE order_enable IS NOT NULL AND id IS NOT NULL AND name IS NOT NULL
PRIMARY KEY ( order_enable, id, name )
WITH CLUSTERING ORDER BY ( id ASC, name ASC );

CREATE MATERIALIZED VIEW room_occupancy_by_contract_room_view AS
SELECT *
FROM room_occupancy
WHERE contract_id IS NOT NULL AND room_id IS NOT NULL AND id IS NOT NULL
PRIMARY KEY ( ( contract_id, room_id ), id );

CREATE MATERIALIZED VIEW room_by_hotel_view AS
SELECT id,hotel_id
FROM room
WHERE id IS NOT NULL AND hotel_id IS NOT NULL
PRIMARY KEY (hotel_id,id);


CREATE MATERIALIZED VIEW contract_by_hotel_view AS
SELECT id,hotel_id
FROM contract
WHERE id IS NOT NULL AND hotel_id IS NOT NULL
PRIMARY KEY (hotel_id,id);
