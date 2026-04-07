Here’s a clean and professional **README.md** documentation for your code 👇

---

# 📘 JavaScript Object Manipulation (Spread vs Assign)

This project demonstrates how JavaScript objects can be merged and manipulated using:

- **Spread Operator (`...`)**
- **`Object.assign()`**
- **Nested Objects Behavior**

---

## 📂 Code Overview

### 1️⃣ Base Objects

```js
const user = { name: "Rakshit", city: "Udaipur", country: "India" };

const education = { isGraduated: true, isPostGraduated: false };
```

---

### 2️⃣ Using Spread Operator

```js
const profile = {
  name: "Rahul",
  ...user,
  ...education,
  name: "Prakash",
  city: "Indore",
};
```

### ✅ Output

```js
{
  name: 'Prakash',
  city: 'Indore',
  country: 'India',
  isGraduated: true,
  isPostGraduated: false
}
```

### 🔍 Explanation

- Properties are merged **from left to right**
- If duplicate keys exist:
  - **Last value wins**

- Here:
  - `name` becomes `"Prakash"`
  - `city` becomes `"Indore"`

---

### 3️⃣ Using `Object.assign()`

```js
const profile2 = Object.assign(
  {},
  user,
  education,
  { name: "Prakash" },
  { city: "Pune" },
);
```

### ✅ Output

```js
{
  name: 'Prakash',
  city: 'Pune',
  country: 'India',
  isGraduated: true,
  isPostGraduated: false
}
```

### 🔍 Explanation

- Works similar to spread operator
- Merges objects **left → right**
- Later properties overwrite earlier ones
- Target object `{}` is mutated and returned

---

### 4️⃣ Nested Object Example

```js
const nesObj = {
  name: "Ankit",
  education: { isGraduated: true },
  address: { city: "Jabalpur" },
};
```

---

### 5️⃣ Assigning Object Without Spread

```js
const p3 = { name: "Rahul", nesObj };
```

### ✅ Output

```js
{
  name: 'Rahul',
  nesObj: {
    name: 'Ankit',
    education: { isGraduated: true },
    address: { city: 'Jabalpur' }
  }
}
```

### 🔍 Explanation

- `nesObj` is added as a **nested object**
- No flattening happens

---

### 6️⃣ Using Spread with Nested Object

```js
const p4 = { name: "Pinky", ...nesObj };
```

### ✅ Output

```js
{
  name: 'Ankit',
  education: { isGraduated: true },
  address: { city: 'Jabalpur' }
}
```

### 🔍 Explanation

- Spread operator **flattens only the top level**
- `name: 'Pinky'` gets overwritten by `name: 'Ankit'`
- Nested objects (`education`, `address`) are still **references**, not deep copies

---

## ⚠️ Important Notes

### 🔸 Shallow Copy

Both:

- Spread operator (`...`)
- `Object.assign()`

perform **shallow copying**

```js
const copy = { ...nesObj };
copy.education.isGraduated = false;

console.log(nesObj.education.isGraduated); // ❗ false
```

👉 Because nested objects are **shared references**

---

## 🧠 Key Takeaways

- Last property always overrides previous ones
- Spread and `Object.assign()` behave similarly
- Both perform **shallow copy**
- Nested objects are **not deeply cloned**
- Use deep cloning (like `structuredClone`) if needed

---

## 🚀 Bonus Tip

For deep cloning:

```js
const deepCopy = structuredClone(nesObj);
```

---

## 📌 Summary Table

| Method          | Overwrites | Copy Type    | Mutates Target |
| --------------- | ---------- | ------------ | -------------- |
| Spread (`...`)  | Yes        | Shallow Copy | No             |
| Object.assign() | Yes        | Shallow Copy | Yes            |

---

If you want, I can also:

- Convert this into a **GitHub-ready project**
- Add **examples with arrays & functions**
- Or create **interview questions** from this topic 👍
