import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';
import { Movie } from '../types';

interface ContentRowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, movies, onPlay, onMoreInfo }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 1000;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  if (movies.length === 0) return null;

  return (
    <div className="mb-8 group">
      {/* Section Title */}
      <h2 className="text-white text-xl lg:text-2xl font-semibold mb-4 px-4 lg:px-16">
        {title}
      </h2>

      {/* Content Container */}
      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide px-4 lg:px-16 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <VideoCard
              key={movie.id}
              movie={movie}
              onPlay={onPlay}
              onMoreInfo={onMoreInfo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;