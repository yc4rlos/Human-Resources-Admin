import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { TaskDTO } from './dto/task.dto';
import { CreateTaskInput } from './dto/inputs/create-task.input';
import { UpdateTaskInput } from './dto/inputs/update-task.input';
import { GetTaskArgs } from './dto/args/get-tasks.args';

@Resolver(() => TaskDTO)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) { }

  @Mutation(() => TaskDTO)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.tasksService.create(createTaskInput);
  }

  @Query(() => [TaskDTO], { name: 'tasks' })
  findAll(@Args() getTasksArgs: GetTaskArgs) {
    return this.tasksService.findAll(getTasksArgs);
  }

  @Query(() => TaskDTO, { name: 'task' })
  findOne(@Args() getTaskArgs: GetTaskArgs) {
    return this.tasksService.findOne(getTaskArgs);
  }

  @Mutation(() => TaskDTO)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.tasksService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => TaskDTO)
  removeTask(@Args('id', { type: () => Int }) id: number) {
    return this.tasksService.remove(id);
  }
}
