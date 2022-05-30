import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  description: string;
}
