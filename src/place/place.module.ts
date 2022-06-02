import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [PlaceController],
  providers: [PlaceService],
  imports: [TypeOrmModule.forFeature([Place, Ticket, User])],
})
export class PlaceModule {}
