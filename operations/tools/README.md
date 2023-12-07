- [Build Tools](#build-tools)

# Build Tools

- [Package Management](#package-management)
- [Module Bundlers](#module-bundlers)
- [Linters and Formatters](#linters-and-formatters)

**Explanation:**

Build tools are a crucial part of the software development process, providing automation and optimization for tasks involved in transforming source code into a deployable application. These tools streamline the build process, making it more efficient, consistent, and less error-prone. The primary goal is to automate repetitive tasks, enforce coding standards, and manage dependencies, ultimately facilitating the development and deployment of software.

**Key Concepts:**

1. **Automation:** Build tools automate various tasks such as compiling source code, bundling modules, minifying and optimizing assets, running tests, and more. This reduces manual effort, ensures consistency, and minimizes the chances of human error.

2. **Dependency Management:** Build tools help manage project dependencies by fetching, updating, and resolving library versions. This ensures that the application uses the correct versions of external libraries and frameworks, promoting stability and reproducibility across different environments.

3. **Modularization and Bundling:** As modern applications are often developed in a modular fashion, build tools include module bundlers that consolidate these modules and their dependencies into a format suitable for deployment. This can significantly improve performance by reducing the number of HTTP requests.

4. **Task Running:** Task runners allow developers to define and execute various tasks, such as code compilation, linting, testing, and more, in a specified order or concurrently. This is essential for creating a streamlined development workflow.

5. **Code Transpilation:** Build tools can transpile code from one language to another, allowing developers to use the latest language features or target specific environments. For example, transpiling ECMAScript 6 (ES6) to ECMAScript 5 (ES5) for wider browser compatibility.

6. **Code Optimization:** Tools for minification, compression, and optimization help reduce the size of assets (such as JavaScript and CSS files), improving application performance and reducing load times.

7. **Linter Integration:** Integration with linters ensures that code adheres to coding standards and best practices. This helps catch potential issues early in the development process and ensures a consistent coding style across the project.

8. **Environment Configuration:** Build tools can manage environment-specific configurations, allowing developers to specify settings for development, testing, and production environments. This ensures that the application behaves consistently across different deployment scenarios.

9. **Continuous Integration/Continuous Deployment (CI/CD):** Build tools play a crucial role in CI/CD pipelines, where they are used to automate testing, building, and deployment processes. This integration accelerates the delivery of software updates.

## Package Management

- [Task runners](#task-runners)

**Explanation:**

Package management is a modern software development that involves the systematic organization, installation, and maintenance of external dependencies, libraries, and tools essential for a software project. It simplifies the process of handling dependencies, ensuring consistency across different environments, and automating various development tasks.

**Key Concepts:**

1. **Package Managers:**
   - **Definition:** Package managers are specialized tools that automate the management of project dependencies. They handle tasks such as installation, configuration, and updates.
   - **Task runner:** npm, pnpm, yarn.

2. **Package Files:**
   - **package.json:**
     - A central configuration file in JSON format that resides in the root of a project.
     - Contains metadata about the project, list of dependencies, and custom scripts.

3. **Dependencies:**
   - **Definition:** Dependencies are external code or libraries that a project relies on for its functionality.
   - **Types:** Runtime dependencies required for the application to run and development dependencies used during the development process.

4. **Scripts:**
   - **Definition:** Custom commands or tasks defined in the project's `package.json` file under the "scripts" section.
   - **Purpose:** Automate repetitive development tasks such as building, testing, and starting the application.

5. **Versioning:**
   - **Semantic Versioning (SemVer):**
     - A versioning scheme with three numbers (MAJOR.MINOR.PATCH) indicating compatibility.
   - **Version Ranges:**
     - Specify acceptable versions or version ranges in the `package.json` file.

6. **Lockfiles:**
   - **Definition:** Files (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`) that lock down dependency versions.
   - **Purpose:** Ensures deterministic installations, preventing version mismatches across different environments.

7. **Global vs. Local Installation:**
   - **Global Installation:**
     - Installs packages system-wide, making them available for any project.
   - **Local Installation:**
     - Installs packages specific to a project, enhancing version control and isolation.

8. **Proxy Configuration:**
   - **Definition:** Configuration settings for routing package requests through a proxy.
   - **Usage:** Configurable via CLI options or dedicated configuration files.

9. **Upgrade and Removal:**
    - **Upgrade:** Commands to update dependencies to their latest compatible versions.
    - **Removal:** Commands to uninstall and remove dependencies from the project.

10. **Offline Mode:**
    - **Definition:** The ability to install packages without an internet connection.
    - **Purpose:** Useful for environments with limited or no internet access.

11. **Multiple Environments:**
    - **Development, Testing, Production:**
      - Package management is crucial in different environments to ensure consistent and reliable software delivery.

### Task runners

- [npm scripts vs pnpm scripts](#npm-scripts-vs-pnpm-scripts)

**Explanation:**

Task runners are tools that automate and manage repetitive tasks in the software development workflow. They provide a streamlined way to define, configure, and execute tasks such as code compilation, asset minification, testing, and more. Task runners aim to enhance development efficiency, reduce manual effort, and ensure consistency in the execution of various tasks.

**Key Concepts:**

1. **Task Automation:**
   - **Script Execution:** Task runners execute scripts or commands defined by developers. These scripts encapsulate various tasks, such as building the project, running tests, and handling deployment.
   - **Workflow Automation:** By automating repetitive tasks, task runners help create efficient and reproducible development workflows. This is particularly beneficial in large projects or those with complex build requirements.

2. **Dependency Management:**
   - **Package Management Integration:** Task runners can integrate with package managers (npm for Node.js projects). This integration enables them to manage dependencies and ensure that the required tools and libraries are available for task execution.
   - **Dependency Resolution:** Task runners can automatically resolve and fetch project dependencies, ensuring that the correct versions of tools and libraries are used during task execution.

3. **Concurrency and Parallelism:**
   - **Parallel Execution:** Task runners can execute multiple tasks in parallel, improving build performance and reducing overall execution time.
   - **Concurrent Tasks:** Developers can define concurrent execution of tasks, allowing for efficient use of system resources and faster build times.

4. **File Watching and Live Reloading:**
   - **File Monitoring:** Task runners often include file-watching capabilities. They monitor file changes, triggering task re-execution when files are modified.
   - **Live Reloading:** Some task runners support live reloading, refreshing the application or preview in real-time as changes are made to the source code. This enhances the developer experience during the development process.

5. **Integration with Build Tools:**
   - **Build Process Integration:** Task runners are often used in conjunction with build tools (Webpack, Vite, esbuild) to enhance the overall development and build process.
   - **Script Execution in Pipelines:** Task runners are integrated into continuous integration/continuous deployment (CI/CD) pipelines, automating tasks in the deployment process.

### npm scripts vs pnpm scripts

## Module Bundlers

- [Vite](#vite)
- [esbuild(TBD)](#build)

**Explanation:**

Module bundlers are tools that facilitate the organization, packaging, and optimization of modular code in software development. In modern web development, where applications are often built using modular components and libraries, module bundlers play a crucial role in managing dependencies, improving performance, and simplifying the deployment process.

**Key Concepts:**

1. **Modular Code:** Modular code involves breaking down a software application into smaller, independent units called modules. Each module encapsulates a specific functionality, making code more maintainable, scalable, and easier to understand.

2. **Dependency Management:** Module bundlers handle the resolution and management of dependencies within a project. They analyze the relationships between different modules and bundle them together in a way that ensures proper execution order and minimal duplication of code.

3. **Dependency Graph:** Module bundlers construct a dependency graph, which is a representation of how different modules depend on each other. This graph helps the bundler understand the relationships and order in which modules should be bundled.

4. **Bundling:** The process of bundling involves combining multiple modules and their dependencies into a single or a few files. This results in optimized and efficient bundles that can be easily served to the browser or other runtime environments.

5. **Code Splitting:** Module bundlers support code splitting, a technique that allows developers to load specific parts of the application on demand, reducing the initial page load time. This is particularly important for large applications where loading all code at once is impractical.

6. **File Transformation:** Module bundlers can apply transformations to files as they are bundled. For example, they can transpile code written in newer versions of JavaScript (ES6, ES7) to older versions (ES5) for wider browser compatibility. This process is known as transpilation.

7. **Asset Handling:** Beyond JavaScript, module bundlers often support handling other assets like stylesheets, images, and fonts. They can apply optimizations to these assets and include them in the final bundle or generate separate files as needed.

8. **CommonJS, AMD, and ES6 Modules:** Module bundlers support various module systems, including CommonJS, Asynchronous Module Definition (AMD), and ECMAScript 6 (ES6) Modules. This flexibility allows developers to choose the module system that best fits their project.

9. **Tree Shaking:** A technique used by module bundlers to eliminate dead (unused) code from the final bundle. This results in smaller bundle sizes, improving application performance.

10. **Hot Module Replacement (HMR):** Some module bundlers provide HMR functionality, enabling developers to update modules in real-time during development without requiring a full page refresh. This accelerates the development feedback loop.

### Vite

**Explanation:**

**[Vite](https://vitejs.dev/)** is a JavaScript build tool designed to simplify and streamline the development of front-end web applications. Created by Evan Yu, the same individual behind Vue.js, Vite focuses on enhancing the build process by serving two core functions:

1. **Local Code Serving:**
   - During development, Vite serves your code locally, providing a fast and efficient environment for building and testing your front-end applications.

2. **Production Bundling:**
   - For production, Vite bundles your JavaScript, CSS, and other assets together, optimizing them for deployment.

- [Explanation: Vite](./assets/explanation/vite.md)

**Key Concepts:**

- **ESM (ES Module) Imports:** 
   - Vite leverages ES modules for importing dependencies. During development, when your application requests a module, Vite serves the module directly to the browser, without bundling it first.

- **ES Modules Leveraging:**
  - Vite leverages native ECMAScript (ES) modules in the browser, introduced in 2015 and widely supported by 2020. This allows developers to import and export code from different files directly in the browser.

- **On-Demand Compilation:** 
   - Instead of bundling the entire application, Vite compiles and serves individual modules on-demand as you navigate through your application. This  leads to faster development feedback and improved performance.

- **Instant Code Loading:**
  - By utilizing native ES modules, Vite enables instant loading of your code, regardless of the application's size. This is a significant improvement over traditional tools like webpack, especially as the codebase and dependencies grow.

- **Development Server:** 
   - Vite includes a development server that runs in the browser and handles the on-the-fly transpilation and module serving. It also supports Hot Module Replacement (HMR), allowing you to see changes instantly without a full page reload.

- **Production Build:** 
   - When you are ready to deploy your application, Vite bundles and optimizes your code for production. This bundling process is similar to traditional build tools, but during development, Vite takes advantage of the native ESM support in modern browsers.

**Example:**

```bash
# Create New Vite Project
npm create-vite@latest
# Or
npm create-vite@latest project-name --template <template-name>
# Install Dependencies
npm install
# Running the Development Server
npm run dev
# Building for Production
npm run build
```

**Resources:**

- [Docs: Vite](https://vitejs.dev/)

## Linters and Formatters

- [Prettier](#prettier)
- [ESLint](#eslint)

**Explanation:**

Linters and formatters are tools that help maintain code quality, consistency, and readability in software development. They play a crucial role in enforcing coding standards, catching potential errors, and improving collaboration among developers. While both tools contribute to code improvement, they serve slightly different purposes in the development workflow.

**Key Concepts:**

1. **Linters:**

   - **Code Quality Assurance:** Linters analyze source code to identify potential errors, bugs, and stylistic issues. They enforce coding standards and best practices, ensuring that code adheres to a predefined set of rules.
   - **Language Support:** Linters exist for various programming languages, including JavaScript (e.g., ESLint), Python (e.g., Flake8), and Java (e.g., Checkstyle). Each linter is tailored to the specific syntax and conventions of its supported language.
   - **Customizable Rules:** Developers can configure linting rules based on project requirements, team coding conventions, and individual preferences. This customization allows for flexibility in enforcing coding standards.

2. **Formatters:**

   - **Code Formatting:** Formatters automatically transform code to adhere to a consistent style guide, making the codebase visually uniform. They handle tasks such as indentation, spacing, and line breaks.
   - **Automated Consistency:** Formatters eliminate debates over code style preferences among developers by automatically applying a standardized format. This consistency improves code readability and collaboration.
   - **Language Agnostic:** Code formatters, like Prettier, are often designed to be language-agnostic, supporting multiple programming languages. This makes them versatile tools for projects with diverse tech stacks.

3. **Integration with Version Control:**

   - **Pre-commit Hooks:** Linters and formatters can be integrated into version control systems as pre-commit hooks. This ensures that code is checked and formatted before it is committed, preventing the introduction of inconsistent or poorly formatted code into the codebase.
   - **Continuous Integration:** Linters and formatters are commonly incorporated into continuous integration pipelines to automate code quality checks and formatting. This helps maintain code consistency across the entire development workflow.

4. **Editor Integration:**

   - **Real-time Feedback:** Many linters and formatters integrate seamlessly with code editors, providing real-time feedback to developers as they write code. This immediate feedback allows developers to address issues early in the development process.
   - **Editor Extensions:** IDE and text editor extensions enhance the developer experience by providing convenient ways to run linters, apply formatters, and visualize linting results directly within the editor.

5. **Selective Application:**

   - **Linting Rules Selection:** Developers can choose which linting rules to apply based on project requirements. This selective approach allows teams to prioritize certain rules or disable those that may not align with specific project needs.
