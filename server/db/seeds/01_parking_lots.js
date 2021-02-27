const tableNames = require("../../tableNames");
const Knex = require("knex");
const faker = require("faker");

const izmirCoordinates = ["38.454916", "27.190604"];
const ankaraCoordinates = ["39.841337", "32.700319"];
const ankara2Coordinates = ["39.924392", "32.837369"];

async function generateRandomParkingLot(
  knex,
  city,
  image = "",
  institution_id = 2
) {
  const nearbyLocation = faker.address.nearbyGPSCoordinate(city, 1);
  const [location_row] = await knex(tableNames.location).insert(
    {
      address: faker.address.secondaryAddress(),
      latitude: nearbyLocation[0],
      longitude: nearbyLocation[1],
    },
    ["id"]
  );

  await knex(tableNames.parking_lot).insert({
    name: faker.address.streetName(),
    location_id: location_row.id,
    institution_id: institution_id,
    lot_image: image,
    is_disabled: false,
  });
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableNames.parking_lot).del();
  await knex(tableNames.location).del();

  await Promise.all([
    generateRandomParkingLot(knex, izmirCoordinates, "/cnr_park.jpg", 1),
    generateRandomParkingLot(knex, izmirCoordinates, "/test_park_large.jpg", 1),
    generateRandomParkingLot(knex, izmirCoordinates, "/test_park.jpg", 1),
  ]);

  await Promise.all(
    Array(3)
      .fill("")
      .map(() => generateRandomParkingLot(knex, ankaraCoordinates))
  );

  await Promise.all(
    Array(3)
      .fill("")
      .map(() => generateRandomParkingLot(knex, ankara2Coordinates))
  );
};
