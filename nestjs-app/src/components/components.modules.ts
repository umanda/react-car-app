import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.modules';

@Module({
  imports: [CarsModule],
})
export class ComponentsModules {}
