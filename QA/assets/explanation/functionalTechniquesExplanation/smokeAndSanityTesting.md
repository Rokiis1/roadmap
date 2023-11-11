| Aspect                   | Smoke Testing                                           | Sanity Testing                                          |
|--------------------------|--------------------------------------------------------|---------------------------------------------------------|
| **Definition**           | High-level, shallow, non-exhaustive testing            | Narrow and deep testing                                  |
| **Objective**           | Check essential and critical functionalities             | Verify specific changes, features, or bug fixes         |
| **Scope**                | Covers the entire application                           | Focuses on specific functionalities or modules           |
| **Automation**           | Often automated and executed frequently                 | Typically manual and not frequently automated           |
| **Documentation**        | Results may be documented for traceability             | Extensive documentation not required                    |
| **Testing Responsibility**| Developers and testers                                | Primarily the responsibility of testers                |
| **Testing Occurrence**   | After a new build is created                            | After Smoke Testing, as the build becomes more stable    |
| **Stability**            | Conducted when the build may not be entirely stable    | Performed when the build is relatively stable           |
| **Verification**         | Validates if the build is acceptable for further testing | Ensures recent changes and fixes are working correctly  |
| **Purpose**              | Quickly identify glaring issues and prevent wasted effort | Verify that specific changes have not introduced new issues |
