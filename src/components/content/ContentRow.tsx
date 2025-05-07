
import { Link } from "react-router-dom";
import { Content } from "@/types/content";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ContentRowProps {
  title: string;
  content: Content[];
  className?: string;
}

const ContentRow = ({ title, content, className }: ContentRowProps) => {
  if (content.length === 0) return null;

  return (
    <div className={cn("px-4 md:px-10 py-4", className)}>
      <h2 className="text-xl md:text-2xl font-medium mb-4">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {content.map((item) => (
          <Link 
            key={item.id} 
            to={`/${item.type === 'movie' ? 'films' : 'series'}/${item.id}`}
          >
            <div className="movie-card group relative aspect-[2/3] overflow-hidden rounded-md">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=random&color=fff&size=300`;
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-background/90 to-transparent transition-opacity">
                <h3 className="font-medium">{item.title}</h3>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span>{item.year}</span>
                  <span>{item.rating}</span>
                  <span>{item.duration || `${item.seasons} saisons`}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
