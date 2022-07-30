import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserDTO } from "./user.dto";

@ObjectType()
export class UserListDTO {

    @Field(() => Int, {nullable: true})
    count?: number;

    @Field(() => Int, {nullable: true})
    currentPage?: number;

    @Field(() => Int, {nullable: true})
    totalPages?: number;

    @Field(() => [UserDTO])
    users: UserDTO[]
}