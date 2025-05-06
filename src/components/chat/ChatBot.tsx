
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Phone, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    {text: "Bonjour ! Comment puis-je vous aider avec IKEWA Streaming ?", isBot: true}
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {text: input, isBot: false};
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Merci pour votre message ! Un conseiller va vous répondre prochainement.",
        "Je peux vous aider à trouver des films ou séries qui vous plaisent.",
        "IKEWA Streaming offre une large sélection de contenus dans différentes catégories.",
        "N'hésitez pas à parcourir nos nouvelles catégories: Sport, Amazon, Canal+, Crunchyroll et Mangas !",
        "Vous préférez parler directement à un conseiller ? Utilisez le bouton WhatsApp ci-dessous.",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, {text: randomResponse, isBot: true}]);
    }, 1000);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "+2120777459517";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    toast.success("Redirection vers WhatsApp pour contacter un conseiller");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full shadow-lg"
        onClick={toggleChat}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
      
      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-80 md:w-96 shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="flex justify-between items-center">
              <span>IKEWA Assistant</span>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8"
                onClick={handleWhatsAppContact}
              >
                <Phone className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="h-72 overflow-y-auto space-y-4 mb-3">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`${msg.isBot 
                      ? 'bg-muted text-foreground' 
                      : 'bg-primary text-primary-foreground'} 
                      py-2 px-3 rounded-lg max-w-[80%]`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Textarea 
                placeholder="Tapez votre message..." 
                className="min-h-10 resize-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={1}
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
