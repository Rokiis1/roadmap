**Decision Table: Discount Calculation**

In this example, we are determining the discount percentage for customers based on their membership status and total purchase amount. The conditions (inputs) are "Membership Status" and "Total Purchase Amount," and the action (output) is "Discount Percentage."

+------------------+----------------------+-------------------+
| Membership Level | Total Purchase Amount | Discount Applied |
+------------------+----------------------+-------------------+
| Silver           | $0-49                | No Discount       |
| Silver           | $50-99               | 5% Discount       |
| Silver           | $100-199             | 10% Discount      |
| Silver           | $200+                | 15% Discount      |
| Gold             | $0-49                | 2% Discount       |
| Gold             | $50-99               | 7% Discount       |
| Gold             | $100-199             | 12% Discount      |
| Gold             | $200+                | 17% Discount      |
| Platinum         | $0-49                | 5% Discount       |
| Platinum         | $50-99               | 10% Discount      |
| Platinum         | $100-199             | 15% Discount      |
| Platinum         | $200+                | 20% Discount      |
+------------------+----------------------+-------------------+

| Test Case | Membership Level | Total Purchase Amount | Expected Discount Applied |
|-----------|------------------|------------------------|---------------------------|
| Test Case 1 | Silver | $75 | 5% Discount |
| Test Case 2 | Gold | $150 | 12% Discount |
| Test Case 3 | Platinum | $25 | No Discount |
| Test Case 4 | Gold | $225 | 17% Discount |
