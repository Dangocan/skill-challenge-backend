import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InChargeService } from './in-charge.service';
import { CreateInChargeDto } from './dto/create-in-charge.dto';
import { UpdateInChargeDto } from './dto/update-in-charge.dto';

@Controller('in-charge')
export class InChargeController {
  constructor(private readonly inChargeService: InChargeService) {}

  @Post()
  create(@Body() createInChargeDto: CreateInChargeDto) {
    return this.inChargeService.create(createInChargeDto);
  }

  @Get()
  findAll() {
    return this.inChargeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inChargeService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInChargeDto: UpdateInChargeDto,
  ) {
    return this.inChargeService.update(id, updateInChargeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inChargeService.remove(id);
  }
}
