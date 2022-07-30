import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class GetUsersArgs {

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    created_at: Date;

    @Field({ nullable: true })
    updated_at: Date;

    @Field({ nullable: true })
    deleted_at: Date;

    @Field(() => Int ,{ nullable: true })
    page?: number;

    @Field(() => Int ,{ nullable: true })
    take?: number;

    @Field({ nullable: true })
    count?: boolean;
}