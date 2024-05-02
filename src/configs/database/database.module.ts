import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.getOrThrow('DATABASE_HOST'),
        port: ConfigService.getOrThrow('DATABASE_PORT'),
        database: ConfigService.getOrThrow('DATABASE_NAME'),
        username: ConfigService.getOrThrow('DATABASE_USERNAME'),
        password: ConfigService.getOrThrow('DATABASE_PASSWORD'),
        autoLoadEntities: true,
        synchronize: ConfigService.getOrThrow("DATABASE_SYNCHRONIZE")
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
