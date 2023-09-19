**Method 1: Using Apache JMeter**

**Step 1: Create a New Test Plan**

1. Launch JMeter.

2. Create a new test plan by going to `File > New Test Plan`.

**Step 2: Add a Thread Group**

3. In the Test Plan, right-click on your Test Plan's name and select `Add > Threads (Users) > Thread Group`.

4. Configure the Thread Group with the following settings:
   - Number of Threads (Users): Start with a small number, 5.
   - Ramp-Up Period: Set it to a reasonable value, 10 seconds. This means JMeter will gradually increase the number of concurrent users over 10 seconds.

**Step 3: Add an HTTP Request Sampler for User Login**

5. Right-click on the Thread Group you created in Step 2 and select `Add > Sampler > HTTP Request`.

6. In the HTTP Request Sampler, specify the following:
   - Protocol: HTTP or HTTPS.
   - Server Name or IP: The URL of your user login page.
   - Path: The path to the login endpoint (/login).
   - Method: POST (assuming login requests use HTTP POST).
   - Add any necessary request parameters, such as username and password, for simulating user logins.

**Step 4: Add a View Results Tree Listener**

7. Right-click on the Thread Group and select `Add > Listener > View Results Tree`.

8. This listener will allow you to view the results of your login test, including response times and pass/fail status.

**Step 5: Configure Test Duration and Run the Test**

9. Configure the test duration, loop count, and other settings in the Thread Group to match your testing requirements.

10. Click the "Run" button in the toolbar to start the test.

**Step 6: Gradually Increase Load**

11. Observe how the system handles the initial load of 5 concurrent users.

12. If the system handles this initial load without significant issues, you can repeat Steps 2-5 with an increased number of concurrent users (10, 20, 50) by creating additional Thread Groups or modifying the existing one.

13. Keep increasing the number of concurrent users gradually until you reach the point where the system exhibits issues or performance degradation.

**Step 7: Monitor and Analyze Results**

14. Monitor the results in the "View Results Tree" listener for any failed login attempts or unusual response times.

15. Identify the breaking point where the system starts to exhibit issues, and assess the system's behavior under stress.

These steps will help you perform stress testing of user login using Apache JMeter, gradually increasing the load to find the breaking point during login. Customize the test parameters, URL, and endpoints to match your specific application and testing requirements.