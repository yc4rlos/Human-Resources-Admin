import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CreateAddressInput, CreateDetailsInput } from "../inputs/create-employee.input";


@ArgsType()
export class GetAddressArgs {
    @Field({ nullable: true })
    street: string;

    @Field({ nullable: true })
    city: string;

    @Field({ nullable: true })
    country: string;

    @Field({ nullable: true })
    complement?: string;

    @Field({ nullable: true })
    created_at: Date;

    @Field({ nullable: true })
    updated_at: Date;

    @Field({ nullable: true })
    deleted_at: Date;
}

@ArgsType()
export class GetDetailsArgs {

    @Field({ nullable: true })
    skill: string;

    @Field(() => Int, { nullable: true })
    knowledgeLevel: number;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    neetToGetBetter?: string;

    @Field({ nullable: true })
    created_at: Date;

    @Field({ nullable: true })
    updated_at: Date;

    @Field({ nullable: true })
    deleted_at: Date;
}

@ArgsType()
export class GetEmployeesArgs {

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    birthDate: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    phone: string;

    @Field({ nullable: true })
    position: string;

    @Field(() => CreateAddressInput, { nullable: true })
    address?: GetAddressArgs;

    @Field(() => [CreateDetailsInput], { nullable: true })
    details?: GetDetailsArgs[];

    @Field({ nullable: true })
    created_at: Date;

    @Field({ nullable: true })
    updated_at: Date;

    @Field({ nullable: true })
    deleted_at: Date;
}