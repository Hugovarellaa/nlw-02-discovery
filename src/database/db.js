const sqlite3 = require("sqlite3").verbose();

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(async () => {
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

  //  ------------- INSERIR NO BANCO DE DADOS --------------

  const proffy = {
    name: "Hugo Alves Varella",
    avatar: "http://github.com/Hugovarellaa.png",
    whatsapp: 61995995970,
    bio: "Alguma coisa",
  };

  const classValue = {
    // id: Virar do pelo banco de dados ao criar os proffys
    subject: "Desenvolvimento Web",
    cost: "200",
  };

  const classSchedule = [
    // class_id: virar do pelo banco de dados ao criar as classes
    {
      weekday: 1,
      time_from: 720,
      time_to: 1500,
    },
    {
      weekday: 0,
      time_from: 655,
      time_to: 1320,
    },
  ];

  function callback(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Cadastrado com sucesso");
  }

  const query = {};

  db.run(query, proffy, callback);
});

module.exports = db;
