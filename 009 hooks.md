# React Hooks

## What are Hooks?

### Definition

**Hooks are special built-in functions introduced in React 16.8 that allow functional components to use React features such as state, lifecycle methods, and context.**

Before Hooks:

* Functional components could only display UI.
* Class components handled state and lifecycle.

After Hooks:

* Functional components can do almost everything class components can.

---

## Why Were Hooks Introduced?

Before Hooks:

```jsx
class Counter extends React.Component {
    state = {
        count: 0
    };

    render() {
        return <h1>{this.state.count}</h1>;
    }
}
```

After Hooks:

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    return <h1>{count}</h1>;
}
```

Hooks make React code:

* Shorter
* Cleaner
* Easier to reuse
* Easier to understand

---

# Rules of Hooks

There are two important rules.

### Rule 1

Only call Hooks at the top level.

✅ Correct

```jsx
function App() {
    const [count, setCount] = useState(0);
}
```

❌ Wrong

```jsx
if (true) {
    useState(0);
}
```

---

### Rule 2

Only call Hooks inside React functional components or custom Hooks.

---

# Common React Hooks

React has many Hooks.

The most common are:

| Hook        | Purpose            |
| ----------- | ------------------ |
| useState    | State              |
| useEffect   | Side effects       |
| useContext  | Global data        |
| useRef      | DOM reference      |
| useMemo     | Performance        |
| useCallback | Memoized functions |
| useReducer  | Complex state      |

The first three are the most important for beginners.

---

# 1. useState()

## Definition

`useState()` lets a functional component store and update state.

---

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

## Breakdown

```jsx
const [count, setCount] = useState(0);
```

Meaning

```text
count
```

Current value.

```text
setCount()
```

Function used to change the value.

```text
0
```

Initial value.

---

## Visual

```text
useState(0)

↓

count = 0

↓

setCount(1)

↓

count = 1

↓

UI Updates
```

---

# Example 1

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </>
    );
}

export default Counter;
```

Output

```
0

[Increment]

↓

1

↓

2

↓

3
```

---

# Updating State

```jsx
setCount(count + 1);
```

React automatically re-renders.

---

# Decrement

```jsx
setCount(count - 1);
```

---

# Reset

```jsx
setCount(0);
```

---

# String State

```jsx
const [name, setName] = useState("John");
```

Change

```jsx
setName("Ali");
```

---

# Boolean State

```jsx
const [dark, setDark] = useState(false);
```

Toggle

```jsx
setDark(!dark);
```

---

# Array State

```jsx
const [numbers, setNumbers] = useState([1,2,3]);
```

Add

```jsx
setNumbers([...numbers,4]);
```

Output

```
[1,2,3,4]
```

---

# Object State

```jsx
const [user,setUser]=useState({

    name:"John",

    age:22

});
```

Update

```jsx
setUser({

    ...user,

    age:23

});
```

---

# Functional Update

When the next state depends on the previous state, use a function.

```jsx
setCount(prev => prev + 1);
```

Preferred over

```jsx
setCount(count + 1);
```

---

# useState Flow

```text
Button Click

↓

setCount()

↓

State Changes

↓

Component Re-renders

↓

UI Updates
```

---

# 2. useEffect()

## Definition

`useEffect()` performs side effects inside functional components.

---

## What is a Side Effect?

Examples

* API calls
* Fetch data
* Timers
* Local Storage
* DOM updates
* Event listeners

---

## Syntax

```jsx
useEffect(() => {

});
```

---

# Runs Every Render

```jsx
useEffect(() => {

    console.log("Hello");

});
```

Runs

```
First Render

↓

Second Render

↓

Third Render
```

---

# Run Once

```jsx
useEffect(() => {

    console.log("Mounted");

}, []);
```

Output

```
Mounted
```

Runs only once.

Equivalent to

```jsx
componentDidMount()
```

---

# Run When Value Changes

```jsx
useEffect(() => {

    console.log("Count Changed");

}, [count]);
```

Runs only when

```text
count
```

changes.

---

# Multiple Dependencies

```jsx
useEffect(() => {

}, [count,name]);
```

Runs when

* count changes
* OR name changes

---

# Cleanup Function

Used for

* Timers
* Event listeners
* Subscriptions

Example

```jsx
useEffect(() => {

    console.log("Mounted");

    return () => {

        console.log("Unmounted");

    };

}, []);
```

Output

```
Mounted

↓

Unmounted
```

Equivalent to

```jsx
componentWillUnmount()
```

---

# Timer Example

