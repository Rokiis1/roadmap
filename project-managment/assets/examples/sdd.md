# Software Design Description (SDD) for an Online Shopping System

## System Overview

The Online Shopping System allows users to browse products, add them to a shopping cart, and make purchases. The system interacts with a payment gateway for payment processing and a warehouse system for order fulfillment.

## Architecture

**The system is built using a Monolithic architecture.**

- **Client-Side:** The user interface is built using React. It includes features for user registration and authentication, product browsing, managing the shopping cart, and processing orders.

- **Server-Side:** The server-side logic is implemented using Java and the Spring Boot framework. It handles requests from the client-side, interacts with the database, and sends responses back to the client.

All these functionalities are part of a single application, implemented using Java and the Spring Boot framework and React library. The application communicates with a PostgreSQL database for data storage. The system is hosted on an cloud server.

**The system is built using a Microservices architecture**

- **Client Service:** Serves the user interface, built using React. This service communicates with the other services to provide features for user registration and authentication, product browsing, managing the shopping cart, and processing orders.

- **User Service:** Handles user registration and authentication. Implemented using Node.js and Express.

- **Product Service:** Manages product information. Implemented using Python and Flask.

- **Cart Service:** Manages the shopping cart. Implemented using Java and Spring Boot.

- **Order Service:** Handles order processing. Implemented using Go.

These services communicate with each other via RESTful APIs. The system is hosted on a cloud server and uses a PostgreSQL database for data storage.

## Detailed Design

### User Service

- **Registration:** Uses a POST API to accept user details. Passwords are hashed before storage.

- **Authentication:** Uses a POST API to validate user credentials.

### Product Service

- **Product Listing:** Uses a GET API to fetch product details.

### (and so on for each service...)

In a microservices architecture, each service typically has its own database, so the User Service would communicate directly with the User database, and the Product Service would communicate directly with the Product database.

In a monolithic architecture, all functionalities would typically share the same database, so the User Service and Product Service would both communicate with the same database.

## Database Design

- **Users:** Stores user information. Primary key is UserID.

- **Products:** Stores product information. Primary key is ProductID.

- **Cart:** Stores information about items in user's cart. Composite key is (UserID, ProductID).

- **Orders:** Stores information about user orders. Primary key is OrderID.

In a monolithic architecture, all these tables would typically be part of the same database. The application would interact with this single database to manage users, products, carts, and orders.

In a microservices architecture, each service might have its own database. For example, the User Service might have a Users database, the Product Service might have a Products database, and so on.

## User Interface Design

- **Registration and Login page:** Allows users to register or log in.

- **Product Listing page:** Displays a list of products.

- **Cart page:** Displays items in the user's cart.

- **Checkout page:** Allows users to make a purchase.

## Error Handling and Logging

Errors are handled using try-catch blocks and appropriate error messages are displayed to the user. All errors and important events are logged using a logging library.