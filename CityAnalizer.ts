/**
 * This class allows to analyze a list of cities.
 */
export class CityAnalizer {
    cities: string[]

    constructor(cities: string[]){
        this.cities = cities;
    }

    /**
     * Count the number of times the city appears on the list.
     * @returns A map where the key is the city and the value is the times that the city appears.
     */
    countCityAppearances(): Map<string, number> {
        const frecuency = new Map<string, number>();

        for (const city of this.cities) {
            if (frecuency.has(city)) {
                frecuency.set(city, frecuency.get(city)! + 1);
            } 
            else {
                frecuency.set(city, 1);
            }
        }

        return frecuency;
    }

    /**
     * Sorts the cities by their times of appearance in descending order
     * @param frecuency A map of city appearances.
     * @returns An array of the cities in order of their appearances.
     */
    sortCitiesByAppearances(frecuency: Map<string, number>): string[] {
        return Array.from(frecuency).sort((a, b) => b[1] - a[1]).map(([city]) => city);
    }

    /**
     * Logs the top cities by appearances by a given number.
     * @param top number of top cities to log.
     */
    logTopCities(top: number): void {
        const frecuency = this.countCityAppearances();
        const sortedCities = this.sortCitiesByAppearances(frecuency);
        const topCities = sortedCities.slice(0, top);

        console.log(`Top ${top} cities:`);
        topCities.forEach((city, index) => {
            console.log(`${index + 1}. ${city}`);
        });
    }
}