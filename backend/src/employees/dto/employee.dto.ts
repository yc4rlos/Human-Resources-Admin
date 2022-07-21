import { Field, ObjectType } from "@nestjs/graphql";
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Employee')
export class EmployeeDTO {
    @Field()
    id: number;

    @FilterableField()
    name: string;

    @Field()
    age: number;

    @FilterableField()
    email: string;

    @FilterableField()
    created_at: Date;

    @FilterableField()
    updated_at: Date;

    @FilterableField()
    deleted_at: Date;
}