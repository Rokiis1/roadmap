# Table of Contents

- [Connecting](#connecting)
- [Queries](#queries)
- [Transactions](#transactions)

## Connecting

**Explanation:**

Connecting to a PostgreSQL database is the first step in interacting with it. In Node.js, the `node-postgres` library provides two main ways to connect: using `pg.Client` for single connections and `pg.Pool` for connection pooling. Connection pooling is generally recommended for applications that handle multiple concurrent requests.

**Key Concepts:**

- **Connection String:** A string that contains the necessary information to connect to the database (user, host, database, password, port).
- **pg.Client:** A class for creating a single connection to the database, used for one-off queries, requiring manual management of the connection lifecycle (connect and disconnect).
- **pg.Pool:**  A class for managing a pool of connections that can be reused for multiple queries, reducing the **overhead - The additional time, resources, and computational effort required to establish and manage connections to the database, including connection establishment time, resource consumption, and latency.** of establishing new connections for each query.

**Syntax:**

    ```js

    import { Pool } from 'pg';
    import dotenv from 'dotenv';

    // Load environment variables from .env file
    dotenv.config();

    // Configuration for the PostgreSQL pool
    const pool = new Pool({
        user: process.env.PGUSER,                   // Database user
        host: process.env.PGHOST,                   // Database host
        database: process.env.PGDATABASE,           // Database name
        password: process.env.PGPASSWORD,           // Database password
        port: process.env.PGPORT,                   // Database port
        max: 20,                                    // Maximum number of clients in the pool
        idleTimeoutMillis: 30000,                   // How long a client is allowed to remain idle before being closed (in milliseconds)
        connectionTimeoutMillis: 2000,              // How long to wait for a connection to be established before timing out (in milliseconds)
    });

    ```

**Example:**

    *pg.Client*

    ```js
    // Function to execute a one-off query
    async function executeQuery() {
    try {
        // Connect to the database (manual connection management)
        await client.connect();
        console.log('Connected to the database');

        // Execute a one-off query to fetch the current time
        const res = await client.query('SELECT NOW()');
        console.log('Current Time:', res.rows[0]);

    } catch (err) {
        // Handle any errors that occur during the query
        console.error('Query error', err.stack);
    } finally {
        // Disconnect from the database (manual disconnection management)
        await client.end();
        console.log('Disconnected from the database');
     }
    }

    executeQuery();
    ```

    *pg.Pool*

    ```js

    async function executeQueries() {
        const client = await pool.connect();
     try {
        console.log('Connected to the database');

        // Execute the first query to fetch the current time
        const res1 = await client.query('SELECT NOW()');
        console.log('Current Time:', res1.rows[0]);

        // Execute the second query to fetch some data from a table
        const res2 = await client.query('SELECT * FROM yourTable LIMIT 5');
        console.log('Table Data:', res2.rows);

    } catch (err) {
        // Handle any errors that occur during the queries
        console.error('Query error', err.stack);
    } finally {
        // Release the client back to the pool
        client.release();
        console.log('Disconnected from the database');
     }
    }

    executeQueries(); 
    ```

## Queries

**Explanation:**

Queries are the primary means of interacting with a PostgreSQL database. They allow you to retrieve, insert, update, and delete data. In the context of `node-postgres`, queries are executed using the `query` method provided by `pg.Client` or `pg.Pool`.

**Key Concepts:**

- **SQL (Structured Query Language):** The language used to perform operations on the database.
- **Parameterized Queries:** A way to safely include user input in SQL queries to prevent SQL injection attacks.
- **Query Results:** The data returned by the database after executing a query.

**Syntax:**

    ```js

    const client = await pool.connect();
    try {
        const res = await client.query('SQL_QUERY', [parameters]);
    } finally {
        client.release();   
    }

    ```

**Example:**

    *Select Query:*

    ```js
    // Get all users
    const res = await client.query('SELECT * FROM users');
    // Get by id
    const res = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
    // Search not case-sensitive
    const res = await client.query('SELECT * FROM users WHERE name ILIKE $1', [`%${name}%`]);
    // Search case-sensitive
    const res = await client.query('SELECT * FROM users WHERE name ILIKE $1', [`%${name}%`]);
    // Sorting
    const res = await client.query(`SELECT * FROM users ORDER BY name ${sortOrder === 'asc' ? 'ASC' : 'DESC'}`);
    // Filter
    const res = await client.query('SELECT * FROM students WHERE course_name = $1', [courseName]);
    // Get users with specific roles
    const res = await client.query('SELECT * FROM users WHERE role IN ($1, $2)', ['admin', 'teacher']);
    // Get users with IDs between a range
    const res = await client.query('SELECT * FROM users WHERE id BETWEEN $1 AND $2', [1, 100]);
    // Get users whose names start with 'A'
    const res = await client.query('SELECT * FROM users WHERE name LIKE $1', ['A%']);
    // Sort
    const res = await client.query('SELECT * FROM users LIMIT $1 OFFSET $2', [limit, offset]);
    // Aggregation COUNT, SUM, AVG, MIN, and MAX
    const res = await client.query('SELECT COUNT(*) FROM users');
    ```

    *Insert Query:*

    ```js
    // Basic Insert
    const res = await client.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email]);
    // Insert with Timestamp
    const res = await client.query('INSERT INTO users (name, email, created_at) VALUES ($1, $2, NOW()) RETURNING id', [name, email]);
    ```

    *Update Query:*

    ```js
    const res = await client.query('UPDATE users SET email = $1 WHERE id = $2', [email, userId]);
    ```

    *Delete Query*

    ```js
    const res = await client.query('DELETE FROM users WHERE id = $1', [userId]);
    ```

   *Inner Join - Returns records that have matching values in both tables.*

    ```js
    const res = await client.query(`
        SELECT students.student_id, users.first_name, users.last_name
        FROM students
        INNER JOIN users ON students.user_id = users.user_id
    `);
    ```

    *Left (Outer) Join - Returns all records from the left table, and the matched records from the right table.*

    ```js
    const res = await client.query(`
        SELECT students.student_id, users.first_name, users.last_name
        FROM students
        LEFT JOIN users ON students.user_id = users.user_id
    `);
    ```

    *Right (Outer) Join - Returns all records from the right table, and the matched records from the left table.*

    ```js
    const res = await client.query(`
        SELECT students.student_id, users.first_name, users.last_name
        FROM students
        RIGHT JOIN users ON students.user_id = users.user_id
    `);
    ```

    *Full (Outer) Join - Returns all records when there is a match in either left or right table.*

    ```js
    const res = await client.query(`
        SELECT students.student_id, users.first_name, users.last_name
        FROM students
        FULL JOIN users ON students.user_id = users.user_id
    `);
    ```

    *Multiple Joins*

    ```js
    const res = await client.query(`
    SELECT 
        students.student_id, 
        students.user_id, 
        users.first_name, 
        users.last_name, 
        courses.course_name
    FROM students
    LEFT JOIN users ON students.user_id = users.user_id
    INNER JOIN enrollments ON students.student_id = enrollments.student_id
    RIGHT JOIN courses ON enrollments.course_id = courses.course_id
    `);
    ```

## Transactions

**Explanation:**

A transaction in SQL is a sequence of one or more SQL statements that are executed as a single unit of work. Transactions ensure that a series of operations are completed successfully and consistently. If any operation within the transaction fails, the entire transaction can be rolled back, leaving the database in its previous state.

**Key Concepts:**

1. **Atomicity:** Ensures that all operations within a transaction are completed successfully. If any operation fails, the entire transaction is rolled back.
2. **Consistency:** Ensures that a transaction brings the database from one valid state to another.
3. **Isolation:** Ensures that the operations within a transaction are isolated from other transactions until the transaction is complete.
4. **Durability:** Ensures that once a transaction is committed, the changes are permanent, even in the event of a system failure.

**Syntax:**

    ```js
    import pool from './db.mjs';

    async function performTransaction() {
        const client = await pool.connect();

    try {
        // Begin transaction
        await client.query('BEGIN');

        // Example operation 1: Insert a new user
        const insertUserQuery = 'INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING user_id';
        const insertUserValues = ['John', 'Doe', 'john.doe@example.com'];
        const res1 = await client.query(insertUserQuery, insertUserValues);
        const userId = res1.rows[0].user_id;

        // Example operation 2: Insert a new student linked to the user
        const insertStudentQuery = 'INSERT INTO students (user_id, enrollment_date) VALUES ($1, $2)';
        const insertStudentValues = [userId, '2023-10-01'];
        await client.query(insertStudentQuery, insertStudentValues);

        // Commit transaction
        await client.query('COMMIT');
        console.log('Transaction completed successfully.');
    } catch (error) {
        // Rollback transaction in case of error
        await client.query('ROLLBACK');
        console.error('Transaction failed. Rolling back.', error);
    } finally {
        client.release();
    }
    }

    export default performTransaction;
    ```
