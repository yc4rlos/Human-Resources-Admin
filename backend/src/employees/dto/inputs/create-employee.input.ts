import { InputType, Field, Int } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';


@InputType()
export class CreateAddressInput {
  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  complement?: string;
}

@InputType()
export class CreateDetailsInput {

  @Field()
  skill: string;

  @Field(() => Int)
  knowledgeLevel: number;

  @Field()
  description: string;

  @Field({ nullable: true })
  neetToGetBetter?: string;
}


@InputType()
export class CreateEmployeeInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  birthDate: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  phone: string;

  @Field()
  @IsNotEmpty()
  position: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  homeOffice: boolean;

  @Field(() => CreateAddressInput)
  address: CreateAddressInput;

  @Field(() => [CreateDetailsInput])
  details: CreateDetailsInput[];
}
