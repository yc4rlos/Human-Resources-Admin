import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DepartmentDTO {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
