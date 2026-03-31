// types.ts
import { ApiProperty } from '@nestjs/swagger';

export enum Status {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class CreateUserDto {
  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User password' })
  password: string;

  @ApiProperty({ description: 'User role' })
  role: Role;
}

export class UpdateUserDto {
  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User role' })
  role: Role;
}

export class CreateTaskDto {
  @ApiProperty({ description: 'Task name' })
  name: string;

  @ApiProperty({ description: 'Task description' })
  description: string;

  @ApiProperty({ description: 'Task status' })
  status: Status;
}

export class UpdateTaskDto {
  @ApiProperty({ description: 'Task name' })
  name: string;

  @ApiProperty({ description: 'Task description' })
  description: string;

  @ApiProperty({ description: 'Task status' })
  status: Status;
}