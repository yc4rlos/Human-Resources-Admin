import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { EmployeeDTO } from './dto/employee.dto';
import { CreateEmployeeInput } from './dto/inputs/create-employee.input';
import { UpdateEmployeeInput } from './dto/inputs/update-employee.input';
import { GetEmployeesArgs } from './dto/args/get-employees.args';
import { GetEmployeeArgs } from './dto/args/get-employee.args';

@Resolver(() => EmployeeDTO)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) { }

  @Mutation(() => EmployeeDTO)
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
    return this.employeesService.create(createEmployeeInput);
  }

  @Query(() => [EmployeeDTO], { name: 'employees' })
  findAll(@Args() getEmployeesArgs: GetEmployeesArgs) {
    return this.employeesService.findAll(getEmployeesArgs);
  }

  @Query(() => EmployeeDTO, { name: 'employee' })
  findOne(@Args() getEmployeeArgs: GetEmployeeArgs) {
    return this.employeesService.findOne(getEmployeeArgs);
  }

  @Mutation(() => EmployeeDTO)
  updateEmployee(@Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeesService.update(updateEmployeeInput.id, updateEmployeeInput);
  }

  @Mutation(() => EmployeeDTO)
  removeEmployee(@Args('id', { type: () => Int }) id: number) {
    return this.employeesService.remove(id);
  }
}
