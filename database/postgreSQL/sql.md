<!-- # Table of Contents

- [Data setup, explanation & basic queries](#basic)
- [Adding calculated columns in SELECT](#select)
- [Our first WHERE clause](#where-clauses)
- [Ordering query results with ORDER BY](#order-by)
- [More Where clause examples](#where-cluase-more)
- [Between conditions](#between-conditions)
- [Working with Dates](#dates)
- [Using other tables](#tables)
- [IN clause](#in-clauses)
- [Pattern matching in SQL](#patterns)
- [CASE operator and branching logic](#case-operator)
- [JOINS](#joins)
- [LEFT Join vs. RIGHT Join](#left-and-right)
- [More Join examples](#more-joins-examples)
- [Adding conditions to Joins](#conditions-joins)
- [GROUP BY and creating reports with SQL](#group-by-creating-reports-sql) -->

# SQL

1. **SELECT:** Used to select data from a database. The data returned is stored in a result table, called the result-set.

```js

const res = await client.query('SELECT * FROM table_name');

```

2. **FROM:** Used with SELECT to specify the table from which to retrieve the data.

3. **WHERE:** Used to filter records. It's used to extract only those records that fulfill a specified condition.

```js

const res = await client.query('SELECT * FROM table_name WHERE condition');

```

4. **INSERT INTO:** Used to insert new records in a table.

```js

await client.query('INSERT INTO table_name (column1, column2) VALUES (value1, value2)');

```

5. **UPDATE:** Used to modify the existing records in a table.

```js

await client.query('UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition');

```

6. **DELETE:** Used to delete existing records in a table.

```js

await client.query('DELETE FROM table_name WHERE condition');

```

7. **JOIN:** Used to combine rows from two or more tables, based on a related column between them. There are different types of joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.

  - **INNER JOIN:** Returns records that have matching values in both tables.

  ```sql

  SELECT Orders.OrderID, Customers.CustomerName
  FROM Orders
  INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID

  ```

  - **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table. If there is no match, the result is NULL on the right side.
  
  ```sql

  SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

  ```

  - **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table. If there is no match, the result is NULL on the left side.

  ```sql

  SELECT Orders.OrderID, Customers.CustomerName
  FROM Orders
  RIGHT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

  ```

  - **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table. If there is no match, the result is NULL on both sides.

  ```sql

  SELECT Customers.CustomerName, Orders.OrderID
  FROM Customers
  FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

  ```

```js

const res = await client.query('SELECT * FROM table1 INNER JOIN table2 ON table1.matching_column = table2.matching_column');

const query = `
  SELECT users.name, products.product_name
  FROM orders
  INNER JOIN users ON orders.user_id = users.id
  INNER JOIN products ON orders.product_id = products.id
`;

const res = await client.query(query);

```

8. **GROUP BY:** Often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.

```js

const res = await client.query('SELECT COUNT(column1), column2 FROM table_name GROUP BY column2');

```

9. **ORDER BY:** Used to sort the result-set in ascending or descending order.

```js

const res = await client.query('SELECT * FROM table_name ORDER BY column1 DESC');

```

10. **LIMIT:** Used to specify the number of records to return in the result set.

```js

const res = await client.query('SELECT * FROM table_name LIMIT 3');

```

11. **DISTINCT:** Used with SELECT to eliminate all the duplicate records and fetching only unique records.

```js

const res = await client.query('SELECT DISTINCT column1 FROM table_name');

```

12. **AS:** Used to rename a column or table with an alias.

```js

const res = await client.query('SELECT column1 AS alias_name FROM table_name');

```

13. **LIKE:** Used in a WHERE clause to search for a specified pattern in a column.

```js

const res = await client.query("SELECT * FROM table_name WHERE column1 LIKE 'a%'");

```

14. **IN:** Used to specify multiple values in a WHERE clause.

```js

const res = await client.query('SELECT * FROM table_name WHERE column1 IN (value1, value2)');

```

15. **BETWEEN:** Used in WHERE clause to filter the result within a range. The values can be numbers, text, or dates.

```js

const res = await client.query('SELECT * FROM table_name WHERE column1 BETWEEN value1 AND value2');

```

16. **COUNT:** An aggregate function that returns the number of rows that match a specified condition.

```js

const res = await client.query('SELECT COUNT(column1) FROM table_name');

```

17. **HAVING:** Used instead of WHERE with aggregate functions.

```js

const res = await client.query('SELECT column1, COUNT(column2) FROM table_name GROUP BY column1 HAVING COUNT(column2) > value');

```