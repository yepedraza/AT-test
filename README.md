# AT Test

*Hi. This is my personal solution for the problems given for test. I'd like to say some comments for your possible interest:*

1. *Personally, I prefer using TypeScript because it is a typed language, which makes it more similar to C#.*
2. *I like to write code in a maintainable and understandable way. That's why I usually use good practices such as separating classes by modules and commenting the code well. I feel that by writing code like this I am talking or transmitting to another possible developer everything I have done :)*
3. *I also took the time to simulate a workflow in Git, creating a development branch that at the end of the exercise I merged with the master branch.*

## Problem 1

### A. Create an Object with a hello method that writes "Hello <name> in the console"

You can see the solution in [Person.ts](./Person.ts) and [index.ts](./index.ts) files

### B. How would you make name inmutable?

Adding the **readonly** property in the *name* attribute: 

```typescript
export class Person {
    readonly name: string;

    ...
}
```

## Problem 2

### Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least.

You can see the solution in [CityAnalizer.ts](./CityAnalizer.ts) and [index.ts](./index.ts) files

*Thanks for your time!*