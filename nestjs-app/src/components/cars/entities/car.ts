import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Max, Min } from 'class-validator';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  @Max(2000, { message: 'Daily price can not be that much higher' })
  @Min(10, { message: 'Daily prices can not be that much low' })
  dailyPrice: number;

  @Column()
  @Field()
  @Max(20000, { message: 'Monthly price can not be that much higher' })
  @Min(1000, { message: 'Monthly price can not be that much low' })
  monthlyPrice: number;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  gas: string;

  @Column()
  @Field()
  gearType: string;

  @Column()
  @Field()
  thumbnailUrl: string;
}
