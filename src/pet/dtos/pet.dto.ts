import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  nascimento: string;

  @IsString()
  animal: string;

  @IsString()
  raca: string;

  @IsString()
  donoNome: string;

  @IsString()
  telefone: string;
}
