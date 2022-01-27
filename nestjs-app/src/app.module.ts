import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModules } from './components/components.modules';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: true,
    }),
    ComponentsModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
