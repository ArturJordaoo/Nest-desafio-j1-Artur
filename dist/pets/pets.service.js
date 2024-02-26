"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let PetsService = class PetsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findPetOrFail(id) {
        const pet = await this.prisma.pet.findUnique({
            where: { id },
        });
        if (!pet) {
            throw new common_1.NotFoundException('Pet não encontrado');
        }
        return pet;
    }
    async create(data) {
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
            throw new common_1.ConflictException('Pet já existe');
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
    async findAll() {
        return this.prisma.pet.findMany();
    }
    async findOne(id) {
        return this.findPetOrFail(id);
    }
    async update(id, updatePetDto) {
        await this.findPetOrFail(id);
        return this.prisma.pet.update({
            where: { id },
            data: updatePetDto,
        });
    }
    async remove(id) {
        await this.findPetOrFail(id);
        await this.prisma.pet.delete({
            where: { id },
        });
    }
};
exports.PetsService = PetsService;
exports.PetsService = PetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PetsService);
//# sourceMappingURL=pets.service.js.map