import { ArgsType, Field} from "@nestjs/graphql";

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
}