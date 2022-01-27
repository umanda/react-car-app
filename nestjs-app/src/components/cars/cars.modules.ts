import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { Car } from './entities/car';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
