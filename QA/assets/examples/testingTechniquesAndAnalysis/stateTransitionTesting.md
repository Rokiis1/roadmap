
```plaintext
+------------+-------------+--------------+
| Current    | Event       | Next         |
| State      |             | State        |
+------------+-------------+--------------+
| Logged Out | Login       | Dashboard    |
| Logged Out | Forgot PW   | Reset PW     |
| Dashboard  | Logout      | Logged Out   |
| Reset PW   | Submit Form | Password Set |
| Password   | Login       | Dashboard    |
| Set        | Logout      | Logged Out   |
+------------+-------------+--------------+
```

**Explanation:**

- **Current State:** The current state of the user's authentication status.
- **Event:** The event or action that occurs.
- **Next State:** The state the system transitions to after the event occurs.

**Example:**

1. The user starts in the "Logged Out" state.
2. If the user logs in successfully, it transitions to the "Dashboard" state.
3. If the user forgets their password, it transitions to the "Reset PW" state.
4. From the "Dashboard," if the user logs out, it transitions back to the "Logged Out" state.
5. If the user submits the password reset form, it transitions to the "Password Set" state.
6. If the user logs in with a newly set password, it transitions to the "Dashboard" state.
7. If the user logs out after setting the password, it goes back to the "Logged Out" state.
