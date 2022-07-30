import { Field, Int, ObjectType } from "@nestjs/graphql";
import { TaskDTO } from "./task.dto";

@ObjectType()
export class TaskListDTO {

    @Field(() => Int, { nullable: true })
    count?: number;

    @Field(() => Int, { nullable: true })
    currentPage?: number;

    @Field(() => Int, { nullable: true })
    totalPages?: number;

    @Field(() => [TaskDTO])
    tasks: TaskDTO[];
}