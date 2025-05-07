
import MainLayout from "@/components/layout/MainLayout";
import ContentRow from "@/components/content/ContentRow";
import { useState, useEffect } from "react";
import { Content } from "@/types/content";
import { allContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Trash2, Grid3X3, List, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const MyList = () => {
  const [myList, setMyList] = useState<Content[]>(() => {
    // Get 12 random items from allContent to simulate saved items
    return [...allContent]
      .sort(() => 0.5 - Math.random())
      .slice(0, 12);
  });

  const [viewMode, setViewMode] = useState<"grid" | "rows">("rows");
  
  // Group content by type
  const movies = myList.filter(item => item.type === "movie");
  const series = myList.filter(item => item.type === "series" || item.type === "canal" || item.type === "amazon" || item.type === "crunchyroll");
  const sports = myList.filter(item => item.type === "sport");

  const removeFromList = (contentId: string) => {
    setMyList(prev => prev.filter(item => item.id !== contentId));
    toast.success("Contenu retiré de votre liste");
  };

  const clearList = () => {
    setMyList([]);
    toast.success("Votre liste a été vidée");
  };

  const filterByCategory = (category: string) => {
    if (category === "all") {
      // Reset to original random selection
      setMyList([...allContent]
        .sort(() => 0.5 - Math.random())
        .slice(0, 12));
    } else {
      // Filter by the selected category
      setMyList([...allContent]
        .filter(item => {
          if (category === "movie") return item.type === "movie";
          if (category === "series") return item.type === "series" || item.type === "canal" || item.type === "amazon" || item.type === "crunchyroll";
          if (category === "sport") return item.type === "sport";
          return true;
        })
        .slice(0, 10));
    }
    toast.info(`Filtré par: ${category === "all" ? "Tous" : category}`);
  };

  return (
    <MainLayout>
      <div className="pt-20 pb-10">
        <div className="px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Ma Liste</h1>
              <p className="text-muted-foreground mt-1">Retrouvez ici tous vos films et séries favoris</p>
            </div>
            
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => filterByCategory("all")}>
                      Tout afficher
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => filterByCategory("movie")}>
                      Films uniquement
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => filterByCategory("series")}>
                      Séries uniquement
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => filterByCategory("sport")}>
                      Sports uniquement
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-primary text-primary-foreground" : ""}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("rows")}
                className={viewMode === "rows" ? "bg-primary text-primary-foreground" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
              
              <Button variant="destructive" size="icon" onClick={clearList}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-10">
          {myList.length === 0 ? (
            <div className="text-center py-20 px-4">
              <h3 className="text-xl font-medium mb-2">Votre liste est vide</h3>
              <p className="text-muted-foreground mb-6">Ajoutez du contenu pour le retrouver ici.</p>
              <Button onClick={() => filterByCategory("all")}>Découvrir du contenu</Button>
            </div>
          ) : (
            viewMode === "rows" ? (
              <>
                {series.length > 0 && <ContentRow title="Séries à regarder" content={series} />}
                {movies.length > 0 && <ContentRow title="Films à voir" content={movies} />}
                {sports.length > 0 && <ContentRow title="Sports favoris" content={sports} />}
              </>
            ) : (
              <div className="px-4 md:px-10">
                <h2 className="text-xl md:text-2xl font-medium mb-4">Tout le contenu</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {myList.map((item) => (
                    <div key={item.id} className="relative group">
                      <Link to={`/${item.type === 'movie' ? 'films' : 'series'}/${item.id}`}>
                        <div className="aspect-[2/3] overflow-hidden rounded-md">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-70"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=random&color=fff&size=300`;
                            }}
                          />
                        </div>
                      </Link>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFromList(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="mt-2">
                        <h3 className="text-sm font-medium line-clamp-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.year} • {item.type === "movie" ? "Film" : item.type === "series" ? "Série" : item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyList;
