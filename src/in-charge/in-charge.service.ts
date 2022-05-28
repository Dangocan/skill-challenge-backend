import { Injectable } from '@nestjs/common';
import { CreateInChargeDto } from './dto/create-in-charge.dto';
import { UpdateInChargeDto } from './dto/update-in-charge.dto';

@Injectable()
export class InChargeService {
  create(createInChargeDto: CreateInChargeDto) {
    return 'This action adds a new inCharge';
  }

  findAll() {
    return `This action returns all inCharge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inCharge`;
  }

  update(id: number, updateInChargeDto: UpdateInChargeDto) {
    return `This action updates a #${id} inCharge`;
  }

  remove(id: number) {
    return `This action removes a #${id} inCharge`;
  }
}
