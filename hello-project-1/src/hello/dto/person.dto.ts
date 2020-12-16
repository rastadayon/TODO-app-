import { Length, IsOptional, Min, IsNumber, MinLength} from 'class-validator';

export class PersonDto {
    @Length(3, 10)
    name: string;

    @IsNumber()
    @IsOptional()
    @MinLength(1960)
    year: number;

}
