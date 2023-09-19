**Method 1: Using Apache JMeter**

**Step 1: Create a New Test Plan**

1. Launch JMeter.

2. Create a new test plan by going to `File > New Test Plan`.

**Step 2: Add a Thread Group**

3. In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.

4. Configure the Thread Group with the following settings:
   - Number of Threads (Users): Set it to the desired number.
   - Ramp-Up Period: This determines how quickly users are added. Adjust as needed.

**Step 3: Add an HTTP Request Sampler**

5. Right-click on the Thread Group you created in Step 2 and select `Add > Sampler > HTTP Request`.

6. In the HTTP Request Sampler, specify the following:
   - Protocol: HTTP or HTTPS.
   - Server Name or IP: The URL of the server you want to test.
   - Path: The path to the resource or endpoint you want to access (/api/resource).

**Step 4: Add a Response Assertion (Optional)**

7. To validate network latency, you can add a Response Assertion:
   - Right-click on the HTTP Request Sampler from Step 5.
   - Select `Add > Assertions > Response Assertion`.
   - Configure the Response Assertion to check for specific content or response codes to ensure the request was successful.

**Step 5: Add a Listener to View Results**

8. Right-click on the Thread Group and select `Add > Listener > View Results Tree`.

9. This listener will allow you to view the results of your network latency test, including response times and pass/fail status.

**Step 6: Configure Test Duration and Run the Test**

10. Configure the test duration, loop count, and other settings in the Thread Group to match your testing requirements.

11. Click the "Run" button in the toolbar to start the test.

**Step 7: Monitor and Analyze Results**

12. Monitor the results in the "View Results Tree" listener.

13. Check if network latency meets your pass criteria (less than 50 milliseconds).