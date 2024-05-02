import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Ahmed',
      email: 'test@gmai.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Ali',
      email: 'test1@gmai.com',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Zain',
      email: 'test2@gmai.com',
      role: 'user',
    },
    {
      id: 4,
      name: 'rohan',
      email: 'test4@gmai.com',
      role: 'admin',
    },
    {
      id: 5,
      name: 'Mohid',
      email: 'test54@gmai.com',
      role: 'intern',
    },
  ];

  // create all method which we created in controller
  findaAll(role?: 'intern' | 'admin' | 'user') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (!roleArray.length) throw new NotFoundException('User Role Not Found');
      return roleArray;
    }
    if (role) return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) return { ...user, ...updateUserDto };
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user: any) => user.id !== id);
    return removedUser;
  }
}
