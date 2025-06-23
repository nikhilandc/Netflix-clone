import React from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlayClick: (movie: Movie) => void;
  onInfoClick: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onPlayClick, onInfoClick }) => {
  const [isMuted, setIsMuted] = React.useState(true);

  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 lg:px-16 max-w-2xl">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
          {movie.title}
        </h1>
        
        <div className="flex items-center space-x-4 mb-6 text-sm text-white/80">
          <span className="bg-white/20 px-2 py-1 rounded">{movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <div className="flex space-x-1">
            {movie.genre.slice(0, 3).map((g, index) => (
              <span key={index} className="after:content-['•'] after:ml-1 last:after:content-['']">
                {g}
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-lg max-w-xl">
          {movie.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => onPlayClick(movie)}
            className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-white/80 transition-all duration-200 transform hover:scale-105"
          >
            <Play size={20} fill="currentColor" />
            <span>Play</span>
          </button>
          
          <button
            onClick={() => onInfoClick(movie)}
            className="flex items-center justify-center space-x-2 bg-white/20 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
          >
            <Info size={20} />
            <span>More Info</span>
          </button>
        </div>
      </div>

      {/* Audio Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white/40 rounded-full" />
      </div>
    </div>
  );
};

export default Hero;