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
];
