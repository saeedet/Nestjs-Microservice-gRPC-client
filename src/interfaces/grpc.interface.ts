import { Observable } from 'rxjs';

export interface Hero {
  id: number;
  name: string;
}

export interface HeroById {
  id: number;
}

export interface IGrpcService {
  findOne(data: HeroById): Observable<any>;
}
