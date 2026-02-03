# Content of Functions and Modules 2 level

- [Default Parameter Values](#default-parameter-values)
- [Keyword Arguments](#keyword-arguments)
- [Keyword-Only Arguments](#keyword-only-arguments)
- [Positional-Only Arguments](#positional-only-arguments)
- [Arbitrary Positional Arguments](#arbitrary-positional-arguments)
- [Arbitrary Keyword Arguments](#arbitrary-keyword-arguments)

In the previous level **Functions and Modules Level 1**, we explored the core structure of how to write simple functions and use some **built-in** functions.

In this level, we’ll go further by introducing **Modules** and **Function parameters and arguments**.  

As I mentioned in the previous level.

- A **parameter** is like a *placeholder ona  form*. Are defined in the function.

```py
def greet(name): # "name" is a parameter
```

- An **argument** is the *actual information you write into the form*. Are the values you pass when calling the function.

```py
greet("Example") # "Example" is the argument
```

So let's see what we can do with **parameters** and **arguments**. Let’s start with **default parameter values**.

## Default Parameter Values

You can assign a **default value** to a parameter directly in the function definition. This allows the function to be called **with or without** that argument.

Default parameters are commonly used for **optional behavior**, **configuration**, and **fallback values**.

```py
def greet(name, language="en"):
    if language == "en":
        return f"Hello, {name}"
    return f"Hi, {name}"

print(greet("Example1")) # Hello, Example1
print(greet("Example1", "lt")) # Hi, Example1
```

Here, `language` is optional. If it is not provided, the default value is used.

If we want to **change the default value**, we can override it by passing an argument in the function call.

```py
def connect(host="localhost"):
    return f"Connecting to {host}"

print(connect()) # Connecting to localhost
print(connect("192.168.1.1")) # Connecting to 192.168.1.1
```

Parameters with a default value must always come **after** parameters without a default value.

```py
def add(a, b=2):
    return a + b
```

Otherwise, Python raises an error `SyntaxError: non-default argument follows default`.

When working with default parameter values, avoid using **mutable objects** such as lists or dictionaries. The same object would be reused across function calls.

```py
def add_item(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

print(add_item(1)) # [1]
print(add_item(2)) # [2] separate lists, no shared state
```

To avoid this behavior, use `None` as the default value and create a new object inside the function.

```py
def add_item(item, items=None):
    if items is None:
        items = []
    items = items + [item]
    return items

print(add_item(1)) # [1]
print(add_item(2)) # [2]
```

## Keyword Arguments

In Python, you can pass arguments using the **parameter name**. This is called a **keyword argument**. It allows you to specify values **out of order** and makes your code more readable.

```py
def greet(name, city="Zarasai"):
    print(f"Hello {name} from {city}")

# Using keyword argument to override the default
greet(name="Jonas", city="Delhi") # Output: Hello Jonas from Delhi!

# You can also use keyword arguments in any order
greet(city="Kaunas", name="Ana") # Output: Hello Ana from Kaunas
```

Keyword arguments are useful when a function has optional parameters or when the meaning of arguments may not be clear from their position alone.

Without keyword arguments, values are passed by position.

```py
def process_data(data, verbose, reverse, encoding):
    print(data, verbose, reverse, encoding)

process_data(my_list, True, False, "ascii")
```

In this case, it is not clear what `True`, `False`, and `"ascii"` represent without checking the function definition.

Using keyword arguments makes the function call clearer.

```py
process_data(
    data=my_list,
    verbose=True,
    reverse=False,
    encoding="ascii"
)
```

Keyword arguments improve **readability**, reduce mistakes, and are commonly used together with default **parameter values**.

## Keyword-Only Arguments

Sometimes, it is important to require certain parameters to be passed **only by keyword**. This helps avoid mistakes and makes the meaning of arguments explicit when calling a function.

Normally, keyword arguments in Python are **optional**. You can use them or rely on positional order. But sometimes, you may want to **force** certain parameters to be passed only as keyword arguments.

You place a single asterisk `*` in the parameter list. All parameters to the right of the `*` **MUST** be passed as keyword arguments.

```py
def function_name(pos1, pos2, *, kwarg1, kwarg2=value):
    # Function body
```

Let's take simple example and how work in the core

```py
def greet(*, name, greeting="Hello"):
    print(f"{greeting}, {name}!")

# Valid call (uses keyword arguments)
greet(name="Example", greeting="Hi")
greet(name="Bob") # Uses the default for 'greeting'

# Invalid call (tries to use positional arguments)
greet("Example") 
# TypeError: greet() takes 0 positional arguments but 1 was given
```

The `*` alone means no **positional arguments are allowed** after it. In this case, there are no parameters before `*`, so all arguments must be passed by keyword.

You can also combine positional parameters with **keyword-only parameters**.

```py
def introduce(name, *, age, city="Zarasai"):
    print(f"My name is {name}, I am {age} years old, and I live in {city}.")

introduce("Jonas", age=25, city="Vilnius")
# Output: My name is Jonas, I am 25 years old, and I live in Vilnius.
```

All parameters before `*` can be passed positionally, while all parameters after `*` must be passed using keywords.

If you try passed `age` and `city` positionally, Python will raise an error.

```py
introduce("Jonas", 25, "Vilnius")
# Error: age and city cannot be passed positionally
```

## Positional-Only Arguments

In Python, some arguments can be **positional-only**, meaning their values **must** be provided by position, not by keyword. To enforce this, use the forward slash (`/`) in the function definition. All parameters **before** `/` are treated as positional-only.

We previously saw the asterisk (`*`) for enforcing **keyword-only arguments**. Now `/` is the opposite it enforces that some arguments **cannot** be passed by keyword.

sow e hawe touch `*` wivh enfroces **Keyword-Only Arguments**. and now weill be intreofuc in the `/` enfroces **Positional-Only Arguments**. They are two sides of the same coin, but they enforce opposite rules.

A function's parameters can be divided into **three sections**.

```py
def function( positional_only, /, positional_or_keyword, *, keyword_only ):
# 1. Left of / (Positional-Only) - Parameters that must be passed by position.
# 2. Between / and * (Positional-or-Keyword) - Parameters that can be passed either by position or by keyword. This is the default, standard behavior.
# 3. Right of * (Keyword-Only): Parameters that must be passed by keyword.
```

Here is example.

```py
def greet(name, /, greeting="Hello", *, punctuation="!"):
    print(f"{greeting}, {name}{punctuation}")

# Positional-only argument must be passed by position
greet("Example") # Output: Hello, Example!

# # Positional-or-keyword argument can be passed either way
greet("Example", greeting="Hi") # Output: Hi, Example!

# Keyword-only argument must be passed by keyword
greet("Example", greeting="Hey", punctuation="!!!") # Output: Example, Example!!!

# Invalid usage example
greet(name="Example") # Error name is positional-only
greet("Example", "!") # Error punctuation must be keyword-only
```

## Arbitrary Positional Arguments

Sometimes, we want a function to accept **any number of arguments**. Python makes this easy with two tools the first one.

- `*args` collects extra **positional arguments** into a tuple `()`.

Here’s how we can write it.

```py
def example_function(a, b, *args, **kwargs):
    print(f"a: {a}, type: {type(a)}") # a: 1, type: <class 'int'>
    print(f"b: {b}, type: {type(b)}") # b: 2, type: <class 'int'>
    print(f"args: {args}, type: {type(args)}") # args: (3, 4, 5), type: <class 'tuple'>
    print(f"kwargs: {kwargs}, type: {type(kwargs)}") # kwargs: {'x': 10, 'y': 20}, type: <class 'dict'>

example_function(1, 2, 3, 4, 5, x=10, y=20)
```

Let’s break it down and see how it works.

`*args` Variable Positional Arguments. Always becomes a tuple inside the function. It collects any number of positional arguments, which is useful when you **don’t know in advance how many arguments might be passed**.

```py
def sum_all(*args):
    total = 0
    for number in args: # 'args' is a tuple: (1, 2, 3, 4)
        total += number
    return total

# You can call it with any number of arguments
print(sum_all(1, 2)) # Output: 3
print(sum_all(5, 10, 15, 20)) # Output: 50
print(sum_all()) # Output: 0 (args is an empty tuple)
```

*The name args is just a convention. The `*` is what matters. You could use `*numbers`, but everyone uses `*args` for clarity.*

Since tuples are **immutable**, you cannot modify them directly (add, remove, or sort items).

A good practice is to **convert the tuple into a list** using a **built-in class constructor** `list()`. This gives you flexibility to modify the data, while still keeping the original tuple intact.

```py
def process_items(*args):
    # Convert the immutable tuple of args to a mutable list
    list_of_args = list(args)
    
    # Now you can modify it
    list_of_args.append("a new item") 
    list_of_args.sort()
    
    print("As a tuple (original):", args, type(args))
    print("As a list (converted):", list_of_args, type(list_of_args))
    return list_of_args

process_items(3, 1, 2)
# As a tuple (original): (3, 1, 2) <class 'tuple'>
# As a list (converted): [1, 2, 3, 'a new item'] <class 'list'>
```

*Notice that the **original tuple** remains unchanged, which is great if you still need to refer back to the original input later.*

We can also use **unpacking** when calling a function by placing an asterisk `*` in front of an iterable.

Before we worked with `*args`, we had to manually pull out each element. This is **repetitive, error-prone, and not flexible**.

```py
def simple_sum(a, b, c):
    return a + b + c

numbers_list = [1, 2, 3]

# Without unpacking
result = simple_sum(numbers_list[0], numbers_list[1], numbers_list[2])
print(result) # Output: 6
```

By using the asterisk `*`, Python will automatically unpack the iterable into separate arguments. This makes the code **shorter**, **cleaner**.

```py
def simple_sum(a, b, c):
    return a + b + c

# Normal call
result = simple_sum(1, 2, 3)

# Unpacking call
numbers_list = [1, 2, 3]
result = simple_sum(*numbers_list) # The '*' unpacks the list into 3 arguments: 1, 2, 3

numbers_tuple = (10, 20, 30)
result = simple_sum(*numbers_tuple) # Unpacks the tuple: 10, 20, 30
```

`*args` is good to use when the function should work no matter how many values you pass - just like the built-in functions `sum()`, `max()`, or `min()`.

Another place is when you want to **forward arguments** to another function (we’ll cover this later in **Functions and Modules Level 3**).

It’s also useful when working with **unknown data**, like values coming from files or user input, where you don’t know in advance how many arguments will appear.

Don’t use `*args` when your function always needs a **fixed set of arguments**. For example, if your function calculates an area, it’s clearer to name the parameters explicitly: calculate_area(length, width).

Also, overusing `*args` can make your function signature mysterious. For instance, `def configure(*settings)` doesn’t tell the caller what kind of settings are expected. Anyone reading the code would have to check the documentation or dive into the source to figure it out.

Use `*args` for truly variable input, not for things that should be explicit.

## Arbitrary Keyword Arguments

Sometimes we also want a function to accept any number of keyword arguments. For this, Python gives us another tool.

- `**kwargs` collects extra **keyword arguments** into a dictionary `{}`.

Here is example how we can use a  `**kwargs` inside a function

```py
def create_user_profile(**kwargs):
    profile = {}
    for key, value in kwargs.items(): # kwargs is a dict: {'name': 'Example', 'age': 30}
        profile[key] = value
    return profile

# You can call it with any keywords
user1 = create_user_profile(name="Example", age=30)
print(user1) # Output: {'name': 'Example', 'age': 30}

user2 = create_user_profile(username="dev_ray", email="ray@co.com", country="Brazil", is_admin=True)
print(user2)
# Output: {'username': 'dev_ray', 'email': 'ray@co.com', 'country': 'Brazil', 'is_admin': True}
```

Just like we can unpack `lists`/`tuples` with `*args`, we can also unpack dictionaries with `**kwargs`. This makes the code **cleaner**, **flexible**, and less **repetitive**.

Without **unpacking**, you’d have to pass each dictionary key manually.

```py
def create_profile(name, age, city):
    print(f"{name} is {age} years old, from {city}")

user_dict = {"name": "Example", "age": 25, "city": "Hong Kong"}

# Without unpacking, you have to pass each key manually
create_profile(user_dict["name"], user_dict["age"], user_dict["city"])
```

With **unpacking**, Python automatically spreads the dictionary into **keyword arguments**.

```py
def create_profile(name, age, city):
    print(f"{name} is {age} years old, from {city}")

# Normal call
create_profile(name="Example", age=30, city="Berlin")

# Unpacking call
user_dict = {"name": "Example", "age": 25, "city": "Hong Kong"}
create_profile(**user_dict) # The '**' unpacks the dict into: name="Example", age=25, city="Hong Kong"
```

Don’t overuse `**kwargs`. If your function requires a fixed set of **keyword arguments**, **list them explicitly**.

`**kwargs` is best when you **don’t know in advance** what keyword arguments might be passed. This is very common for functions that handle lots of **configuration options**.

Python allows you to use both (`*args`/`**kwargs`) in the same function, making it extremely flexible.

```py
def logger(message, *values, **metadata):
    print(f"LOG: {message}")
    if values: # Check if the 'values' tuple is not empty
        print("Values:", values)

    if metadata: # Check if the 'metadata' dict is not empty
        print("  Metadata:")
        for key, value in metadata.items():
            print(f"{key}: {value}")

# Calling the flexible function
logger("System started")
logger("Temperature high", 45.6, 47.2, source="sensor_12", severity="HIGH")
```

This way your function can accept.

- A **message** (fixed parameter);

- Any number of **extra values** (*args);

- And flexible **metadata** as key-value pairs (`**kwargs`).
