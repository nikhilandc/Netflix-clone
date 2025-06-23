import React from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../types';

interface VideoCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  size?: 'small' | 'medium' | 'large';
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  movie, 
  onPlay, 
  onMoreInfo, 
  size = 'medium' 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const sizeClasses = {
    small: 'w-48 h-28',
    medium: 'w-64 h-36',
    large: 'w-80 h-44'
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-full rounded-md overflow-hidden bg-gray-800">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-white text-sm font-semibold truncate">
            {movie.title}
          </h3>
        </div>

        {/* Hover Play Button */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button
              onClick={() => onPlay(movie)}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Play size={24} fill="currentColor" />
            </button>
          </div>
        )}
      </div>

      {/* Hover Card */}
      {isHovered && (
        <div className="absolute top-full left-0 w-80 bg-gray-900 rounded-md shadow-2xl z-20 mt-2 transform -translate-x-4">
          <div className="p-4">
            {/* Movie Info */}
            <div className="mb-3">
              <h3 className="text-white font-semibold text-lg mb-1">{movie.title}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-green-400 font-semibold">98% Match</span>
                <span className="bg-gray-600 px-1 rounded text-xs">{movie.rating}</span>
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-1 mb-3">
              {movie.genre.map((genre, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-300 after:content-['•'] after:ml-1 last:after:content-['']"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onPlay(movie)}
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Play size={16} fill="currentColor" />
              </button>
              
              <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Plus size={16} />
              </button>
              
              <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsUp size={16} />
              </button>
              
              <button
                onClick={() => onMoreInfo(movie)}
                className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors ml-auto"
              >
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;