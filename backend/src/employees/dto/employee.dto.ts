import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TaskDTO } from 'src/tasks/dto/task.dto';

@ObjectType()
export class AddressDTO {
  @Field(() => Int)
  id: number;

  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  complement?: string;
}

@ObjectType()
export class DetailsDTO {
  @Field(() => Int)
  id: number;

  @Field({nullable: true})
  skill?: string;

  @Field(() => Int)
  knowledgeLevel: number;

  @Field()
  description: string;

  @Field({ nullable: true })
  neetToGetBetter?: string;
}

@ObjectType()
export class EmployeeDTO {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  birthDate: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  position: string;

  @Field({ nullable: true })
  homeOffice?: boolean;

  @Field(() => AddressDTO)
  address: AddressDTO;

  @Field(() => [DetailsDTO], { nullable: true })
  details: DetailsDTO[];

  @Field(() => [TaskDTO], {nullable: true})
  tasks: TaskDTO[];
}



