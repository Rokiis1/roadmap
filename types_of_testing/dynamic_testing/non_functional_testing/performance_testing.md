# Content of Table Non-Functional Testing (Performance Testing)

- [Load Testing](#load-testing)
- [Stress Testing](#stress-testing)
- [Spike Testing](#spike-testing)
- [Soak Testing](#soak-testing)

In previous topics, testing focused primarily on verifying whether the system behaves correctly from a functional perspective. This means checking that features work as expected and that the system produces the correct results.

However, correctness alone is not enough to ensure a good user experience.

A system may function correctly under ideal conditions, but still fail when many users access it at the same time, when usage suddenly increases, or when it runs for a long period without interruption.

This is where **performance testing** becomes important.

Performance testing focuses on evaluating how a system behaves under different levels of load and over time. It helps determine whether the system is fast, stable and reliable under actual usage conditions.

Instead of asking “Does the system work correctly?”, performance testing focuses on different kinds of questions.

It evaluates how quickly the system responds to requests and how many users it can handle at the same time. It also examines how the system behaves when it is placed under heavy load and whether it can recover from such conditions. In addition, it considers whether the system can maintain stable performance over a longer period of continuous use.

To answer these questions, different types of performance testing are used. Each type focuses on a specific kind of behavior or condition that the system may encounter.

We begin with **load testing**, which evaluates how the system performs under expected, normal usage conditions.

## Load Testing

**Load testing** is the starting point for understanding system performance under expected conditions. It focuses on evaluating how the system behaves when it is used in a way that reflects normal, everyday usage.

![Load Testing Diagram](./assets/images/load_testing.png)

The purpose of **load testing** is to verify that the system can handle the **anticipated number of users** while maintaining **acceptable performance**. This includes ensuring that **response times** remain within expected limits and that requests are processed successfully without errors.

During **load testing**, user activity is simulated to represent **typical system usage**. For example, a certain number of **virtual users** may send requests to an API or interact with an application at the same time. This allows the system to be observed under conditions that are close to **actual usage**.

To determine whether the system performs acceptably, clear **success criteria** are defined. These criteria often include **response time** and **reliability**. For instance, most requests may be expected to complete within a specific time limit while maintaining a **high success rate**.

**Load testing** provides an initial understanding of system performance. It helps identify whether the system is **stable under expected conditions** and reveals potential performance issues before the system is exposed to real users.

A typical example of **load testing** can be seen when preparing for the launch of an **online store**. Before release, the system is tested with a number of simulated users to ensure that it can handle expected traffic without slowdowns or failures.

Another example is testing an **API** by simulating multiple users sending requests at the same time and verifying that responses are returned within an acceptable time frame. This helps confirm that the system performs reliably under normal usage conditions.

While **load testing** verifies performance under expected conditions, it does not show how the system behaves when those conditions are exceeded. In real scenarios, systems may experience higher load than anticipated, which can push them beyond their limits.

To understand how the system behaves under such extreme conditions, the next step is **stress testing**.

## Stress Testing

**Stress testing** focuses on understanding how a system behaves when it is pushed beyond its expected limits. While load testing verifies performance under normal conditions, stress testing explores what happens when the system is exposed to **extreme usage**.

![Stress Testing Diagram](./assets/images/stress_testing.png)

The purpose of **stress testing** is to identify the point at which the system begins to degrade and to observe how it behaves under high pressure. This includes understanding whether the system slows down, produces errors, or fails completely when the load exceeds its capacity.

During **stress testing**, the number of users or requests is gradually increased beyond normal levels. This allows the system to be evaluated under conditions that go beyond typical usage and helps reveal how it responds as pressure continues to grow.

By doing this, **stress testing** helps uncover **performance bottlenecks**, resource limitations and potential failure points that may not be visible during normal load conditions. It also provides insight into how stable and resilient the system is when operating under extreme stress.

An important aspect of stress testing is not only identifying when the system fails, but also observing how it recovers after the load is reduced. This helps determine whether the system can return to a stable state without requiring manual intervention.

A common example of **stress testing** is a ticket sales platform for a popular concert. When tickets are released, a large number of users may attempt to access the system at the same time. Stress testing simulates this situation to ensure that the system can handle sudden and extreme demand without crashing.

Another example involves gradually increasing the number of **virtual users**, for instance from a lower number to a much higher one, while monitoring system behavior at each stage. This helps identify the exact point at which performance begins to degrade and ensures that system limits are clearly understood.

While **stress testing** focuses on gradually increasing load to find system limits, it does not reflect situations where load changes suddenly. In real scenarios, systems may experience abrupt spikes in traffic that occur without warning.

To understand how the system responds to these sudden changes, the next step is **spike testing**.

## Spike Testing

**Spike testing** focuses on understanding how a system behaves when it is exposed to a **sudden and significant increase in load**. Unlike stress testing, where load is increased gradually, spike testing evaluates how the system reacts to abrupt changes in usage.

![Spike Testing Diagram](./assets/images/spike_testing.png)

The purpose of **spike testing** is to observe how the system responds when traffic increases sharply within a short period of time. This includes identifying whether the system can handle the sudden demand or if it experiences slowdowns, errors or failures.

During **spike testing**, the number of **virtual users** is increased rapidly, often within seconds. This simulates real situations where large numbers of users access the system at once, without any gradual buildup.

This type of testing helps reveal issues that may not appear during gradual load increases. It can expose problems such as **system instability**, delayed responses or complete service interruptions caused by sudden pressure on resources.

An important aspect of spike testing is evaluating how the system behaves after the spike. It helps determine whether the system can **recover quickly** and return to stable operation once the load decreases.

A common example of **spike testing** is a **flash sale event** on an e-commerce platform. When the sale begins, a large number of users may try to access the system at the same moment. Spike testing simulates this behavior to ensure that the system can handle the sudden surge in activity.

Another example involves starting with a low number of users and then rapidly increasing it to a much higher level within a short time. This allows observation of how the system reacts to the sudden spike and whether it can maintain acceptable performance.

While **spike testing** focuses on sudden and short-lived increases in load, it does not show how the system behaves over a longer period of continuous usage. In real scenarios, systems often need to operate reliably for extended durations without interruption.

To understand how the system performs over time and whether it can maintain stability during prolonged usage, the next step is **soak testing**.

## Soak Testing

**Soak testing** focuses on understanding how a system behaves over an **extended period of continuous usage**. While other types of performance testing evaluate how the system responds to different levels or patterns of load, soak testing examines whether the system can remain stable over time.

![Soak Testing Diagram](./assets/images/soak_testing.png)

The purpose of **soak testing** is to identify issues that may only appear after the system has been running for a long duration. These issues can include **memory leaks**, gradual **performance degradation**, or **resource exhaustion** that builds up over time.

During **soak testing**, the system is subjected to a consistent level of load that reflects typical or slightly elevated usage. This load is maintained for an extended period, such as several hours or even days, allowing the system to be observed under continuous operation.

This type of testing helps ensure that the system can maintain **stable performance** and consistent resource usage without unexpected slowdowns or failures. It also provides insight into how well the system manages resources such as memory, CPU and connections over time.

An important aspect of soak testing is identifying problems that are not visible in shorter tests. A system may perform well initially, but gradually degrade as resources are consumed or not properly released.

A common example of **soak testing** is a **financial or transactional system** that is expected to run continuously without downtime. Testing such a system over an extended period helps ensure that it remains stable and reliable during prolonged operation.

Another example involves running a test with a steady number of **virtual users** over many hours while monitoring system behavior. This allows detection of long-term issues and confirms that the system can handle continuous usage without performance degradation.
