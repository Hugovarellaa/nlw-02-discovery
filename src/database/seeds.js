const db = require("./db");

db.run(() => {
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

  //  ------------- CONSULTA MO BANCO DE DADOS --------------
});
