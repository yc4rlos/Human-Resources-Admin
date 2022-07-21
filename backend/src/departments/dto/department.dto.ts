import { Field, ObjectType } from "@nestjs/graphql";
import { FilterableField } from '@nestjs-query/query-graphql'

@ObjectType('Department')
export class DepartmentDTO {
    @Field()
    id: number;

    @FilterableField()
    name: string;

    @FilterableField()
    permissions: number;

    @FilterableField()
    created_at: Date;

    @FilterableField()
    updated_at: Date;

    @FilterableField()
    deleted_at: Date;
}