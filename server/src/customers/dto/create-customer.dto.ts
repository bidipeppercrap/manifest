import {
  Length,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';

export class CreateCustomerDto {
  @Length(3, 250)
  readonly name: string;

  @IsOptional()
  @Length(3, 250)
  readonly phone: string;

  @IsOptional()
  @Length(3, 250)
  readonly email: string;

  @IsOptional()
  @Length(0, 250)
  readonly address: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(999999999)
  readonly priceThreshold: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(999999999)
  readonly ageThreshold: number;

  @IsOptional()
  @IsBoolean()
  readonly debtCollecting: boolean;

  @IsOptional()
  @IsBoolean()
  readonly mailing: boolean;
}
