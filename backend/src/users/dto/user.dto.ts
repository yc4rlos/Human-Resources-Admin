import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Exclude } from 'class-transformer';
import { IsEmail } from "class-validator";

@ObjectType()
export class UserDTO {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @Exclude()
    password: string;

    @Field()
    created_at: Date;

    @Field()
    updated_at: Date;

    @Field({ nullable: true })
    deleted_at: Date;
}
