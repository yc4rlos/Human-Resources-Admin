import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Employee } from './entities/employee.entity';
import { Details } from './entities/details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Address, Details])],
  providers: [EmployeesResolver, EmployeesService]
})
export class EmployeesModule {}
