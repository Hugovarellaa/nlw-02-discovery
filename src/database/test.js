const database = require("./index");

database.then((db) => {
  proffy = {
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

  classSchedule = [
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
});
