import React from 'react';
import { X, Play, Plus, ThumbsUp, Share } from 'lucide-react';
import { Movie } from '../types';

interface VideoModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (movie: Movie) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ movie, isOpen, onClose, onPlay }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-gray-900 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button
              onClick={() => onPlay(movie)}
              className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
            >
              <Play size={32} fill="currentColor" />
            </button>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title and Info */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-3">{movie.title}</h1>
            
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              <span className="text-green-400 font-semibold">98% Match</span>
              <span className="bg-gray-600 px-2 py-1 rounded">{movie.rating}</span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 mb-6">
              <button
                onClick={() => onPlay(movie)}
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
              >
                <Play size={20} fill="currentColor" />
                <span>Play</span>
              </button>
              
              <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">
                <Plus size={20} />
              </button>
              
              <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsUp size={20} />
              </button>
              
              <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">
                <Share size={20} />
              </button>
            </div>
          </div>

          {/* Description and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-white text-lg leading-relaxed mb-6">
                {movie.description}
              </p>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-400">Genres: </span>
                <span className="text-white">
                  {movie.genre.join(', ')}
                </span>
              </div>
              
              <div>
                <span className="text-gray-400">This show is: </span>
                <span className="text-white">Suspenseful, Dark, Mysterious</span>
              </div>
            </div>
          </div>

          {/* Episodes/Seasons (Mock) */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-semibold">Episodes</h3>
              <select className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600">
                <option>Season 1</option>
                <option>Season 2</option>
                <option>Season 3</option>
              </select>
            </div>
            
            {/* Mock Episodes */}
            <div className="space-y-4">
              {[1, 2, 3].map((episode) => (
                <div key={episode} className="flex space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="text-white font-bold text-xl w-8">{episode}</div>
                  <div className="w-32 h-18 bg-gray-600 rounded flex-shrink-0">
                    <img
                      src={movie.thumbnail}
                      alt={`Episode ${episode}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold">Episode {episode}</h4>
                      <span className="text-gray-400 text-sm">{movie.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      Episode description goes here. This is a brief summary of what happens in this episode.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;