import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Pet } from '.prisma/client';
export declare class PetsService {
    private prisma;
    constructor(prisma: PrismaService);
    private findPetOrFail;
    create(data: CreatePetDto): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: string): Promise<Pet>;
    update(id: string, updatePetDto: UpdatePetDto): Promise<Pet>;
    remove(id: string): Promise<void>;
}
