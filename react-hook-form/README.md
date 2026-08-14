https://github.com/gopinav/React-Hook-Form-Tutorials/tree/main/rhf-demo/src


# React Hook Form — Concept Map

```text
React Hook Form
│
├── 1. Setup
│   └── useForm()
│
├── 2. Form Data / TypeScript
│   └── FormValues
│
├── 3. Register Fields
│   └── register()
│
├── 4. Validation
│   ├── required
│   ├── pattern
│   └── validate
│       ├── Single custom validation
│       └── Multiple custom validations
│
├── 5. Error Handling
│   ├── formState
│   ├── errors
│   └── errors.field?.message
│
├── 6. Form Submission
│   └── handleSubmit()
│
├── 7. Form Data
│   └── onSubmit(data)
│
└── 8. Development / Debugging
    └── DevTool
```

---

# 1. TypeScript — Defining Form Data

### Concept: `type`

```ts
type FormValues = {
  username: string;
  email: string;
  channel: string;
};
```

### Purpose

Defines **what data your form contains**.

Think:

> "What fields does my form have?"

```text
FormValues
    │
    ├── username → string
    ├── email    → string
    └── channel  → string
```

Then:

```tsx
useForm<FormValues>()
```

tells React Hook Form:

> "This form follows the `FormValues` structure."

---

# 2. Form Initialization

### Function: `useForm()`

```tsx
const form = useForm<FormValues>();
```

This is the **main function** of React Hook Form.

It gives you tools for controlling your form.

You then extract:

```tsx
const {
  register,
  control,
  handleSubmit,
  formState
} = form;
```

### Remember

```text
useForm()
   ↓
gives you form tools
   │
   ├── register()
   ├── handleSubmit()
   ├── formState
   └── control
```

---

# 3. Registering Inputs

### Function: `register()`

```tsx
<input
  {...register("username")}
/>
```

`register()` connects your HTML input to React Hook Form.

Think:

> `register()` = "React Hook Form, manage this input."

---

## `register()` with validation

```tsx
register("username", {
  required: {
    value: true,
    message: "Username is required",
  },
})
```

The structure is:

```text
register(
    fieldName,
    {
        validation rules
    }
)
```

So remember:

```tsx
register("FIELD_NAME", {
  VALIDATION_RULES
})
```

---

# 4. Validation

This is one of the most important sections.

React Hook Form provides several validation techniques.

Your code uses:

```text
Validation
│
├── required
├── pattern
└── validate
```

---

# 5. `required` Validation

### Purpose

Checks whether the user entered something.

Your code:

```tsx
required: {
  value: true,
  message: "Username is required",
}
```

Meaning:

> This field cannot be empty.

### Example

```tsx
register("username", {
  required: {
    value: true,
    message: "Username is required",
  },
})
```

### Short version

You can also write:

```tsx
register("username", {
  required: "Username is required",
})
```

### Memory trick

```text
required
   ↓
"Did the user enter something?"
```

---

# 6. `pattern` Validation

### Purpose

Checks whether the input matches a **regular expression**.

Your email uses:

```tsx
pattern: {
  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  message: "invalid email format",
}
```

Think:

```text
pattern
   ↓
"Does this input have the correct format?"
```

Examples:

```text
john@gmail.com       ✅
john123@gmail.com    ✅
john@gmail            ❌
john@gmail..com      ❌
```

### Structure

```tsx
pattern: {
  value: REGEX,
  message: "Error message",
}
```

---

# 7. Custom Validation — `validate`

This is another **major concept**.

### Function/property:

```tsx
validate
```

It allows you to create your **own validation logic**.

For example:

```tsx
validate: (fieldValue) => {
  return (
    fieldValue !== "admin@example.com" ||
    "Enter a different email address"
  );
}
```

You are basically saying:

> "I have a special rule that React Hook Form doesn't provide automatically, so I'll create it myself."

---

# 8. How Custom Validation Works

This is extremely important to understand.

```tsx
validate: (fieldValue) => {
  return condition || "Error message";
}
```

