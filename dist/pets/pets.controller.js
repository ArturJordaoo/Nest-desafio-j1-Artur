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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
const create_pet_dto_1 = require("./dto/create-pet.dto");
const update_pet_dto_1 = require("./dto/update-pet.dto");
let PetsController = class PetsController {
    constructor(petsService) {
        this.petsService = petsService;
    }
    async create(data) {
        try {
            const pet = await this.petsService.create(data);
            return { message: 'Pet criado com sucesso', data: pet };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async findAll() {
        try {
            const pets = await this.petsService.findAll();
            return { data: pets };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async findOne(id) {
        try {
            const pet = await this.petsService.findOne(id);
            return { data: pet };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(id, updatePetDto) {
        try {
            const pet = await this.petsService.update(id, updatePetDto);
            return { message: 'Pet atualizado com sucesso', data: pet };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async remove(id) {
        try {
            await this.petsService.remove(id);
            return { message: 'Pet removido com sucesso' };
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
exports.PetsController = PetsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_dto_1.CreatePetDto]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pet_dto_1.UpdatePetDto]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "remove", null);
exports.PetsController = PetsController = __decorate([
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsController);
//# sourceMappingURL=pets.controller.js.map