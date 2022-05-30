import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('place')
@UseGuards(AuthGuard('jwt'))
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  async create(@Body() createPlaceDto: CreatePlaceDto) {
    return await this.placeService.create(createPlaceDto);
  }

  @Get()
  async findAll() {
    return await this.placeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.placeService.findOne({ id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ) {
    return await this.placeService.update(id, updatePlaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.placeService.remove(id);
  }
}
