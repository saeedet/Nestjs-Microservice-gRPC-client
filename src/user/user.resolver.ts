import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'getUserMovie' })
  findOne(@Args('name', { type: () => String }) name: string): Promise<User> {
    return this.userService.findOne(name);
  }

  @Query(() => String)
  hello() {
    return 'Hello';
  }
}
