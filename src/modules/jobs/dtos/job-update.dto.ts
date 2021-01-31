import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class UpdateJobDto {
  @IsNotEmpty()
  @IsString()
  readonly _id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly title: string;

  @IsNotEmpty()
  readonly location: { city: string; state: string; country: string };

  @IsNotEmpty()
  readonly requirements: string;

  @IsNotEmpty()
  readonly information: string;

  @IsNotEmpty()
  readonly company: string;

  @IsNotEmpty()
  readonly totalSpots: number;

  @IsNotEmpty()
  readonly description: Array<string>;

  @IsNotEmpty()
  readonly education: string;

  @IsNotEmpty()
  readonly compensation: {
    currency: string;
    amount: number;
    recurrency: string;
    isVariable: boolean;
  };
}
