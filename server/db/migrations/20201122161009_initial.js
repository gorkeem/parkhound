const tableNames = require("../../tableNames");
const Knex = require("knex");

const viewNames = {
  vacant_space: "vacant_space",
};

/** @param {Knex} knex*/
function createNameTable(knex, table_name) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable().unique();
  });
}

function url(table, columnName) {
  table.string(columnName, 2000);
}

function email(table, columnName) {
  return table.string(columnName, 254);
}

function references(table, tableName, notNullable = true, columnName = "") {
  const definition = table
    .integer(`${columnName || tableName}_id`)
    .unsigned()
    .references("id")
    .inTable(tableName)
    .onDelete("cascade");

  if (notNullable) {
    definition.notNullable();
  }
  return definition;
}

/** @param {Knex} knex*/
exports.up = async function (knex) {
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.timestamps(false, true);
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("password", 127).notNullable();
    email(table, "email").unique();
  });

  await knex.schema.createTable(tableNames.institution, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable();
  });

  await knex.schema.createTable(tableNames.user_institution, (table) => {
    references(table, tableNames.user);
    references(table, tableNames.institution);
    table.boolean("is_admin").notNullable();
    table.unique([`${tableNames.user}_id`, `${tableNames.institution}_id`]);
  });

  await knex.schema.createTable(tableNames.location, (table) => {
    table.increments().notNullable();
    table.string("address").nullable();
    table.float("latitude").notNullable();
    table.float("longitude").notNullable();
  });

  await knex.schema.createTable(tableNames.parking_lot, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable();
    table.boolean("is_disabled").notNullable();
    url(table, "lot_image");
    references(table, tableNames.location);
    references(table, tableNames.institution);
  });

  await knex.schema.createTable(tableNames.lot_row, (table) => {
    table.increments().notNullable();
    references(table, tableNames.parking_lot);
  });

  await knex.schema.createTable(tableNames.parking_space, (table) => {
    table.increments().notNullable();
    table.boolean("is_driver_disabled_parking").notNullable();
    table.boolean("is_disabled").notNullable();
    table.boolean("is_occupied").notNullable();
    table.boolean("is_space").notNullable();
    table.boolean("is_road").notNullable();
    table.boolean("is_entry").notNullable();
    table.boolean("is_exit").notNullable();
    table.boolean("is_blank").notNullable();
    table.integer("rotation").notNullable();
    table.integer("space_id").nullable();
    references(table, tableNames.lot_row);
  });

  await knex.schema.createTable(tableNames.past_lot_occupancy, (table) => {
    table.increments().notNullable();
    references(table, tableNames.parking_lot);
    table.integer("occupied").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(tableNames.favorites, (table) => {
    references(table, tableNames.user);
    references(table, tableNames.parking_lot);
    table.unique([`${tableNames.user}_id`, `${tableNames.parking_lot}_id`]);
  });

  //Views
  const vacantSpaceView = `
    SELECT ${tableNames.parking_lot}.id, 
    SUM(CASE WHEN ${tableNames.parking_space}.space_id IS NOT NULL = true THEN 1 else 0 end) as capacity,
    SUM(CASE WHEN ${tableNames.parking_space}.space_id IS NOT NULL AND ${tableNames.parking_space}.is_occupied = false AND ${tableNames.parking_space}.is_disabled = false THEN 1 else 0 end) as vacant_count
    FROM ${tableNames.parking_lot}
    JOIN ${tableNames.lot_row} ON ${tableNames.parking_lot}.id = ${tableNames.lot_row}.${tableNames.parking_lot}_id
    JOIN ${tableNames.parking_space} on ${tableNames.lot_row}.id = ${tableNames.parking_space}.${tableNames.lot_row}_id
    GROUP BY ${tableNames.parking_lot}.id;
`;

  await knex.schema.raw(`CREATE OR REPLACE VIEW ${viewNames.vacant_space} AS
      ${vacantSpaceView}
  `);
};

exports.down = async function (knex) {
  //Views
  await knex.schema.raw(`DROP VIEW IF EXISTS ${viewNames.vacant_space}`);
  await Promise.all(
    Object.values(tableNames).map((table) =>
      knex.schema.dropTableIfExists(table)
    )
  );
};
