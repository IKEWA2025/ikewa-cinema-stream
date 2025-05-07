
import { Content } from "../../types/content";

export const moviesContent: Content[] = [
  {
    id: "inception",
    title: "Inception",
    type: "movie",
    year: 2010,
    rating: "PG-13",
    duration: "2h 28m",
    description: "Dom Cobb est un voleur expérimenté - le meilleur qui soit dans l'art dangereux de l'extraction : sa spécialité est de s'approprier les secrets les plus précieux d'un individu pendant qu'il rêve.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    categories: ["Primés", "DC Comics"],
    genres: ["Action", "Crime", "Drame"],
    starring: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    directors: ["Christopher Nolan"]
  }
];
