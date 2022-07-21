import { InputType, Int, Field } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class CreateRoleInput {

  @FilterableField()
  name: string;

  @FilterableField()
  permissions: number;

}
