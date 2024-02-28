# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  a service requester. A client usually does not share any of its resources, but it requests content or service from a server. Clients, therefore, initiate communication sessions with servers, which await incoming requests.

- What is a server?
  a provider of a resource or service. A server host runs one or more server programs, which share their resources with clients.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET

- What three things are on the start-line of an HTTP **request** message?

1. An HTTP method, a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed.

2. The request target, usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context.

3. The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What three things are on the start-line of an HTTP **response** message?

1. The protocol version, usually HTTP/1.1, but can also be HTTP/1.0.

2. A status code, indicating success or failure of the request. Common status codes are 200, 404, or 302.

3. A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

- What are HTTP headers?
  specifies the request, or describing the body included in the message.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  MDN HTTP headers

- Is a body required for a valid HTTP request or response message?
  no.

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
