import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() data: CreatePetDto) {
    try {
      const pet = await this.petsService.create(data);
      return { message: 'Pet criado com sucesso', data: pet };
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const pets = await this.petsService.findAll();
      return { data: pets };
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const pet = await this.petsService.findOne(id);
      return { data: pet };
    } catch (error) {
      return { message: error.message };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    try {
      const pet = await this.petsService.update(id, updatePetDto);
      return { message: 'Pet atualizado com sucesso', data: pet };
    } catch (error) {
      return { message: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.petsService.remove(id);
      return { message: 'Pet removido com sucesso' };
    } catch (error) {
      return { message: error.message };
    }
  }
}