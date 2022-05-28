import { PartialType } from '@nestjs/mapped-types';
import { CreateInChargeDto } from './create-in-charge.dto';

export class UpdateInChargeDto extends PartialType(CreateInChargeDto) {}
