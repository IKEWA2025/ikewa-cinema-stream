
import { Content } from "../../types/content";

export const seriesContent: Content[] = [
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    type: "series",
    year: 2008,
    rating: "TV-MA",
    seasons: 5,
    description: "Un professeur de chimie atteint d'un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l'avenir financier de sa famille.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    categories: ["Primés", "Drame"],
    genres: ["Crime", "Drame", "Thriller"],
    starring: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    creators: ["Vince Gilligan"]
  },
  {
    id: "the-crown",
    title: "The Crown",
    type: "series",
    year: 2016,
    rating: "TV-MA",
    seasons: 6,
    description: "Cette série dramatique retrace la vie de la reine Elizabeth II, du début de son règne à l'époque contemporaine, en révélant les intrigues politiques, les histoires d'amour et les rivalités.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTAyMi00MzA3LTgwY2YtMzBhODY4Y2JkOTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    categories: ["Primés", "Original"],
    genres: ["Biographie", "Drame", "Historique"],
    starring: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    creators: ["Peter Morgan"]
  }
];
