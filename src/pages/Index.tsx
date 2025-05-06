
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import ContentRow from "@/components/content/ContentRow";
import { 
  featuredContent, 
  moviesContent, 
  seriesContent 
} from "@/data/content";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="space-y-8 mt-4">
        <ContentRow title="Tendances maintenant" content={featuredContent} />
        <ContentRow title="Films populaires" content={moviesContent} />
        <ContentRow title="Séries à ne pas manquer" content={seriesContent} />
      </div>
    </MainLayout>
  );
};

export default Index;
