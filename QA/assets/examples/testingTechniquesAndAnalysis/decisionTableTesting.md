
```plaintext
+-----------------------------------------------+---------------+
| Condition        | Age is < 18 | Is Member    |   Discount    |
+-----------------------------------------------+---------------+
| Eligibility      | N           | N            | No Discount   |
| Eligibility      | N           | Y            | No Discount   |
| Eligibility      | Y           | N            | No Discount   |
| Eligibility      | Y           | Y            | 10% Discount  |
+-----------------------------------------------+---------------+
```

**Explanation:**

- **Conditions:**
  - **Age is < 18:** Checks if the person is under 18 years old.
  - **Is Member:** Checks if the person is a member.

- **Eligibility:**
  - Specifies whether the person is eligible for a discount based on the conditions.

**In this Decision Table:**

- If the person is not under 18 and is not a member, there is no discount.
- If the person is not under 18 but is a member, there is no discount.
- If the person is under 18 but not a member, there is no discount.
- If the person is both under 18 and a member, they qualify for a 10% discount.
