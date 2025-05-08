
import MainLayout from "@/components/layout/MainLayout";
import ContentRow from "@/components/content/ContentRow";
import { newReleasesContent } from "@/data/content";

const Nouveautes = () => {
  // Filter content by type and genres for different categories
  const newMovies = newReleasesContent.filter(item => item.type === "movie");
  const newSeries = newReleasesContent.filter(item => item.type === "series");
  
  // Netflix-like categories
  const actionContent = newReleasesContent.filter(item => 
    item.genres.some(genre => genre.toLowerCase() === "action")
  );
  
  const dramaContent = newReleasesContent.filter(item => 
    item.genres.some(genre => genre.toLowerCase() === "drame")
  );
  
  const scienceFictionContent = newReleasesContent.filter(item => 
    item.genres.some(genre => genre.toLowerCase() === "science-fiction")
  );
  
  const adventureContent = newReleasesContent.filter(item => 
    item.genres.some(genre => genre.toLowerCase() === "aventure")
  );
  
  const thrillerContent = newReleasesContent.filter(item => 
    item.genres.some(genre => genre.toLowerCase() === "thriller")
  );

  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="px-4 md:px-10">
          <h1 className="text-3xl font-bold mb-6">Nouveautés</h1>
        </div>
        
        <div className="space-y-10">
          <ContentRow title="Films récemment ajoutés" content={newMovies} />
          <ContentRow title="Séries récentes" content={newSeries} />
          <ContentRow title="Action" content={actionContent} />
          <ContentRow title="Drame" content={dramaContent} />
          <ContentRow title="Science Fiction" content={scienceFictionContent} />
          <ContentRow title="Aventure" content={adventureContent} />
          <ContentRow title="Thriller" content={thrillerContent} />
          <ContentRow title="Toutes les nouveautés" content={newReleasesContent} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Nouveautes;
