# **TIPS**
- <p style="color:yellow;">Use I as a prefix for interfaces. and T as a prefix for types. Increases code readability!!</p> 
- <p style="color:pink;">Use PascalCase for interface names and camelCase for variable names.</p>
- <p style="color:lightgreen;">Use a question mark (?) to denote an optional property.</p>
- 

# **What are some of the features that TypeScript adds to JavaScript?**

- TypeScript adds optional static typing, classes, interfaces, enums, generics, and other features to JavaScript.

# **What is the purpose of static typing in TypeScript?**

- Static typing helps to catch type-related errors at compile-time rather than runtime, making it easier to write and maintain large-scale applications.

# **What are the types available in TypeScript and their use cases?**

- string:
    Used to represent string values, such as "hello" or "world".
    Example: 
    ```typescript
    let message: string = "hello world";
    ```

- number:
    Used to represent numeric values, such as 42 or 3.14.
    Example: 
    ```typescript
    let count: number = 42;
    ```

- boolean:
    Used to represent boolean values, such as true or false.
    Example: 
    ```typescript
    let isActive: boolean = true;
    ```

- array:
    Used to represent an array of values of a specific type.
    Example: 
    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- object:
    Used to represent an object with key-value pairs of specific types.
    Example: 
    ```typescript
    let user: { name: string, age: number } = { name: "Alice", age: 30 };
    ```

- any:
    Used to represent any type of value.
    Example: 
    ```typescript
    let value: any = "hello";
    value = 42;
    ```

- void:
    Used to represent the absence of any value.
    Example: 
    ```typescript
    function logMessage(message: string): void {
        console.log(message);
    }
    ```

- Null:
  null and undefined: used to represent null and undefined values, respectively.
  ```typescript
  let myValue: string | null = null;
  ```

- tuple: used to represent arrays with a fixed number of elements of different types.
    ```typescript
    let user: [string, number] = ["John Doe", 42];
    ```
- enum: used to represent a set of named constant values.
    ```typescript
    enum Color {
    Red,
    Green,
    Blue
    }
    let myColor: Color = Color.Red;
    ```
These are just a few examples of the many types available in TypeScript. The most commonly used types are `string`, `number`, `boolean`, `array`, and `object`, while `any` and `void` should be used sparingly.


# **Type Alias & Interfaces**

## Types vs. Interfaces in TypeScript

Both types and interfaces allow you to define custom types in TypeScript, but there are some differences between them.

### Types

- Types allow you to define a custom type by specifying the type of its properties and methods.
- Types can be used to define union types, intersection types, tuples, and other complex types.
- Types are useful for creating reusable types that can be used throughout your codebase.

Example:

```typescript
type Person = {
name: string;
age: number;
address?: string;       //for optional property
}
```

In the above example, we defined a type `Person` that has a `name` property of type `string`, an `age` property of type `number`, and an optional `address` property of type `string`.

## Interfaces

- Interfaces allow you to define a custom type by specifying the shape of its properties and methods.
- Interfaces can extend other interfaces, which makes them useful for creating modular and composable types.
- Interfaces are useful for creating types that are consumed by external code or libraries.

Example:
```typescript
interface User {
name: string;
email: string;
}

interface Admin extends User {
adminLevel: number;
}
```

In the above example, we defined an interface `User` that has a `name` property of type `string` and an `email` property of type `string`. We then defined an interface `Admin` that extends `User` and has an additional `adminLevel` property of type `number`.

# **Union, Intersection, and Tuple Types in TypeScript**

1. Union type allows a variable to have multiple types, denoted by the | symbol.
1. Intersection type combines multiple types into a single type, denoted by the & symbol.
1. Tuple type allows an array to have a fixed number of elements with different types, denoted by square brackets and the types in order.


# **Generics in TypeScript**
- Generics in TypeScript allow us to create reusable code that can work with different types. They are used to create functions, classes, and interfaces that can work with any data type. These are almost similar to templates in cpp language.

*`Example:1.`*
```typescript
function identity<T>(arg: T): T {
    return arg;
}

// Usage
let output1 = identity<string>("hello"); // returns "hello"
let output2 = identity<number>(123); // returns 123
```

*`Example:2.`*
```typescript
class DataStore<T> {
  private data: T[] = [];          //array of custom type

  add(item: T) {
      this.data.push(item);
  }

  getAll(): T[] {
      return this.data;
  }
}

// Usage
const store = new DataStore<string>();
store.add("foo");
store.add("bar");
const items = store.getAll(); // returns ["foo", "bar"]
```

*`Example:3.`*
```typescript
interface Hasshit{
    age: number;
}
function holo<T extends Hasshit>(parameter:T):T{        //Here We are telling that T generic will have a property named by age cuz its of interface from Hasshit and we need to pass the alredy made type like the made interface above
    console.log("\nGeneric who knows a specific property upcoming : ",parameter.age);
    return parameter;
}

const bo:Hasshit = {
    age:13
}

holo(bo);
```


*`Example:4.`*
```typescript
function add(a: any, b: any): any {     //Now this might not be called as generics
    return a+b;
}
//But this function will work cuz there is any which tells that its one of the type that typescript or javascript knows how to operate using a operator
```

*`Example:5.`*
```typescript
function value<T>(a:Array<T>, b:Array<T>):Array<T>{
    console.log(a.length);  //length again won't work if you don't tell him that its going to be array
    return a;
}
```

*`Example:6. (real life implementation)`*
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

function filterProducts<T>(products: T[], criteria: (product: T) => boolean): T[] {
  return products.filter(criteria);         //this step is very crucial  
  //basically filter method returns an array which is made newly
  // the syntax arr.filter(callback_fun_name); 
}

const products: Product[] = [
    { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 30 },
];

const filteredProducts = filterProducts(products, product => product.price >= 20 && product.price <= 30);

console.log(filteredProducts);
// Output: [{ id: 2, name: 'Product B', price: 20 }, { id: 3, name: 'Product C', price: 30 }]

```


*`Example:7. (real life implementation but important tbh)`*
```typescript
interface IPost {
    title: string;
    id: number;
    description: string;
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

const fetchUsersData = async (path: string): Promise<IUser[]> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
}

(async () => {
    // const posts = await fetchPostData('/posts');
    const posts = await fetchData<IPost[]>('/posts');
    posts[0].
})();

```

