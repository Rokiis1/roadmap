**Step 1: Create a New Test Plan in JMeter**
- Launch JMeter.
- Create a new test plan by going to `File > New Test Plan`.

**Step 2: Add a Thread Group**
- In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.
- Configure the Thread Group with the following settings:
  - Number of Threads (Users): The number of concurrent users you want to simulate (50 users).
  - Loop Count: The number of times each user will repeat the test (1 loop).

**Step 3: Add an HTTP Request Sampler**
- Right-click on the Thread Group you created in Step 3 and select `Add > Sampler > HTTP Request`.
- In the HTTP Request Sampler, specify the following:
  - Protocol: HTTP or HTTPS
  - Server Name or IP: The URL of the simple web page you want to test (http://example.com).
  - Path: The path to the specific page on the website (/index.html).

**Step 4: Add a Listener to View Results**
- Right-click on the Thread Group and select `Add > Listener > View Results Tree`.
- This listener will allow you to view the results of your load test.

**Step 5: Configure Test Duration and Other Settings**
- You can configure the test duration, ramp-up period, and other settings in the Thread Group to match your testing requirements.
- Set the test duration to control how long the test runs.

**Step 6: Run the Load Test**
- Click the "Run" button in the toolbar to start the load test.
- JMeter will simulate the specified number of users accessing the web page concurrently.

**Step 7: Monitor and Analyze Results**
- As the test runs, you can monitor the results in the "View Results Tree" listener.
- Pay attention to metrics like response times, throughput, and error rates.
- Ensure that the average response time for page requests is below the defined threshold (2 seconds).

**Step 8: Analyze and Report**
- After the test is complete, analyze the results to identify any performance bottlenecks or issues.
- Generate reports or graphs as needed to visualize the test results.
- Create a report summarizing the load test and its findings.