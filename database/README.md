# Table of Contents

- [Relational Databases](#relational-databases)
- [NoSQL Databases](#nosql-databases)
  - [Document Databases](#document-databases)
  - [Key-Value Database](#key-value-database)

## Relational Databases

**Explanation:**

Relational databases are based on the relational model of data, where data is organized into tables with rows and columns. They use structured query language (SQL) for defining, manipulating, and retrieving data. Relational databases establish relationships between tables using primary and foreign keys, enabling efficient data retrieval and data integrity enforcement.

**Key Concepts:**

- Structured data model based on tables, rows, and columns.

- Strong data consistency and ACID (Atomicity, Consistency, Isolation, Durability) properties.

**Example:**

- Business applications with well-defined and structured data requirements.

- Financial systems for storing transactional data.

- Data-driven applications requiring complex queries and aggregations.

- Applications requiring strong data consistency and integrity.

## NoSQL Databases

### Document Databases

**Explanation:**

Document databases are part of the NoSQL family and store data in flexible, semi-structured documents (JSON, XML). They provide high flexibility by allowing different documents within the same collection to have different structures. Document databases offer a schemaless design, making it easier to handle evolving data schemas and adapt to changing requirements.

**Key Concepts:**

- Flexible data model using documents (JSON, XML) with key-value pairs.

- No fixed schema, allowing documents within a collection to have different structures.

- Queries are typically performed using document-based query languages or indexing mechanisms.

**Example:**

- Content management systems with dynamic and evolving data structures.

- Applications dealing with semi-structured or unstructured data.

- Personalization and recommendation systems.

- Collaborative environments and social networks.

### Key-Value Database

**Explanation:**

Key-value databases are another type of NoSQL database that stores data as a collection of key-value pairs. They provide a simple and efficient way to store and retrieve data using a unique identifier (key). Key-value databases excel at handling high-volume read and write operations and are often used as caching layers or for storing metadata.

**Explanation:**

- Data model based on simple key-value pairs.

- High scalability and performance for read and write operations.

- Minimal query functionality (usually limited to key-based retrieval).

**Example:**

- Session management and user profiles in web applications.

- Caching layers for improving performance.

- Storing metadata, configurations, and settings.

- Message queues and distributed systems.
