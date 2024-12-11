1. **Correctness:** Does the endpoint return the expected data when given valid input.

```js
// Use jsonData directly when the response from the API is a single object, not an array.
pm.test("Response body contains expected data", function () {
    pm.expect(jsonData.name).to.eql(name);
    pm.expect(jsonData.age).to.eql(parseInt(age));
});

// Use jsonData[0] when the response from the API is an array of objects and you want to test the properties of the first object in that array.
pm.test("Response body contains expected data", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData[0].name).to.eql(name);
    pm.expect(jsonData[0].age).to.eql(parseInt(age));
});

// If the response is an array of objects
pm.test("Response body contains expected data", function () {
    let jsonData = pm.response.json();
    jsonData.forEach((item, index) => {
        pm.expect(item.name).to.eql(name);
        pm.expect(item.age).to.eql(parseInt(age));
    });
});
```

2. **Error Handling:** Checking correct error messages and status codes.

```js
pm.test("Check if endpoint returns correct error message and status code", function () {
    pm.response.to.have.status(404);
    let jsonData = pm.response.json();
    pm.expect(jsonData.error).to.eql('User not found');
});

pm.test("Status code is 200 and response body is correct", function () {
    pm.response.to.have.status(200);
    var jsonData = pm.response.json();
    pm.expect(jsonData.result).to.eql('Success');
});

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Status code is 204 and no response body", function () {
    pm.response.to.have.status(204);
    pm.expect(pm.response.text()).to.eql('');
});
```

3. **Schema Validation:** Does the response body match the expected schema.

```js
const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        id: { type: "number" },
        name: { type: "string" },
        type: { type: "string" },
        available: { type: "boolean" }
},
    required: ["id", "name", "type", "available"]
};

let jsonData = pm.response.json();

pm.test("Response schema is valid", function () {
    const validate = ajv.compile(schema);
    const valid = validate(jsonData);
    pm.expect(valid, JSON.stringify(validate.errors)).to.be.true;
});
 ```

4. **Response Structure:** Does the structure of the response match what you expect.

```js
pm.test("Response has expected structure", function () {
    let jsonData = pm.response.json();

    // If the response is a single object
    pm.expect(jsonData).to.have.property('name');
    pm.expect(jsonData).to.have.property('age');

    // If the response is an array of objects
    jsonData.forEach((item, index) => {
        pm.expect(item).to.have.property('name');
        pm.expect(item).to.have.property('age');
    });
});
```

5. **Response Headers:** Does the response include the expected headers.

```js
pm.test("Response includes expected headers", function () {
    // Check if the 'Content-Type' header is present and has the expected value
    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

    // Check if the 'Authorization' header is present
    pm.expect(pm.response.headers.has('Authorization')).to.be.true;
});
```

6. **Data Consistency:** Write tests that check the consistency of the data.

```js
pm.sendRequest({
    url: `https://api.example.com/resources/${resourceId}`,
    method: 'GET',
}, function (err, res) {
    pm.test("Resource has been deleted", function () {
        pm.expect(res).to.have.status(404);
    });
});
```

7. **Pagination:** If your API supports pagination, you might want to write tests that check this functionality.

```js
let pageSize = 1;

let jsonData = pm.response.json();

// Get the current page number from the request URL
let currentPageNumber = parseInt(pm.request.url.query.find(param => param.key === 'page').value);

// Test to check if the response has the expected number of items
pm.test("Response has expected number of items", function () {
    pm.expect(jsonData.length).to.eql(pageSize);
});

// Test to check if the response includes a 'next' link
pm.test("Response includes 'next' link", function () {
    pm.expect(pm.response.headers.has('Link')).to.be.true;
    pm.expect(pm.response.headers.get('Link')).to.include('rel="next"');
});

