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

const validate = ajv.compile(schema);
const valid = validate(jsonData);

if (!valid) {
    console.log(validate.errors);
}

pm.test("Response schema is valid", function () {
    pm.expect(valid).to.be.true;
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
let pageSize = 10;

// Set the expected page size to 1
let pageSize = 1;

// Parse the response body to JSON
let jsonData = pm.response.json();

// Test to check if the response is an array
pm.test("Response is an array", function () {
    // Expect that the parsed JSON data is an array
    pm.expect(jsonData).to.be.an('array');
});

// Test to check if the response has the expected number of items
pm.test("Response has expected number of items", function () {
    // Expect that the length of the array is equal to the page size
    pm.expect(jsonData.length).to.eql(pageSize);
});

// Test to check if the response includes a 'next' link
pm.test("Response includes 'next' link", function () {
    // Expect that the response headers include a 'Link' header
    pm.expect(pm.response.headers.has('Link')).to.be.true;
    // Expect that the 'Link' header includes 'rel="next"'
    pm.expect(pm.response.headers.get('Link')).to.include('rel="next"');
});

// Test to check if the 'next' link points to the next page
pm.test("'next' link points to the next page", function () {
    // Get the 'Link' header from the response headers
    let linkHeader = pm.response.headers.get('Link');
    // Find the 'next' link in the 'Link' header
    let nextLink = linkHeader.split(', ').find(link => link.endsWith('rel="next"'));
    // Extract the page number from the 'next' link
    // 'page=' is a literal string that the regex will try to match exactly

    // (\d+) is a group that matches one or more digit characters
    // \d is a shorthand character class that matches any digit (equivalent to [0-9])
    // + is a quantifier that means 'one or more'
    let nextPageNumber = nextLink.match(/page=(\d+)/)[1];
    // Expect that the page number of the 'next' link is 2
    pm.expect(parseInt(nextPageNumber)).to.eql(2);
});
```

8. **Sorting:** If your API supports sorting, you would want to write tests to check these features.

```js
let sortField = 'name';
let filterValue = 'Test';

let jsonData = pm.response.json();

// Check if the items in the response are sorted by the expected field
pm.test("Items are sorted by expected field", function () {
    let sorted = [...jsonData].sort((a, b) => (a[sortField] > b[sortField]) ? 1 : -1);
    pm.expect(jsonData).to.eql(sorted);
});
```
