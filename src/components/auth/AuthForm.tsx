
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

type AuthMode = "login" | "signup";

const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "login") {
      // Simulate login - in a real app, this would call an API
      console.log("Logging in with:", { email, password });
      toast.success("Connexion réussie! Bienvenue sur IKEWA STREAMING!");
    } else {
      // Simulate signup
      console.log("Signing up with:", { name, email, password });
      toast.success("Compte créé avec succès! Bienvenue sur IKEWA STREAMING!");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-card/90 backdrop-blur rounded-lg shadow-xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-primary">IKEWA STREAMING</h1>
        <h2 className="text-xl font-medium mt-4">
          {mode === "login" ? "Connexion" : "Créer un compte"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="vous@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {mode === "login" ? "Se connecter" : "S'inscrire"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        {mode === "login" ? (
          <p>
            Pas encore de compte?{" "}
            <button 
              type="button"
              onClick={() => setMode("signup")}
              className="text-primary hover:underline"
            >
              Inscrivez-vous
            </button>
          </p>
        ) : (
          <p>
            Déjà inscrit?{" "}
            <button 
              type="button"
              onClick={() => setMode("login")}
              className="text-primary hover:underline"
            >
              Connectez-vous
            </button>
          </p>
        )}
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          En vous connectant, vous acceptez nos{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Conditions d'utilisation
          </Link>{" "}
          et notre{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
