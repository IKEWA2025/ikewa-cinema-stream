
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
  },
  {
    id: "interstellar",
    title: "Interstellar",
    type: "movie",
    year: 2014,
    rating: "PG-13",
    duration: "2h 49m",
    description: "Un groupe d'explorateurs utilise un trou de ver récemment découvert pour surpasser les limites du voyage spatial humain et conquérir les vastes distances impliquées dans un voyage interstellaire.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    categories: ["Science-Fiction", "Aventure"],
    genres: ["Science-Fiction", "Aventure", "Drame"],
    starring: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    directors: ["Christopher Nolan"]
  },
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    type: "movie",
    year: 1994,
    rating: "R",
    duration: "2h 34m",
    description: "Les vies de deux tueurs à gages, d'un boxeur, de la femme d'un gangster et de deux braqueurs s'entremêlent dans quatre histoires de violence et de rédemption.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    categories: ["Classique", "Primés"],
    genres: ["Crime", "Drame"],
    starring: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    directors: ["Quentin Tarantino"]
  },
  {
    id: "the-godfather",
    title: "Le Parrain",
    type: "movie",
    year: 1972,
    rating: "R",
    duration: "2h 55m",
    description: "Le patriarche vieillissant d'une dynastie du crime organisé transfère le contrôle de son empire clandestin à son fils réticent.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    categories: ["Classique", "Primés"],
    genres: ["Crime", "Drame"],
    starring: ["Marlon Brando", "Al Pacino", "James Caan"],
    directors: ["Francis Ford Coppola"]
  },
  {
    id: "gladiator",
    title: "Gladiator",
    type: "movie",
    year: 2000,
    rating: "R",
    duration: "2h 35m",
    description: "Un ancien général romain cherche vengeance contre l'empereur corrompu qui a assassiné sa famille et l'a envoyé en esclavage.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    categories: ["Historique", "Primés"],
    genres: ["Action", "Aventure", "Drame"],
    starring: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    directors: ["Ridley Scott"]
  },
  {
    id: "titanic",
    title: "Titanic",
    type: "movie",
    year: 1997,
    rating: "PG-13",
    duration: "3h 14m",
    description: "Une histoire d'amour se déroule entre un aristocrate et un artiste pauvre à bord du luxueux navire Titanic lors de son tragique voyage inaugural.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    categories: ["Romance", "Drame", "Primés"],
    genres: ["Drame", "Romance"],
    starring: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    directors: ["James Cameron"]
  },
  {
    id: "joker",
    title: "Joker",
    type: "movie",
    year: 2019,
    rating: "R",
    duration: "2h 2m",
    description: "À Gotham City, le comédien en difficulté Arthur Fleck est ignoré et maltraité par la société. Il s'engage alors dans une spirale descendante de révolution et de crime sanglant.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    categories: ["DC Comics", "Thriller", "Primés"],
    genres: ["Crime", "Drame", "Thriller"],
    starring: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    directors: ["Todd Phillips"]
  },
  {
    id: "avatar",
    title: "Avatar",
    type: "movie",
    year: 2009,
    rating: "PG-13",
    duration: "2h 42m",
    description: "Un marine paraplégique envoyé sur la lune Pandora pour une mission unique se retrouve déchiré entre suivre ses ordres et protéger le monde qu'il considère comme sa maison.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmMjcxZjQ3ODZiXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
    categories: ["Science-Fiction", "Aventure", "Primés"],
    genres: ["Action", "Aventure", "Science-Fiction"],
    starring: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    directors: ["James Cameron"]
  },
  {
    id: "parasite",
    title: "Parasite",
    type: "movie",
    year: 2019,
    rating: "R",
    duration: "2h 12m",
    description: "La famille Kim, pauvre et au chômage, développe un intérêt pour les Parks fortunés et leur style de vie glamour, jusqu'à ce qu'ils se retrouvent mêlés à des événements inattendus.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    categories: ["International", "Drame", "Primés"],
    genres: ["Comédie", "Drame", "Thriller"],
    starring: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    directors: ["Bong Joon-ho"]
  }
];
