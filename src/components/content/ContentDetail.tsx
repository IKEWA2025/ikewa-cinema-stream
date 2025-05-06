
import { Button } from "@/components/ui/button";
import { Content } from "@/types/content";
import { Play, Plus } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface ContentDetailProps {
  content: Content;
}

const ContentDetail = ({ content }: ContentDetailProps) => {
  const handlePlayClick = () => {
    toast(`▶️ Lecture de ${content.title}`);
  };

  const handleAddToList = () => {
    toast.success(`${content.title} a été ajouté à votre liste`);
  };

  return (
    <div className="relative min-h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <img
            src={content.imageUrl}
            alt={content.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-16 px-4 md:px-10 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
        
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-6">
          <span>{content.year}</span>
          <span className="px-1">•</span>
          <span>{content.rating}</span>
          <span className="px-1">•</span>
          <span>{content.duration || `${content.seasons} saisons`}</span>
        </div>
        
        <div className="flex gap-4 mb-8">
          <Button className="gap-2" onClick={handlePlayClick}>
            <Play size={16} />
            Lecture
          </Button>
          <Button variant="outline" className="gap-2" onClick={handleAddToList}>
            <Plus size={16} />
            Ma liste
          </Button>
        </div>
        
        <div className="max-w-3xl">
          <p className="text-lg mb-8">{content.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {content.starring && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {content.type === "movie" ? "Acteurs" : "Casting"}
                </h3>
                <p>{content.starring.join(", ")}</p>
              </div>
            )}
            
            {content.genres && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Genres</h3>
                <p>{content.genres.join(", ")}</p>
              </div>
            )}
            
            {content.directors && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {content.directors.length > 1 ? "Réalisateurs" : "Réalisateur"}
                </h3>
                <p>{content.directors.join(", ")}</p>
              </div>
            )}
            
            {content.creators && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {content.creators.length > 1 ? "Créateurs" : "Créateur"}
                </h3>
                <p>{content.creators.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
