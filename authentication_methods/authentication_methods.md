<!-- markdownlint-disable MD033 -->
# Table of Contents of Authentication Methods

- [Token Based Auth](#token-based-auth)
- [JSON Web Token (JWT)](#json-web-token-jwt)

## Token Based Auth

**Explanation:**

Token-based authentication is a method where the client authenticates by providing a token—typically a secure string such as a JSON Web Token (JWT)—after initial verification of credentials. Subsequent requests include the token in the header, allowing the server to verify the client's identity without needing to resend credentials.

<details>
    <summary>Overview:</summary>

- **How It Works:**
    1. The client sends credentials (username and password) to an authentication endpoint.
    2. The server verifies the credentials and, if valid, issues a token (often a JWT).
    3. The client stores this token and includes it in the `Authorization` header (`Authorization: Bearer <token>`) for subsequent requests.

- **Security Benefits:**
  - Tokens often include expiration times and can be revoked, reducing the risk of long-term exposure.  
  - Since tokens are signed, the server can verify they haven't been tampered with.

- **Common Token Types:**
  - **JSON Web Tokens (JWTs):** A widely used compact token format that includes claims about the user and is signed using a secret or public/private key pair.
  - **Opaque Tokens:** Tokens that do not expose internal information; the server stores details and validates the token.

- **Usage Scenarios:**
  - Mobile applications and single-page applications (SPAs) frequently use token-based auth to manage session state securely.
  - Token-based authentication is ideal for stateless server architectures, such as RESTful APIs.

</details>

## JSON Web Token (JWT)

**Explanation:**

JSON Web Token (JWT) is a compact, URL-safe standard used to securely transmit information between parties as a JSON object. It is widely used for authentication and authorization in web applications. A JWT typically consists of three parts: a header, a payload that includes the claims, and a signature to verify its integrity.

<details>
    <summary>Overview:</summary>

- **Header:** Contains metadata about the token, such as the type (JWT) and the signing algorithm (HMAC SHA256).

- **Payload (Claims):** Carries the actual data (claims).
  - **Registered Claims:** Predefined claims like `iss` (issuer), `exp` (expiration), and `sub` (subject).
  - **Public Claims:** Custom claims that can be defined by those using JWTs.
  - **Private Claims:** Custom claims agreed upon between the parties involved.

- **Signature:** Created by combining the encoded header and payload, then signing it with a secret key or a public/private key pair. This ensures the token's integrity and authenticity.

- **Usage:**
  - After a user logs in, the server issues a JWT to the client.
  - The client includes the token in the `Authorization` header of subsequent requests (`Authorization: Bearer <token>`).
  - The server validates the token to verify the user’s identity and authorize access to protected resources

</details>
