import { Args, Query, Resolver } from '@nestjs/graphql';
import { Movie } from './entities/movie.entity';
import { MovieService } from './movie.service';

@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => Movie, { name: 'getMovie', nullable: true })
  findOne(@Args('name', { type: () => String }) name: string): Promise<Movie> {
    return this.movieService.findOne(name);
  }
}
