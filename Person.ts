// (!) I created a single file for class as a good practice

/**
 * Represents a person with a name and a greeting method. 
 */
export class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`Hello ${this.name}!`);
    }
}