The validation function should return:

```text
true
```

if validation passes.

Or:

```text
"Error message"
```

if validation fails.

### Example

```tsx
validate: (fieldValue) => {
  return fieldValue !== "admin@example.com"
    || "Enter a different email address";
}
```

If:

```text
fieldValue = "john@gmail.com"
```

then:

```js
fieldValue !== "admin@example.com"
```

is:

```js
true
```

So validation passes.

---

If:

```text
fieldValue = "admin@example.com"
```

then:

```js
fieldValue !== "admin@example.com"
```

is:

```js
false
```

Therefore:

```js
false || "Enter a different email address"
```

returns:

```text
"Enter a different email address"
```

So validation fails.

---

# 9. Multiple Custom Validations

Your code uses:

```tsx
validate: {
  notAdmin: (fieldValue) => {
    return (
      fieldValue !== "admin@example.com" ||
      "Enter a different email address"
    );
  },

  notBlackListed: (fieldValue) => {
    return (
      !fieldValue.endsWith("baddomain.com") ||
      "This domain is not supported"
    );
  },
}
```

This means you have **multiple custom validation rules**.

Think:

```text
validate
   │
   ├── notAdmin
   │
   └── notBlackListed
```

### Rule 1

```tsx
notAdmin
```

prevents:

```text
admin@example.com
```

### Rule 2

```tsx
notBlackListed
```

prevents:

```text
anything@baddomain.com
```

---

# 10. Validation Categories

You should remember validation like this:

| Validation          | Purpose                | Example                    |
| ------------------- | ---------------------- | -------------------------- |
| `required`          | Checks if value exists | Username cannot be empty   |
| `pattern`           | Checks format          | Email format               |
| `validate`          | Custom rule            | Don't allow admin email    |
| Multiple `validate` | Multiple custom rules  | Admin + blacklisted domain |

### Easy memory

```text
required → Is it there?

pattern → Is the format correct?

validate → Does my special rule pass?
```

---

# 11. Error Handling

Now we move from **validation** to **showing validation errors**.

You get errors through:

```tsx
formState
```

You wrote:

```tsx
const { errors } = formState;
```

Think:

```text
formState
   │
   └── errors
         │
         ├── username
         ├── email
         └── channel
```

---

# 12. `formState`

### Concept

```tsx
formState
```

contains information about the current state of your form.

It can contain things such as:

```text
formState
│
├── errors
├── isDirty
├── isValid
├── isSubmitting
├── touchedFields
└── dirtyFields
```

You're currently using:

```tsx
formState.errors
```

---

# 13. `errors`

You extracted:

```tsx
const { errors } = formState;
```

Now you can access:

```tsx
errors.username
errors.email
errors.channel
```

For example:

```tsx
errors.username?.message
```

means:

> Get the username validation error message if one exists.

---

# 14. Optional Chaining — `?.`

You already asked about this, and it's important to remember.

```tsx
errors.email?.message
```

means:

```text
Does errors.email exist?
       │
       ├── YES → get message
       │
       └── NO → return undefined
```

Without `?.`:

```tsx
errors.email.message
```

could cause an error if `errors.email` doesn't exist.

### Memory

```text
.   → definitely exists

?.  → might not exist
```

---

# 15. Displaying Errors

Your code:

```tsx
<p className="error">
  {errors.email?.message}
</p>
```

This has two separate jobs:

```text
errors.email?.message
        ↓
GET THE ERROR

className="error"
        ↓
STYLE THE ERROR
```

React Hook Form provides the message.

CSS makes it red.

For example:

```css
.error {
  color: red;
}
```

---

# 16. Form Submission

Your form:

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
```

uses:

```tsx
handleSubmit()
```

### Purpose

It controls what happens when the user submits the form.

Think:

```text
Submit
  ↓
handleSubmit()
  ↓
Run validation
  ↓
Are all validations successful?
  │
  ├── YES → onSubmit(data)
  │
  └── NO → errors
