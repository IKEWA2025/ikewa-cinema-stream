
import { Content } from "../../types/content";
import { featuredContent } from "./featuredContent";
import { moviesContent } from "./moviesContent";
import { seriesContent } from "./seriesContent";
import { sportsContent } from "./sportsContent";
import { amazonContent } from "./amazonContent";
import { canalContent } from "./canalContent";
import { crunchyrollContent } from "./crunchyrollContent";
import { mangaContent } from "./mangaContent";

// Export all content arrays
export {
  featuredContent,
  moviesContent,
  seriesContent,
  sportsContent,
  amazonContent,
  canalContent,
  crunchyrollContent,
  mangaContent
};

// Combined content array
export const allContent: Content[] = [
  ...featuredContent, 
  ...moviesContent, 
  ...seriesContent,
  ...sportsContent,
  ...amazonContent,
  ...canalContent,
  ...crunchyrollContent,
  ...mangaContent
];

// Categories and genres
export const categories = [
  { id: "trending", name: "Tendances" },
  { id: "new", name: "Nouveautés" },
  { id: "popular", name: "Populaires" },
  { id: "original", name: "Original IKEWA" },
  { id: "awarded", name: "Films et séries primés" },
  { id: "sport", name: "Sports" },
  { id: "amazon", name: "Amazon Prime" },
  { id: "canal", name: "Canal+" },
  { id: "crunchyroll", name: "Crunchyroll" },
  { id: "manga", name: "Mangas" }
];

export const genres = [
  { id: "action", name: "Action" },
  { id: "comedy", name: "Comédie" },
  { id: "documentary", name: "Documentaire" },
  { id: "drama", name: "Drame" },
  { id: "horror", name: "Horreur" },
  { id: "sci-fi", name: "Science-Fiction" },
  { id: "thriller", name: "Thriller" },
  { id: "sport", name: "Sport" },
  { id: "anime", name: "Anime" },
  { id: "manga", name: "Manga" }
];
