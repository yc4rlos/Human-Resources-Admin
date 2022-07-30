import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsDateString()
  date: string;

  @Field()
  @IsNotEmpty()
  status: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, {nullable: true})
  employee: any;
}
