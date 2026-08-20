# Test Layer Overview

A software application is usually made up of multiple technical layers that work together to deliver functionality to the user. Testing can examine the system through these different layers, depending on **what behavior needs to be verified and where that behavior can be observed most effectively**.

Instead of relying on only one point of interaction, testers can evaluate the application through the **user interface (UI)**, communicate directly with the **API** or inspect information stored in the **database (DB)**. Each layer provides a different perspective on the same system.

The **UI layer** represents what the user can see and interact with. Testing through this layer focuses on user actions, visible behavior, navigation, presentation and complete user flows. It allows the tester to evaluate the application from the user's perspective without needing to interact directly with the underlying services or stored data.

The **API layer** provides access to the application's services and application operations without going through the user interface. Testing at this layer allows requests and responses to be examined directly, making it possible to verify application behavior, data validation and error handling independently of how those results are presented in the UI.

The **database layer** provides another perspective by allowing the tester to verify how information is stored, changed and maintained. Database testing can help confirm that operations performed by the application result in the expected data and that stored information remains accurate and consistent.

These layers are connected rather than independent. A user action performed through the UI may trigger an API request, which processes the operation and reads or modifies information in the database. The result can then travel back through the API and eventually appear in the interface.

![Application layers](./assets/images/application_layers.png)

For example, when a user adds a product to a shopping cart, the action begins in the UI, may be processed through an API and may result in data being created or updated in the database.

Testing can examine this behavior from different points in the system. UI testing can verify that the cart counter changes correctly. API testing can verify that the corresponding operation produces the expected response, while database testing can verify that the resulting data is stored or updated correctly when persistence is involved.

![Testing perspectives across layers](./assets/images/test_layer_perspectives.png)

Testing through different layers provides different levels of **control and observability**. The UI shows what the user experiences, while deeper layers can expose information that may not be directly visible through the interface. A problem observed in the UI may therefore originate from the interface itself, the API, the database or the interaction between them.

The purpose of learning these layers is not to treat them as separate forms of testing that compete with one another. Instead, each layer provides a different testing perspective and can be selected according to the behavior being investigated.

The progression begins with **Test Layer UI**, where testing is performed through direct interaction with the application and focuses on observable user behavior. It then moves to **Test Layer API**, where application behavior can be examined more directly through requests and responses, and later to **Test Layer DB**, where testing focuses on the data maintained by the system.

Together, these layers build an understanding of testing from the **visible user experience** toward the **underlying application behavior and data**, providing a foundation for deciding where a particular behavior can be tested most effectively.
