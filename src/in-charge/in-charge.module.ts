import { Module } from '@nestjs/common';
import { InChargeService } from './in-charge.service';
import { InChargeController } from './in-charge.controller';

@Module({
  controllers: [InChargeController],
  providers: [InChargeService]
})
export class InChargeModule {}
