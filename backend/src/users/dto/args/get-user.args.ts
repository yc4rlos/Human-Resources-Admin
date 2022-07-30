import { ArgsType, Field } from "@nestjs/graphql";
import { IsInt, IsEmail } from 'class-validator';

@ArgsType()
export class GetUserArgs {
    @Field({nullable: true})
    @IsInt()
    id?: number

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    @IsEmail()
    email?: string;

    @Field({ nullable: true })
    created_at?: Date;
    
    @Field({ nullable: true })
    updated_at?: Date;
    
    @Field({ nullable: true })
    deleted_at?: Date;
}