**Step 1: Add a Thread Group**
- In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.
- Configure the Thread Group with the following settings:
  - Number of Threads (Users): The number of concurrent users you want to simulate (50 users).
  - Loop Count: The number of times each user will repeat the test (1 loop).

**Step 2: Add an HTTP Request Sampler for Form Submission**
- Right-click on the Thread Group you created in Step 3 and select `Add > Sampler > HTTP Request`.
- In the HTTP Request Sampler, specify the following:
  - Protocol: HTTP or HTTPS
  - Server Name or IP: The URL of the website where the contact form is located (http://example.com).
  - Path: The path to the form submission endpoint (/submit).
  - Method: POST (assuming form submissions use HTTP POST).
  - Content-Type: application/x-www-form-urlencoded
  - Parameters: Add parameters for the form fields and their values (name, email, message).

**Step 3: Add Assertions for Form Submission Success**
- Right-click on the HTTP Request Sampler you created in Step 4 and select `Add > Assertions > Response Assertion`.
- Configure the Response Assertion to check for a successful form submission response. You may check for specific text or HTTP response codes that indicate a successful submission.

**Step 4: Add a Listener to View Results**
- Right-click on the Thread Group and select `Add > Listener > View Results Tree`.
- This listener will allow you to view the results of your load test, including response times and success rates.

**Step 5: Configure Test Duration and Other Settings**
- Configure the test duration, ramp-up period, and other settings in the Thread Group to match your testing requirements.
- Set the test duration to control how long the test runs.

**Step 6: Run the Load Test**
- Click the "Run" button in the toolbar to start the load test.
- JMeter will simulate multiple users submitting the contact form concurrently.

**Step 7: Monitor and Analyze Results**
- Monitor the results in the "View Results Tree" listener.
- Calculate the form submission success rate and check if it is above 95%.
- Ensure that the average form submission response time is below the defined threshold (4 seconds).

**Step 8: Analyze and Report**
- After the test is complete, analyze the results to identify any performance issues or bottlenecks in the form submission process.
- Generate reports or graphs as needed to visualize the test results.
- Create a report summarizing the load test and its findings.
