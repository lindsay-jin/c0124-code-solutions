# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?
  a text-based data format following JavaScript object syntax

- What are serialization and deserialization?
  Serialization is the process of turning an object in memory into a stream of bytes so you can do stuff like store it on disk or send it over the network.

Deserialization is the reverse process: turning a stream of bytes into an object in memory.

Serialization means transforming something (e.g. my dog Rex) into a series of 1s and 0s - which can be transported / stored etc. My friends overseas can then translate those 1s and 0s back into a perfect representation of a puppy (de-serialization).

- Why are serialization and deserialization useful?
  Its main purpose is to save the state of an object in order to be able to recreate it when needed. Through serialization, a developer can perform actions like sending the object to a remote application by means of a Web Service, passing an object from one domain to another, passing an object through a firewall as an XML string, or maintaining security or user-specific information across applications

- How do you serialize a data structure into a JSON string using JavaScript?
  JSON.stringify()

- How do you deserialize a JSON string into a data structure using JavaScript?
  JSON.parse()

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
