import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  id: number;
}
