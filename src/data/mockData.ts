import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    rating: 'TV-14',
    year: 2016,
    duration: '51m',
    featured: true,
    trending: true,
    popular: true
  },
  {
    id: '2',
    title: 'The Crown',
    description: 'This drama follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
    thumbnail: 'https://images.pexels.com/photos/7512513/pexels-photo-7512513.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7512513/pexels-photo-7512513.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Drama', 'Biography', 'History'],
    rating: 'TV-MA',
    year: 2016,
    duration: '58m',
    popular: true,
    myList: true
  },
  {
    id: '3',
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the double lives and fractured relationships among four families.',
    thumbnail: 'https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Mystery', 'Sci-Fi', 'Thriller'],
    rating: 'TV-MA',
    year: 2017,
    duration: '60m',
    trending: true
  },
  {
    id: '4',
    title: 'Money Heist',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
    thumbnail: 'https://images.pexels.com/photos/7869091/pexels-photo-7869091.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7869091/pexels-photo-7869091.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Crime', 'Mystery', 'Thriller'],
    rating: 'TV-MA',
    year: 2017,
    duration: '67m',
    popular: true,
    trending: true
  },
  {
    id: '5',
    title: 'Bridgerton',
    description: 'Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.',
    thumbnail: 'https://images.pexels.com/photos/8815071/pexels-photo-8815071.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8815071/pexels-photo-8815071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Romance', 'Drama'],
    rating: 'TV-MA',
    year: 2020,
    duration: '57m',
    popular: true,
    myList: true
  },
  {
    id: '6',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    thumbnail: 'https://images.pexels.com/photos/7203720/pexels-photo-7203720.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7203720/pexels-photo-7203720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Fantasy', 'Adventure', 'Drama'],
    rating: 'TV-MA',
    year: 2019,
    duration: '60m',
    trending: true,
    popular: true
  },
  {
    id: '7',
    title: 'Ozark',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
    thumbnail: 'https://images.pexels.com/photos/7203702/pexels-photo-7203702.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7203702/pexels-photo-7203702.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 'TV-MA',
    year: 2017,
    duration: '60m',
    popular: true
  },
  {
    id: '8',
    title: 'The Queen\'s Gambit',
    description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.',
    thumbnail: 'https://images.pexels.com/photos/8815010/pexels-photo-8815010.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8815010/pexels-photo-8815010.jpeg?auto=compress&cs=tinysrgb&w=1200',
    genre: ['Drama'],
    rating: 'TV-MA',
    year: 2020,
    duration: '67m',
    trending: true,
    myList: true
  }
];

export const featuredMovie = movies.find(movie => movie.featured) || movies[0];