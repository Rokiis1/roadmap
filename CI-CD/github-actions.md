**Explanation:**

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) solution provided by GitHub. It allows you to automate, customize, and execute your software development workflows right in your GitHub repository. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a workflow.

**Key Concepts:**

1. **Workflow:** A configurable automated process that you set up in your repository to build, test, package, release, or deploy any project on GitHub. Workflows are made up of one or more jobs and can be scheduled or triggered by an event.

    **Key Concepts:**

    The `on` keyword in a GitHub Actions workflow file is used to specify the events that trigger the workflow.
        - `push`: Runs the workflow when code is pushed to your repository.
        - `pull_request`: Runs the workflow when a pull request event occurs.
        - `workflow_dispatch`: Allows you to manually trigger the workflow from GitHub's UI.
        - `schedule`: Runs the workflow on a schedule. For example, `on: schedule: - cron: '*/15 * * * *'` would run the workflow every 15 minutes.

    **Example:**

    ```yml
    name: My Workflow
    on: [push]

    # OR

    on:
    push:
        branches:
        - main

    # OR

    on:
    push:
        branches:
        - main
    pull_request:
        branches:
        - main
    ```

2. **Job:** A set of steps that execute on the same runner. Jobs is a section of the workflow and is made up of one or more steps. Each job runs in an environment specified by `runs-on`.

    **Key Concepts:**

    - **Environment:** Each job runs on a runner specified by the `runs-on` keyword. This could be a virtual environment provided by GitHub (like `ubuntu-latest`, `windows-latest`, or `macos-latest`), or a self-hosted runner.

    **Explanation:**

    Running a job on single os:

    ```yml
    jobs:
      build:
        runs-on: ubuntu-latest
    ```

    Running a job on multiple operating systems:

    ```yml
    jobs:
      build:
        runs-on: ${{ matrix.os }}
        strategy:
          matrix:
            os: [ubuntu-latest, windows-latest, macos-latest]
    ```

    - **Parallelism:** Jobs run in parallel by default, but you can also configure them to depend on each other using the `needs` keyword. For example, you might have a `test` job that needs to wait for a `build` job to complete.

    ```yml
      test:
        needs: build
        runs-on: ubuntu-latest
    ```

    - **Job Lifecycle:** A job has a specific lifecycle that includes `setup`, `main`, and `post` phases. Each phase can contain one or more steps.

    ```yml
    - name: Setup phase (checkout code, setup Node.js, install Newman and reporter)
    
    - name: Main phase (fetch Postman collection and environment, run API tests)

    - name: Post phase (upload report)
    ```

3. **Step:** An individual task that can run commands in a job. A step can be either an action or a shell command.

    **Key Concepts:**

    - **name:** The name keyword is used to provide a name for the step. This name is displayed in the GitHub Actions UI and makes it easier to understand what each step is doing.

    - **uses:** The uses keyword is used to specify an action that the step should execute. This can be an action that you've created, an action provided by GitHub, or an action created by a third-party. The value of uses is the path to the action. For example, `actions/setup-node@v4` refers to the setup-node action at version 4 in the actions repository.

    - **with:** The with keyword is used to set input parameters for an action. The parameters that are available depend on the action. For example, the setup-node action accepts a node-version parameter that specifies the version of Node.js to use, and the setup-java action accepts a java-version parameter that specifies the version of Java to use or other languages.

    - **run:** The run keyword is used to specify a shell command that the step should execute. This command is run in the operating system's default shell and can include anything that you could normally run in a shell on the runner's operating system.

    **Example:**

    Node.js:

    ```yml
    steps:
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18.x
    ```

    Java:

    ```yml
    steps:
      - name: Set up JDK 21
        uses: actions/setup-java@v4
        with:
          distribution: 'corretto'
          java-version: '21'
    ```

4. **Secret:** Encrypted environment variables that you create in a repository or organization. Secrets are not exposed in logs or workflow files and can be used to store sensitive data, like access tokens or credentials.

    ```yml
    env:
     MY_SECRET: ${{ secrets.MY_SECRET }}
    ```

5. **Artifact:** Files that are produced during a workflow (like compiled source code, JAR files, distributables). Artifacts can be used for storage and are downloadable after a workflow is completed.

    ```yml
    - name: Upload report
      uses: actions/upload-artifact@v4
      with:
        name: report
        path: report.html
    ```
