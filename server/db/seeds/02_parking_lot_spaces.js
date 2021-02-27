const tableNames = require("../../tableNames");
const Knex = require("knex");

// "E": Entrance
// "X": Exit
// "P": Parking Space
// "R": Road
// "B": Blank

const lot_shape_1 = [
  ["B", "X", "B", "B", "E", "B"], //Extra row for Entry and Exit
  ["B", "R", "B", "B", "R", "P"],
  ["B", "R", "B", "B", "R", "P"],
  ["B", "R", "B", "B", "R", "P"],
  ["B", "R", "B", "B", "R", "P"],
  ["B", "R", "B", "P", "R", "P"],
  ["B", "R", "B", "P", "R", "P"],
  ["B", "R", "B", "P", "R", "P"],
  ["B", "R", "B", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "B"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["P", "R", "P", "P", "R", "P"],
  ["B", "E", "B", "B", "X", "B"], //Extra row for Entry and Exit
];

/** @param {Knex} knex*/
function getRandomRow(knex, table_name) {
  return knex(table_name).orderByRaw("random()").select("id").first();
}

/** @param {Knex} knex*/
async function generateParkingSpace(knex, lot_shape, lot_id) {
  let slot_count = 1;
  for (let i = 0; i < lot_shape.length; i++) {
    const [lot_row] = await knex(tableNames.lot_row).insert(
      {
        parking_lot_id: lot_id,
      },
      ["id"]
    );
    for (let j = 0; j < lot_shape[i].length; j++) {
      await knex(tableNames.parking_space).insert({
        is_driver_disabled_parking: false,
        is_disabled: false,
        is_occupied: false,
        is_space: lot_shape[i][j] === "P",
        is_road: lot_shape[i][j] === "R",
        is_entry: lot_shape[i][j] === "E",
        is_exit: lot_shape[i][j] === "X",
        is_blank: lot_shape[i][j] === "B",
        rotation: 0,
        lot_row_id: lot_row.id,
        space_id: lot_shape[i][j] === "P" ? slot_count++ : null,
      });
    }
  }
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableNames.parking_space).del();
  await knex(tableNames.lot_row).del();

  await Promise.all([generateParkingSpace(knex, lot_shape_1, 1)]);
};
