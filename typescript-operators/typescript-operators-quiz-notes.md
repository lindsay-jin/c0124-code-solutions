# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false. Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

Can be used for type assertion.

The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. If this operator is used with non-Boolean values, it will return a non-Boolean value.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  short-circuit evaluation means that it does not evaluate the entires expression. For the logical && operator, it returns false as soon as its operand is false, and it will stop evaluating the remaining operands. For the logical || operator, it returns true as it finds the first truthy operand and it stops evaluating the rest.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

syntax: leftExpr ?? rightExpr

Th logical || operator returns the right-hand side operand if the left operand is any falsy value, not only null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

syntax:
condition ? exprIfTrue : exprIfFalse

- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list.

Syntax:
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }

- What data types can be spread into an array? Into an object?
  iterable values like array or strings
  arrays and primitives can be spread into objects

- How does spread syntax differ from rest syntax?
  Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
