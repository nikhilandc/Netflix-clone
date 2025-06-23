export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  backdrop: string;
  genre: string[];
  rating: string;
  year: number;
  duration: string;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
  myList?: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}