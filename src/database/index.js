import { Database } from "sqlite-async";

function execute(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      avatar TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      bio TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT NOT NULL,
      cost TEXT NOT NULL,
      proffy_id INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER NOT NULL,
      weekday INTEGER NOT NULL,
      time_to INTEGER NOT NULL,
      time_from INTEGER NOT NULL
    );
  `);
}

module.exports = Database.open("./src/database/database.sqlite").then(execute);
