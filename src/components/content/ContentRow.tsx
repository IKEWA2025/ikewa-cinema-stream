
import { Link } from "react-router-dom";
import { Content } from "@/types/content";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContentRowProps {
  title: string;
  content: Content[];
  className?: string;
}

const ContentRow = ({ title, content, className }: ContentRowProps) => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Show navigation buttons only when not on mobile and has content that overflows
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
      setScrollPosition(scrollLeft);
    }
  };

  useEffect(() => {
    checkScrollability();
    
    // Setup ResizeObserver to check scrollability when container size changes
    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [content]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update scroll position after scrolling
      setTimeout(checkScrollability, 300);
    }
  };

  if (content.length === 0) return null;

  return (
    <div 
      className={cn("px-4 md:px-10 py-4 relative", className)}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2 className="text-xl md:text-2xl font-medium mb-4">{title}</h2>
      
      <div className="relative">
        {!isMobile && showControls && canScrollLeft && (
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm -ml-4 shadow-lg hover:bg-background"
            onClick={() => scroll('left')}
          >
            <ChevronLeft />
          </Button>
        )}
        
        <div 
          ref={containerRef}
          className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          onScroll={checkScrollability}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {content.map((item) => (
            <Link 
              key={item.id} 
              to={`/${item.type === 'movie' ? 'films' : 'series'}/${item.id}`}
              className="flex-shrink-0 snap-start w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] mr-3 md:mr-4"
            >
              <div className="movie-card group relative aspect-[2/3] overflow-hidden rounded-md">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=random&color=fff&size=300`;
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-background/90 to-transparent transition-opacity">
                  <h3 className="font-medium line-clamp-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-1">
                    <span>{item.year}</span>
                    {item.rating && <span>{item.rating}</span>}
                    <span>{item.duration || (item.seasons && `${item.seasons} saisons`)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {!isMobile && showControls && canScrollRight && (
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm -mr-4 shadow-lg hover:bg-background"
            onClick={() => scroll('right')}
          >
            <ChevronRight />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
