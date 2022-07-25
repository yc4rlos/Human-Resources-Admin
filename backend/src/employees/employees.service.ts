import { GetEmployeeArgs } from './dto/args/get-employee.args';
import { Employee } from './entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeInput } from './dto/inputs/create-employee.input';
import { UpdateEmployeeInput } from './dto/inputs/update-employee.input';
import { Repository } from 'typeorm';
import { GetEmployeesArgs } from './dto/args/get-employees.args';

@Injectable()
export class EmployeesService {

  constructor(@InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>) { }

  create(createEmployeeInput: CreateEmployeeInput) {
    return this.employeeRepository.save(createEmployeeInput)
  }

  findAll(args: GetEmployeesArgs) {
    let query = "";
    const keys = Object.keys(args);
    const values = Object.values(args);
    let counter = 1;
    keys.forEach((key, index) => {
      if (values[index]) {
        if (counter != 1) {
          query += " and "
        }
        query += `LOWER(employee.${key}) like '%${values[index]}%'`
        counter++;
      }
    });
    console.log(query);

    return this.employeeRepository.createQueryBuilder("employee")
      .leftJoinAndSelect('employee.address', 'address')
      .leftJoinAndSelect('employee.details', 'details')
      .where(query)
      .getMany();
  }

  findOne(args: GetEmployeeArgs) {
    return this.employeeRepository.findOne({ where: { ...args }, relations: ['address', 'details'] });
  }

  async update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    await this.employeeRepository.update(id, updateEmployeeInput);
    return this.employeeRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.employeeRepository.softDelete(id);
  }
}
