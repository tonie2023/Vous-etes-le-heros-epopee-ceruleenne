let chaptersObj = {
  prologue: {
    subtitle: "Éveil du capitaine",
    text: `Sur une île, sur une plage au ciel azur, un homme se reposant dans un hamac s'éveilla. "Ahhhhh, j'ai bien dormi, cela faisait longtemps que je n'ai eu une bonne nuit de sommeil. Oh, bonjour joueur(euse), je n'avais pas pris conscience que tu étais arrivé. 
     Je m'appelle Red J Hawk, je suis le capitaine du Silver Hawk et je m'apprête à aller en ville 
     pour prendre mon premier repas de la journée. Suit moi, car on ne sait jamais quand une aventure 
     peut nous tomber dessus!!!"`,
    img: "assets/plage.jpg",
    options: [
      {
        text: "Suivre le capitaine",
        action: "goToChapter(`depart`)",
      },
    ],
  },
  depart: {
    subtitle: "Planification de l'aventure",
    text: `Unr fois arrivé en ville, le capitaine Red J Hawk se dirigea vers la taverne de la ville pour y prendre son déjeuner.
    Une fois attablé et après avoir commencé à manger, il s'interompit et se tourna vers le joueur(euse). "Tu te demandes sûrement pourquoi
    nous sommes dans une taverne, alors laisse moi t'expliquer. Si nous sommes, ici, c'est pour recruter un équipage pour une aventure menant
    à retrouver un fabuleux trésor perdu dont j'ai retrouvé le premier indice. Je suis à la recherche d'un équipage de 3 membres dont soit un 
    guerrier et une navigatrice ou une guérisseuse et un musicien. Finalement, quant au troisième, il s'agit du poste de quartier-maître. Si tu es intéressé par l'aventure, je t'offre le poste.
    Qu'en dis-tu? Est-ce que tu acceptes mon offre? "`,
    img: "assets/planification.gif",
    options: [
      {
        text: "J'accepte votre offre!",
        action: "goToChapter(`equipage`)",
      },
    ],
  },
  equipage: {
    subtitle: "Recrutement",
    text: `Dans un coin de la taverne, il y a un panneau où il est possible de recruter des membres d'équipage.
    À ce moment le capitaine Red J Hawk m'expliqua le fonctionnement du panneau de recrutement. "Écoute bien, comme je l'ai
    dit plus tôt, je recherche un guerrier et une navigatrice ou une guérisseuse et un musicien. Chacun d'entre eux possèdent 
    des caractéristiques et des qualités qui leurs sont propres. Alors, choisit bien, car si tu hésites tu peux toujours choisir l'autre
    option. Mais, une fois que ton choix est fait, tu ne peux revenir en arrière!" Sachant cela que sera t'on choix?`,
    img: "assets/taverne.webp",
    options: [
      {
        text: "Choisir",
        action: "goToChapter(`premier_choix`)",
      },
      {
        text: "Choisir",
        action: "goToChapter(`deuxieme_choix`)",
      },
    ],
  },
  premier_choix: {
    subtitle: "Le guerrier et la navigatrice",
    text: `Le capitaine vous invite à lire les fiches descriptives du guerrier et de la navigatrice.`,
    img: "assets/guerrier.jpg assets/navigatrice.jpg",
    options: [
      {
        text: "",
        action: "goToChapter(`embranchement_premier`)",
      },
      {
        text: "",
        action: "goToChapter(`equipage`)",
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
      {
        text: "",
        action: "goToChapter(`equipage`)",
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
