
export type ContentType = "movie" | "series";

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
