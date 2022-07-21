
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { PagingStrategies } from '@nestjs-query/query-graphql'
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { DepartmentDTO } from './dto/department.dto';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Department])],
      resolvers: [
        {
          DTOClass: DepartmentDTO,
          CreateDTOClass: CreateDepartmentInput,
          UpdateDTOClass: UpdateDepartmentInput,
          EntityClass: Department,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET
        }
      ]
    })
  ],
  providers: []
})
export class DepartmentsModule { }
