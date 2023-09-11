import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("notes").del();

    // Inserts seed entries
    await knex('notes').insert([
        {
            "id": 1,
            "title": "Grocery Shopping",
            "description": "Buy groceries for the week, including fruits, vegetables, meat, and cleaning supplies."
          },
          {
            "id": 2,
            "title": "Team Meeting",
            "description": "Attend the weekly team meeting to discuss project progress and set goals for the next week."
          },
          {
            "id": 3,
            "title": "Clean the Room",
            "description": "Organize the room, vacuum the floor, change the bed sheets, and tidy up the mess."
          },
          {
            "id": 4,
            "title": "Prepare Special Dinner",
            "description": "Cook a special dinner to celebrate a birthday or significant achievement."
          },
          {
            "id": 5,
            "title": "Physical Exercise",
            "description": "Do at least 30 minutes of exercise, such as running, yoga, or weightlifting."
          },
          {
            "id": 6,
            "title": "Read a Book",
            "description": "Read at least 20 pages of a book of your choice to stimulate the mind."
          },
          {
            "id": 7,
            "title": "Watch a Documentary",
            "description": "Choose an interesting documentary and watch it to learn something new."
          },
          {
            "id": 8,
            "title": "Garden Maintenance",
            "description": "Take care of the garden by watering the plants, trimming the trees, and removing weeds."
          },
          {
            "id": 9,
            "title": "Study for a Test",
            "description": "Review study materials and do practice exercises to prepare for an important test."
          },
          {
            "id": 10,
            "title": "Write in the Journal",
            "description": "Record thoughts, feelings, and daily events in a personal journal."
          }
      ]);
    
    if (knex.client.dialect === 'postgresql') {
        await knex.select(
            knex.raw("setval('notes_id_seq', (select max(id) from notes))")
        );
    }
};
