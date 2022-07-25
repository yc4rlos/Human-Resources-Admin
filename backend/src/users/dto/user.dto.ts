import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Exclude } from 'class-transformer';

@ObjectType()
export class UserDTO {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    @Exclude()
    password: string;
}
