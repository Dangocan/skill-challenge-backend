import { IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;
}
