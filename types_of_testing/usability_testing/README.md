# Content of Table

## Usability Testing

**Explanation:**

Determinate how easily users can navigate and interact with the interface, identify any usability issues.

And where this technique is commonly used:

- **Web development and design**
- **Mobile app development**
- **Software applications**

- **Navigation:** How easily users can move around the web page.

  - **Menus:** Logically organized and easy to understand.
  - **Links:** Clearly labeled and do they lead to the expected destinations.
  - **Buttons:** Easily identifiable and do they perform the expected actions.
  - **Search Functionality:** Does it return relevant results.

- **Content:** Evaluating the clarity, conciseness, and relevance of the text, images, and other media on the web page.

  - **Text:** Is the text easy to read and grammatically correct.
  - **Headings and Subheadings:** Are headings and subheadings organize.
  - **Images:** Relevant, high-quality, and do they have descriptive alt text.
  - **Videos and Multimedia:** Videos and other multimedia elements relevant.

- **Layout and Design:** Visual appeal and organization of the web page.

  - **Consistency:** Design elements (colors, fonts, buttons) consistent throughout the site.
  - **Alignment:** Elements properly aligned.

- **Responsiveness:** testing how well the web page adapts to different devices and screen sizes.

  - **Mobile-Friendly Design:** Site work well on smartphones and tablets.
  - **Media Queries:** Different styles for different devices.
  - **Touchscreen Compatibility:** Interactive elements easy to use on touchscreens.

- **Accessibility:**  

  - **Screen Readers:** Compatible with screen readers.
  - **Keyboard Navigation:** Users navigate the site using only a keyboard.

  **Examples:**

  Use the Tab key to navigate through the website.

  - **Alt Text:** Images and other non-text content provided with descriptive alt text.

    **Examples:**

      ```html
      <img src="image.jpg" alt="A descriptive text about the image">
      ```

    **Tools:**

    - **WAVE (Web Accessibility Evaluation Tool)**

  - **Color Contrast:** Is there sufficient contrast between text and background colors.

    **Tools:**

    - **Contrast Checker - WebAIM**

  - **ARIA Landmarks:** Used to improve navigation for assistive technologies.

    - **Roles:** Roles define the type of element and its purpose on the page.

    ```html
    <header role="banner">
    <nav role="navigation">
    <main role="main">
    <footer role="contentinfo">
    ```

    - **Properties:** Properties provide additional information about elements.

    ```html
    <!-- aria-label: Provides an accessible name for the button -->
    <button aria-label="Close">X</button>

    <!-- aria-labelledby: Associates the dialog with a label -->
    <div id="dialog1" role="dialog" aria-labelledby="dialogTitle">
      <h2 id="dialogTitle">Dialog Title</h2>
      <p>Dialog content goes here.</p>
    </div>

    <!-- aria-describedby: Provides a description for the input field -->
    <div>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" aria-describedby="usernameDesc" />
      <small id="usernameDesc">Enter your username.</small>
    </div>

    <!-- aria-required: Indicates that the input field is required -->
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" aria-required="true" />
    </div>
    ```

    - **States:** Describe the current condition of an element and can change dynamically.

      - **aria-expanded:** Indicates whether an element, such as a menu or a section, is currently expanded or collapsed.

      - **aria-hidden:** Indicates whether an element is currently visible or hidden.

      - **aria-checked:** Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

      - **aria-disabled:** Indicates that an element is perceivable but disabled, so it is not interactive.

      - **aria-selected:** Indicates the current "selected" state of elements like tabs or options in a list.
  