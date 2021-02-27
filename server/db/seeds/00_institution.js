const tableNames = require("../../tableNames");
const Knex = require("knex");
const faker = require("faker");

async function generateRandomInstitution(knex) {
  await knex(tableNames.institution).insert({
    name: faker.company.companyName(),
  });
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableNames.institution).del();

  await Promise.all(
    Array(5)
      .fill("")
      .map(() => generateRandomInstitution(knex))
  );
};
