import { CityAnalizer } from "./CityAnalizer";
import { Person } from "./Person";

// Problem #1

const tester = new Person("Tester");

tester.hello();

// Problem #2 

const citiesList: string[] = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
];

const cityAnalizer = new CityAnalizer(citiesList);
cityAnalizer.logTopCities(5);