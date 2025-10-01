import pool from './database.js';
import dotenv from './dotenv.js';
import eventData from '../data/events.js';

const createEventsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        artists TEXT[] NOT NULL,
        date DATE NOT NULL,
        time VARCHAR(10) NOT NULL,
        address VARCHAR(255) NOT NULL,
        price VARCHAR(10) NOT NULL,
        image VARCHAR(255) NOT NULL
    )
    `;

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating events table', err)
    }
};

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (name, artists, date, time, address, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            event.name,
            event.artists,
            event.date,
            event.time,
            event.address,
            event.price,
            event.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }

            console.log(`✅ ${event.name} added successfully`)
        });
    });
};

seedEventsTable();