# Content of Python Flask Level 1

- [What is Flask](#what-is-flask)
- [Creating a Flask application](#creating-a-flask-application)
- [Running a Flask application](#running-a-flask-application)
- [Flask routes](#flask-routes)
- [Returning HTML from Flask](#returning-html-from-flask)
- [HTML templates with Jinja2](#html-templates-with-jinja2)
- [Template variables](#template-variables)
- [Template conditions and loops](#template-conditions-and-loops)
- [Static files in Flask](#static-files-in-flask)
- [HTML forms](#html-forms)
- [HTTP request methods](#http-request-methods)
- [Redirecting after form submission](#redirecting-after-form-submission)

In this level, we focus on the foundations of Flask. The goal is to understand how a Flask application is created, how routes work, how HTML pages are returned and how templates are used to generate dynamic content.

A Flask application usually receives a request from a browser, processes that request in Python and returns a response.

At the beginning, this response may be simple text. Later, the response can become a full HTML page rendered from a template.

Flask commonly uses **Jinja2** as its template engine. Jinja2 allows Python data to be inserted into HTML files, making pages dynamic instead of static.

This level also introduces HTML forms. Forms allow users to send data from the browser to the Flask application. Flask can then read that data and use it inside route functions.

By the end of this level, students should understand the basic request-response flow of a Flask application and be able to build simple pages with templates and forms.

## What is Flask

Flask is a lightweight Python web framework used to build web applications and APIs. A web framework provides tools for handling web requests, defining application routes and returning responses to users. With Flask, Python code can respond to browser requests and generate web pages dynamically.

Flask is considered a microframework. This means Flask provides only the essential tools required for web development while keeping the framework small and flexible. Unlike larger frameworks, Flask does not force a strict project structure or include every feature by default. Developers can add only the components that are needed for the application.

Flask applications follow a request-response cycle. When a user opens a webpage, the browser sends a request to the Flask application. Flask then determines which part of the application should handle that request and returns a response back to the browser. The response may contain HTML pages, plain text, JSON data or other content returned by the application.

Flask also integrates with the Jinja2 template engine, which allows Python data to be inserted into HTML pages dynamically. This makes it possible to create pages that change depending on the data provided by the application instead of serving completely static HTML files.

Because of its simplicity and flexibility, Flask is widely used for learning backend development and building web applications in Python. In the next section, we create the first Flask application and explore how a Flask project is structured.

## Creating a Flask application

Before a Flask application can be created, Flask itself must first be installed in the Python environment.

If the project uses `pip`, Flask can be installed with.

```bash
pip install flask
```

If the project uses Poetry, Flask can be installed with.

```bash
poetry add flask
```

Once Flask is installed, the application file can be created.

In many projects, the main Flask application is stored inside a file named `app.py`.

A minimal project structure may look like this.

```text
project/
│
├── app.py
```

The Flask application starts by importing the `Flask` class from the `flask` package and creating an application instance.

```py
from flask import Flask

app = Flask(__name__)
```

The Flask class represents the web application itself.

When `Flask(__name__)` is executed, Flask creates the application object that will later manage routes, requests and responses.

The `__name__` value helps Flask determine the location of the current module. Flask uses this information to locate templates, static files and other application resources.

The application object is commonly named `app` by convention.

At this stage, the Flask application exists, but it is not yet running. The next section explains how to start the Flask development server and run the application locally.

## Running a Flask application

After the Flask application is created, the next step is running the application server.

Flask includes a built-in development server that allows the application to receive requests locally during development.

If the project uses `pip`, the application can be started with.

```bash
flask --app app run
```

If the project uses Poetry, the command becomes.

```bash
poetry run flask --app app run
```

The `--app` app argument tells Flask which application file should be loaded.

In this case, Flask looks for a file named `app.py` and loads the `app` application object from it.

After the command is executed, Flask starts the development server.

A successful startup usually produces output similar to this.

```bash
 * Serving Flask app 'app'
 * Debug mode: off
 * Running on http://127.0.0.1:5000
```

This means the Flask application is now running locally on port `5000`.

When a browser opens `http://127.0.0.1:5000`, the request is sent to the Flask application.

If no routes are defined yet, Flask usually returns a `404 Not Found` response because the application does not know how to handle the requested URL.

During development, Flask applications are often started in debug mode.

If the project uses `pip`, debug mode can be enabled with.

```bash
flask --app app --debug run
```

If the project uses Poetry, the command becomes.

```bash
poetry run flask --app app --debug run
```

When debug mode is enabled, Flask automatically restarts the server whenever the source code changes.

This improves the development workflow because the application does not need to be restarted manually after every modification.

The built-in Flask server is intended for development purposes only.

In production environments, Flask applications are usually served using dedicated WSGI servers such as Gunicorn or uWSGI together with a reverse proxy such as Nginx.

At this stage, the Flask application is running, but it still does not define how different URLs should be handled.

When a request reaches the application, Flask needs a way to determine which Python function should process that request and generate the response.

This behavior is implemented using routes.

The next section introduces Flask routes and explains how URLs are connected to Python functions.

## Flask routes

Flask applications respond to incoming requests through routes.

A route connects a URL path to a Python function. When a user visits a specific URL, Flask executes the function associated with that route and returns its result as the response.

Routes are defined using the `@app.route()` decorator.

```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Home page"
```

In this example, the `/` path is connected to the `home()` function.

When the browser opens the root URL, Flask calls the function and returns the text response.

The function attached to a route is commonly called a view function because it defines what the user sees for a particular URL.

Different routes can be created for different pages.

```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Home page"


@app.route("/about")
def about():
    return "About page"
```

In this case, the application now handles two separate URLs.

```text
/          -> home()
/about     -> about()
```

When the user visits `/about`, Flask executes the `about()` function instead of `home()`.

Routes allow the application to organize different parts of the website into separate handlers.

Flask routes can also contain dynamic values inside the URL.

```py
from flask import Flask

app = Flask(__name__)


@app.route("/users/<username>")
def user_profile(username):
    return f"Profile page for {username}"
```

The `<username>` section defines a dynamic route parameter.

When a request matches the route, Flask extracts the value from the URL and passes it to the function argument.

For example, opening.

```bash
/users/Example
```

causes Flask to execute.

```py
user_profile("Example")
```

Dynamic routes make it possible to create pages that depend on user input or identifiers stored inside the URL.

By default, Flask routes respond to `GET` requests.

This means the route is intended to return data or display a page when the browser accesses the URL.

Later sections will introduce routes that also handle `POST` requests for processing form data submitted by users.

At this stage, route functions only return plain text responses.

The next section explains how Flask can return full HTML pages instead of simple text responses.

## Returning HTML from Flask

In earlier examples, Flask routes returned plain text responses.

```py
@app.route("/")
def home():
    return "Home page"
```

Although this works, web applications usually return HTML documents instead of simple text.

HTML allows browsers to display structured web pages containing headings, paragraphs, links, images and other visual elements.

A Flask route can return HTML directly as a string.

```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return """
    <html>
        <head>
            <title>Flask Page</title>
        </head>
        <body>
            <h1>Welcome to Flask</h1>
            <p>This page was returned from a Flask route.</p>
        </body>
    </html>
    """
```

When the browser opens the route, Flask sends the HTML response to the client and the browser renders the page visually instead of displaying raw text.

Returning HTML directly from Python works for very small examples, but it quickly becomes difficult to maintain as pages grow larger.

Mixing large amounts of HTML inside Python code also makes applications harder to read and organize.

For this reason, Flask applications usually store HTML inside separate template files instead of embedding HTML directly inside route functions.

A common project structure may look like this.

```text
project/
│
├── app.py
│
├── templates/
│   └── index.html
```

The templates directory is a special folder used by Flask for HTML template files.

Instead of returning raw HTML strings, Flask can load an HTML file from the templates directory and return it as the response.

This is done using the `render_template()` function.

```py
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")
```

The `render_template()` function loads the specified HTML file and returns it to the browser as the response.

The `index.html` file may contain normal HTML content.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Flask Page</title>
</head>
<body>
    <h1>Welcome to Flask</h1>
    <p>This page was loaded from a template file.</p>
</body>
</html>
```

Separating HTML into template files makes Flask applications easier to structure and maintain.

It also allows HTML pages to become dynamic by inserting Python data into the template during rendering.

Flask uses the Jinja2 template engine for this purpose.

The next section introduces HTML templates with Jinja2 and explains how dynamic content can be generated inside Flask applications.

## HTML templates with Jinja2

When building web applications, HTML pages often need to display changing data.

For example, a page may show a username, a list of products or information loaded from a database.

Writing a separate HTML file for every possible variation would not be practical.

To solve this problem, Flask uses a template engine named Jinja2.

Jinja2 allows Python data to be inserted into HTML files dynamically during page rendering.

Instead of creating completely static HTML pages, templates can contain placeholders and expressions that Flask replaces with real data before sending the response to the browser.

Flask automatically integrates with Jinja2 through the `render_template()` function.

A route can pass values into a template as keyword arguments.

```py
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template(
        "index.html",
        username="Example"
    )
```

In this example, the username value is passed into the template.

Inside the HTML file, Jinja2 syntax can access that value.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Flask Page</title>
</head>
<body>
    <h1>Welcome {{ username }}</h1>
</body>
</html>
```

The `{{ }}` syntax is used to display values inside the template.

Before the page is returned to the browser, Jinja2 replaces `{{ username }}` with the actual value provided by Flask.

The final rendered HTML becomes.

`<h1>Welcome Example</h1>`

Templates allow the same HTML structure to be reused with different data.

This makes applications easier to maintain because the page layout remains separate from the Python application logic.

Jinja2 also supports more advanced template features such as conditions, loops and reusable template components.

For example, templates can display different content depending on application data or generate repeated HTML elements from Python lists.

At this stage, the focus is understanding that Flask uses Jinja2 to combine Python data with HTML templates during page rendering.

The next section explores how template variables work in more detail and how data passed from Flask becomes available inside HTML templates.

## Template variables

Template variables allow Flask applications to pass Python data into HTML templates.

When `render_template()` is called, values can be provided as keyword arguments. These values become available inside the template and can be displayed using Jinja2 syntax.

A route may pass simple data into a template.

```py
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template(
        "index.html",
        username="Alice",
        age=25
    )
```

In this example, the values `username` and `age` are passed to the template.

Inside the HTML file, these variables can be accessed using `{{ }}` expressions.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Profile</title>
</head>
<body>
    <h1>{{ username }}</h1>
    <p>Age: {{ age }}</p>
</body>
</html>
```

Before the response is sent to the browser, Jinja2 replaces the template variables with the actual values provided by Flask.

The rendered HTML becomes.

```html
<h1>Example</h1>
<p>Age: 25</p>
```

Template variables are not limited to strings or numbers.

More complex Python objects such as lists and dictionaries can also be passed into templates.

```py
@app.route("/")
def home():
    return render_template(
        "index.html",
        products=["Keyboard", "Mouse", "Monitor"]
    )
```

The template now has access to the products list.

Variables can also be inserted into HTML attributes.

```html
<img src="{{ image_url }}">
```

When the template is rendered, the variable value becomes part of the final HTML.

Jinja2 automatically escapes HTML characters in most situations. This helps prevent unsafe HTML or JavaScript code from being inserted directly into the page.

For example, characters such as `<` and `>` are converted into safe HTML entities before rendering.

Template variables make HTML pages dynamic because the displayed content depends on the data provided by the Flask application.

However, templates often need more than simple variable replacement.

In many cases, pages must display content conditionally or repeat HTML elements multiple times.

The next section introduces template conditions and loops in Jinja2.

## Template conditions and loops

In many applications, HTML pages need to display content dynamically depending on the provided data.

Sometimes a page should only display certain elements when a condition is true. In other cases, the page may need to generate repeated HTML elements from a list of data.

Jinja2 provides control structures for these situations.

Template conditions allow content to appear only when specific conditions are met.

Conditions use the `{% if %}` syntax.

```html
<!DOCTYPE html>
<html>
<head>
    <title>User</title>
</head>
<body>

    {% if is_logged_in %}
        <h1>Welcome back</h1>
    {% endif %}

</body>
</html>
```

In this template, the heading is only rendered when `is_logged_in` evaluates to `True`.

The value is typically provided from Flask.

```py
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template(
        "index.html",
        is_logged_in=True
    )
```

Jinja2 also supports `else` conditions.

```html
{% if is_logged_in %}
    <h1>Welcome back</h1>
{% else %}
    <h1>Please log in</h1>
{% endif %}
```

This allows templates to render different content depending on the application state.

Templates can also generate repeated HTML using loops.

Loops use the `{% for %}` syntax.

```py
@app.route("/")
def home():
    return render_template(
        "index.html",
        products=["Keyboard", "Mouse", "Monitor"]
    )
```

The template can iterate through the list.

```html
<ul>
    {% for product in products %}
        <li>{{ product }}</li>
    {% endfor %}
</ul>
```

When the page is rendered, Jinja2 generates repeated HTML elements for every item in the list.

The final HTML becomes.

```html
<ul>
    <li>Keyboard</li>
    <li>Mouse</li>
    <li>Monitor</li>
</ul>
```

Conditions and loops allow templates to generate pages dynamically based on application data.

This makes it possible to create flexible interfaces where the displayed content changes depending on user input, database data or application state.

At this stage, templates already support dynamic rendering, but web pages often require additional resources such as CSS files, JavaScript files and images.

The next section introduces static files in Flask and explains how these resources are served by the application.

## Static files in Flask

Web applications often use additional resources such as CSS files, JavaScript files and images.

These files are called static files because they are usually served directly to the browser without being dynamically generated by Flask.

Static files are commonly used for styling pages, adding interactivity and displaying visual content.

Flask automatically serves static files from a special directory named `static`.

A common Flask project structure may look like this.

```text
project/
│
├── app.py
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── images/
│       └── logo.png
```

The `static` directory usually contains subdirectories for organizing different file types.

Files inside the `static` directory become accessible through the `/static/` URL path.

For example, the file.

```text
static/css/style.css
```

can be accessed in the browser through.

```text
/static/css/style.css
```

Templates commonly reference static files using Flask’s `url_for()` function.

```html
<link
    rel="stylesheet"
    href="{{ url_for('static', filename='css/style.css') }}"
>
```

The `url_for()` function generates the correct URL for the static file.

Using `url_for()` is preferred over manually writing file paths because Flask can automatically generate correct URLs even if the application structure changes later.

Images can also be loaded from the static directory.

```html
<img
    src="{{ url_for('static', filename='images/logo.png') }}"
    alt="Logo"
>
```

JavaScript files are usually included near the bottom of the HTML page.

```html
<script src="{{ url_for('static', filename='js/app.js') }}"></script>
```

Static files allow Flask applications to separate application logic from frontend resources such as styling and client-side behavior.

At this stage, the application can already return dynamic HTML pages with templates and static resources.

The next section introduces HTML forms and explains how users can send data from the browser to a Flask application.

## HTML forms

HTML forms allow users to send data from the browser to a web application.

Forms are one of the main ways users interact with websites. They are commonly used for actions such as logging in, searching, registering accounts or submitting information.

A form is created using the `<form>` HTML element.

Inside the form, different input elements collect data from the user.

A simple form may look like this.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Example</title>
</head>
<body>

    <form>
        <input type="text" name="username">
        <button type="submit">Send</button>
    </form>

</body>
</html>
```

The `<input>` element allows the user to enter data.

The `name` attribute is important because it identifies the field when the form data is sent to the server.

The `<button type="submit">` element submits the form.

When the button is pressed, the browser collects the form values and sends them to the application.

Forms usually define two important attributes.

```html
<form action="/submit" method="POST">
```

The `action` attribute defines where the form data should be sent.

The `method` attribute defines how the data should be sent.

The two most common methods are `GET` and `POST`.

A `GET` request usually sends data through the URL.

```text
/search?query=flask
```

GET requests are commonly used for searches and filtering operations.

A `POST` request sends data inside the request body instead of placing it directly in the URL.

POST requests are commonly used when submitting sensitive or larger amounts of data such as login forms or registration forms.

Forms can contain different types of input fields.

```html
<form>

    <input type="text" name="username">

    <input type="password" name="password">

    <input type="email" name="email">

    <textarea name="message"></textarea>

    <button type="submit">Submit</button>

</form>
```

Different input types allow browsers to validate and handle user input differently.

When form data is submitted, Flask can access the values through the `request` object.

```py
from flask import Flask, request

app = Flask(__name__)


@app.route("/submit", methods=["POST"])
def submit():
    username = request.form.get("username")

    return f"Received: {username}"
```

The request.form object contains the submitted form values.

The field name inside the HTML form must match the key used in `request.form`.

```html
<input type="text" name="username">
```

When the form is submitted, Flask extracts the value associated with the `username` field and makes it available inside the route function.

At this stage, the application can already receive form data from the browser and process submitted values inside Flask routes.

However, Flask routes are not limited to handling only form submissions.

Routes can also respond differently depending on the HTTP request method used by the client.

The next section explores how Flask handles different HTTP request methods such as **GET**, **POST**, **PUT**, **PATCH** and **DELETE**.

## HTTP request methods

Flask routes can be configured to accept specific HTTP request methods.

A request method describes what kind of action the client wants to perform when it sends a request to the application.

By default, Flask routes accept only `GET` requests.

```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Home page"
```

When a browser opens a webpage, it usually sends a `GET` request.

HTML forms can also send requests using the `method` attribute.

```html
<form action="/search" method="GET">

    <input type="text" name="query">

    <button type="submit">Search</button>

</form>
```

This form sends a GET request to the `/search` route.

Flask can access query values through `request.args`.

```py
from flask import Flask, request

app = Flask(__name__)


@app.route("/search")
def search():
    query = request.args.get("query")

    return f"Searching for {query}"
```

Forms can also send `POST` requests.

```html
<form action="/login" method="POST">

    <input type="text" name="username">

    <button type="submit">Login</button>

</form>
```

To allow POST requests, the route must explicitly include `POST` in the `methods` argument.

```py
from flask import Flask, request

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")

    return f"Logged in as {username}"
```

If a request method is not allowed for a route, Flask automatically returns a `405 Method Not Allowed` response.

Flask routes can also support methods commonly used in APIs.

```py
@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    return f"Updating user {user_id}"


@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    return f"Deleting user {user_id}"
```

Methods such as `PUT`, `PATCH` and `DELETE` are commonly used when building APIs.

At this level, the important idea is that clients send requests using specific HTTP methods, and Flask routes decide which methods they are allowed to handle.

The next section introduces redirects and explains how Flask can send the client to another route after processing a request.

## Redirecting after form submission

After processing a form submission, Flask applications often redirect the user to another route instead of returning a response directly.

Redirects are commonly used after actions such as logging in, creating data or submitting forms.

Without a redirect, refreshing the page may cause the browser to repeat the previous form submission.

Flask provides the `redirect()` function for this purpose.

```py
from flask import Flask, redirect

app = Flask(__name__)


@app.route("/")
def home():
    return redirect("/dashboard")
```

In this example, visiting `/` redirects the client to `/dashboard`.

The browser receives the redirect response and automatically sends a new request to the target route.

A redirect is commonly used after processing form data.

```html
<form action="/login" method="POST">

    <input type="text" name="username">

    <button type="submit">Login</button>

</form>
```

The Flask route may process the submitted data and then redirect the user.

```py
from flask import Flask, request, redirect

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")

    return redirect("/dashboard")
```

After the form is submitted, Flask processes the request and redirects the browser to `/dashboard`.

In many Flask applications, redirects are combined with the `url_for()` function.

```py
from flask import Flask, redirect, url_for

app = Flask(__name__)


@app.route("/")
def home():
    return redirect(url_for("dashboard"))


@app.route("/dashboard")
def dashboard():
    return "Dashboard page"
```

The `url_for()` function generates the URL for a route based on the route function name.

Using `url_for()` is usually preferred over manually writing URLs because route paths can later change without requiring updates everywhere in the application.

Redirects are an important part of web application flow because they control how users move between pages after requests are processed.

At this stage, the Flask application can already define routes, render templates, process form data and redirect users between pages.
