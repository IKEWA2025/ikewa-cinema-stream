
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import ContentRow from "@/components/content/ContentRow";
import ChatBot from "@/components/chat/ChatBot";
import { 
  featuredContent, 
  moviesContent, 
  seriesContent,
  sportsContent,
  amazonContent,
  canalContent,
  crunchyrollContent,
  mangaContent,
  newReleasesContent
} from "@/data/content";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="space-y-8 mt-4 pb-10">
        <ContentRow title="Nouveautés" content={newReleasesContent} />
        <ContentRow title="Tendances maintenant" content={featuredContent} />
        <ContentRow title="Nouveautés Sport" content={sportsContent} />
        <ContentRow title="Films populaires" content={moviesContent} />
        <ContentRow title="Séries à ne pas manquer" content={seriesContent} />
        
        {/* Catégories par plateforme */}
        <ContentRow title="Amazon Prime" content={amazonContent} />
        <ContentRow title="Canal+" content={canalContent} />
        <ContentRow title="Crunchyroll" content={crunchyrollContent} />
        <ContentRow title="Mangas" content={mangaContent} />
      </div>
      
      {/* Chatbot */}
      <ChatBot />
    </MainLayout>
  );
};

export default Index;
