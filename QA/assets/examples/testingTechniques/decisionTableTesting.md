**Decision Table: Discount Calculation**

In this example, we are determining the discount percentage for customers based on their membership status and total purchase amount. The conditions (inputs) are "Membership Status" and "Total Purchase Amount," and the action (output) is "Discount Percentage."

| Condition: Membership Status | Condition: Total Purchase Amount | Action: Discount Percentage | Description                                      |
|-----------------------------|---------------------------------|-----------------------------|--------------------------------------------------|
| Regular                     | Less than $50                    | 0%                          | Regular customers with small purchases get no discount.  |
| Regular                     | $50 to $100                      | 5%                          | Regular customers with moderate purchases get a 5% discount.  |
| Regular                     | More than $100                  | 10%                         | Regular customers with large purchases get a 10% discount.  |
| Premium                     | Less than $50                    | 2%                          | Premium customers with small purchases get a 2% discount.  |
| Premium                     | $50 to $100                      | 8%                          | Premium customers with moderate purchases get an 8% discount.  |
| Premium                     | More than $100                  | 15%                         | Premium customers with large purchases get a 15% discount.  |
| No Membership               | Less than $50                    | 0%                          | Customers without a membership with small purchases get no discount.  |
| No Membership               | $50 to $100                      | 3%                          | Customers without a membership with moderate purchases get a 3% discount.  |
| No Membership               | More than $100                  | 7%                          | Customers without a membership with large purchases get a 7% discount.  |

In this decision table:

- **Conditions**: Membership Status has three possible values (Regular, Premium, No Membership), and Total Purchase Amount is divided into three ranges.
  
- **Action**: The action is the Discount Percentage, which is the output of the decision based on the combination of conditions.

- **Description**: A description is provided for each combination to explain the discount calculation logic.

This decision table can serve as a reference for designing test cases and ensuring that various combinations of conditions are tested to verify the correct calculation of discount percentages in the e-commerce website's pricing system.

In this example, there are eight rules representing different combinations of age ranges and insurance classes. Each rule specifies the premium and excess amount based on these conditions. These rules can be used as test cases to validate the software's behavior.