const films = [
  {
    id: "1",
    titel: "Inception",
    jaar: 2010,
    duur: 148,
    beschrijving: "Een dief die bedrijfsgeheimen steelt via droomtechnologie krijgt de opdracht om een idee in iemands onderbewustzijn te planten.",
    genreIds: ["1", "2", "3"],
    regisseurId: "1",
    acteurIds: ["1", "2", "3"]
  },
  {
    id: "2",
    titel: "The Dark Knight",
    jaar: 2008,
    duur: 152,
    beschrijving: "Batman moet de chaos accepteren die door de Joker over Gotham wordt uitgestort.",
    genreIds: ["1", "4", "5"],
    regisseurId: "1",
    acteurIds: ["4", "5", "6"]
  },
  {
    id: "3",
    titel: "Interstellar",
    jaar: 2014,
    duur: 169,
    beschrijving: "Een team van ontdekkingsreizigers reist door een wormgat in de ruimte om de overleving van de mensheid te verzekeren.",
    genreIds: ["1", "2", "6"],
    regisseurId: "1",
    acteurIds: ["7", "8", "9"]
  },
  {
    id: "4",
    titel: "Pulp Fiction",
    jaar: 1994,
    duur: 154,
    beschrijving: "De levens van twee huurmoordenaars, een bokser en een gangsterpaar zijn verweven in vier verhalen.",
    genreIds: ["4", "5"],
    regisseurId: "2",
    acteurIds: ["10", "11", "12"]
  },
  {
    id: "5",
    titel: "The Matrix",
    jaar: 1999,
    duur: 136,
    beschrijving: "Een computerhacker leert van mysterieuze rebellen over de ware aard van zijn realiteit.",
    genreIds: ["1", "2"],
    regisseurId: "3",
    acteurIds: ["13", "14", "15"]
  }
];

module.exports = films;