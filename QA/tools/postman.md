# Postman

**Explanation:**

Postman is a popular API client that makes it easy for developers to create, share, test and document APIs. This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses.

**Key Concepts:**

- **Request**: In Postman, you can construct complex HTTP requests quickly, save them for later use and share them with your team. You can use variables to enhance your workflow.

- **Response**: Postman interprets the response automatically and presents it in a user-friendly way. It includes features like color-coded response headers, syntax-highlighted body content, and built-in JSON and XML formatters.

- **Endpoint**: Postman allows you to store as many API endpoints as you want, allowing for easy testing and manipulation of each endpoint.

- **Header**: Postman provides a user-friendly interface for setting headers. You can also use environment or global variables for headers that are used frequently.

- **Body**: Postman provides several options to format the request body including form-data, x-www-form-urlencoded, raw (text, JSON, XML, HTML, etc.), binary, and GraphQL.

- **HTTP Methods**: Postman supports all HTTP methods including GET, POST, PUT, PATCH, DELETE, OPTIONS, and HEAD.

- **Status Codes**: Postman will display the status code returned by the server. It also includes a brief description of the status code to help understand the server's response.

- **Collections**: Postman lets you group individual requests together. These collections can be run in sequence as a test suite.

- **Environments**: Postman allows you to set up different environments, each with their own set of stored variables. This is useful when you have multiple API stages like development, testing, and production.

- **Tests**: Postman allows you to write tests for your API requests. These tests can be grouped into a collection and run in a sequence.

- **Documentation**: Postman can automatically generate and update API documentation that is easy to read and accessible to your users.

- **Mock Servers**: Postman allows you to create mock servers. This is useful when you want to test your API's response, as it allows you to simulate various scenarios and responses.

- **Monitoring**: Postman can monitor your APIs on a schedule and will report if anything is wrong.

- **CI/CD Integration**: Postman can be integrated with popular CI/CD tools. This allows you to run your collections as part of your CI/CD pipelines.

- **Run**: Postman includes a collection runner that lets you run all requests in a collection locally or in the Postman cloud. You can set data files to use in the runs and set number of iterations.

- **CLI (Command Line Interface)**: With Newman, Postman's command-line collection runner, you can run and test a Postman collection directly from the command-line.

- **Flow**: Postman supports pre-request and test scripts which you can use to add dynamic behavior to requests or collections. These scripts are executed before the request is sent and after the response is received respectively.