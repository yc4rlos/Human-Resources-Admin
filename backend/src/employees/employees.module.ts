import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeDTO } from './dto/employee.dto';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { PagingStrategies } from '@nestjs-query/query-graphql';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Employee])],
      resolvers: [
        {
          DTOClass: EmployeeDTO,
          CreateDTOClass: CreateEmployeeInput,
          UpdateDTOClass: UpdateEmployeeInput,
          EntityClass: Employee,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET
        }
      ]
    })
  ],
  providers: []
})
export class EmployeesModule { }
