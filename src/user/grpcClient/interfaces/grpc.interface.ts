import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  name: string;
  rating: number;
  likes: number;
}

export interface MovieName {
  name: string;
}
export interface Adad {
  id: number;
}
export interface IGrpcService {
  findOne(data: MovieName): Observable<Movie>;
}
