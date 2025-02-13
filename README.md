# AT Test

## Problem 1

### A. Create an Object with a hello method that writes "Hello <name> in the console"

You can see the solution in [Person.ts](./Person.ts) and [index.ts](./index.ts) 

*Personally, I prefer using TypeScript because it is a typed language, which makes it more similar to C#.*

### B. How would you make name inmutable?

Adding the **readonly** property in the *name* attribute: 

```typescript
export class Person {
    readonly name: string;

    ...
}
```

## Problem 2

### Write a funtion that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least.