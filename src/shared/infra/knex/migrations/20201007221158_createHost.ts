import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension if not exists "uuid-ossp"');

  await knex.schema.createTable('hosts', table => {
    table.uuid('id').unique().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('host_verify').notNullable();
    table.boolean('host_type').notNullable();
    table.integer('stars').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('drop extension if exists "uuid-ossp"');

  await knex.schema.dropTable('hosts');
}
