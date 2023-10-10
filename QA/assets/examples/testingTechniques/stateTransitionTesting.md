Consider an Automated Teller Machine (ATM) as an example. The ATM can be in various states, such as "Card Inserted," "PIN Entered," "Access Granted," and "Access Denied." The transitions between these states are triggered by events like "Card Insertion," "PIN Entry," and "Access Attempts."

# Example 1

```
Start
|
V
Card Inserted --> PIN Entered --> Access Granted
|               |
|               |
|               V
|               Access Denied --> Card Retained
|
+-------------- Card Ejected
```

In this diagram:
- "Start" represents the initial state.
- "Card Inserted" is a state triggered by the event of inserting a card.
- "PIN Entered" represents the state when a correct PIN is entered.
- "Access Granted" represents successful access to the account.
- "Access Denied" represents failed attempts to access.
- "Card Retained" is the state where the ATM retains the card after multiple failed attempts.
- "Card Ejected" is the state when the card is ejected by the user.

Test cases can be derived from different paths through this diagram to validate the ATM's behavior under various scenarios.


| Test Case | Initial State | Event(s) Triggered | Expected Final State | Expected Outcome |
|-----------|---------------|---------------------|----------------------|------------------|
| Test Case 1 | Start | Card Insertion | Card Inserted | User's card is successfully inserted. |
| Test Case 2 | Start | Card Insertion, Invalid PIN Entry | Access Denied | User's card is retained due to multiple failed PIN attempts. |
| Test Case 3 | Start | Card Insertion, Valid PIN Entry | Access Granted | User successfully enters a valid PIN and gains access to their account. |
| Test Case 4 | Start | Card Insertion, Invalid PIN Entry, Card Ejection | Card Ejected | User ejects the card after multiple failed PIN attempts. |
