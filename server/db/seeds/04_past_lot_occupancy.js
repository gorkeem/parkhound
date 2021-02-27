const Knex = require("knex");
const faker = require("faker");
const tableNames = require("../../tableNames");

/** @param {Knex} knex*/
async function generatePastData(knex, date, lot_id = 1) {
  await knex(tableNames.past_lot_occupancy).insert([
    {
      parking_lot_id: lot_id,
      occupied: faker.random.number({ min: 60, max: 130 }),
      updated_at: date,
    },
  ]);
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableNames.past_lot_occupancy).del();

  await Promise.all(
    Array(6)
      .fill("")
      .map((_, i) => {
        const today = new Date();
        today.setHours(today.getHours() + i);

        return generatePastData(knex, today);
      })
  );

  await Promise.all(
    Array(6)
      .fill("")
      .map((_, i) => {
        const today = new Date();
        today.setHours(today.getHours() + i);

        return generatePastData(knex, today, 2);
      })
  );
};
