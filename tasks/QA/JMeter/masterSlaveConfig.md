**On the Master Machine:**

1. Create a test plan in JMeter or open an existing one that you want to execute in distributed mode.
Configure Master Node:

2. In your test plan, add a "Remote Start" or "Remote Testing" element. Configure it to specify the IP addresses or hostnames of the slave machines that will participate in the test.
Run the Test in Distributed Mode:

3. Run your test in distributed mode from the master machine. JMeter will distribute the test plan to the specified slave machines, which will execute the test and report results back to the master.
Collect and Analyze Results:

4. After the test completes, you can collect and analyze the results on the master machine using JMeter's built-in listeners and reporting tools.

**On the Slave Machines:**

1. In the `jmeter.properties` file on each slave machine, configure the RMI (Remote Method Invocation) settings. You may need to specify the master's IP address and RMI port number.
Start the JMeter Server:

2. On each slave machine, start the JMeter server by running the `jmeter-server` script or command with appropriate options and configurations.
Join the Test:

3. Once the JMeter server is running on the slave machines, they will be ready to accept test instructions from the master.