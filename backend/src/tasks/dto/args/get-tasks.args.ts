import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class GetTaskArgs {

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    date: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    description?: string;

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