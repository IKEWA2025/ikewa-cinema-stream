
import MainLayout from "@/components/layout/MainLayout";
import ContentRow from "@/components/content/ContentRow";
import { moviesContent } from "@/data/content";

const Movies = () => {
  // Simulate categorized movies
  const actionMovies = moviesContent.filter(movie => 
    movie.genres.includes("Action")
  );
  
  const scifiMovies = moviesContent.filter(movie => 
    movie.genres.includes("Science-Fiction")
  );
  
  const dramaMovies = moviesContent.filter(movie => 
    movie.genres.includes("Drame")
  );

  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="px-4 md:px-10">
          <h1 className="text-3xl font-bold mb-6">Films</h1>
        </div>
        
        <div className="space-y-10">
          <ContentRow title="Films d'action" content={actionMovies} />
          <ContentRow title="Science-Fiction" content={scifiMovies} />
          <ContentRow title="Drames" content={dramaMovies} />
          <ContentRow title="Tous les films" content={moviesContent} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Movies;
