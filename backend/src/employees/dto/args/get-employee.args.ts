import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class GetEmployeeArgs {

    @Field(() => Int, { nullable: true })
    id: number;

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

    @Field({ nullable: true })
    created_at: Date;
    
    @Field({ nullable: true })
    updated_at: Date;
    
    @Field({ nullable: true })
    deleted_at: Date;
}
