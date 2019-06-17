export class CreateCustomerDto {
    readonly name: string;
    readonly phone: string;
    readonly email: string;
    readonly address: string;
    readonly priceThreshold: number;
    readonly ageThreshold: number;
    readonly debtCollecting: boolean;
    readonly mailing: boolean;
}