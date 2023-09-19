**Method 1: Using Apache JMeter**

Apache JMeter is a powerful tool for load testing and performance measurement. Here's how to measure page load time with JMeter:

**Step 1: Create a New Test Plan**

- Launch JMeter.
- Create a new test plan by going to `File > New Test Plan`.

**Step 2: Add a Thread Group**

- In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.
- Configure the Thread Group with the number of threads (simulated users) you want.

**Step 3: Add an HTTP Request Sampler**

- Right-click on the Thread Group you created in Step 3 and select `Add > Sampler > HTTP Request`.
- In the HTTP Request Sampler, specify the URL of the web page you want to test.

**Step 4: Add a View Results Tree Listener**

- Right-click on the Thread Group and select `Add > Listener > View Results Tree`.
- This listener will allow you to view the results of your test, including response times.

**Step 5: Configure Test Duration and Run the Test**

- Configure the test duration and other settings in the Thread Group.
- Click the "Run" button (a green triangle) in the toolbar to start the test.
- JMeter will send requests to the web page and record the response times.

**Step 6: Analyze Results**

- After the test is complete, go to the "View Results Tree" listener to see the response times.
- Check if the page load time meets your pass criteria (should be below 3 seconds).

**Method 2: Using Browser Developer Tools (Google Chrome)**

If you want to measure page load time using browser developer tools, follow these steps:

**Step 1: Open Chrome Developer Tools**

- Open the Google Chrome browser.
- Navigate to the web page you want to test.

**Step 2: Access Developer Tools**

- Right-click anywhere on the web page and select "Inspect" or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac) to open Chrome Developer Tools.

**Step 3: Go to the Network Tab**

- In the Developer Tools panel, go to the "Network" tab.

**Step 4: Reload the Page**

- Reload the web page by pressing `Ctrl + R` (Windows/Linux) or `Cmd + R` (Mac) or by clicking the browser's refresh button.

**Step 5: Analyze Page Load Time**

- In the "Network" tab, you'll see a timeline of network requests and their timing details.
- Look for the main HTML request (usually the first one) and check the "Duration" column to see the page load time.
