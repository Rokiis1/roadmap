**Using Apache JMeter:**

**Step 1: Create a New Test Plan**

1. Launch JMeter.

2. Create a new test plan by going to `File > New Test Plan`.

**Step 2: Add a Thread Group**

3. In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.

4. Configure the Thread Group with the following settings:
   - Number of Threads (Users): Set it to a reasonable number, 100.
   - Ramp-Up Period: Set it to a reasonable value, 60 seconds. This means JMeter will gradually increase the number of concurrent users over 60 seconds.

**Step 3: Add an HTTP Request Sampler for Video Streaming**

5. Right-click on the Thread Group you created in Step 2 and select `Add > Sampler > HTTP Request`.

6. In the HTTP Request Sampler, specify the following:
   - Protocol: HTTP or HTTPS.
   - Server Name or IP: The URL of your video streaming server.
   - Path: The path to the video stream or content you want to access.
   - Method: GET (assuming video streaming requests use HTTP GET).

**Step 4: Add a View Results Tree Listener**

7. Right-click on the Thread Group and select `Add > Listener > View Results Tree`.

8. This listener will allow you to view the results of your video streaming stress test, including response times and pass/fail status.

**Step 5: Configure Test Duration and Run the Test**

9. Configure the test duration, loop count, and other settings in the Thread Group to match your testing requirements.

10. Click the "Run" button in the toolbar to start the test.

**Step 6: Monitor and Analyze Results**

11. Monitor the results in the "View Results Tree" listener.

12. Check if video streaming remains smooth for at least 100 concurrent users.

**Step 7: Gradually Increase Load (Optional)**

13. If you want to test the server's capacity further, you can adjust the number of concurrent users in the Thread Group, gradually increasing the load.

14. Continue monitoring and analyzing the results until you reach the desired level of load or until video streaming exhibits issues or performance degradation.