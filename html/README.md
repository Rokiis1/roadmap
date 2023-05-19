# Table of Contents

- [HTML](#html)
    - [Basic HTML](#basichtml)

# HTML 

HTML, which stands for HyperText Markup Language, is the standard markup language used for creating web pages and applications. It provides a structure for organizing and formatting the content of a webpage by using various HTML tags and elements.

## Basic HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a paragraph of text.</p>
  
  <h2>Lists</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <h2>Ordered List</h2>
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  
  <h2>Links</h2>
  <a href="https://www.example.com">Click here</a> to visit Example.com.
</body>
</html>

```
## Explanation

Let's go through the code snippet and explain each line:

- `<html lang="en">`: This line represents the root element of an HTML document. The `lang` attribute specifies the language of the document, where `"en"` represents English.

- `<head>`: This element contains metadata and other information about the HTML document.

- `<meta charset="UTF-8">`: This meta tag sets the character encoding for the document to UTF-8, which supports a wide range of characters and is commonly used for multilingual content.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: This meta tag is used to control the behavior and dimensions of the viewport on mobile devices. It ensures that the webpage is rendered properly on different screen sizes.

- `<title>My First Webpage</title>`: This tag sets the title of the webpage, which is displayed in the browser's title bar or tab.

- `<body>`: This element represents the main content of the HTML document.

- `<h1>Welcome to My Webpage</h1>`: This heading element (`<h1>`) represents the main heading of the webpage, indicating that it is the most important heading.

- `<p>This is a paragraph of text.</p>`: This `<p>` tag represents a paragraph of text. It is used to enclose and define a block of text.

- `<ul>`: This tag creates an unordered list, and each list item is represented by the `<li>` tag. In this example, there are three list items.

- `<ol>`: This tag creates an ordered list, where each list item is represented by the `<li>` tag. In this example, there are three numbered list items.

- `<a href="https://www.example.com">Click here</a>`: This `<a>` tag creates a hyperlink to the URL specified in the `href` attribute. In this example, the link text is "Click here," and it points to `https://www.example.com`.

These closing tags indicate the end of the `<body>` and `<html>` sections, respectively, and mark the end of the HTML document.

### Credits

[W3Schools: Learn HTML](https://www.w3schools.com/html/html_intro.asp) | [MDN Docs: Getting Started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
