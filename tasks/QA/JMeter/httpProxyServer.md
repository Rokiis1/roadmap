1. Start JMeter by running the `jmeter.bat` (for Windows) or `jmeter.sh` (for macOS/Linux) executable.
Create a New Test Plan:

2. In JMeter, go to `File > New Test Plan` to create a new test plan where you'll record your HTTP requests.

3. In the Test Plan tree on the left, right-click on your Test Plan and choose `Add > Threads (Users) > HTTP(S) Test Script Recorder`.
This adds the HTTP Proxy Server element to your test plan.

4. Select the "HTTP(S) Test Script Recorder" element in the tree, and you'll see its configuration options in the right panel.
Set the "Port" field to specify the port number where the proxy server will listen for incoming requests. The default is typically 8888.
You can leave other settings as default or adjust them as needed.

5. To record HTTP requests, you need to configure your web browser to use JMeter as a proxy server.
In your browser's proxy settings, set the proxy host to the machine where JMeter is running and the port number you specified in the previous step (as `localhost:8888`).

6. Back in JMeter, click the "Start" button at the bottom of the HTTP(S) Test Script Recorder panel. This starts the proxy server and allows it to capture requests.
Record Your Interactions:

7. Use your web browser to interact with the website or application you want to test. As you do so, JMeter will capture the HTTP requests and responses in real time.

8. After you've recorded the interactions you want to test, return to JMeter and click the "Stop" button in the HTTP(S) Test Script Recorder panel.
View Recorded Requests:

9. You can now view and save the recorded HTTP requests and responses in JMeter's "Recording Controller." These recorded requests can be used as the basis for your performance test plan.
Refine and Customize:

10. You can edit and customize the recorded requests as needed to simulate different user scenarios, add variables, assertions, timers, etc.