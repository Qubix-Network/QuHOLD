# QuHOLD - Simplified State Container for React App

**QuHOLD** is a simple state container library for React applications, providing an easy way to manage and synchronize state across components.

## Key Features

1. **Simple API:** Easy to use methods for setting and getting state.

2. **Subscription Management:** Allows components to subscribe to state changes and automatically updates them.

3. **Type Safety:** Written in TypeScript to provide type safety and better developer experience.

4. **Global State Management:** Easily manage global state across your application.

5. **React Integration:** Custom hook for seamless integration with React components.

## Installation

To install **QuHOLD**, you can simply add it to your project:

```bash
npm install quhold
```

Then, import the necessary functions and create your state management effortlessly!

## API Documentation

### `Hold<T>`

A class that holds a value of type T and allows subscribers to listen for changes to that value.

**Constructor**

```typescript
new Hold<T>(initialValue: T)
```

`initialValue (T)` The initial value of the state.

**Methods**

- `getValue(): T` Returns the current value of the state.
- `setValue(newValue: T): void` Sets a new value to the state and notifies all subscribers if the new value is different from the current value.
- `subscribe(subscriber: Subscriber<T>): () => void` Adds a subscriber function that will be called whenever the state changes. Returns a function to unsubscribe the subscriber.

### `createHold<T>(initialValue: T): Hold<T>`

A factory function to create a new Hold instance.

- `initialValue (T)`: The initial value of the state.
- Returns a `Hold<T>` instance.

### `useHold<T>(hold: Hold<T>): [T, (newValue: T) => void]`

A custom hook to use a Hold instance in a React component.

- `hold (Hold<T>)`: The Hold instance to be used.

**Returns a tuple:**

- The current value of the state.
- A function to set a new value to the state.

## Usage Example

## Basic State Management

```javascript
import React from "react";
import { createHold, useHold } from "quhold";

const counterHold = createHold(0);

function Counter() {
  const [count, setCount] = useHold(counterHold);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

**In this example:**

- We create a `Hold` instance `counterHold` with an initial value of `0`.
- We use the `useHold` hook to bind the `counterHold` to the `Counter` component.
- The `Counter` component displays the current count and provides buttons to increment and decrement the count.
- The `App` component renders two `Counter` components, both of which share the same state.

### Global State Management

To use **QuHOLD** for global state management, follow these steps:

1. **Create a Hold instance for your global state:**

```javascript
// state.js
import { createHold } from "quhold";

export const globalCounterHold = createHold(0);
```

2. **Use the Hold instance in your components:**

```javascript
// Counter.js
import React from "react";
import { useHold } from "quhold";
import { globalCounterHold } from "./state";

function Counter() {
  const [count, setCount] = useHold(globalCounterHold);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

3. **Render the components in your application:**

```javascript
// App.js
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Global Counter Example</h1>
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

**In this example:**

- We create a `Hold` instance `globalCounterHold` in `state.js` with an initial value of `0`.
- We use the `useHold` hook to bind the `globalCounterHold` to the `Counter` component.
- The `Counter` component displays the current count and provides buttons to increment and decrement the count.
- The `App` component renders two `Counter` components, both of which share the same global state.

## Notes

- The `Hold` class uses a set to manage subscribers, ensuring that each subscriber is unique.
- The `useHold` hook handles the subscription and cleanup automatically, making it easy to integrate with React components.

## Contributing

**QuHOLD** is an open-source project, and contributions are welcome! If you encounter any issues, have feature requests, or want to contribute improvements. To contribute, please follow the guidelines in [CONTRIBUTING](CONTRIBUTING.md).

## License

**QuHOLD** is licensed under the MIT License, allowing for both personal and commercial use with attribution. - see the [LICENSE](LICENSE) file for details.
