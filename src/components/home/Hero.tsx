
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
          alt="Hero Background - Matrix Resurrections"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-10 space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Matrix Resurrections
          </h1>
          <p className="text-lg max-w-2xl text-muted-foreground">
            Retournez dans le monde de la Matrice et découvrez la vérité qui se cache au-delà de la réalité. Neo reprend son voyage pour comprendre ce qui est réel et ce qui ne l'est pas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="flex items-center gap-2">
              <Play className="h-5 w-5" /> Lecture
            </Button>
            <Link to="/films/matrix-resurrections">
              <Button variant="outline">Plus d'infos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
