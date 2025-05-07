
import MainLayout from "@/components/layout/MainLayout";
import ContentRow from "@/components/content/ContentRow";
import { useState } from "react";
import { Content } from "@/types/content";
import { allContent } from "@/data/content";

const MyList = () => {
  // Simulate user's saved content - in a real app this would come from user data
  const [myList] = useState<Content[]>(() => {
    // Get 12 random items from allContent to simulate saved items
    return [...allContent]
      .sort(() => 0.5 - Math.random())
      .slice(0, 12);
  });

  // Group content by type
  const movies = myList.filter(item => item.type === "movie");
  const series = myList.filter(item => item.type === "series" || item.type === "canal" || item.type === "amazon" || item.type === "crunchyroll");
  const sports = myList.filter(item => item.type === "sport");

  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="px-4 md:px-10">
          <h1 className="text-3xl font-bold mb-6">Ma Liste</h1>
          <p className="text-muted-foreground mb-8">Retrouvez ici tous vos films et séries favoris</p>
        </div>
        
        <div className="space-y-10">
          {myList.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Votre liste est vide. Ajoutez du contenu pour le retrouver ici.</p>
            </div>
          ) : (
            <>
              {series.length > 0 && <ContentRow title="Séries à regarder" content={series} />}
              {movies.length > 0 && <ContentRow title="Films à voir" content={movies} />}
              {sports.length > 0 && <ContentRow title="Sports favoris" content={sports} />}
              <ContentRow title="Tout le contenu" content={myList} />
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyList;