```jsx
useEffect(() => {

    const timer = setInterval(() => {

        console.log("Running");

    },1000);

    return () => {

        clearInterval(timer);

    };

}, []);
```

---

# Fetch Example

```jsx
import { useEffect } from "react";

useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(res => res.json())

        .then(data => console.log(data));

}, []);
```

---

# useEffect Lifecycle

```text
Component Mount

↓

useEffect()

↓

State Changes

↓

useEffect()

↓

Component Removed

↓

Cleanup Function
```

---

# 3. useContext()

## Definition

`useContext()` allows components to access shared data without passing props through every intermediate component.

---

# Problem Without useContext

Imagine

```text
App

↓

Parent

↓

Child

↓

GrandChild
```

Suppose App has

```text
User = John
```

Without Context

```
App

↓

Parent

↓

Child

↓

GrandChild
```

Each component must receive

```jsx
user
```

as props.

This is called

**Prop Drilling.**

---

# Solution

Use Context.

```text
App

↓

Context

↓

GrandChild
```

Every component can access the data directly.

---

# Step 1

Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

---

# Step 2

Provide Data

```jsx
<UserContext.Provider value="John">

    <Home/>

</UserContext.Provider>
```

---

# Step 3

Consume Data

```jsx
import { useContext } from "react";

const user = useContext(UserContext);

console.log(user);
```

Output

```
John
```

---

# Full Example

## UserContext.js

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

## App.jsx

```jsx
import { UserContext } from "./UserContext";
import Home from "./Home";

function App() {

    return (

        <UserContext.Provider value="John">

            <Home/>

        </UserContext.Provider>

    );

}
```

---

## Home.jsx

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {

    const user = useContext(UserContext);

    return (

        <h1>{user}</h1>

    );

}
```

Output

```
John
```

---

# useContext Flow

```text
createContext()

↓

Provider

↓

Component

↓

useContext()

↓

Data Received
```

---

# useContext with Object

```jsx
<UserContext.Provider

value={{

    name:"John",

    age:22

}}

>
```

Access

```jsx
const user = useContext(UserContext);

console.log(user.name);
```

---

# Hooks vs Class Components

| Class Component          | Hook Equivalent                       |
| ------------------------ | ------------------------------------- |
| `this.state`             | `useState()`                          |
| `this.setState()`        | State setter (`setCount`)             |
| `componentDidMount()`    | `useEffect(() => {}, [])`             |
| `componentDidUpdate()`   | `useEffect(() => {}, [dependencies])` |
| `componentWillUnmount()` | Cleanup returned from `useEffect`     |
| Context Consumer         | `useContext()`                        |

---

# Complete Comparison

### Class

```jsx
class App extends React.Component {

    state={

        count:0

    };

}
```

---

### Functional

```jsx
const [count,setCount]=useState(0);
```

---

### Class

```jsx
componentDidMount(){

}
```

---

### Functional

```jsx
useEffect(()=>{

},[]);
```

---

### Class

```jsx
componentWillUnmount(){

}
```

---

### Functional

```jsx
useEffect(()=>{

    return ()=>{

    }

},[]);
```

---

# Summary Table

| Hook           | Purpose                     | Syntax                                             | Example Use                          |
| -------------- | --------------------------- | -------------------------------------------------- | ------------------------------------ |
| `useState()`   | Stores and updates state    | `const [value, setValue] = useState(initialValue)` | Counter, forms, toggles              |
| `useEffect()`  | Handles side effects        | `useEffect(() => {}, [])`                          | Fetch data, timers, subscriptions    |
| `useContext()` | Accesses shared/global data | `const value = useContext(MyContext)`              | Theme, user authentication, language |

---

# Key Interview Points

### `useState()`

* Stores state in functional components.
* Returns an array: **`[state, setStateFunction]`**.
* Updating state causes a re-render.
* Use the functional update form (`setState(prev => ...)`) when the new state depends on the previous state.

### `useEffect()`

* Handles side effects such as API requests, timers, and event listeners.
* Runs after the component renders.
* `[]` → runs once after the initial render.
* `[dependency]` → runs when that dependency changes.
* No dependency array → runs after every render.
* Can return a cleanup function for unmounting or removing side effects.

### `useContext()`

* Prevents **prop drilling** by allowing components to access shared data directly.
* Requires three steps:

  1. Create a context with `createContext()`.
  2. Wrap components with a `Provider`.
  3. Read the value with `useContext()`.

These three Hooks—**`useState`**, **`useEffect`**, and **`useContext`**—form the foundation of modern React development and are the ones you'll use most often in real-world applications.
