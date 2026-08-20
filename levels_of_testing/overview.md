# Levels of Testing Overview

So far, we have looked at why testing is necessary, how testing activities are organized and how testing contributes to software quality. The next step is to understand **where testing is performed as software grows from individual pieces into a complete application**.

Testing is not a single activity performed only after development is complete. Different problems can appear when code is tested by itself, when components interact, when the complete application operates and when it communicates with external systems.

For this reason, software testing is performed at different **testing levels**, with each level examining the software from a progressively broader perspective.

Testing begins with small, isolated parts of the application and gradually expands to interactions between components, the complete application, external integrations and finally stakeholder acceptance. Each level has a different scope and can reveal defects that may not be visible at another level.

![Levels of testing](./assets/images/levels_of_testing.png)

At the foundation is **Component Testing (Unit Testing)**, where individual units such as functions, methods or classes are tested in isolation. The purpose is to verify that each unit behaves correctly before it interacts with other parts of the application.

Once individual units have been verified, **Component Integration Testing** checks how internal components work together. The focus moves from isolated behavior to interfaces, data exchange, dependencies and communication between connected components.

The scope then expands to **System Testing**, where the complete integrated application is evaluated as a whole. Testing verifies functional behavior and relevant quality characteristics across the application rather than concentrating on individual components.

After the application itself has been validated, **System Integration Testing** examines communication across the system boundary. It verifies how the application interacts with external systems, services, shared platforms and other external dependencies.

The broadest level is **Acceptance Testing**, where the focus shifts toward determining whether the completed system satisfies the conditions required for acceptance. Stakeholders evaluate whether the system supports its intended use and whether the available evidence and remaining risks support an acceptance decision.

Together, these levels create a progression from **individual units**, through **internal interactions**, to the **complete application**, then **external interactions**, and finally **stakeholder acceptance**.

Each level provides a different perspective on quality. Passing one level does not replace the need for the next because a unit can work correctly in isolation while failing when integrated, and a technically correct system may still fail to satisfy the conditions required for acceptance.
