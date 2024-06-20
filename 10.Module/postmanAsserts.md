1. **Correctness:** Does the endpoint return the expected data when given valid input.

```js
pm.test("Check if endpoint returns expected data", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql('Testas');
    pm.expect(jsonData.age).to.eql(30);
    pm.expect(jsonData.email).to.eql('Testas');
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
let schema = {
    "type": "object",
    "properties": {
        "id": { "type": "number" },
        "name": { "type": "string" },
        "type": { "type": "string" },
        "available": { "type": "boolean" }
    },
    "required": ["id", "name", "type", "available"]
};

let jsonData = pm.response.json();

// Define a function to validate a data object against the schema
function validateSchema(data, schema) {
    // Loop over each key in the required array of the schema
    for (let key of schema.required) {
        // Check if the key exists in the data object and if the type of the value matches the expected 
        if (!data.hasOwnProperty(key) || typeof data[key] !== schema.properties[key].type) {
            // If any key is missing or has a mismatched type, return false
            return false;
        }
    }
    // If all keys are present and have the correct types, return true
    return true;
}

pm.test("Schema is valid for all items", function() {
    // Check if every item in jsonData passes the validateSchema function
    let allValid = jsonData.every(item => validateSchema(item, schema));
    // Assert that allValid is true. If allValid is true, it means that every item in jsonData matches the schema, so the test passes. If allValid is false, it means that at least one item in jsonData does not match the schema, so the test fails.
    pm.expect(allValid).to.be.true;
});
```

4. **Query Parameters and Path Parameters:** Does the API correctly handle query and path parameters.

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

5. **Response Structure:** Does the structure of the response match what you expect.

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

6. **Response Headers:** Does the response include the expected headers.

```js
pm.test("Response includes expected headers", function () {
    // Check if the 'Content-Type' header is present and has the expected value
    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

    // Check if the 'Authorization' header is present
    pm.expect(pm.response.headers.has('Authorization')).to.be.true;
});
```

7. **Data Consistency:** Write tests that check the consistency of the data.

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

8. **Pagination:** If your API supports pagination, you might want to write tests that check this functionality.

```js
let pageSize = 10;

// Check if the response is an array
pm.test("Response is an array", function () {
    pm.expect(jsonData).to.be.an('array');
});

// Check if the response has the expected number of items
pm.test("Response has expected number of items", function () {
    pm.expect(jsonData.length).to.eql(pageSize);
});

// Check if the response includes a 'next' link
pm.test("Response includes 'next' link", function () {
    pm.expect(pm.response.headers.has('Link')).to.be.true;
    pm.expect(pm.response.headers.get('Link')).to.include('rel="next"');
});
```

9. **Sorting and Filtering:** If your API supports sorting or filtering of resources, you would want to write tests to check these features.

```js
let sortField = 'name';
let filterValue = 'Test';

let jsonData = pm.response.json();

// Filter
pm.test("First item has expected filter value", function () {
    pm.expect(jsonData[0].state).to.eql(filterValue);
});

// Check if the items in the response are sorted by the expected field
pm.test("Items are sorted by expected field", function () {
    let sorted = [...jsonData].sort((a, b) => (a[sortField] > b[sortField]) ? 1 : -1);
    pm.expect(jsonData).to.eql(sorted);
});

// OR
pm.test("Items are sorted by expected fields", function () {
    let sorted = [...jsonData].sort((a, b) => {
        for (let field of sortField) {
            if (a[field] > b[field]) {
                return 1;
            } else if (a[field] < b[field]) {
                return -1;
            }
        }
        return 0;
    });
    pm.expect(jsonData).to.eql(sorted);
});
```
