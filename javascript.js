let chaptersObj = {
  prologue: {
    subtitle: "Éveil du capitaine",
    text: ``,
    img: "assets/plage.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`depart`)",
      },
    ],
  },
  depart: {
    subtitle: "Planification de l'aventure",
    text: ``,
    img: "assets/planification.gif",
    options: [
      {
        text: "",
        action: "goToChapter(`equipage`)",
      },
    ],
  },
  equipage: {
    subtitle: "Recrutement",
    text: ``,
    img: "assets/taverne.webp",
    options: [
      {
        text: "",
        action: "goToChapter(`premier_choix`)",
      },
      {
        text: "",
        action: "goToChapter(`deuxieme_choix`)",
      },
    ],
  },
  premier_choix: {
    subtitle: "Le guerrier et la navigatrice",
    text: ``,
    img: "assets/guerrier.jpg assets/navigatrice.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`embranchement_premier`)",
      },
    ],
  },
  deuxieme_choix: {
    subtitle: "La guérisseuse et le musicien",
    text: ``,
    img: "assets/guerrisseuse assets/musicien.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`embranchement_deuxieme`)",
      },
    ],
  },
  embranchement_premier: {
    subtitle: "Première énigme",
    text: ``,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`deuxieme_ile`)",
      },
      {
        text: "",
        action: "goToChapter(`premier_objet`)",
      },
    ],
  },
  deuxieme_ile: {
    subtitle: "Emplacement de la deuxième île",
    text: ``,
    img: "assets/emplacement.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`deuxieme_epreuve`)",
      },
      {
        text: "",
        action: "goToChapter(`premiere_mort`)",
      },
    ],
  },
  premier_objet: {
    subtitle: "La clé",
    text: ``,
    img: "assets/coffre.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`deuxieme_epreuve`)",
      },
      {
        text: "",
        action: "goToChapter(`premiere_mort`)",
      },
    ],
  },
  premiere_mort: {
    subtitle: "Empallé",
    text: ``,
    img: "assets/empalement.png",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  embranchement_deuxieme: {
    subtitle: "Première énigme",
    text: ``,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`seconde_ile`)",
      },
      {
        text: "",
        action: "goToChapter(`premier_objet_un`)",
      },
    ],
  },
  seconde_ile: {
    subtitle: "Emplacement de la deuxième île",
    text: ``,
    img: "assets/emplacement.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`deuxieme_epreuve`)",
      },
      {
        text: "",
        action: "goToChapter(`premiere_mort_un`)",
      },
    ],
  },
  premier_objet_un: {
    subtitle: "La clé",
    text: ``,
    img: "assets/coffre.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`deuxieme_epreuve`)",
      },
      {
        text: "",
        action: "goToChapter(`premiere_mort_un`)",
      },
    ],
  },
  premiere_mort_un: {
    subtitle: "Empallé",
    text: ``,
    img: "assets/empalement.png",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  deuxieme_epreuve: {
    subtitle: "Seconde énigme",
    text: ``,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`ile_finale`)",
      },
      {
        text: "",
        action: "goToChapter(`seconde_objet`)",
      },
    ],
  },
  ile_finale: {
    subtitle: "Emplacement de l'île au trésor",
    text: ``,
    img: "assets/carte_tresor.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`epreuve_finale`)",
      },
      {
        text: "",
        action: "goToChapter(`deuxieme_mort`)",
      },
    ],
  },
  second_objet: {
    subtitle: "La serrure",
    text: ``,
    img: "assets/coffret.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`epreuve_finale`)",
      },
      {
        text: "",
        action: "goToChapter(`deuxieme_mort`)",
      },
    ],
  },
  deuxieme_mort: {
    subtitle: "Noyade",
    text: ``,
    img: "assets/noyade.jfif",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  seconde_epreuve: {
    subtitle: "Seconde énigme",
    text: ``,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`seconde_ile`)",
      },
    ],
  },
  ile_tresor: {
    subtitle: "Emplacement de l'île au trésor",
    text: ``,
    img: "assets/carte_tresor.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`epreuve_finale`)",
      },
      {
        text: "",
        action: "goToChapter(`seconde_mort`)",
      },
    ],
  },
  deuxieme_objet: {
    subtitle: "La serrure",
    text: ``,
    img: "assets/coffret.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`epreuve_finale`)",
      },
      {
        text: "",
        action: "goToChapter(`seconde_mort`)",
      },
    ],
  },
  seconde_mort: {
    subtitle: "Noyade",
    text: ``,
    img: "assets/noyade.jfif",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  epreuve_finale: {
    subtitle: "Énigme finale",
    text: ``,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`tresor)",
      },
      {
        text: "",
        action: "goToChapter(`obtention_objets`)",
      },
    ],
  },
  tresor: {
    subtitle: "Emplacement du trésor",
    text: ``,
    img: "assets/emplacement_final.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`tresor_retrouve`)",
      },
      {
        text: "",
        action: "goToChapter(`recommencer`)",
      },
    ],
  },
  recommencer: {
    subtitle: "Mort brûlé",
    text: ``,
    img: "assets/incineration.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  obtention_objets: {
    subtitle: "Est-ce que vous avez récupéré les objets?",
    text: ``,
    img: "assets/questionnement.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`tresor_retrouve`)",
      },
      {
        text: "",
        action:
          "goToChapter(`premier_objet`)" /*Poser question au professeur sur la possibilité avec javascript de reprendre une épreuve*/,
      },
      {
        text: "",
        action: "goToChapter(`reprendre`)",
      },
    ],
  },
  reprendre: {
    subtitle: "Il manque l'un des objets",
    text: ``,
    img: "assets/recommencer.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  tresor_retrouve: {
    subtitle: "Consécration de la quête",
    text: ``,
    img: "assets/ouverture_coffre_tresor.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`epilogue`)",
      },
    ],
  },
  epilogue: {
    subtitle: "Célébration de l'équipage",
    text: ``,
    img: "assets/celebration.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`prologue`)",
      },
    ],
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
