
import { Link } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 md:p-6">
        <Link to="/" className="inline-block">
          <h1 className="text-2xl font-bold text-primary">IKEWA</h1>
        </Link>
      </header>
      
      <div 
        className="flex-1 flex items-center justify-center p-4 bg-cover bg-center"
        style={{ 
          backgroundImage: "url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920)",
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        
        <div className="relative z-10 w-full max-w-md">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
