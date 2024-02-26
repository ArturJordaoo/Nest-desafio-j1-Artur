import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetsController {
    private readonly petsService;
    constructor(petsService: PetsService);
    create(data: CreatePetDto): Promise<{
        message: string;
        data: {
            id: string;
            nome: string;
            nascimento: string;
            animal: string;
            raca: string;
            donoId: string;
        };
    } | {
        message: any;
        data?: undefined;
    }>;
    findAll(): Promise<{
        data: {
            id: string;
            nome: string;
            nascimento: string;
            animal: string;
            raca: string;
            donoId: string;
        }[];
        message?: undefined;
    } | {
        message: any;
        data?: undefined;
    }>;
    findOne(id: string): Promise<{
        data: {
            id: string;
            nome: string;
            nascimento: string;
            animal: string;
            raca: string;
            donoId: string;
        };
        message?: undefined;
    } | {
        message: any;
        data?: undefined;
    }>;
    update(id: string, updatePetDto: UpdatePetDto): Promise<{
        message: string;
        data: {
            id: string;
            nome: string;
            nascimento: string;
            animal: string;
            raca: string;
            donoId: string;
        };
    } | {
        message: any;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        message: any;
    }>;
}
