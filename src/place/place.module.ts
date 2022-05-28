import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';

@Module({
  controllers: [PlaceController],
  providers: [PlaceService],
  imports: [TypeOrmModule.forFeature([Place])],
})
export class PlaceModule {}
