import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetTaskArgs } from './dto/args/get-tasks.args';
import { CreateTaskInput } from './dto/inputs/create-task.input';
import { UpdateTaskInput } from './dto/inputs/update-task.input';
import { TaskDTO } from './dto/task.dto';
import { TaskListDTO } from './dto/taskList.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) { }

  create(createTaskInput: CreateTaskInput) {
    return this.taskRepository.save(createTaskInput);
  }

  async findAll(args: GetTaskArgs): Promise<TaskListDTO> {
    let query = "";
    const keys = Object.keys(args);
    const values = Object.values(args);
    let counter = 1;
    keys.forEach((key, index) => {
      if (key != 'take' && key != 'count' && key != 'page') {
        if (values[index]) {
          if (counter != 1) {
            query += " and "
          }
          query += `LOWER(task.${key}) like '%${values[index]}%'`
          counter++;
        }
      }
    });

    const skipCount = args.page > 1 ? ((args.page - 1) * args.take) : 0;

    const tasks: TaskDTO[] = await this.taskRepository.createQueryBuilder("task")
      .leftJoinAndSelect('task.employee', 'employee')
      .where(query).skip(skipCount).take(args?.take).getMany();

    const count = await this.taskRepository.createQueryBuilder("task")
      .select().getCount();

    const totalPages = args.take ? Math.round(count / Number(args?.take)) : 0;

    return { tasks, count, totalPages, currentPage: args.page || 1 };

  }

  findOne(args: GetTaskArgs) {
    return this.taskRepository.findOne({ where: { ...args }, relations: ['employee'] });
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    await this.taskRepository.update(id, updateTaskInput);
    return this.taskRepository.findOne({ where: { id } })
  }

  remove(id: number) {
    return this.taskRepository.softDelete(id);
  }
}
