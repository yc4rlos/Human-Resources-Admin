import { Module } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { RoleDTO } from './dto/role.dto';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';
import { PagingStrategies } from '@nestjs-query/query-graphql';

import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Role])],
      resolvers: [
        {
          DTOClass: RoleDTO,
          CreateDTOClass: CreateRoleInput,
          UpdateDTOClass: UpdateRoleInput,
          EntityClass: Role,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET
        }
      ]
    })
  ],
  providers: []
})
export class RoleModule { }
