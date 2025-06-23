import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';
import { movies, featuredMovie } from './data/mockData';
import { Movie } from './types';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handlePlay = (movie: Movie) => {
    // In a real app, this would launch the video player
    alert(`Playing: ${movie.title}`);
  };

  const handleMoreInfo = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredMovies(filtered);
    }
  };

  const trendingMovies = filteredMovies.filter(movie => movie.trending);
  const popularMovies = filteredMovies.filter(movie => movie.popular);
  const myListMovies = filteredMovies.filter(movie => movie.myList);

  return (
    <div className="min-h-screen bg-black">
      <Header onSearch={handleSearch} />
      
      {/* Hero Section - Hide when searching */}
      {!searchQuery && (
        <Hero 
          movie={featuredMovie}
          onPlayClick={handlePlay}
          onInfoClick={handleMoreInfo}
        />
      )}

      {/* Content Sections */}
      <div className={searchQuery ? 'pt-24' : ''}>
        {searchQuery && (
          <div className="px-4 lg:px-16 py-8">
            <h2 className="text-white text-2xl font-semibold mb-4">
              Search results for "{searchQuery}"
            </h2>
            {filteredMovies.length === 0 && (
              <p className="text-gray-400">No results found. Try a different search term.</p>
            )}
          </div>
        )}

        {trendingMovies.length > 0 && (
          <ContentRow
            title="Trending Now"
            movies={trendingMovies}
            onPlay={handlePlay}
            onMoreInfo={handleMoreInfo}
          />
        )}

        {popularMovies.length > 0 && (
          <ContentRow
            title="Popular on Netflix"
            movies={popularMovies}
            onPlay={handlePlay}
            onMoreInfo={handleMoreInfo}
          />
        )}

        {myListMovies.length > 0 && (
          <ContentRow
            title="My List"
            movies={myListMovies}
            onPlay={handlePlay}
            onMoreInfo={handleMoreInfo}
          />
        )}

        {!searchQuery && (
          <>
            <ContentRow
              title="Netflix Originals"
              movies={filteredMovies.slice(0, 6)}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />

            <ContentRow
              title="Recently Added"
              movies={filteredMovies.slice(2, 8)}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />

            <ContentRow
              title="Continue Watching"
              movies={filteredMovies.slice(1, 5)}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
          </>
        )}
      </div>

      <Footer />

      {/* Video Modal */}
      <VideoModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPlay={handlePlay}
      />
    </div>
  );
}

export default App;