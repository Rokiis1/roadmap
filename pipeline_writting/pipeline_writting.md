<!-- markdownlint-disable MD033 -->
# Content of Table: Pipeline Writing

- [Continuous Practices](#continuous-practices)

## Continuous Practices

**Explanation:**

Mean your software is always being improved, tested, and released in small, safe steps - like a factory assembly line that never stops. They automate the routine work but still need humans to make important decisions and handle unexpected problems.

<details>
    <summary>Overview:</summary>

1. **Automates the routine:** Machines handle repetitive tasks.

    <details>
       <summary>Overview:</summary>

    - **Continuous Integration (CI):** Catch problems immediately when developers commit code, before merging to the main branch.

        - **Stages:** Code -> Build -> Test (early phases). Focus on developer workflow validation

        <details>
           <summary>Overview:</summary>

        1. **Code Sniffing:**

            - Automatic code quality checks (linting, style rules)

        2. **Quick Tests:**

            - Isolated tests (testing a single function)

        3. **Build Reality Check:**

            - Confirms code actually compiles/runs

        4. **Basic Connection Tests**

            - Lightweight integration checks (not full systems)

        5. **What CI Typically Doesn’t Include:**

            - Slow tests (end-to-end, performance)

            - Staging environment deployments

            - Manual approval steps

        6. **Why This Works:** Prevents "it works on my machine"

        </details>

        <details>
           <summary>Examples:</summary>

        1. **Example 1:**

            ```text

            CI is like a spell-checker that runs every time you save a document - it catches typos immediately, but doesn't proofread the entire book.

            ```

        </details>

    - **Continuous Delivery (CD):** Ensure every code change is production-ready (even if manually approved).

        - **Stages:** Release -> Deploy (staging). Focus on pre-production certification

        <details>
           <summary>Overview:</summary>

        1. **More detailed testing:**

            - End-to-end tests (full user flows)

            - Performance testing

            - Security scans (DAST)

        2. **Environment Deployment:**

            - Auto-deploys to staging (mirror of production)

        3. **Artifact Promotion:**

            - Moves builds from "tested" to "release-ready" repos

        4. **Manual Approval Gate:**

            - One-click production deploy after validation

        5. **What CD Doesn’t Do:**

            - Full auto-deploy to production (that’s Continuous Deployment)

            - Developer-facing feedback (CI handles that)

        6. **Why This Matters:**

            - **Safe Staging:** Catches the 30% of issues CI misses

            - **Zero-Day Releases:** Business can deploy any time

            - **Audit Trail:** Compliance-friendly paper trail

        </details>

        <details>
           <summary>Examples:</summary>

        1. **Example 1:**

            ```text

            CD is the editor’s review before printing.

            ```

        </details>

    - **Continuous Deployment:** Every passing code change automatically ships to production (no manual gates).

        - **Stages:** Deploy (production) -> Operate. Focus on hands-free production releases.

        <details>
           <summary>Overview:</summary>

        1. **Production-Grade Testing:**

            - Canary tests

            - Synthetic monitoring

        2. **Infrastructure Preperation:**

            - Auto-scaling pre-deploy

        3. **Zero-Touch Rollout:**

            - Gradual traffic shift (blue-green)

        4. **Self-Healing Rollback**

            - Auto-reverts if metrics degrade

        </details>

        <details>
           <summary>Examples:</summary>

        1. **Example 1:**

            ```text

            If CD is a drone with a pilot override, Continuous Deployment is a space rocket on autopilot.

            ```

        </details>

    - **Continuous Testing:** Automated testing at EVERY stage - from code commit to production monitoring.

        - **Stages:** Test (all types) → Monitor (prod validation). Focus on quality gates everywhere

        <details>
           <summary>Overview:</summary>

        1. **Pipeline Tests:**

            - Unit/Integration (CI)

            - E2E/Security (CD)

            - Canary (Production)

        2. **Production-Specific Checks:**

            - Real-user behavior validation

        3. **Feedback Loop Automation:**

            - Auto-trigger tests from monitoring

        4. **What CT Isn't:**

            - Just CI/CD tests (extends beyond pipelines)

            - Manual QA (fully automated)

        </details>

        <details>
           <summary>Examples:</summary>

        1. **Example 1:**

            ```text

            If CI/CD tests are lab experiments, CT is the Food and Drug monitoring drug side effects in the real world.

            ```

        </details>

    - **Continuous Monitoring:** Automatically watch live systems, detect issues, and trigger responses—before users notice.

        - **Stages:** Operate => Monitor -> Plan (feedback loop). Focus on production monitoring.

        <details>
           <summary>Overview:</summary>

        1. **Real-Time Health Checks:**

            - Track errors, latency, resource usage

        2. **Automated Alerts:**

            - Notify teams via Slack/PagerDuty

        3. **Self-Healing Triggers:**

            - Auto-scale or restart failed services

        4. **Feedback to Devs:**

            - Link production issues to code commits

        5. **What It Doesn’t Do:**

            - Replace CI/CD tests (monitors after deploy)

            - Manual log digging (automates detection)

        </details>

        <details>
           <summary>Examples:</summary>

        1. **Example 1:**

        ```text

            Like a car’s dashboard warning lights—but it can also pull over and call a mechanic automatically.   

        ```

        </details>

    </details>

2. **Requires human judgment:** People handle special cases.

    - Approving major releases

    - Solving complex failures

    - Designing test cases

    - Making architectural decisions

</details>
