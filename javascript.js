let chaptersObj = {
  prologue: {
    subtitle: "Éveil du capitaine",
    text: ``,
    img: "assets/plage.jpg",
    options: [{}],
  },
  depart: {
    subtitle: "Planification de l'aventure",
    text: ``,
    img: "assets/planification.gif",
    options: [{}],
  },
  equipage: {
    subtitle: "Recrutement",
    text: ``,
    img: "assets/taverne.webp",
    options: [{}],
  },
  premier_choix: {
    subtitle: "Le guerrier et la navigatrice",
    text: ``,
    img: "assets/guerrier.jpg assets/navigatrice.jpg",
    options: [{}],
  },
  deuxieme_choix: {
    subtitle: "La guérisseuse et le musicien",
    text: ``,
    img: "assets/guerrisseuse assets/musicien.jpg",
    options: [{}],
  },
  embranchement_premier: {
    subtitle: "Première énigme",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  deuxieme_ile: {
    subtitle: "Emplacement de la deuxième île",
    text: ``,
    img: "assets/emplacement.jpg",
    options: [{}],
  },
  premier_objet: {
    subtitle: "La clé",
    text: ``,
    img: "assets/coffre.jpg",
    options: [{}],
  },
  premiere_mort: {
    subtitle: "Empallé",
    text: ``,
    img: "assets/empalement.png",
    options: [{}],
  },
  embranchement_deuxieme: {
    subtitle: "Première énigme",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  seconde_ile: {
    subtitle: "Emplacement de la deuxième île",
    text: ``,
    img: "assets/emplacement.jpg",
    options: [{}],
  },
  premier_objet_un: {
    subtitle: "La clé",
    text: ``,
    img: "assets/coffre.jpg",
    options: [{}],
  },
  premiere_mort_un: {
    subtitle: "Empallé",
    text: ``,
    img: "assets/empalement.png",
    options: [{}],
  },
  deuxieme_epreuve: {
    subtitle: "Seconde énigme",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  ile_finale: {
    subtitle: "Emplacement de l'île au trésor",
    text: ``,
    img: "assets/carte_tresor.jpg",
    options: [{}],
  },
  second_objet: {
    subtitle: "La serrure",
    text: ``,
    img: "assets/coffret.jpg",
    options: [{}],
  },
  deuxieme_mort: {
    subtitle: "Noyade",
    text: ``,
    img: "assets/noyade.jfif",
    options: [{}],
  },
  seconde_epreuve: {
    subtitle: "Seconde énigme",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  ile_tresor: {
    subtitle: "Emplacement de l'île au trésor",
    text: ``,
    img: "assets/carte_tresor.jpg",
    options: [{}],
  },
  deuxieme_objet: {
    subtitle: "La serrure",
    text: ``,
    img: "assets/coffret.jpg",
    options: [{}],
  },
  seconde_mort: {
    subtitle: "Noyade",
    text: ``,
    img: "assets/noyade.jfif",
    options: [{}],
  },
  epreuve_finale: {
    subtitle: "Énigme finale",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  tresor: {
    subtitle: "Emplacement du trésor",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  recommencer: {
    subtitle: "Mort brûlé",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  obtention_objets: {
    subtitle: "Est-ce que vous avez récupéré les objets?",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  reprendre: {
    subtitle: "Il manque l'un des objets",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  tresor_retrouve: {
    subtitle: "Consécration de la quête",
    text: ``,
    img: "assets/",
    options: [{}],
  },
  epilogue: {
    subtitle: "Célébration de l'équipage",
    text: ``,
    img: "assets/",
    options: [{}],
  },
};
function goToChapter(chapterName) {
  const chapitre = chapterName;
  console.log(chaptersObj[chapitre].subtitle);
  console.log(chaptersObj[chapitre].text);
  console.log(chaptersObj[chapitre].img);
  console.log(chaptersObj[chapitre].options);
}
goToChapter();
