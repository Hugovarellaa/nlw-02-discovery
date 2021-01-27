const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "nunjucks");

nunjucks.configure("src/views", {
  express: app,
  noCache: true,
});

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

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

function homePage(request, response) {
  return response.render("index.html");
}

function studyPage(request, response) {
  const filters = request.query;

  return response.render("study.html", {
    proffys,
    filters,
    subjects,
    weekdays,
  });
}

function giveClassesPage(request, response) {
  return response.render("give-classes.html");
}

app.get("/", homePage);
app.get("/study", studyPage);
app.get("/give-classes", giveClassesPage);

app.listen(3333, () => console.log("🚀🚀 Server running... 🚀🚀"));
