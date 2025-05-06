
import MainLayout from "@/components/layout/MainLayout";
import ContentRow from "@/components/content/ContentRow";
import { seriesContent } from "@/data/content";

const Series = () => {
  // Simulate categorized series
  const dramaSerries = seriesContent.filter(series => 
    series.genres.includes("Drame")
  );
  
  const crimeSerries = seriesContent.filter(series => 
    series.genres.includes("Crime")
  );

  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="px-4 md:px-10">
          <h1 className="text-3xl font-bold mb-6">Séries</h1>
        </div>
        
        <div className="space-y-10">
          <ContentRow title="Séries dramatiques" content={dramaSerries} />
          <ContentRow title="Crime et suspense" content={crimeSerries} />
          <ContentRow title="Toutes les séries" content={seriesContent} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Series;
