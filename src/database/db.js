const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

db.serialize(() => {
  //  ------------- CRIAR O BANCO DE DADOS --------------
  db.run(`
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      avatar TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      bio TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT NOT NULL,
      cost TEXT NOT NULL,
      proffy_id INTEGER NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS class_schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER NOT NULL,
      weekday INTEGER NOT NULL,
      time_from INTEGER NOT NULL,
      time_to INTEGER NOT NULL
    );
  `);
});

module.exports = db;
