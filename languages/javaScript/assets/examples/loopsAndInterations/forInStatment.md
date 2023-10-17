```javascript
const person = {
    name: 'Test',
    age: 30,
    job: 'Engineer'
};

for (let key in person) {
    console.log(key, person[key]);
}
```

- The for...in loop iterates over the properties (`name`, `age`, and `job`) of the person object.

- In each iteration, `key` represents the property name ('name', 'age'), and `person[key]` accesses the corresponding value.

It's important to note that `for...in` loops are not recommended for iterating over arrays. Instead, you should use the `for...of` loop or array iteration methods like `forEach()` for arrays. The `for...in` loop is best suited for iterating over the properties of objects and should be used with caution, as it may include inherited properties from the object's prototype chain, which is not always desired.