// Test to check if the 'next' link points to the next page
pm.test("'next' link points to the next page", function () {
    let linkHeader = pm.response.headers.get('Link');
    let nextLink = linkHeader.split(', ').find(link => link.endsWith('rel="next"'));
    // Extract the page number from the 'next' link
    // 'page=' is a literal string that the regex will try to match exactly

    // (\d+) is a group that matches one or more digit characters
    // \d is a shorthand character class that matches any digit (equivalent to [0-9])
    // + is a quantifier that means 'one or more'
    let nextPageNumber = nextLink.match(/page=(\d+)/)[1];
    pm.expect(parseInt(nextPageNumber)).to.eql(currentPageNumber + 1);
});

// Test to check if the response includes a 'prev' link
pm.test("Response includes 'prev' link", function () {
    pm.expect(pm.response.headers.has('Link')).to.be.true;
    pm.expect(pm.response.headers.get('Link')).to.include('rel="prev"');
});

// Test to check if the 'prev' link points to the previous page
pm.test("'prev' link points to the previous page", function () {
    let linkHeader = pm.response.headers.get('Link');
    let prevLink = linkHeader.split(', ').find(link => link.endsWith('rel="prev"'));
    let prevPageNumber = prevLink.match(/page=(\d+)/)[1];
    pm.expect(parseInt(prevPageNumber)).to.eql(currentPageNumber - 1);
});

// Test to check if the total count of items is provided
pm.test("Response includes total count of items", function () {
    pm.expect(pm.response.headers.has('X-Total-Count')).to.be.true;
    let totalCount = parseInt(pm.response.headers.get('X-Total-Count'));
    pm.expect(totalCount).to.be.above(0);
});

// Test to check if the response has the correct page size
pm.test("Response has correct page size", function () {
    pm.expect(jsonData.length).to.eql(pageSize);
});

// Test to check if the response has the correct page number
pm.test("Response has correct page number", function () {
    pm.expect(currentPageNumber).to.eql(3);
});
```

8. **Sorting:** If your API supports sorting, you would want to write tests to check these features.

```js
let jsonData = pm.response.json();

// Check if the items in the response are sorted by the expected field
pm.test("Items are sorted by expected field", function () {
    let sorted = [...jsonData].sort((a, b) => (a[sortField] > b[sortField]) ? 1 : -1);
    pm.expect(jsonData).to.eql(sorted);
});
```

<!-- Unit test -->
```js
pm.sendRequest({
    url: `${path}/Account/v1/User/${resourceId}`,
    method: 'GET',
    header: {
        'Authorization': `Bearer ${token}`
    }
}, function (err, res) {
    pm.test("Resource has been deleted", function () {
        pm.expect(err).to.be.null;
        pm.expect(res.status).to.eql(404); // Assuming a 404 status indicates deletion
    });
});
```

<!-- Integration Test -->
```js
pm.sendRequest({
    url: `${path}/Account/v1/User`,
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({ username: 'testuser', password: 'password123' })
    }
}, function (err, res) {
    pm.test("User created successfully", function () {
        pm.expect(res.status).to.eql(201);
        const userId = res.json().id;

        // Get the created user
        pm.sendRequest({
            url: `${path}/Account/v1/User/${userId}`,
            method: 'GET',
            header: {
                'Authorization': `Bearer ${token}`
            }
        }, function (err, res) {
            pm.test("User retrieved successfully", function () {
                pm.expect(res.status).to.eql(200);
                pm.expect(res.json().username).to.eql('testuser');
            });
        });
    });
});
```

<!-- Functional Test -->
```js
pm.sendRequest({
    url: `${path}/Account/v1/Login`,
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({ username: 'testuser', password: 'password123' })
    }
}, function (err, res) {
    pm.test("Login successful", function () {
        pm.expect(res.status).to.eql(200);
        const token = res.json().token;

        // Use the token to access a protected resource
        pm.sendRequest({
            url: `${path}/Account/v1/ProtectedResource`,
            method: 'GET',
            header: {
                'Authorization': `Bearer ${token}`
            }
        }, function (err, res) {
            pm.test("Access to protected resource successful", function () {
                pm.expect(res.status).to.eql(200);
            });
        });
    });
});
```