# Postman

**Explanation:**

Tool that developers and testers use to send requests to and receive responses from an API. It's used to test, document, and explore APIs.

**Key Concepts:**

1. **Requests:** Postman can send various types of HTTP requests like GET, POST, DELETE, PUT. Each request can have multiple parameters, headers, body content.

    **HTTP requests methods:**

    ![alt text](./images/methods.png)

    **Path Variables:**

    ![alt text](./images/pathVariable.png)

    **Query Params:**

    ![alt text](./images/queryParams.png)

    **Body:**

    ![alt text](./images/body.png)

    **Header:**

    ![alt text](./images/header.png)

2. **Collections:** A collection allows you to group individual requests together. These collections can be run together as a series of requests, in a specified sequence.

3. **Environments:** Environments in Postman are key-value pairs of variables. These variables can be used in request URLs, headers, body data, and test scripts. Environments can be Global, Local, or specific to a Collection.

4. **Data Manipulation and Dynamic Generation:**

    - **Generating Data Dynamically:**

        **Explanation:**

        You can also use pre-request scripts to generate data dynamically before each request. This can be useful if you need to generate random or unique data for each test run.

        **Example:**

        ```json
        {
            "random": "{{$randomSomething}}",
        }

    - **set(), get(), unset() methods:**

        **Explanation:**

        These are specific methods provided by Postman that allow you to manipulate scope variables. They are often used within pre-request scripts and tests, and can be used in conjunction with dynamically generated data.

        **Example:**

        ```js
        // Create a variable in Environment, Global, Collection scopes
        pm.environment.set("variable_key", "variable_value");

        // Get variable from specific scope
        let value = pm.environment.get("variable_key");

        // Delete variable from specific scope
        pm.environment.unset("variable_key");
        ```

5. **Tests:**

    **Explanation:**

    Postman allows you to write test scripts and pre-request scripts for your API requests. Test scripts are executed after a response is received from the server, allowing you to validate the response data, status, performance, and more. Pre-request scripts are run before the request is sent, allowing you to set up variables, parameters, and other request data.

    **Syntax:**

    ```js
    pm.test("Description of The Test", function () {
        // function body
        // What kind of functionallity will do this function
    })
    ```

    **Pre-request Script**

    **Examples:**

    1. **Generate Random User**

        This script generate random data.

        ```js
        let username = 'User' + Math.random().toString(36).substring(2, 15);
        pm.environment.set("username", username);

        let email = username + '@example.com';
        pm.environment.set("email", email);
        
        let phoneNumber = '555' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        pm.environment.set("phoneNumber", phoneNumber);

        let start = new Date(1970, 0, 1);
        let end = new Date(2000, 0, 1);
        let dateOfBirth = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        pm.environment.set("dateOfBirth", dateOfBirth.toISOString().split('T')[0]); // format as YYYY-MM-DD

        let cities = ['Alytus', 'Klaipėda', 'Trakai', 'Mažeikiai', 'Prienai'];
        let city = cities[Math.floor(Math.random() * cities.length)];
        pm.environment.set("city", city);

        // Set a default password
        pm.environment.set("password", "P@ssw0rd");
        ```

    2. **Return Data from API:**

        Get from API from the forst object the title

        ```js
        pm.sendRequest('https://fakestoreapi.com/products', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                let firstProductTitle = res.json()[0].title;
                pm.globals.set("firstProductTitle", firstProductTitle);
            }
        });
        ```

    3. **Setting up an Authorization Token:**

        This script retrieves an `authToken` from the environment variables, prepends 'Bearer ' to it, and then sets it as a new environment variable `bearerToken`.

        ```js
        token = 'Bearer ' + pm.environment.get('authToken');
        pm.environment.set('bearerToken', token);
        ```

    **Post-response:**

    **Examples:**

    1. **Status Code Check:**

        ```js
        pm.test("Status code is 200", function () {
            pm.response.to.have.status(200);
        });
        ```

    2. **Response Time Check:**

        ```js
        pm.test("Response time is less than 200ms", function () {
            pm.expect(pm.response.responseTime).to.be.below(200);
        });
        ```

    3. **Response Body Check:**

        ```js
        pm.test("Response contains name", function () {
            let jsonData = pm.response.json();
            pm.expect(jsonData.name).to.eql("Test");
        });
        ```

    4. **Header Check:**

        ```js
        pm.test("Content-Type header is present", function () {
            pm.response.to.have.header("Content-Type");
        });
        ```

    5. **Chainable methods**

        These are used to make your tests more readable and expressive. They don't affect the assertion itself but help to chain together different parts of an assertion.

        ```js
        // It's used for readability and chaining.
        expect(foo).to.be;

        // Before a property check.
        expect(foo).to.have;

        // It's used to negate the following assertion.
        expect(foo).to.not.be;

        // Before a type check.
        expect(foo).to.be.an;

        // Before a type check.
        expect(foo).to.be.a;

        // It's used to negate the following type check.
        expect(foo).to.not.be.a;
        ```

    6. **Assertion methods**

        These are used to assert certain conditions in your tests. If the condition is true, the test passes. If it's false, the test fails.

        ```js
        // Asserts that the target is equal to value.
        expect(foo).to.equal('bar');

        // Asserts that the target is deeply equal to value.
        expect(foo).to.eql({ bar: 'baz' });

        // Asserts that the target is neither null nor undefined.
        expect(foo).to.exist;

        // Asserts that the target is strictly (===) equal to true.
        expect(foo).to.be.true;

        // Asserts that the target is strictly (===) equal to false.
        expect(foo).to.be.false;

        // Asserts that the target is greater than value.
        expect(foo).to.be.above(10);

        // Asserts that the target is less than value.
        expect(foo).to.be.below(20);

        // Asserts that the target has a property 'bar'
        expect(foo).to.have.property('bar');

        // Asserts that the target's length is 3
        expect(foo).to.have.lengthOf(3);

        // Asserts that the target is not equal to value
        expect(foo).to.not.equal('bar');

        // Asserts that the target is not deeply equal to value
        expect(foo).to.not.eql({ bar: 'baz' });
        ```

    7. **Negative Test:**

    8. **Schema validation:**

        ```js
        let schema = {
            "type": "object",
            "properties": {
                "Id": { "type": "string"},
                "Progress": { "type": "string"},
                "Status": { "type": "string"},
                "Info": { "type" : "boolean"},
                "Created": {"type": "string","format": "date-time"},
                "Ended": {"type": "boolean"},
                "Operation": {"type": "string"},
                "Requested": {"type": "array",
                    "items" :{
                        "type": "string"
                    }
                },
            },
        };

        let jsonData = pm.response.json();

        pm.test("Schema is valid", function() {
            let validation = tv4.validate(jsonData, schema);
            pm.expect(validation).to.be.true;
        });
        ```

6. **Runner:** The collection runner lets you run all requests in a collection in a specified sequence. This can be useful for automated testing scenarios.

7. **Data-driven testing:**

    - **Using Data Files:** You can use data files (like CSV or JSON) to provide multiple sets of data for your tests. This allows you to run the same request multiple times with different data. This is typically what is referred to as "data-driven" testing.

8. **Monitors:** Postman can schedule a collection run at regular intervals on different environments to check for any breaking changes to your API.

9. **Documentation:** Postman auto-generates and hosts browser-viewable API documentation.

10. **Mock Servers:** Postman allows you to create mock servers. A mock server is a fake API before the real one is built, and can be used for testing, or as a placeholder.
