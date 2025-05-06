
import { Content } from "../types/content";

export const featuredContent: Content[] = [
  {
    id: "matrix-resurrections",
    title: "Matrix Resurrections",
    type: "movie",
    year: 2021,
    rating: "R",
    duration: "2h 28m",
    description: "Retournez dans le monde de la Matrice et découvrez la vérité qui se cache au-delà de la réalité. Neo reprend son voyage pour comprendre ce qui est réel et ce qui ne l'est pas.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500",
    categories: ["Nouveautés", "Tendances"],
    genres: ["Action", "Science-Fiction"],
    starring: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II"],
    directors: ["Lana Wachowski"]
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    type: "series",
    year: 2016,
    rating: "TV-14",
    seasons: 4,
    description: "Quand un jeune garçon disparaît, une petite ville découvre des mystères impliquant des expériences secrètes, des forces surnaturelles terrifiantes et une étrange petite fille.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500",
    categories: ["Populaires", "Original"],
    genres: ["Drame", "Fantastique", "Horreur"],
    starring: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    creators: ["The Duffer Brothers"]
  }
];

export const moviesContent: Content[] = [
  {
    id: "inception",
    title: "Inception",
    type: "movie",
    year: 2010,
    rating: "PG-13",
    duration: "2h 28m",
    description: "Dom Cobb est un voleur expérimenté - le meilleur qui soit dans l'art dangereux de l'extraction : sa spécialité est de s'approprier les secrets les plus précieux d'un individu pendant qu'il rêve.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500",
    categories: ["Populaires", "Primés"],
    genres: ["Action", "Science-Fiction", "Thriller"],
    starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    directors: ["Christopher Nolan"]
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    type: "movie",
    year: 2008,
    rating: "PG-13",
    duration: "2h 32m",
    description: "Batman augmente les mises dans sa guerre contre le crime. Avec l'aide du lieutenant de police Jim Gordon et du procureur Harvey Dent, Batman entreprend de démanteler les organisations criminelles restantes.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500",
    categories: ["Primés", "DC Comics"],
    genres: ["Action", "Crime", "Drame"],
    starring: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    directors: ["Christopher Nolan"]
  }
];

export const seriesContent: Content[] = [
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    type: "series",
    year: 2008,
    rating: "TV-MA",
    seasons: 5,
    description: "Un professeur de chimie atteint d'un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer l'avenir financier de sa famille.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500",
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
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500",
    categories: ["Primés", "Original"],
    genres: ["Biographie", "Drame", "Historique"],
    starring: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    creators: ["Peter Morgan"]
  }
];

export const allContent: Content[] = [...featuredContent, ...moviesContent, ...seriesContent];

export const categories = [
  { id: "trending", name: "Tendances" },
  { id: "new", name: "Nouveautés" },
  { id: "popular", name: "Populaires" },
  { id: "original", name: "Original IKEWA" },
  { id: "awarded", name: "Films et séries primés" }
];

export const genres = [
  { id: "action", name: "Action" },
  { id: "comedy", name: "Comédie" },
  { id: "documentary", name: "Documentaire" },
  { id: "drama", name: "Drame" },
  { id: "horror", name: "Horreur" },
  { id: "sci-fi", name: "Science-Fiction" },
  { id: "thriller", name: "Thriller" }
];
