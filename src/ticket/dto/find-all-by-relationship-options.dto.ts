import { IsNotEmpty } from 'class-validator';

export class FindAllByRelationshipOptionsDto {
  @IsNotEmpty()
  relations: string[];

  @IsNotEmpty()
  where: any;
}
