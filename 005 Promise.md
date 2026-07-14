# JavaScript Promises – Complete Notes

A **Promise** is one of the most important concepts in modern JavaScript. It is used to handle **asynchronous operations** like:

* Fetching data from an API
* Reading a file
* Database queries
* Timers (`setTimeout`)
* User authentication

---

# What is a Promise?

## Definition

A **Promise** is an object that represents the **eventual result** of an asynchronous operation.

Think of it as a **promise** in real life.

Imagine your friend says:

> "I promise I'll bring you a book tomorrow."

There are three possibilities:

* The friend hasn't arrived yet. (Pending)
* The friend brings the book. (Fulfilled)
* The friend forgets. (Rejected)

JavaScript Promises work exactly like this.

---

# Why Do We Need Promises?

Without promises, asynchronous code quickly becomes difficult to read.

Example using callbacks:

```javascript
login(function () {
    getProfile(function () {
        getPosts(function () {
            console.log("Done");
        });
    });
});
```

This is called **Callback Hell** because of the deep nesting.

Promises make the same logic much cleaner.

---

# Promise States

A Promise always has one of **three states**.

```
           Promise
              │
    ┌─────────┼─────────┐
    │         │         │
 Pending   Fulfilled  Rejected
```

## 1. Pending

The operation is still running.

Example:

```
Downloading file...
```

---

## 2. Fulfilled (Resolved)

The operation completed successfully.

Example:

```
File downloaded.
```

---

## 3. Rejected

The operation failed.

Example:

```
No internet connection.
```

---

# Promise Syntax

```javascript
const promise = new Promise((resolve, reject) => {

});
```

The Promise constructor takes **one function**.

That function receives **two parameters**.

```javascript
resolve
reject
```

---

# resolve()

Used when everything succeeds.

```javascript
resolve(value);
```

---

# reject()

Used when something goes wrong.

```javascript
reject(error);
```

---

# First Example

```javascript
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Something went wrong");
    }

});
```

Nothing is printed yet because nobody is using the promise.

---

# Consuming a Promise

Use

```javascript
.then()
```

and

```javascript
.catch()
```

```javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output

```
Data Loaded
```

---

# Example (Failure)

```javascript
const promise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output

```
Failed
```

---

# How `.then()` Works

`.then()` executes only if the promise is fulfilled.

```javascript
promise.then((data) => {
    console.log(data);
});
```

Example

```javascript
resolve("Welcome");
```

Output

```
Welcome
```

---

# How `.catch()` Works

`.catch()` executes only if the promise is rejected.

```javascript
promise.catch((error) => {
    console.log(error);
});
```

Example

```javascript
reject("Network Error");
```

Output

```
Network Error
```

---

# `.finally()`

Runs **whether the promise succeeds or fails**.

```javascript
promise
    .then(() => {
        console.log("Success");
    })
    .catch(() => {
        console.log("Failed");
    })
    .finally(() => {
        console.log("Finished");
    });
```

Output (Success)

```
Success
Finished
```

Output (Failure)

```
Failed
Finished
```

---

# Promise Lifecycle

```
new Promise()

↓

Pending

↓

Success?
        \
         \
       Yes  No
       │     │
 resolve() reject()
       │     │
       ↓     ↓
    .then() .catch()
         \   /
          \ /
      .finally()
```

---

# Example with `setTimeout()`

```javascript
const promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Downloaded");
    }, 3000);

});

promise.then((message) => {
    console.log(message);
});
```

Output after 3 seconds

```
Downloaded
```

---

# Returning Values

```javascript
const promise = new Promise((resolve) => {

    resolve(100);

});

promise.then((value) => {
    console.log(value);
});
```

Output

```
100
```

---

# Returning Objects

```javascript
resolve({
    name: "John",
    age: 25
});
```

```javascript
promise.then((user) => {

    console.log(user.name);

});
```

Output

```
John
```

---

# Promise Chaining

Instead of nesting `.then()`, chain them.

```javascript
Promise.resolve(5)

.then((number) => {

    return number * 2;

})

.then((number) => {

    return number + 10;

})

.then((number) => {

    console.log(number);

});
```

Output

```
20
```

Execution

```
5

↓

10

↓

20
```

---

# Promise Example

```javascript
function getNumber() {

    return new Promise((resolve) => {

        resolve(10);

    });

}

getNumber()

.then((number) => {

    console.log(number);

});
```

Output

```
10
```

---

# Promise vs Callback

## Callback

```javascript
login(function () {

    getUser(function () {

        getPosts(function () {

            console.log("Done");

        });

    });

});
```

Hard to read.

---

## Promise

```javascript
login()

.then(getUser)

.then(getPosts)

.then(() => {

    console.log("Done");

});
```

Much cleaner.

---

# Promise Methods

## `Promise.resolve()`

Creates a fulfilled promise.

```javascript
Promise.resolve("Hello")

.then(console.log);
```

Output

```
Hello
```

---

## `Promise.reject()`

Creates a rejected promise.

```javascript
Promise.reject("Error")

.catch(console.log);
```

Output

```
Error
```

---

# Promise.all()

Runs multiple promises together.

```javascript
const p1 = Promise.resolve(10);

const p2 = Promise.resolve(20);

Promise.all([p1, p2])

.then((values) => {

    console.log(values);

});
```

Output

```
[10, 20]
```

If one promise rejects, the whole `Promise.all()` rejects.

---

# Promise.race()

Returns the **first promise that settles** (fulfilled or rejected).

```javascript
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 2000)
);

Promise.race([p1, p2])

.then(console.log);
```

Output

```
First
```

---

# Promise.allSettled()

Waits for all promises, regardless of success or failure.

```javascript
Promise.allSettled([p1, p2])

.then(console.log);
```

Useful when you want results from every promise.

---

# Promise.any()

Returns the **first fulfilled** promise.

If all promises fail, it rejects.

---

# Common Use: Fetch API

```javascript
fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

    console.log(data);

})

.catch(error => {

    console.log(error);

});
```

---

# Promise and Async/Await

This Promise code:

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

can be written more clearly with `async`/`await`:

```javascript
async function getUsers() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

# Advantages of Promises

* Handle asynchronous operations cleanly.
* Avoid callback hell.
* Support chaining with `.then()`.
* Better error handling using `.catch()`.
* Work seamlessly with `async`/`await`.
* Widely used in APIs, React, Node.js, and modern JavaScript.

---

# Summary Table

| Concept                | Purpose                                                   |
| ---------------------- | --------------------------------------------------------- |
| `Promise`              | Represents the future result of an asynchronous operation |
| `resolve()`            | Marks the promise as fulfilled                            |
| `reject()`             | Marks the promise as rejected                             |
| `.then()`              | Handles successful completion                             |
| `.catch()`             | Handles errors or rejection                               |
| `.finally()`           | Runs regardless of success or failure                     |
| `Promise.resolve()`    | Creates an already fulfilled promise                      |
| `Promise.reject()`     | Creates an already rejected promise                       |
| `Promise.all()`        | Waits for all promises to fulfill                         |
| `Promise.race()`       | Returns the first settled promise                         |
| `Promise.allSettled()` | Waits for all promises and reports each result            |
| `Promise.any()`        | Returns the first fulfilled promise                       |

