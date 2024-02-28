# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  npm is the world's largest software registry. npm consists of three distinct components:

1. the website: to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.
2. the Command Line Interface (CLI): runs from a terminal
3. the registry: a large public database of JavaScript software and the meta-information surrounding it.

- What is a package?
  a package refers to a collection of files and resources that are published to the npm registry and can be easily installed and used in Node.js projects.
  a) a folder containing a program described by a package.json file
  b) a gzipped tarball containing (a)
  c) a url that resolves to (b)
  d) a <name>@<version> that is published on the registry (see registry) with (c)
  e) a <name>@<tag> (see npm dist-tag) that points to (d)
  f) a <name> that has a "latest" tag satisfying (e)
  g) a <git remote url> that resolves to (a)

- What are some other popular package managers?
  yarn, PNPM

- How can you create a `package.json` with `npm`?
  npm init

- What is a dependency and how do you add one to a package?
  a package that another package needs to function.
  npm install nameOfDependencies

- What happens when you add a dependency to a package with `npm`?
  a node_modules folder gets added

- What is a devDependency and how do you add one to a package?
  a package that is required for development, but not for running an application. --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  you define scripts by adding a scripts object in package.json
  you run the npm scripts by using npm run key(the key that was created in the scripts object)
  npm scripts allow you to automate repetitive tasks involved in your project, such as running tests, starting servers

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
