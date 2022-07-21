import { Field, InputType } from "@nestjs/graphql";
import { FilterableField } from '@nestjs-query/query-graphql'

@InputType()
export class CreateDepartmentInput {
    
    @Field()
    id: number;

    @FilterableField()
    name: string;

    @FilterableField()
    permissions: number;
}