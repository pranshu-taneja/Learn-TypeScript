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

