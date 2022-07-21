import { CreateRoleInput } from './create-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql'

@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @FilterableField()
  name: string;

  @FilterableField()
  permissions: number;
}
