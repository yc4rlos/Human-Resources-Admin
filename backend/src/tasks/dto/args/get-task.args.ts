import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class GetTaskArgs {
    @Field(() => Int, { nullable: true })
    id: number;

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

}