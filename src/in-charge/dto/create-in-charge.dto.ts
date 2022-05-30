import { IsNotEmpty } from 'class-validator';

export class CreateInChargeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phoneNumber: string;
}
