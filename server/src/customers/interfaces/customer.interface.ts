export interface Customer {
    readonly id: string;
    readonly name: string;
    readonly phone: string;
    readonly email: string;
    readonly address: string;
    readonly priceThreshold: number;
    readonly ageThreshold: number;
    readonly debtCollecting: boolean;
    readonly mailing: boolean;
}