```

---

# 17. `onSubmit`

You created:

```tsx
const onSubmit = (data: FormValues) => {
  console.log("form submitted", data);
};
```

This function runs **only when the form passes validation**.

`data` contains the submitted form values.

Example:

```text
username: "john"
email: "john@gmail.com"
channel: "React"
```

---

# 18. `noValidate`

You have:

```tsx
<form onSubmit={handleSubmit(onSubmit)} noValidate>
```

`noValidate` disables the browser's built-in HTML validation.

Why?

Because you want:

```text
React Hook Form
      ↓
handle validation
```

instead of:

```text
Browser
      ↓
handle validation
```

This is especially useful when you're learning and building custom validation.

---

# 19. `control`

You have:

```tsx
const { control } = form;
```

and:

```tsx
<DevTool control={control} />
```

`control` is an internal React Hook Form object used by features/components that need access to the form's state and behavior.

In your example, it's being given to the DevTool.

---

# 20. `DevTool`

```tsx
<DevTool control={control} />
```

This is for **development/debugging**.

It lets you inspect things such as:

```text
Form values
Errors
Touched fields
Dirty fields
Form state
```

You generally don't need it for the actual form to work.


```text
                     useForm()
                        │
                        ▼
                 React Hook Form
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
      register()    formState     handleSubmit()
          │             │             │
          │             ▼             ▼
          │           errors       onSubmit()
          │
          ▼
     Validation
          │
     ┌────┼─────────┐
     ▼    ▼         ▼
 required pattern validate
                  │
             ┌────┴─────┐
             ▼          ▼
          notAdmin  notBlackListed
```

---

# The Code You Should Remember

You don't need to memorize your entire component. Memorize these **core patterns**.

### 1. Create the form

```tsx
const form = useForm<FormValues>();
```

### 2. Get the tools

```tsx
const {
  register,
  control,
  handleSubmit,
  formState
} = form;

const { errors } = formState;
```

### 3. Register an input

```tsx
<input {...register("username")} />
```

### 4. Required validation

```tsx
register("username", {
  required: {
    value: true,
    message: "Username is required",
  },
})
```

### 5. Pattern validation

```tsx
register("email", {
  pattern: {
    value: /REGEX/,
    message: "Invalid email format",
  },
})
```

### 6. One custom validation

```tsx
register("email", {
  validate: (value) => {
    return condition || "Error message";
  },
})
```

### 7. Multiple custom validations

```tsx
register("email", {
  validate: {
    ruleOne: (value) => {
      return condition || "Error message";
    },

    ruleTwo: (value) => {
      return condition || "Error message";
    },
  },
})
```

### 8. Display error

```tsx
<p>{errors.email?.message}</p>
```

### 9. Submit

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
```

### 10. Submit function

```tsx
const onSubmit = (data: FormValues) => {
  console.log(data);
};
```

---

# Final Cheat Sheet

| Concept                | Code             | Remember it as           |
| ---------------------- | ---------------- | ------------------------ |
| Initialize             | `useForm()`      | Create form              |
| Type form              | `FormValues`     | Define fields            |
| Connect input          | `register()`     | Register field           |
| Required               | `required`       | Must have value          |
| Regex                  | `pattern`        | Correct format           |
| Custom                 | `validate`       | Your own rule            |
| Multiple custom        | `validate: {}`   | Several rules            |
| Form state             | `formState`      | Current form information |
| Errors                 | `errors`         | Validation problems      |
| Safe error access      | `?.`             | Might not exist          |
| Error message          | `.message`       | Get message              |
| Submit                 | `handleSubmit()` | Validate + submit        |
| Submit callback        | `onSubmit()`     | Receive data             |
| Debugging              | `DevTool`        | Inspect form             |
| DevTool connection     | `control`        | Give DevTool form access |
| Browser validation off | `noValidate`     | Let RHF validate         |

### The most important 3 to remember

```text
register()
    ↓
connect + validate the input

formState.errors
    ↓
get validation errors

handleSubmit()
    ↓
validate the form + call onSubmit()
```

