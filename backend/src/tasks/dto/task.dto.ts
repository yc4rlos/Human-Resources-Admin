import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EmployeeDTO } from 'src/employees/dto/employee.dto';

@ObjectType()
export class TaskDTO {
  @Field(() => Int)
  id: number

  @Field()
  name: string;

  @Field()
  date: string;

  @Field()
  status: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => EmployeeDTO, {nullable: true})
  employee: EmployeeDTO;
}
