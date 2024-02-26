import {
  Injectable,
  NotFoundException,
  ConflictException
} from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma.service';
import { Pet } from '.prisma/client';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  private async findPetOrFail(id: string): Promise<Pet> {
    const pet = await this.prisma.pet.findUnique({
      where: { id },
    });

    if (!pet) {
      throw new NotFoundException('Pet não encontrado');
    }

    return pet;
  }

  async create(data: CreatePetDto): Promise<Pet> {
    const { nome, nascimento, animal, raca, donoNome, telefone } = data;

    const petExists = await this.prisma.pet.findFirst({
      where: {
        nome,
        nascimento,
        animal,
        raca,
        dono: {
          donoNome,
          telefone,
        },
      },
    });

    if (petExists) {
      throw new ConflictException('Pet já existe');
    }

    const pet = await this.prisma.pet.create({
      data: {
        nome,
        nascimento,
        animal,
        raca,
        dono: {
          create: {
            donoNome,
            telefone,
          },
        },
      },
    });

    return pet;
  }

  async findAll(): Promise<Pet[]> {
    return this.prisma.pet.findMany();
  }

  async findOne(id: string): Promise<Pet> {
    return this.findPetOrFail(id);
  }

  async update(id: string, updatePetDto: UpdatePetDto): Promise<Pet> {
    await this.findPetOrFail(id);

    return this.prisma.pet.update({
      where: { id },
      data: updatePetDto,
    });
  }

  async remove(id: string): Promise<void> {
    await this.findPetOrFail(id);

    await this.prisma.pet.delete({
      where: { id },
    });
  }
}