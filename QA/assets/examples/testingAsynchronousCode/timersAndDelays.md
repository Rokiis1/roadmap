**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Countdown Timer</title>
</head>
<body>
    <div id="timer">5</div>
    <script src="app.js"></script>
</body>
</html>
```

**app.js**

```javascript
let countdown = 5; // Initial countdown value
const timerElement = document.getElementById('timer');

function updateTimer() {
    if (countdown > 0) {
        timerElement.textContent = countdown;
        countdown--;
    } else {
        timerElement.textContent = 'Time\'s up!';
        clearInterval(intervalId); // Stop the interval when countdown reaches 0
    }
}

// Set an interval to update the timer every second
const intervalId = setInterval(updateTimer, 1000);

```

**app.test.js**

```javascript
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Load the HTML and JavaScript files into a JSDOM environment
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, 'app.js'), 'utf8');
const { window } = new JSDOM(html, { runScripts: 'dangerously' });

// Set the global objects to the window object in the JSDOM environment
global.document = window.document;
global.window = window;

// Include the JavaScript code
eval(js);

test('Countdown Timer', (done) => {
    // Initial value should be 5
    expect(window.countdown).toBe(5);

    // Wait for 3 seconds to ensure the timer updates
    setTimeout(() => {
        expect(window.countdown).toBe(2); // After 3 seconds, countdown should be 2
    }, 3000);

    // Wait for 6 seconds to ensure the timer reaches 0
    setTimeout(() => {
        expect(window.countdown).toBe(0); // After 6 seconds, countdown should be 0
        done(); // Signal that the test is complete
    }, 6000);
});
```