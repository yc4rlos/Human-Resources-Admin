import { InputType, Field } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql'

@InputType()
export class CreateEmployeeInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @FilterableField()
  email: string;
}
