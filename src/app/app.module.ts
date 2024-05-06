import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../modules/users/users.module';
import { DatabaseModule } from '../configs/database/database.module';
import { ItemsModule } from '../modules/items/items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      isGlobal: true,
    }),
    UsersModule,
    DatabaseModule,
    ItemsModule,
  ],
})
export class AppModule {}
