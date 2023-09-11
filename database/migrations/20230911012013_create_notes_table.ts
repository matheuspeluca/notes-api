import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('notes', table => {
        table.increments('id').primary();
        table.text('title').notNullable();
        table.text('description').nullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('notes');
}

