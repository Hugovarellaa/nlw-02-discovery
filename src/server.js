const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

// Config styles in folder public
app.use(express.static("public"));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config Nunjucks
nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
  noCache: true,
});

const proffys = [
  {
    id: "1",
    name: "Hugo Alves Varella",
    avatar_url: "http://github.com/Hugovarellaa.png",
    whatsapp: 61995995970,
    bio: `Entusiasta das melhores tecnologias de química avançada.
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    subject: "Química",
    cost: "100",
    weekday: [0, 1, 2],
    time_from: [720],
    time_to: [1500],
  },

  {
    id: "2",
    name: "Mayk Brito",
    avatar_url: "http://github.com/maykbrito.png",
    whatsapp: 61995995970,
    bio: `Entusiasta das melhores tecnologias de química avançada.
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    subject: "Português",
    cost: "89",
    weekday: [3],
    time_from: [555],
    time_to: [889],
  },

  {
    id: "3",
    name: "Diego Fernandes",
    avatar_url: "http://github.com/diego3g.png",
    whatsapp: 61995995970,
    bio: `Entusiasta das melhores tecnologias de química avançada.
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    subject: "Artes",
    cost: "89",
    weekday: [3, 4, 5],
    time_from: [650],
    time_to: [1200],
  },
];

app.get("/", (req, res) => {
  console.log(data);

  return res.render("index.html");
});

app.get("/study", (req, res) => {
  const data = req.query;
  console.log(data);
  return res.render("study.html", { proffys });
});

app.get("/give-classes", (req, res) => {
  return res.render("give-classes.html");
});

app.listen(8080, () =>
  console.log("Server listening on port http://localhost:8080")
);
