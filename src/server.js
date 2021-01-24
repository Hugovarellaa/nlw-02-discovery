const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const proffys = [
  {
    name: "Hugo Alves Varella",
    avatar: "https://github.com/Hugovarellaa.png",
    whatsapp: 61995995970,
    bio: `Entusiasta das melhores tecnologias de química avançada. Apaixonado
    por explodir coisas em laboratório e por mudar a vida das pessoas
    através de experiências. Mais de 200.000 pessoas já passaram por uma
    das minhas explosões.`,
    subject: "Química",
    cost: "100",
    weekday: [0],
    time_from: [722],
    time_to: [1220],
  },
  {
    name: "Mayk Brito",
    avatar: "https://github.com/maykbrito.png",
    whatsapp: 61995995970,
    bio: `Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
    Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"`,
    subject: "Educação Física",
    cost: "100",
    weekday: [0],
    time_from: [600],
    time_to: [900],
  },
];

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});

app.get("/study", (req, res) => {
  return res.sendFile(__dirname + "/views/study.html");
});

app.get("/give-classes", (req, res) => {
  return res.sendFile(__dirname + "/views/give-classes.html");
});

app.listen(3333, () => console.log("🚀🚀 Server running... 🚀🚀"));
