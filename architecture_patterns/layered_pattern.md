# Content of Software Layered Architecture Pattern

- [Layered Architecture Pattern](#layered-architecture-pattern)

Software architecture styles explains how an application is organized and how its parts work together.

Different architectural approaches exist for structuring software systems. Some approaches describe how an entire system is deployed and organized at a high level. Others describe how the internal parts of an application are structured.

The layered architecture pattern belongs to the second category. It focuses on organizing the internal structure of an application by separating responsibilities into different parts of the system.

Instead of placing all logic in one place, the application is divided into layers. Each layer focuses on a specific responsibility, which helps keep the system easier to understand and maintain.

## Layered Architecture Pattern

The layered architecture pattern organizes the internal structure of an application into several layers. Each layer represents a different type of responsibility inside the system.

Common layers used in many applications include

- **Presentation layer** responsible for communication with external clients. It receives requests from users or other systems and returns responses, commonly appear in folders such as **api**, **routes**, or **controllers**.

- **Business logic layer** contains the core rules of the application. This layer defines how the system behaves and coordinates the actions required to complete operations, often appear in folders such as **services** or **usecases**.

- **Data access layer** responsible for retrieving and storing data. It communicates with the database or other storage systems, commonly appear in folders such as **repositories**, **dao**, or **data_access**.

- **Data layer** represents the structure of the data used by the application and describes how information is organized inside the system, often appear in folders such as **models**, **entities**, **schemas**, or **dto**.

Applications also include folders that support the entire system.

Folders such as **database** or **db** may contain components responsible for connecting the application to the storage system.

The **core** folder may contain **configuration**, **security utilities** or **other shared components** used across the application.

Folders such as **middlewares**, **dependencies**, **exceptions**, and **utils** often contain supporting components used across different parts of the system.

Projects also commonly include a **tests** folder that contains automated tests used to verify the behavior of the application.

Organizing responsibilities in this way helps keep the application easier to maintain. Each part of the system focuses on a specific task, which allows developers to modify or extend the system without affecting unrelated parts.
