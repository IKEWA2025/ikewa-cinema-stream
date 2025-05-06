
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ContentDetail from "@/components/content/ContentDetail";
import ContentRow from "@/components/content/ContentRow";
import { allContent } from "@/data/content";
import { useEffect } from "react";

const ContentDetails = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();
  
  const content = allContent.find(item => item.id === contentId);
  
  // Similar content based on genres
  const similarContent = content
    ? allContent
        .filter(item => 
          item.id !== content.id && 
          item.genres.some(genre => content.genres.includes(genre))
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    if (!content) {
      console.error(`Content with ID ${contentId} not found`);
      navigate("/");
    }
  }, [content, contentId, navigate]);

  if (!content) return null;

  return (
    <MainLayout>
      <ContentDetail content={content} />
      
      <div className="bg-background">
        <ContentRow 
          title="Contenu similaire" 
          content={similarContent} 
          className="py-10"
        />
      </div>
    </MainLayout>
  );
};

export default ContentDetails;
