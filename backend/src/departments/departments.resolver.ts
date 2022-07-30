import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { DepartmentDTO } from './dto/department.dto';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver(() => DepartmentDTO)
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Mutation(() => DepartmentDTO)
  @UseGuards(GqlAuthGuard)
  createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput) {
    return this.departmentsService.create(createDepartmentInput);
  }

  @Query(() => [DepartmentDTO], { name: 'departments' })
  @UseGuards(GqlAuthGuard)
  findAll() {
    return this.departmentsService.findAll();
  }

  @Query(() => DepartmentDTO, { name: 'department' })
  @UseGuards(GqlAuthGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.findOne(id);
  }

  @Mutation(() => DepartmentDTO)
  @UseGuards(GqlAuthGuard)
  updateDepartment(@Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput) {
    return this.departmentsService.update(updateDepartmentInput.id, updateDepartmentInput);
  }

  @Mutation(() => DepartmentDTO)
  @UseGuards(GqlAuthGuard)
  removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.remove(id);
  }
}
