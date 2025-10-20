export class Car {
    private brand: string;
    private model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    private setyear(year: number) {
    if (year < 2000) {
        this.year = 2000;

    } else {
        this.year = year;
    }
    }
