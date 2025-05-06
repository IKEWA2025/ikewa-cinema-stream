
export type ContentType = "movie" | "series" | "sport" | "amazon" | "canal" | "crunchyroll" | "manga";

export interface Content {
  id: string;
  title: string;
  type: ContentType;
  year: number;
  rating: string;
  duration?: string; // for movies
  seasons?: number; // for series
  description: string;
  imageUrl: string;
  categories: string[];
  genres: string[];
  starring: string[];
  directors?: string[];
  creators?: string[];
}
