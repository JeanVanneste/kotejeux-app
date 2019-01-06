import { Jeu } from './jeu';

export const JEUX: Jeu[] = [
  { id: 1, editeurId: 4, name: "Loup-Garou", author: "Phillipe", category: "Ambiance", gameDuration: 30, playerMin: 6, playerMax: 48, description: "test" },
  {
      id: 2,
      editeurId: 5,
      name: "Munchkin",
      author: "Steve Jackson",
      category: "Stratégie",
      gameDuration: 90,
      playerMin: 3,
      playerMax: 8,
      description: "Les joueurs incarnent des personnages de jeux de r\u00f4les qui ont pour unique but d'accumuler des objets magiques farfelus et de faire augmenter le niveau de leur personnage le plus vite possible. De nombreuses cartes les aident \u00e0 y parvenir et les joueurs peuvent entre autres trahir leurs compagnons, pleurer dans les jupes du ma\u00eetre de jeu, invoquer des r\u00e8gles obscures pour gagner un niveau ... Les personnages ne sont d\u00e9finis que par leur niveau (de 1 \u00e0 10), leur classe (magicien, guerrier, voleur, pr\u00eatre dans le jeu de base mais de nombreuses autres s'ajoutent via les extensions), leur race (tout le monde commence en tant qu'humain mais peut devenir elfe, nain ou halfelin pour le jeu de base, tout comme les classes, certaines extensions en ajoutent), et l'accumulation d'objets magiques qu'ils transportent. Le but du jeu est d'\u00eatre le premier \u00e0 faire atteindre le niveau 10 \u00e0 son personnage."
    },
    {
        id: 3,
        editeurId: 6,
        name: "Uno",
        author: "Merle Robbins",
        category: "Jeu de carte",
        gameDuration: 30,
        playerMin: 2,
        playerMax: 10,
        description: "Le Uno est un jeu de cartes am\u00e9ricain cr\u00e9\u00e9 en 1971 par Merle Robbins et \u00e9dit\u00e9 par Mattel. Il est bas\u00e9 sur les r\u00e8gles du 8 am\u00e9ricain."
    },
    {
      id: 4,
      editeurId: 7,
      name: "Bang!",
      author: "Emiliano Sciarra",
      category: "Ambiance",
      gameDuration: 30,
      playerMin: 4,
      playerMax: 7,
      description: "La dynamique du jeu repose à la fois sur une part de hasard et une part de réflexion et d'observation pour deviner quel rôle endosse chaque joueur (seul le rôle du shérif est connu), quelles cartes un joueur a encore en main... Les parties ont une durée variable en fonction du nombre de joueurs et du niveau de connaissance des règles, soit 4 à 6 minutes à trois joueurs expérimentés et jusqu'à 45 min à sept avec des débutants. Les cartes circulent assez rapidement et les joueurs peuvent jouer autant de cartes qu'ils le souhaitent par tour (à quelques exceptions près, comme la limitation à une carte bang ! par tour)."
    }
];
