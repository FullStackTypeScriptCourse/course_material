# Typescript week 1
1. Quick demo project to get started ([see example](README.md) Class exercise 1).
2. What is Typescript and how does it benefit us?
    - Being coherent in typing and consistent with static types
    - Providing documentation and IntelliSense of the available possibilities
    - Detecting bugs early 
3. How to use:
    - tsconfig.json:
    - `compilerOptions`: This is the main section of the file and contains the options that will be used by the TypeScript compiler. Some common options include `target`, `module`, `strict`, `outDir`, `sourceMap`, and `esModuleInterop`. 
    - `include`: This option specifies an array of file or directory names that should be included when compiling the project. By default, TypeScript will compile all .ts and .tsx files in the current directory and its subdirectories. You can use the include option to include additional files or directories.
    - `exclude`: This option specifies an array of file or directory names that should be excluded when compiling the project. By default, TypeScript will exclude the node_modules directory and any files that match the outDir option. You can use the exclude option to exclude additional files or directories.
    - `files`: This option specifies an array of file names that should be included in the project. This is an alternative to using the include and exclude options. If you use the files option, TypeScript will only compile the specified files and will ignore any other files in the project.
    - `extends`: This option allows you to extend the configuration from another tsconfig.json file. This is useful when you have multiple projects that share common configuration options.
    - compiling (ts can not run in browsers)
    - 
3. The basic types: 
  - [any, unknown, never, void, undefined, null] and [number, string, boolean] and also [object, function, Array, tupple]
4. [The typing system](./types.ts)
  - [type, interface, union type, type alias, type assertion]: 
    - Type: Use a type when you want to create a simple type alias. This is useful when you have a complex or lengthy type that you want to simplify or clarify with a shorter name.
    - Interface: Use an interface when you want to define a contract for an object's shape. Interfaces are especially useful when you want to ensure that objects have specific properties and methods.
    - Union type: Use a union type when you want to allow a value to have multiple types. This is useful when a value could be one of several different types.
    - Type alias: Use a type alias when you want to create a new name for a type, especially when the type is long or complex. This can make your code more readable and easier to maintain.
    - Type assertion: Use a type assertion when you want to specify the type of a value, especially when TypeScript can't infer the type automatically. This is useful when working with third-party libraries or legacy code that doesn't have type information.