**Step 1: Create a New Test Plan in JMeter**
- Launch JMeter.
- Create a new test plan by going to `File > New Test Plan`.

**Step 2: Add a Thread Group**
- In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.
- Configure the Thread Group with the following settings:
  - Number of Threads (Users): The number of concurrent users you want to simulate (100 users).
  - Loop Count: The number of times each user will repeat the test (1 loop).

**Step 3: Add an HTTP Request Sampler for Product Searches**
- Right-click on the Thread Group you created in Step 3 and select `Add > Sampler > HTTP Request`.
- In the HTTP Request Sampler, specify the following:
  - Protocol: HTTP or HTTPS
  - Server Name or IP: The URL of the e-commerce website (http://example.com).
  - Path: The path to the search endpoint (/search).
  - Method: POST or GET, depending on how product searches are performed on the website.
  - Add any necessary request parameters, such as search keywords.

**Step 4: Add a Constant Throughput Timer**
- Right-click on the Thread Group and select `Add > Timer > Constant Throughput Timer`.
- Configure the Constant Throughput Timer to control the rate at which search requests are sent to the server. Set the target throughput (requests per minute) based on your load testing requirements.

**Step 5: Add a Listener to View Results**
- Right-click on the Thread Group and select `Add > Listener > View Results Tree`.
- This listener will allow you to view the results of your load test, including response times.

**Step 6: Configure Test Duration and Other Settings**
- Configure the test duration, ramp-up period, and other settings in the Thread Group to match your testing requirements.
- Set the test duration to control how long the test runs.

**Step 7: Run the Load Test**
- Click the "Run" button in the toolbar to start the load test.
- JMeter will simulate multiple users performing product searches concurrently.

**Step 8: Monitor and Analyze Results**
- Monitor the results in the "View Results Tree" listener.
- Check that the average search response time is below the defined threshold (3 seconds).

**Step 9: Analyze and Report**
- After the test is complete, analyze the results to identify any performance issues or bottlenecks in the product search process.
- Generate reports or graphs as needed to visualize the test results.
- Create a report summarizing the load test and its findings.
