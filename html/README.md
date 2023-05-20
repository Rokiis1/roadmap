# Table of Contents

- [HTML](#html)
    - [Basic HTML](#basichtml)
      - [HTMl example](#htmlExample)
      - [Explanation](#explanation)
    - [Forms and Validation](#forms)
      - [Introduction to HTML Forms](#introductionToHtmlForms)
      - [Form Elements](#formElements)
      - [Input Validation](#InputValidation)
      - [Length Validation](#lengthValidation)
      - [Regular Expression (Regex) Validation](#regex)
      - [Semantic HTML and SEO](#seo)
      - [Password Validation](#password)
      - [Visual Feedback using CSS](#css)
      - [Examples](#examples)

# HTML 

HTML, which stands for HyperText Markup Language, is the standard markup language used for creating web pages and applications. It provides a structure for organizing and formatting the content of a webpage by using various HTML tags and elements.

## Basic HTML

### HTMl example

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
### Explanation

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

## Forms and Validation

### Introduction to HTML Forms

HTML forms provide a way for users to interact with a website by entering and submitting data. They consist of various form elements such as text fields, checkboxes, radio buttons, dropdown lists, and buttons. Validating user input is essential to ensure data accuracy and security.

### Form Elements

HTML provides several form elements to collect user input. Some commonly used elements include:

- `<input>`: Represents a generic form input field.
- `<textarea>`: Allows multi-line text input.
- `<select>:` Creates a dropdown list for users to select options.
- `<checkbox>`: Represents a checkbox element.
- `<radio>`: Represents a radio button element.

### Input Validation

Input validation ensures that the data entered by users meets specified criteria. HTML offers various attributes for validation, including:

- `required`: Specifies that a field must be filled out.
- `pattern`: Specifies a regex pattern for input validation.
- `min and max`: Defines the minimum and maximum values for numeric inputs.

### Length Validation

To validate the length of an input, you can use the minlength and maxlength attributes. 
For example:

```
/// code creates a text input field that must contain a minimum of 5 characters and a maximum of 10 characters.
<input type="text" minlength="5" maxlength="10">

```

### Regular Expression (Regex) Validation

Regex validation allows you to define custom patterns for validating input. The pattern attribute accepts a regex pattern to match against user input. 
For example:

```
/// code validates that the input consists of exactly three alphabetical characters.
<input type="text" pattern="[A-Za-z]{3}">

```

### Semantic HTML and SEO

When creating forms or any other content in HTML, it is important to use semantic HTML for better SEO. Semantic HTML helps search engines understand the structure and meaning of your content. Here are some tips for using semantic HTML in forms:

- Use appropriate semantic tags such as `<form>`, `<label>`, and `<fieldset>` to structure the form.
- Assign meaningful labels to form fields using the `<label>` element.
- Group related form elements using the `<fieldset>` and `<legend>` elements.
- Provide alternative text for images or icons used in the form using the alt attribute.
- Consider using structured data markup, such as Schema.org, to provide additional context to search - engines.

By using semantic HTML, you enhance the accessibility and search engine visibility of your forms, ultimately improving your website's SEO.

### Password Validation

Password validation is essential to ensure the strength and security of user passwords. You can use the pattern attribute with a regex pattern to enforce specific requirements for passwords. For example, to validate a password that must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit, you can use the following code:

```
///  this pattern ensures that a valid password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.
<input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>

```
- (?=.*\d): This part of the pattern requires the password to contain at least one digit (0-9). The (?=.*\d) is a positive lookahead assertion that checks if there is any digit present in the password.

- (?=.*[a-z]): This part of the pattern requires the password to contain at least one lowercase letter (a-z). The (?=.*[a-z]) is another positive lookahead assertion that checks if there is any lowercase letter present in the password.

- (?=.*[A-Z]): This part of the pattern requires the password to contain at least one uppercase letter (A-Z). The (?=.*[A-Z]) is a positive lookahead assertion that checks if there is any uppercase letter present in the password.

- .{8,}: This part of the pattern specifies that the password must be at least 8 characters long. The .{8,} means that the password can have any character (except newline) repeated 8 or more times.

### Visual Feedback using CSS

You can provide visual feedback to users indicating whether their input is valid or not using CSS. Here's an example of how you can style the input fields to display a green border for valid input and a red border for invalid input:

```
<style>
  input:valid {
    border: 2px solid green;
  }

  input:invalid {
    border: 2px solid red;
  }
</style>

```

The above CSS code targets the input elements and applies different border styles based on their validity. You can modify the styles to match your desired visual feedback.

### Examples

[Form example](https://codesandbox.io/s/focused-monad-nwjo2q?file=/index.html)

### Credits

[MDN Web Docs: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) | [Learn Forms by web.dev](https://web.dev/learn/forms/) | [https://web.dev/learn/forms/]


