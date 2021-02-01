const database = require("./index");

const createProffy = require("./createProffy");

database.then(async (db) => {
  proffyValue = {
    name: "Hugo Alves Varella",
    avatar: "https://github.com/Hugovarellaa.png",
    whatsapp: 61995995970,
    bio: `Entusiasta das melhores tecnologias de química avançada. Apaixonado
    por explodir coisas em laboratório e por mudar a vida das pessoas
    através de experiências. Mais de 200.000 pessoas já passaram por uma
    das minhas explosões.`,
  };

  classValue = {
    subject: "Química",
    cost: "100",
    // Proffy_id vai vim pelo Database
  };

  classScheduleValues = [
    // class_id virá pelo banco de dados, apos cadastramos a classe
    {
      weekday: 0,
      time_from: 722,
      time_to: 1220,
    },

    {
      weekday: 3,
      time_from: 520,
      time_to: 1302,
    },
  ];

  await createProffy(db, {
    proffyValue,
    classValue,
    classScheduleValues,
  });

  // Consultar os dados inseridos

  // todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys");
  console.log(selectedProffys);

  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);
  // console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
  // o time_to precisa acima
  const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `);

  // console.log(selectClassesSchedules)
});
