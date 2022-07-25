import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteUserInput{
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  id: number;
}
