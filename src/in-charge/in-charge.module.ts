import { Module } from '@nestjs/common';
import { InChargeService } from './in-charge.service';
import { InChargeController } from './in-charge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InCharge } from './entities/in-charge.entity';

@Module({
  controllers: [InChargeController],
  providers: [InChargeService],
  imports: [TypeOrmModule.forFeature([InCharge])],
})
export class InChargeModule {}
