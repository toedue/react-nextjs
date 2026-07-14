# React Props – Complete Notes

**Props** (short for **Properties**) are one of the most fundamental concepts in React.

They allow you to **pass data from a parent component to a child component**.

---

# What are Props?

## Definition

**Props are read-only data passed from one component (parent) to another component (child).**

Think of props like **function arguments**.

For example:

```javascript
function add(a, b) {
    return a + b;
}

add(5, 10);
```

Here,

* `5` and `10` are arguments passed to the function.

Similarly, in React:

```jsx
<Greeting name="John" />
```

Here,

```jsx
name="John"
```

is a **prop**.

---

# Real-Life Analogy

Imagine ordering a pizza.

```
Pizza Shop (Component)

↓

Order Details (Props)

Size = Large

Cheese = Extra

Toppings = Pepperoni
```

The pizza shop (component) receives the order details (props) and prepares the pizza accordingly.

---

# Why Do We Use Props?

Without props, every component would always display the same data.

Props allow us to make components **dynamic** and **reusable**.

Instead of creating three different components:

```jsx
<User1 />
<User2 />
<User3 />
```

We create one component:

```jsx
<User name="John" />
<User name="Alice" />
<User name="David" />
```

---

# Parent and Child Components

Example:

```
App
│
├── Header
├── Card
├── Footer
```

Here,

```
App
```

is the **parent**.

```
Header
Card
Footer
```

are **children**.

The parent sends data to the child using props.

---

# First Example

## Child Component

```jsx
function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}

export default Welcome;
```

---

## Parent Component

```jsx
import Welcome from "./Welcome";

function App() {
    return (
        <>
            <Welcome name="John" />
        </>
    );
}

export default App;
```

Output

```
Hello John
```

---

# How It Works

Parent

```jsx
<Welcome name="John" />
```

↓

React creates

```javascript
props = {
    name: "John"
}
```

↓

Child receives

```javascript
props
```

↓

Access

```javascript
props.name
```

---

# Multiple Props

```jsx
function Student(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.grade}</p>
        </>
    );
}
```

Parent

```jsx
<Student
    name="Ali"
    age={20}
    grade="A"
/>
```

Output

```
Ali
20
A
```

---

# Props are Objects

React automatically creates an object.

Parent

```jsx
<Student
    name="Ali"
    age={20}
/>
```

React creates

```javascript
props = {
    name: "Ali",
    age: 20
}
```

---

# Accessing Props

```jsx
props.name

props.age

props.grade
```

Example

```jsx
function User(props) {
    return <h1>{props.name}</h1>;
}
```

---

# Destructuring Props

Instead of writing

```jsx
props.name

props.age

props.city
```

Use object destructuring.

```jsx
function User({ name, age, city }) {
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{city}</p>
        </>
    );
}
```

This is the preferred way.

---

# Passing Numbers

```jsx
<User age={25} />
```

Notice

```jsx
{}
```

because it is JavaScript.

---

# Passing Strings

```jsx
<User name="John" />
```

Strings can use quotes.

---

# Passing Booleans

```jsx
<User isLoggedIn={true} />
```

or

```jsx
<User isLoggedIn={false} />
```

---

# Passing Arrays

Parent

```jsx
<User hobbies={["Reading", "Coding", "Football"]} />
```

Child

```jsx
function User({ hobbies }) {
    return (
        <>
            {hobbies.map((hobby) => (
                <p>{hobby}</p>
            ))}
        </>
    );
}
```

---

# Passing Objects

Parent

```jsx
<User
    person={{
        name: "John",
        age: 25
    }}
/>
```

Child

```jsx
function User({ person }) {
    return (
        <>
            <h2>{person.name}</h2>
            <p>{person.age}</p>
        </>
    );
}
```

---

# Passing Functions

Functions can also be passed as props.

Parent

```jsx
function App() {

    function greet() {
        alert("Hello!");
    }

    return <Button click={greet} />;
}
```

Child

```jsx
function Button({ click }) {

    return (
        <button onClick={click}>
            Click
        </button>
    );

}
```

---

# Default Props

Suppose no prop is passed.

```jsx
<User />
```

You can provide a default value.

```jsx
function User({ name = "Guest" }) {

    return <h1>{name}</h1>;

}
```

Output

```
Guest
```

---

# Passing JSX

Props can even contain JSX.

Parent

```jsx
<Card
    title={<h1>Hello React</h1>}
/>
```

Child

```jsx
function Card({ title }) {

    return <div>{title}</div>;

}
```

---

# The `children` Prop

Everything placed between opening and closing tags becomes the special `children` prop.

Parent

```jsx
<Card>

    <h1>Hello</h1>

    <p>React is awesome.</p>

</Card>
```

Child

```jsx
function Card({ children }) {

    return (
        <div>
            {children}
        </div>
    );

}
```

Output

```
Hello

React is awesome.
```

---

# Props are Read-Only

You should **never modify props**.

❌ Wrong

```jsx
function User(props) {

    props.name = "Ali";

}
```

React will not allow this because props are **immutable**.

Instead, the parent should pass a new value.

---

# Props vs State

| Props              | State                        |
| ------------------ | ---------------------------- |
| Passed from parent | Managed inside the component |
| Read-only          | Can change                   |
| External data      | Internal data                |
| Parent controls it | Component controls it        |

Example

```jsx
<User name="John" />
```

`name` is a prop.

```jsx
const [count, setCount] = useState(0);
```

`count` is state.

---

# Real Example

## App.jsx

```jsx
import Student from "./Student";

function App() {

    return (
        <>
            <Student name="Ali" age={20} />
            <Student name="Sara" age={22} />
            <Student name="John" age={19} />
        </>
    );

}

export default App;
```

---

## Student.jsx

```jsx
function Student({ name, age }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );

}

export default Student;
```

Output

```
Ali
20

Sara
22

John
19
```

One component displays different data because of props.

---

# Flow of Props

```
App (Parent)
       │
       │ props
       ▼
Student (Child)

props = {
    name: "Ali",
    age: 20
}
```

Props always flow **from parent to child**.

---

# Summary

| Concept         | Description                       | Example                             |
| --------------- | --------------------------------- | ----------------------------------- |
| Props           | Data passed from parent to child  | `<User name="John" />`              |
| Access Props    | Read values from the props object | `props.name`                        |
| Destructuring   | Extract props directly            | `function User({ name })`           |
| String Prop     | Pass text                         | `name="John"`                       |
| Number Prop     | Pass numbers                      | `age={20}`                          |
| Boolean Prop    | Pass `true`/`false`               | `isAdmin={true}`                    |
| Array Prop      | Pass arrays                       | `items={[1,2,3]}`                   |
| Object Prop     | Pass objects                      | `user={{name:"Ali"}}`               |
| Function Prop   | Pass functions                    | `onClick={handleClick}`             |
| `children` Prop | Content between component tags    | `<Card>...</Card>`                  |
| Default Props   | Fallback values                   | `function User({ name = "Guest" })` |

---

# Important Interview Points

✅ Props stand for **Properties**.

✅ Props are **read-only (immutable)**.

✅ Props are used to **pass data from parent to child**.

✅ Props can contain:

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Functions
* JSX
* Other React components

✅ Props flow in **one direction**:

```
Parent
   ↓
Child
```

They do **not** automatically flow from child back to parent. If a child needs to communicate with a parent, the parent typically passes a callback function as a prop for the child to call.
