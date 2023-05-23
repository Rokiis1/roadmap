# Table of Contents

- [CSS](#css)
    - [Introduction to CSS](#introduction)
    - [CSS Syntax](#syntax)
    - [Selectors](#selectors)
        - [Basic Selectors](#basicSelectors)
          - [Element Selector](#elementSelector)
          - [Class Selector](#classSelector)
          - [ID Selector](#idSelector)
          - [Universal Selector](#universalSelector)
          - [Inline selector](#inlineSelector)
          - [Descendant Selector](#descendantSelector)
          - [Universal Selector](#universalSelector)
        - [(Optional)Advance Selectors](#optionalAdvanceSelectors)
          - [Child Selector](#childSelecotr)
          - [Adjacent Sibling Selector](#adjacentSiblingSelector)
          - [General Sibling Selector](#generalSiblingSelector)
          - [Attribute Selector](#attributeSelector)
          - [Pseudo-classes](#pseudoClasses)
        - [(Optional)More selectors](#optionalSelectors)
    - [CSS Properties](#cssProperties)
      - [CSS Units](#cssUnits)
        - [Pixels (px):](#pixels)
        - [Percentages (%):](#percentages)
        - [EM:](#em)
        - [REM:](#rem)
      - [Width And Length](#widthAndLength)
        - [<html> vs <body>](#htmlVsBody)
        - [How backgorund-color works on html and body tags](#howBackgorundColorWorksOnHtmlAndBodyTags)
        - [Example](#exampleWidthAndLength)
      - [CSS Font](#font)
        - [Font sample](#fontSample)
      - [(Optional)CSS Color Formats](#cssColorFormats)
        - [Hexadecimal Colors](#hexadecimal)
        - [Hexadecimal Colors with Transparency](#hexadecimalTransparency)
        - [RGB Colors](#rgb)
        - [RGBA Colors](#rgba)
        - [HSL Colors](#hsl)
        - [Example](#cssColorFormatsExamples)
    - [CSS Layout](#cssLayouts)
      - [Box Model](#boxModel)
        - [Credits](#credits)
      - [Floats](#floats)
      - [Positioning](#positioning)
      - [Flexbox](#flexBox)
      - [Grid](#grid)
    - [Media Queries](#mediaQueries)
    - [(Optional)Global styling](#globalStyling)

# CSS

## Introduction to CSS

CSS stands for Cascading Style Sheets and is a stylesheet language used to define the visual presentation of HTML and XML documents. It allows you to control the layout, colors, fonts, and other visual aspects of a web page.

```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

## CSS Syntax

CSS rules consist of a selector and a declaration block. The selector identifies the HTML element(s) to style, and the declaration block contains one or more declarations separated by semicolons. Each declaration consists of a property and a value.

```css
selector {
  property: value;
  property: value;
  /* more declarations... */
}
```

## Selectors

Selectors are used to target specific HTML elements to apply styles. Here are some commonly used selectors:

### Basic Selectors

#### Element Selector

- Element Selector: Selects elements based on their HTML tag name. For example, `p` selects all `<p>` elements.

```html
<p>This is a paragraph.</p>
```
```css
p {
  property: value;
  property: value;
  /* more declarations... */
}
```
#### Class Selector

- Class Selector: Selects elements based on their class attribute. It uses a dot (`.`) followed by the class name. For example, `.my-class` selects all elements with the class "my-class".

```html
  <p class="highlight">This is a paragraph with a class of "highlight".</p>
```
```css
.highlight {
  property: value;
  property: value;
  /* more declarations... */
}
```
#### ID Selector

- ID Selector: Selects a single element based on its ID attribute. It uses a hash (`#`) followed by the ID name. For example, `#my-id` selects the element with the ID "my-id".

```html
<div id="box">This is a div with an ID of "box".</div>
```
```css

#box {
  property: value;
  property: value;
  /* more declarations... */
}

```
#### Inline selector

- Inline selector: In HTML are defined directly within the HTML elements using the `style` attribute. Here's an example of how inline styles look in HTML:

```html
<div style="property: value;">This is a box</div>
```
#### Descendant Selector

- Descendant Selector: Targets elements that are descendants of another element.

```html
  <section class="parent">
    <h1>This is the parent element</h1>
    <p>This is a paragraph inside the parent element.</p>
    <article>
      <p>This is a paragraph inside a nested div.</p>
      <span>This is a span element inside the nested div.</span>
    </article>
  </section>
```
```css
.parent p {
  /* CSS properties */
  property: value;
}

.parent span {
  /* CSS properties */
  property: value;
}
```

#### Universal Selector

- Universal Selector: Selects all elements on the page. It uses an asterisk (`*`). For example, `*` selects all elements.

```css
* {
  /* CSS properties */
  property: value;
}
```

### (Optional)Advance Selectors

#### Child Selector

- Child Selector: Selects elements that are direct children of another element. It uses a greater than sign (`>`). For example, `article > p` selects all `<p>` elements that are direct children of a `<article>` element.

```css
article > p {
  /* CSS properties */
  property: value;
}
```
```html
<article>
  <p>This paragraph will be selected</p>
  <div>
    <p>This paragraph will NOT be selected</p>
  </div>
</article>
```
#### Adjacent Sibling Selector

- Adjacent Sibling Selector: Selects an element that immediately follows another element. It uses a plus sign (`+`). For example, `h2 + p` selects the `<p>` element that immediately follows an `<h2>` element.

```css
h2 + p {
  /* CSS properties */
  property: value;
}
```
```html
<h2>Title</h2>
<p>This paragraph will be selected</p>
<p>This paragraph will NOT be selected</p>
<h2>Another Title</h2>
<p>This paragraph will be selected</p>
```
#### General Sibling Selector

- General Sibling Selector: Selects elements that follow another element. It uses a tilde (`~`). For example, `h2 ~ p` selects all `<p>` elements that follow an `<h2>` element.

```css
h2 ~ p {
  /* CSS properties */
  property: value;
}
```
```html
<h2>Title</h2>
<p>This paragraph will be selected</p>
<p>This paragraph will also be selected</p>
<div>
  <p>This paragraph will be selected</p>
</div>
<h2>Another Title</h2>
<p>This paragraph will be selected</p>
```
#### Attribute Selector

- Attribute Selector:  Selects elements based on their attribute values. It uses square brackets (`[]`). For example, `[type="text"]` selects all elements with `type="text"` attribute.

```html
  <a href="https://example.com">This is a link</a>
  <input type="text" placeholder="Enter your name" />
  <img src="image.jpg" alt="An image" />
```
```css
a[href="https://example.com"] {
  /* CSS properties */
  property: value;
}

input[type="text"] {
  /* CSS properties */
  property: value;
}

img[alt="An image"] {
  /* CSS properties */
  property: value;
}
```
#### Pseudo-classes

- Pseudo-classes: Selects elements based on a specific state or condition.

```css
/// :hover - selects an element when the mouse pointer is over it:
button:hover {
  background-color: yellow;
}

/// :focus - selects an element when it has keyboard focus:
input:focus {
  border-color: blue;
}

/// :first-child - selects the first child element of its parent:
ul li:first-child {
  font-weight: bold;
}

/// :nth-child() - selects elements based on their position within their parent:
ul li:nth-child(odd) {
  background-color: lightgray;
}
```

### (Optional)More selectors

1. **:hover**: Applies styles when an element is being hovered over by the mouse pointer.

2. **:focus**: Applies styles when an element has received focus, such as when it is clicked or selected by tab navigation.

3. **:active**: Applies styles when an element is being activated, such as when it is clicked and held down.

4. **:disabled**: Applies styles to disabled elements, preventing user interaction.

5. **:enabled**: Applies styles to enabled elements, allowing user interaction.

6. **:checked**: Applies styles to checked radio buttons or checkboxes.

7. **:required**: Applies styles to required form fields.

8. **:optional**: Applies styles to optional form fields.

9. **:valid**: Applies styles to form elements with valid input.

10. **:invalid**: Applies styles to form elements with invalid input.

11. **:first-child**: Applies styles to the first child element of its parent.

12. **:last-child**: Applies styles to the last child element of its parent.

13. **:nth-child()**: Selects elements based on their position in the list of siblings. It takes a formula as an argument, such as `:nth-child(2n)` to select every even child.

14. **:nth-of-type()**: Selects elements based on their position among elements of the same type. It also takes a formula as an argument.

15. **:nth-last-child()**: Selects elements based on their position among the list of siblings, counting from the last child.

16. **:nth-last-of-type()**: Selects elements based on their position among elements of the same type, counting from the last element.

17. **:not()**: Selects elements that do not match a specific selector. For example, `:not(.my-class)` selects elements that do not have the class "my-class".

18. **:root**: The `:root` selector represents the root element of the document, which is typically the `<html> `element. It is often used to define global CSS variables that can be accessed and reused throughout the stylesheet.

19. **::before and ::after**: The `:before` and `:after` selectors are used to insert content before or after an element. They are known as pseudo-elements because they create virtual elements that can be styled separately from the actual content of an element.

## CSS Properties

CSS properties define the visual appearance of HTML elements. Some commonly used properties include:

- `width`: Specifies the width of an element.
- `height`: Specifies the height of an element.
- `margin`: Specifies the margin around an element.
- `padding`: Specifies the padding within an element.
- `font-size`: Specifies the size of the font.
- `font-weight`: Specifies the weight or thickness of the font.
- `line-height`: Specifies the height of a line of text.
- `font-family`: Specifies the font family or list of font families for text.
- `border-radius`: Specifies the radius of the border corners.
- `border`: Specifies the border around an element.
- `color`: Specifies the text color.
- `background-color`: Specifies the background color.
- `display`: Specifies how an element should be displayed (e.g., block, inline, inline-block).

### CSS Units

CSS supports various units for specifying measurements. Some common units include pixels (px), percentages (%), em, rem, and viewport units (vw, vh). Understanding and using the appropriate units is important for creating responsive and scalable designs.

#### Pixels (px):

- When you need precise control over element sizes or positioning.
- When working with fixed-width elements that should maintain a consistent size across different devices.
- Example: Setting the width of a container to 300 pixels: `.container { width: 300px; }`

#### Percentages (%):

- When you want elements to scale proportionally based on the size of their parent container.
- When creating fluid layouts that adapt to different screen sizes.
- Example: Setting the width of a child element to 50% of its parent: `.child { width: 50%; }`

#### EM:

- When you want to define sizes relative to the font size of the parent element.
- Useful for creating scalable typography.
- Example: Setting the font size of a paragraph to 1.2 times the font size of its parent: `.parent { font-size: 16px; } .child { font-size: 1.2em; }`

#### REM:

- Similar to EM, but relative to the root (html) element's font size.
- Useful for creating scalable layouts and consistent spacing.
- Example: Setting the margin of an element to 1.5 times the root font size: `.element { margin: 1.5rem; }`

#### Viewport units (vw, vh):

- When you want to size elements relative to the viewport's width or height.
- Useful for creating responsive designs that adapt to different screen sizes.
- Example: Setting the height of an element to 50% of the viewport height: `.element { height: 50vh; }`

### Width And Length

#### `<html>` vs `<body>`

- In HTML, the `<html>` tag is the root element of the document, encapsulating the entire content. It represents the HTML document as a whole. This tag is usually placed at the beginning and end of an HTML file.

- The `<body>` tag, on the other hand, represents the main content of the HTML document. It contains all the visible elements that users see when they visit a web page. The `<body>` tag is nested inside the `<html>` tag and typically follows the `<head>` tag, which contains meta information and scripts.

#### How backgorund-color works on html and body tags

-  By default, the background color set on the `<html>` tag will apply to the entire page, including areas where there is no content. This means that the background color will extend beyond the visible content of the page. However, when you set the background color on the `<body>` tag, it will only apply to the area containing the actual content of the page. The background color will not extend beyond the content area.

#### Example

### CSS Font

#### Font sample

```css
@import url('https://fonts.googleapis.com/css?family=Roboto');

.sample-text {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
}

```

### (Optional)CSS Color Formats

In CSS, there are several color formats you can use to specify colors.

#### Hexadecimal Colors

Hexadecimal colors are represented using a combination of six alphanumeric characters (`#RRGGBB`), where `RR` represents the red value, `GG` represents the green value, and `BB` represents the blue value. For example, `#FF0000` represents pure red.

Hexadecimal colors are widely used in CSS because they provide a large range of colors and are supported by all modern browsers.

```css

/* Hexadecimal Colors */
.hex-color {
  color: #FF0000; /* Red */
  background-color: #00FF00; /* Green */
  border: 2px solid #0000FF; /* Blue border */
  box-shadow: 2px 2px 4px #888888; /* Gray shadow */
}
```

#### Hexadecimal Colors with Transparency

To add transparency to a hexadecimal color, you can use an additional two-digit value at the end of the color code (`#RRGGBBAA`), where `AA` represents the `alpha` or transparency value. For example, `#FF0000FF` represents opaque red, and `#FF000080` represents semi-transparent red.

This format allows you to control the opacity of a color, making it useful for overlays, gradients, and other visual effects.

```css
/* Hexadecimal Colors with Transparency */
.hex-color-transparent {
  color: #FF0000FF; /* Opaque Red */
  background-color: #FF000080; /* Semi-transparent Red */
  border: 2px solid #00FFFF80; /* Semi-transparent Cyan border */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Semi-transparent black shadow */
}

```

#### RGB Colors

RGB colors are represented using three numeric values for red, green, and blue, respectively (`rgb(R, G, B)`). Each value ranges from `0` to `255`, representing the intensity of each color channel. For example, `rgb(255, 0, 0)` represents pure red.

RGB colors provide a convenient way to specify colors using familiar numeric values, making them easy to understand and manipulate.

```css
/* RGB Colors */
.rgb-color {
  color: rgb(255, 0, 0); /* Red */
  background-color: rgb(0, 255, 0); /* Green */
  border: 2px solid rgb(0, 0, 255); /* Blue border */
  box-shadow: 2px 2px 4px rgb(136, 136, 136); /* Gray shadow */
}

```

#### RGBA Colors

Similar to `RGB` colors, `RGBA` colors also represent red, green, and blue values, but with an additional alpha value for transparency (`rgba(R, G, B, A)`). The alpha value ranges from `0` to `1`, where `0` represents fully transparent and `1` represents fully opaque. For example, rgba`(255, 0, 0, 0.5)` represents semi-transparent red.

`RGBA` colors are useful when you need to control the transparency of a color without affecting other elements on the page.

```css
/* RGBA Colors */
.rgba-color {
  color: rgba(255, 0, 0, 0.5); /* Semi-transparent Red */
  background-color: rgba(0, 255, 0, 0.2); /* Semi-transparent Green */
  border: 2px solid rgba(0, 0, 255, 0.8); /* Semi-transparent Blue border */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Semi-transparent black shadow */
}

```

#### HSL Colors

`HSL` stands for Hue, Saturation, and Lightness. `HSL` colors use three values: hue (`0 to 360 degrees`), saturation (`0% to 100%`), and lightness (`0% to 100%`) (`hsl(H, S, L)`). Hue represents the color itself, saturation controls the intensity, and lightness determines how light or dark the color is.

HSL colors offer a more intuitive way to manipulate colors, allowing you to adjust hue, saturation, and lightness independently.

```css
/* HSL Colors */
.hsl-color {
  color: hsl(0, 100%, 50%); /* Red */
  background-color: hsl(120, 100%, 50%); /* Green */
  border: 2px solid hsl(240, 100%, 50%); /* Blue border */
  box-shadow: 2px 2px 4px hsl(0, 0%, 53%); /* Gray shadow */
}

```

#### Examples

[Example](https://codesandbox.io/s/kind-feather-wjju44?file=/index.html)

## CSS Layout

CSS offers different techniques for creating layouts. Some commonly used layout methods include:

- Positioning: Allows precise positioning of elements using properties like position, `top`, `right`, `bottom`, and `left`.
- Floats: Allows elements to be positioned side-by-side.
- Flexbox: Provides a flexible way to arrange elements in a container.
- Grid: Enables the creation of complex grid-based layouts.

### Box Model

The CSS box model describes the layout of elements on a web page. It consists of four components: content, padding, border, and margin. Understanding the box model is crucial for positioning and spacing elements correctly.

![Box model](./images/boxModel.png)

#### Credits

[Video: Learn CSS Box Model](https://www.youtube.com/watch?v=rIO5326FgPE)

## Media Queries

Media queries enable you to apply different styles based on the characteristics of the user's device or browser. They are commonly used for creating responsive designs that adapt to different screen sizes.

## CSS Preprocessors

CSS preprocessors like Sass and Less extend the functionality of CSS by adding features like variables, functions, and mixins. They make CSS code more maintainable and allow for better code organization.



## (Optional)Global styling

```css
/* Global Styles */

:root {
  /* Colors */
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #ffc107;
  
  /* Font */
  --base-font-size: 16px;
  --base-line-height: 1.5;
  
  /* Spacing */
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
  
  /* Breakpoints */
  --breakpoint-small: 576px;
  --breakpoint-medium: 768px;
  --breakpoint-large: 992px;
}

/* Global Box Sizing */
/* In addition to resetting the margin, this rule also sets padding: 0 and box-sizing: border-box for all elements, including their ::before and ::after pseudo-elements. This ensures consistent box-sizing behavior and removes any default padding that may be applied by certain elements. */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* Typography */

html {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
}

/* Colors */

body {
  color: var(--primary-color);
  background-color: #fff;
}

/* Headings */

h1, h2, h3, h4, h5, h6 {
  color: var(--secondary-color);
  font-weight: bold;
}

/* Spacing */

.margin-small {
  margin: var(--spacing-small);
}

.margin-medium {
  margin: var(--spacing-medium);
}

.margin-large {
  margin: var(--spacing-large);
}

/* Responsive Breakpoints */

@media (min-width: var(--breakpoint-small)) {
  /* Styles for small screens and above */
}

@media (min-width: var(--breakpoint-medium)) {
  /* Styles for medium screens and above */
}

@media (min-width: var(--breakpoint-large)) {
  /* Styles for large screens and above */
}

/* Additional Global Styles and Component Styling */

/* ... */

```