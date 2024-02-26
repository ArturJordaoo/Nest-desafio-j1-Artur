import { IsString, IsNotEmpty, IsDateString, IsIn, Length } from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  nome: string;

  @IsDateString()
  nascimento: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['gato', 'cachorro'])
  animal: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  raca: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  donoNome: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;
}
