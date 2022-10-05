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
        text: "Choix 1",
        action: "goToChapter(`premier_choix`)",
      },
      {
        text: "Choix 2",
        action: "goToChapter(`deuxieme_choix`)",
      },
    ],
  },
  premier_choix: {
    subtitle: "Le guerrier et la navigatrice",
    text: `Le capitaine vous invite à lire les fiches descriptives du guerrier et de la navigatrice.
    Le guerrier s'appelle Gedric, il a 26 ans. Gedric est un épéiste expert qui apprécie les bonnes batailles
    et qui possède des qualités de stratèges. Fait intéressant : Il s'intéresse à la mythologie greco-romaine.
    La navigatrice, quant à elle, se prénome Alicia, elle a 21 ans. Ne vous fiez à ce que vous lisez, malgré 
    son jeune âge, elle possède un sens de l'orientation hors norme qui lui a permis de faire ses preuves en mer.
    Fait intéressant : Il n'est pas rare de la voir le soir observer les étoiles avec un livre d'astronomie à côté d'elle.`,
    img: "assets/guerrier.jpg",
    options: [
      {
        text: "Choisir",
        action: "goToChapter(`selection_equipage`)",
      },
      {
        text: "Retour",
        action: "goToChapter(`equipage`)",
      },
    ],
  },
  deuxieme_choix: {
    subtitle: "La guérisseuse et le musicien",
    text: `Le capitaine vous invite à lire les fiches descriptives de la guérisseuse et du musicien.
    La guérisseuse s'appelle Annabelle, elle a 32 ans. Annabelle se spécialise dans le domaine de l'apothicaire,
    se qui signifie qu'elle peut être considérée comme étant une experte des plantes médicinale. Ses connaissances
    font d'elle, une allié de poids en cas d'attaque ennemi. Fait intéressant : Elle est épicurienne et elle s'intéresse aux épices.
    Le musicien, quant à lui, se prénome Brook, il a 41 ans. Ce musicien traîne sa bosse depuis 20 ans. Il se vante notamment
    d'avoir composé certaines chansons les plus populaires des 20 dernières années. Sa musique est un baume à la monotonie 
    lors de longs jours en mer. Fait intéressant : Il dit connaitre la différence entre les divers types musicaux.`,
    img: "assets/guerrisseuse.jpg",
    options: [
      {
        text: "Choisir",
        action: "goToChapter(`selection_equipage`)",
      },
      {
        text: "Retour",
        action: "goToChapter(`equipage`)",
      },
    ],
  },
  selection_equipage: {
    subtitle: "Départ vers l'aventure",
    text: `Une fois le choix fait, l'équipage nouvellement formé se dirigea vers le bateau Silver Kawk. Une fois à bord, 
    le capitaine prononça un discours : "Chers membres d'équipage, je vous remercie d'avoir accepté de prendre par à cette
    aventure. Ce voyage sera perilleux, mais sera également source de richesse, car j'ai avec moi le premier indice pour
    retrouver un fabuleux trésor perdu. Alors, courage matelots et partons à l'aventure!" Avant de véritablement commencer
    votre aventure, il reste une dernière information vitale à vous transmettre. Les boutons ci-dessous représente votre
    choix d'équipage, mais également la branche de l'histoire du jeu propre à votre choix plus haut.`,
    img: "assets/decision.gif",
    options: [
      {
        text: "Le guerrier et la navigatrice",
        action: "goToChapter(`embranchement_premier`)",
      },
      {
        text: "La guérisseuse et le musicien",
        action: "goToChapter(`embranchement_deuxieme`)",
      },
    ],
  },
  embranchement_premier: {
    subtitle: "Première épreuve",
    text: `Félicitation chers joueurs(ses), votre aventure commence, ici, et maintenant! Le premier indice retrouvé par le
    capitaine Red J hawk a révélé deux informations cruciales pour pouvoir retrouver le trésor perdu. Tout d'abord, il vous
    faudra soit résoudre des énigmes ou retrouver certains objets magique essentiels pour pouvoir passer à la prochaine étape
    de la quête. Mais, commençons par une énigme qui déterminera la suite de votre aventure : "On peut m'apercevoir sur une carte.
    J'aide les marins à s'orienter en mer. Mais, pourtant on m'attribura le nom d'une fleur. Qui suis-je? "`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "Rose des vents",
        action: "goToChapter(`deuxieme_ile`)",
      },
      {
        text: "Vent rose",
        action: "goToChapter(`premier_objet`)",
      },
    ],
  },
  deuxieme_ile: {
    subtitle: "Première énigme",
    text: `Sur le navire dans le quais de la ville, le capitaine énonça la première énigme permettant d'obtenir l'emplacement
    de la deuxième île où est caché le second indice. Voici, l'énigme : On me voit sur la voute céleste. Je suis un amalgame 
    d'étoile ayant la forme d'un instrument de cuisine. Pourtant, je suis plus grande que ma jumelle plus petite. Qui suis-je?
    Alicia la navigatrice réfléchissant dit : "Est-ce que le nom de cet amalgame d'étoile pourrait être associé au monde animal
    aquatique ou terrestre?"`,
    img: "assets/emplacement.jpg",
    options: [
      {
        text: "La Grande Ourse ",
        action: "goToChapter(`deuxieme_epreuve`)",
      },
      {
        text: "La petite Ourse",
        action: "goToChapter(`premiere_mort`)",
      },
    ],
  },
  premier_objet: {
    subtitle: "La clé",
    text: `Sur le navire dans le quais de la ville, le capitaine énonça la première énigme permettant d'obtenir l'emplacement
    de la deuxième île où est caché le second indice. Voici, l'énigme :  On me voit sur la voute céleste. Je suis un amalgame 
    d'étoile ayant la forme d'un instrument de cuisine. Pourtant, je suis plus petite que ma jumelle plus grande. Qui suis-je?
    Alicia la navigatrice réfléchissant dit : "Est-ce que le nom de cet amalgame d'étoile pourrait être associé au monde animal
    aquatique ou terrestre?"`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "La Petite Ourse",
        action: "second_objet",
      },
      {
        text: "L'étoile du nord",
        action: "impactKey()",
      },
    ],
  },
  objet_introuvable: {
    subtitle: "Clé introuvable",
    text: `Vous n'avez pas réussi à obtenir la clé, mais en temps que maître du jeu je vous permet de continuer pour essayer de finir le jeu.
    Voici les coordonnés de la prochaine île.`,
    img: "assets/indecis.png",
    options: [
      {
        text: "Vous n'avez pas réussi à obtenir la clé!",
        action: "goToChapter(`second_objet`)",
      },
    ],
  },
  premiere_mort: {
    subtitle: "Empallé",
    text: `Étant toujours en réflexion pour résoudre l'énigme pour trouver l'emplacement de la seconde île ou du premier objet. 
    Ils ne s'aperçurent pas de la présence sur le bateau qu'un équipage d'un autre bateau ayant ententu à la taverne le récit du capitaine sur
    le premier indice pour retrouver un trésor était monté à bord. Discrètement, ils se positionnèrent et passèrent à l'acte, mais Gedric les ayant
    aperçu il y a quelque instant s'écria : "NOUS SOMMES ATTAQUÉ!!!". Mais, avant que toi joueur(se) ait le temps de réagir, une lame d'épée t'empalla
    par derrière au niveau du coeur causant une mort quasi instantanée.`,
    img: "assets/empalement.png",
    options: [
      {
        text: "Veuillez recommencer!",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  embranchement_deuxieme: {
    subtitle: "Première énigme",
    text: `Félicitation chers joueurs(ses), votre aventure commence, ici, et maintenant! Le premier indice retrouvé par le
    capitaine Red J hawk a révélé deux informations cruciales pour pouvoir retrouver le trésor perdu. Tout d'abord, il vous
    faudra soit résoudre des énigmes ou retrouver certains objets magique essentiels pour pouvoir passer à la prochaine étape
    de la quête. Mais, commençons par une énigme qui déterminera la suite de votre aventure : "Depuis l'aube de la Renaissance,
    on me convoite dans les pays d'Europe de l'Ouest. Nous venons par des routes terrestres ou maritimes. Pourtant les croyances
    populaires à tort ou à raison surnomme deux pays comme étant : Le royaume des épices." Qui suis-je?`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "Inde",
        action: "goToChapter(`seconde_ile`)",
      },
      {
        text: "Japon",
        action: "goToChapter(`premier_objet_un`)",
      },
    ],
  },
  seconde_ile: {
    subtitle: "Emplacement de la deuxième île",
    text: `Sur le navire dans le quais de la ville, le capitaine énonça la première énigme permettant d'obtenir l'emplacement
    de la deuxième île où est caché le second indice. Voici, l'énigme : "Nous sommes deux épices de couleur orange et l'autre de couleur
    jaune venant de l'Inde. Du point de vue médicale, Nous sommes bénéfique pour la santé. Pourtant, l'une d'entre nous est une seule épice
    alors que l'autre est un mélange d'épice." Qui-suis-je?`,
    img: "assets/emplacement.jpg",
    options: [
      {
        text: "Curcuma",
        action: "goToChapter(`seconde_epreuve`)",
      },
      {
        text: "Poudre de curry",
        action: "goToChapter(`premiere_mort_un`)",
      },
    ],
  },
  premier_objet_un: {
    subtitle: "La clé",
    text: `Sur le navire dans le quais de la ville, le capitaine énonça la première énigme permettant d'obtenir l'emplacement
    de la deuxième île où est caché le second indice. Voici, l'énigme : "Je suis un type de musique. Il est connu des marins.
    Il est reconnu pour synchroniser et faire oublier la monotonie des voyages en mer." Qui suis-je?`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "Chants de marins",
        action: "deuxieme_objet",
      },
      {
        text: "Chants de travail",
        action: "impactKey()",
      },
    ],
  },
  objet_absent: {
    subtitle: "Clé introuvable",
    text: `Vous n'avez pas réussi à obtenir la clé, mais en temps que maître du jeu je vous permet de continuer pour essayer de finir le jeu.
    Voici les coordonnés de la prochaine île.`,
    img: "assets/indecis.png",
    options: [
      {
        text: "Vous n'avez pas réussi à obtenir la clé!",
        action: "goToChapter(`deuxieme_objet`)",
      },
    ],
  },
  premiere_mort_un: {
    subtitle: "Empallé",
    text: `Étant toujours en réflexion pour résoudre l'énigme pour trouver l'emplacement de la seconde île ou du premier objet. 
    Ils ne s'aperçurent pas de la présence sur le bateau qu'un équipage d'un autre bateau ayant ententu à la taverne le récit du capitaine sur
    le premier indice pour retrouver un trésor était monté à bord. Discrètement, ils se positionnèrent et passèrent à l'acte, mais Gedric les ayant
    aperçu il y a quelque instant s'écria : "NOUS SOMMES ATTAQUÉ!!!". Mais, avant que toi joueur(se) ait le temps de réagir, une lame d'épée t'empalla
    par derrière au niveau du coeur causant une mort quasi instantanée.`,
    img: "assets/empalement.png",
    options: [
      {
        text: "Veuillez recommencer!",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  deuxieme_epreuve: {
    subtitle: "Seconde île",
    text: `Félicitation d'avoir résolu la première énigme! La première énigme sur le premier indice s'effaça et prit la forme d'une carte indiquant l'emplacement
    de la seconde île et du deuxième indice. Le capitaine s'écria : "En route moussaillons, cap sur la deuxième île, larguer les amarres!!!" Cela vous prit 6
    jours pour arriver à destination et quelques heures pour trouver l'indice.`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`ile_finale`)",
      },
    ],
  },
  ile_finale: {
    subtitle: "Emplacement de l'île au trésor",
    text: `Une fois arrivé sur deuxième île. La carte indiqua l'emplacement du second indice. Après un périple dans la jungle, ils trouvèrent un coffre sur un autel.
    En l'ouvrant, ils découvrirent le second indice. Le capitaine s'exclama et dit : "Nous l'avons trouvé moussaillons, le deuxième indice!".
    Gedric dit : "Liser la nous capitaine!". Alors le capitaine la lisa à haute voix : "Nous sommes une seule et même déesse, mais avec des noms différents.
    Nous sommes issues du monde gréco-romain. et pourtant, je porte le nom du ville." Qui suis-je?`,
    img: "assets/carte_tresor.jpg",
    options: [
      {
        text: "La déesse Athéna",
        action: "goToChapter(`epreuve_finale`)",
      },
      {
        text: "La déesse Minerve",
        action: "goToChapter(`deuxieme_mort`)",
      },
    ],
  },
  second_objet: {
    subtitle: "La serrure",
    text: `Après avoir réussit l'énigme. le premier indice commença à changer de forme pour devenir une clé. Tout le monde en fut perplexe. Car, ils se demandèrent
     comment feraient-ils pour atteindre la seconde île. C'est alors qu'ils virent la clé tournée sur elle-même pour finalement indiquer une direction. Le capitaine
     s'exclama : "Mais, bien sûr! Cette clé ne nous donnes pas l'emplacement de la seconde île, mais elle nous indique la direction à suivre comme elle était une boussole.
     Retournons au bateau matelots et suivons les directions de la clé!!!" Après un voyage de 8 jours à suivre les directions de la clé magique, ils arrivèrent à l'île et qui
     par la suite les conduisit au second indice.
     Le capitaine se mit à lire à haute voix : "Je fais partie du panthéon des dieux romains. On m'appel la protectrice de la Ville de Rome." Qui suis-je?`,
    img: "assets/cle.jpg",
    options: [
      {
        text: "La déesse Minerve",
        action: "deuxieme_objet",
      },
      {
        text: "La déesse Junon",
        action: "impactLock()",
      },
    ],
  },
  objet_manquant: {
    subtitle: "La serrure est introuvable",
    text: `Vous n'avez pas réussi à obtenir la serrure, mais en temps que maître du jeu je vous permet de continuer pour essayer de finir le jeu.
    Voici les coordonnés de la prochaine île.`,
    img: "assets/indecis.png",
    options: [
      {
        text: "Vous n'avez pas réussi à obtenir la serrure de coffre!",
        action: "goToChapter(`obtention_objets`)",
      },
    ],
  },
  deuxieme_mort: {
    subtitle: "Noyade",
    text: `En route depuis deux jours vers votre prochaine île, vous rencontrez une énorme tempête que vous ne pouvez pas éviter. Tout l'équipage du Silver Hawk est talentueux
    et mène un combat de tout les instants dans la tempête. Mais, soudainement, une vague énorme frappe de plein fouet sur le flanc faisant chavirer le bateau.
    Projeter à la mer, vous vous débater pour survivre, mais épuisés vous coulez et mourut noyés.`,
    img: "assets/noyade.jfif",
    options: [
      {
        text: "Veuillez recommencer!",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  seconde_epreuve: {
    subtitle: "Seconde énigme",
    text: `Félicitation d'avoir résolu la première énigme! La première énigme sur le premier indice s'effaça et prit la forme d'une carte indiquant l'emplacement
    de la seconde île et du deuxième indice. Le capitaine s'écria : "En route moussaillons, cap sur la deuxième île, larguer les amarres!!!" Cela vous prit 6
    jours pour arriver à destination et quelques heures pour trouver le second indice.`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`ile_tresor`)",
      },
    ],
  },
  ile_tresor: {
    subtitle: "Emplacement de l'île au trésor",
    text: `Le deuxième indice retrouvé par le capitaine Red J hawk est une autre énigme disant ceci :
    "On me chante à l'heure de dormir. Elle appaise l'angoisse'. Pourtant guérisseuses et musiciens
    reconnaissent mes vertus et me chante. Qui suis-je?"`,
    img: "assets/carte_tresor.jpg",
    options: [
      {
        text: "La berceuse",
        action: "goToChapter(`epreuve_finale`)",
      },
      {
        text: "La mélodie",
        action: "goToChapter(`seconde_mort`)",
      },
    ],
  },
  deuxieme_objet: {
    subtitle: "La serrure",
    text: `Après avoir réussit l'énigme. le deuxième indice commença à changer de forme pour devenir une serrure de coffre. Tout le monde en fut perplexe. Car, ils se demandèrent
    comment feraient-ils pour atteindre l'île au trésor. C'est alors qu'ils virent la serrure tournée sur elle-même pour finalement indiquer une direction. Le capitaine
    s'exclama : "Mais, bien sûr! Cette serrure ne nous donnes pas l'emplacement de la seconde île, mais elle vibre et plus on se rapprochera de l'île et plus elle vibrera.
    Retournons au bateau matelots et reprenons la mer!!!" Après un voyage de 8 jours à suivre les directions des vibrations de la serrure, ils arrivèrent à l'île et qui
    par la suite les conduisit à l'indice final.
    Le capitaine se mit à lire à haute voix : "Je suis une île où la musique et les pirates sont légions. On me donna un nom de reptile. Et pourtant, j'apparaît dans une série de
    films," Qui suis-je?`,
    img: "assets/serrure.jpg",
    options: [
      {
        text: "Île de Tortuga",
        action: "obtention_objets",
      },
      {
        text: "Île de la tortue",
        action: "impactLock()",
      },
    ],
  },
  seconde_mort: {
    subtitle: "Noyade",
    text: `En route depuis deux jours vers votre prochaine île, vous rencontrez une énorme tempête que vous ne pouvez pas éviter. Tout l'équipage du Silver Hawk est talentueux
    et mène un combat de tout les instants dans la tempête. Mais, soudainement, une vague énorme frappe de plein fouet sur le flanc faisant chavirer le bateau.
    Projeter à la mer, vous vous débater pour survivre, mais épuisés vous coulez et mourut noyés.`,
    img: "assets/noyade.jfif",
    options: [
      {
        text: "Veuillez recommencer!",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  objet_perdu: {
    subtitle: "La serrure est introuvable",
    text: `Vous n'avez pas réussi à obtenir la serrure, mais en temps que maître du jeu je vous permet de continuer pour essayer de finir le jeu.
    Voici les coordonnés de la prochaine île.`,
    img: "assets/indecis.png",
    options: [
      {
        text: "Vous n'avez pas réussi à obtenir la serrure de coffre!",
        action: "goToChapter(`obtention_objets`)",
      },
    ],
  },
  epreuve_finale: {
    subtitle: "Énigme finale",
    text: `Félicitation!!! Vous voici, arriver à l'île au trésor. Mais attention chers joueurs(ses), pour il vous faudra résoudre l'énigme finale
    pour que l'emplacement du trésor vous soit révélé. Ceci étant dit, il est temps de passer l'épreuve finale. Bonne chance!!!`,
    img: "assets/enigme.jpg",
    options: [
      {
        text: "Suivant",
        action: "goToChapter(`tresor`)",
      },
    ],
  },
  tresor: {
    subtitle: "Emplacement du trésor",
    text: `Arrivé sur l'île au trésor et avoir retrouvé l'indice finale, le capitaine Red J Hawk dit : "Moussaillons, je suis fier de vous 
    vous avez travaillé fort pour que nous puissions arriver, ici! Maintenant, il est temps de résoudre l'énigme finale : Je suis un explorateur 
    du temps de la Renaissance voulant tracer une route pour le commerce des épices. Pour ce faire, je fis le tour du monde. Je suis originaire
    du pays étant proche de l'Espagne." Qui suis-je?`,
    img: "assets/emplacement_final.jpg",
    options: [
      {
        text: "Ferdinand de Magellan",
        action: "goToChapter(`tresor_retrouve`)",
      },
      {
        text: "Christoph Colomb",
        action: "goToChapter(`recommencer`)",
      },
    ],
  },
  recommencer: {
    subtitle: "Mort brûlé",
    text: `Toujours en réflexion pour résoudre l'énigme. Tout l'équipage décida d'aller faire une sieste dans les cabines du navire pour par la 
    suite retenter la résolution de l'énigme. Or, pendant que tout le monde dormait, une étincelle d'une lampe mal fermée embrâsa le navire rapidement
    et qui ne laissa aucune chance à l'équipage. Ils moururent brûlés vif.`,
    img: "assets/incineration.jpg",
    options: [
      {
        text: "Veuillez recommencer!",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  obtention_objets: {
    subtitle: "Est-ce que vous avez récupéré les objets?",
    text: `Est-ce que vous avez réussit à récupérer les objets après la résolution des énigmes?`,
    img: "assets/questionnement.jpg",
    options: [
      {
        text: "Oui!",
        action: "goToChapter(`tresor_retrouve`)",
      },
      {
        text: "Ouais, j'ai les objets!",
        action: "impactObject",
      },
      {
        text: "Non!",
        action: "goToChapter(`reprendre`)",
      },
    ],
  },
  reprendre: {
    subtitle: "Il manque l'un des objets",
    text: `Malheureusement joueurs(ses), il est porté à mon attention qu'il vous manque soit un ou les deux objets(la clé et la serrure).
    Par l'absence de l'un ou des deux objets, vous ne pouvez continuer plus loin. PARTIE TERMINÉE!!!`,
    img: "assets/recommencer.jpg",
    options: [
      {
        text: "Partie terminé",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
  tresor_retrouve: {
    subtitle: "Consécration de la quête",
    text: `Après avoir réussit à résoudre l'énigme finale pour obtenir l'emplacement du trésor. Vous et le reste de l'équipage suivirent
     la carte jusqu'à la découverte du trésor dans une grotte qui laissa tout le monde pantois. L'espace complet de la grotte était recouvert
     de richesse allant de l'or aux pierres précieuses. Le capitaine submergé par l'émotion vacilla et tomba genoux et souffla : "Nous nous nous 
     avons réussit!!! Le trésor est à nous, hahahahahah!!!" Le capitaine se releva et serra dans ses bras tout le monde. Se calmant, il dit: "Matelots,
     embarquont toutes ces richesses puis retournont chez nous riches ahahahahah!!!".`,
    img: "assets/ouverture_coffre_tresor.jpg",
    options: [
      {
        text: "Trésor retrouvé!!!",
        action: "goToChapter(`epilogue`)",
      },
    ],
  },
  epilogue: {
    subtitle: "Célébration de l'équipage",
    text: `De retour avec le bateau chargé du trésor. Tout l'équipage se dirigea vers la taverne poru célébrer ce dénouement euphorique.
    Ils burent, mangèrent jusqu'à tard dans la nuit pour finalement s'endormir sur leur chaise. Quelques jours plus tard, le capitaine réunit
    l'équipage, car il avait quelque chose à leur annoncer : "Chers membres de l'équipage, l'aventure que nous avons eu fut des plus exaltante. 
    Mais, pendant ces quelques jours, j'ai mis la main sur une nouvelle quête qui cette fois nous mênera jusqu'au bout du monde pour retrouver
    un trésor perdu depuis 1000 ans. Est-ce que vous êtes partant!?".

    Pour savoir la réponse de l'équipage, il vous faudra attendre le prochain chapitre de mon jeu. Mais, en attendant, je vous remercie sincèrement
    d'avoir joué à mon jeu en espérant que vous l'aviez apprécié!!!`,
    img: "assets/celebration.jpg",
    options: [
      {
        text: "Recommencer",
        action: "goToChapter(`prologue`)",
      },
    ],
  },
};

let keyRetrieve = 0;
let lockRetrieve = 0;
let objectRetrieve = 0;

function key() {
  keyRetrieve = 1;
  goToChapter(`second_objet`);
}

function impactKey() {
  if (keyRetrieve == true) {
    goToChapter(`second_objet`);
  } else if (keyRetrieve == false) {
    goToChapter(`objet_perdu`);
  }
}

function lock() {
  lockRetrieve = 1;
  goToChapter(`deuxieme_objet`);
}

function impactLock() {
  if (lockRetrieve == true) {
    goToChapter(`deuxieme_objet`);
  } else if (lockRetrieve == false) {
    goToChapter(`objet_manquant`);
  }
}

function object() {
  objectRetrieve = 2;
  goToChapter(`tresor_retrouve`);
}
function impactObject() {
  if (keyRetrieve == true && lockRetrieve == true) {
    goToChapter(`tresor_retrouve`);
  } else if (keyRetrieve == true && lockRetrieve == false) {
    goToChapter(`reprendre`);
  } else if (keyRetrieve == false && lockRetrieve == true) {
    goToChapter(`reprendre`);
  } else if (keyRetrieve == false && lockRetrieve == false) {
    goToChapter(`reprendre`);
  }
}

function goToChapter(chapterName) {
  let chapitre = chaptersObj[chapterName];
  let boite = document.querySelector(".texte");
  boite.innerText = chapitre.text;
  let sousTitre = document.querySelector(".subtitle");
  sousTitre.innerText = chapitre.subtitle;
  let image = document.querySelector(".image");
  image.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt="chapter_img"/>`;

  let buttons = document.querySelector(".bouton");
  let text = "";
  chapitre.options.forEach(function (opt) {
    text += `<button class="no1" onclick="${opt.action}">${opt.text}</button>`;
  });
  buttons.innerHTML = text;
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
  console.log(boite);
}
goToChapter("prologue");
