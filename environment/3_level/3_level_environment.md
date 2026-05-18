# Content of Python Environment Level 3

- [Environment variables and configuration](#environment-variables-and-configuration)
- [Working with `.env` files](#working-with-env-files)
- [Managing sensitive values](#managing-sensitive-values)
- [Environment configuration across tools](#environment-configuration-across-tools)

In previous levels, environments were introduced as isolated runtime contexts used to separate projects from the global setup. This solved problems related to dependencies, execution, and project isolation.

In real applications, however, programs often need more than isolated runtimes. They also require configuration that changes between environments, systems, or deployments. Database connections, API keys, debug settings, and service credentials are commonly different between projects and machines.

Storing these values directly inside source code quickly becomes difficult to manage and unsafe to share. Applications need a way to receive configuration from outside the code itself.

This level introduces environment variables and related configuration workflows used in modern Python projects. It explains how applications access external configuration, how `.env` files are used during development, and how sensitive values are separated from source code.

For that reason, this level begins by examining environment variables and configuration.

## Environment variables and configuration

Environment variables are values provided to a running process from outside the application itself. Instead of storing configuration directly inside source code, applications receive values from the surrounding environment at runtime.

These variables are commonly used for settings that change between systems or deployments. Examples include database connection strings, API credentials, debug flags, file paths, and service URLs.

Environment variables are usually created in the terminal or operating system before the application starts.

On **macOS** and **Linux**, a variable can be created like this.

```bash
export API_KEY="my-secret-key"
```

On **Windows PowerShell**, the same variable can be created like this.

```powershell
$env:API_KEY="my-secret-key"
```

Once the variable exists, programs running in that session can access it.

In Python, environment variables are accessed through the `os.environ` mapping.

```py
import os

api_key = os.environ.get("API_KEY")
print(api_key)
```

When the program runs, Python looks for a variable named `API_KEY` in the current environment and returns its value if it exists.

Environment variables make applications more flexible because configuration can change without modifying source code. The same application can behave differently depending on which variables are provided during execution.

These variables also exist outside the project itself. They are attached to the current shell session, operating system, terminal, editor or deployment environment rather than stored directly inside Python files.

Because manually defining variables becomes difficult as projects grow, development workflows often use `.env` files to organize and load configuration values more consistently.

## Working with `.env` files

As projects grow, manually defining environment variables in every terminal session becomes repetitive and difficult to manage. Applications often require many configuration values, and recreating them each time the project starts is error-prone.

To simplify this workflow, many projects store environment variables inside a `.env` file located in the project directory.

A typical `.env` file looks like this.

```env
API_KEY=my-secret-key
DEBUG=true
DATABASE_URL=postgres://localhost/mydb
```

Each line defines a variable together with its value. These values are not automatically available to Python just because the file exists. The application or development environment must load the file before the variables can be accessed.

A common approach in Python projects is to use the `python-dotenv` package.

```bash
pip install python-dotenv
```

Once installed, the `.env` file can be loaded when the application starts.

```py
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.environ.get("API_KEY")
print(api_key)
```

The `load_dotenv()` function reads variables from the .env file and places them into the current process environment so they can be accessed through `os.environ`.

Using a `.env` file keeps configuration separate from source code and makes development setups easier to reproduce across different machines and environments.

However, not all configuration values should be treated the same way. Some variables contain sensitive information that must be protected and handled carefully.

## Managing sensitive values

Some environment variables contain sensitive information that should not be exposed publicly or committed into version control. Examples include **API keys**, **database passwords**, **authentication tokens** and **private service credentials**.

A common mistake is storing these values directly inside source code.

```python
API_KEY = "my-secret-key"
```

This makes sensitive information part of the project files themselves. If the project is shared, uploaded or committed to a repository, those values may become visible to other people.

Using environment variables helps separate sensitive configuration from application logic. Instead of storing secrets inside Python files, the application reads them from the surrounding environment at runtime.

Projects commonly place sensitive values inside a `.env` file during development.

```py
API_KEY=my-secret-key
DATABASE_PASSWORD=super-secret-password
```

Because these files may contain private information, they are usually excluded from version control using `.gitignore`.

This prevents sensitive values from being uploaded together with the project source code.

Managing secrets through environment variables also makes it easier to use different credentials across development, testing and production environments without changing application code itself.

## Environment configuration across tools

Projects often use different configuration files for development, testing and production environments.

For example.

```text
.env.development
.env.testing
.env.production
```

Each file contains values specific to that environment.

A development configuration may look like this.

```env
# .env.development
DEBUG=true
DATABASE_URL=postgres://localhost/dev_db
```

A production configuration may use different values.

```env
# .env.production
DEBUG=false
DATABASE_URL=postgres://prod-server/main_db
```

The application can decide which configuration file to load based on a command-line argument.

```py
import sys
import os

from dotenv import load_dotenv

environment = sys.argv[1]

load_dotenv(f".env.{environment}")

debug = os.environ.get("DEBUG")
database_url = os.environ.get("DATABASE_URL")

print(debug)
print(database_url)
```

Running the application in development mode may look like this.

```bash
python main.py development
```

This loads `.env.development`.

Running the same application in production mode loads different values.

```bash
python main.py production
```

This loads `.env.production`.

The application code itself remains unchanged. Only the environment configuration changes between executions.

Environment variables are not used only by Python itself. Many external tools also rely on them to control configuration and runtime behavior. Editors, terminals, test runners, web frameworks and deployment systems often provide or load environment values automatically before the application starts.

Because environment variables exist outside the source code, the same project can behave differently depending on which tool starts it and which configuration values are available at runtime.

For this reason, modern development workflows usually standardize how environment variables are loaded and shared across development, testing and production environments.
