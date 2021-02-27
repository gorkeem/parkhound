const Knex = require("knex");
const bcrypt = require("bcrypt");
const faker = require("faker");
const tableNames = require("../../tableNames");

/** @param {Knex} knex*/
async function generateUser(knex, institution_id = 2, is_admin = false) {
  const first_name = faker.name.firstName();

  const [user] = await knex(tableNames.user).insert(
    [
      {
        email: `${first_name}@park.com`,
        first_name: first_name,
        last_name: faker.name.lastName(),
        password: await bcrypt.hash("12345678", 10),
      },
    ],
    ["id"]
  );

  await knex(tableNames.user_institution).insert([
    {
      user_id: user.id,
      institution_id,
      is_admin,
    },
  ]);
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableNames.user).del();
  await generateUser(knex, 1, true);
  await Promise.all([
    ...Array(3)
      .fill("")
      .map(() => generateUser(knex)),
    ...Array(10)
      .fill("")
      .map(() => generateUser(knex, 1)),
  ]);
};
