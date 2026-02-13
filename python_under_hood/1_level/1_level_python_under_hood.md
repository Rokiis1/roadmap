# Content of Python under the hood 1 level

- [Name bindings](#name-bindings)
- [Namespaces (locals, globals)](#namespaces-locals-globals)
- [LEGB rule](#legb-rule)
- [Assignment vs lookup](#assignment-vs-lookup)
- [`global`](#global)
- [`nonlocal`](#nonlocal)
- [Common scope errors](#common-scope-errors)

Python internally it follows **strict rules** for how names are **created**, **found**, and **updated**.

This level focuses on how Python **handles names**. It means to bind a **name**, where **names** live, how Python **searches** for them, and why **assignment** inside a function can change how scope behaves.

## Name bindings

A variable in Python is not a **storage box**. It is a name that **points (bound) to an object**.

When you write

```py
x = 1000
```

Python creates an integer object **somewhere in memory** and binds the name `x` to it.

Now if I writte liek this

```py
a = 1000
b = 1000

print(a is b)
```

It's prints `False`.

Even though both values are `1000`, Python created two separate **integer objects**.

If you try this

```py
a = 10
b = 10

print(a is b)
```

Now it prints `True`. Because Python internally **caches small integers** for performance. Sometimes **identical values share objects**. **Sometimes they don’t**.

**The rule is simple** names **do not contain values** and **names point to objects**.

Now if I try like this.

```py
a = [1, 2]
b = a
a = a + [3]

print(b)
```

Output would be like this `[1, 2]`.

Now change one line.

```py
a = [1, 2]
b = a
a.append(3)

print(b)
```

Output change and looks now `[1, 2, 3]`.

Same **variable names**, completely **different behavior**. In the **first case**, you created a **new list** and rebound `a`. In the **second case**, you **mutated** the existing list, this single difference explains **countless bugs** in programs.

## Namespaces (locals, globals)

A **namespace** is where name **bindings** live. You can think of it as a **dictionary** that **maps names to objects**, every function call **creates** a new **local namespace**.

At the module level, this idea is almost literal. The global namespace really behaves like a **dictionary**.

```py
x = 10
print(globals()["x"])
```

The global **namespace** is an dictionary that **stores names** defined at the top level of a file.

We can even inspect it directly.

```py
x = 10
y = "hello"

print(type(globals()))
print("x" in globals())
print(globals())
```

You will see that `globals()` returns a dictionary containing all **global names**.

If we modify it, we modify real variables.

```py
globals()["x"] = 99
print(x)
```

Now `x` becomes `99`. This confirms that the **global namespace** is truly a **dictionary**.

Now let’s talk about functions.

Every time a function is called, Python creates a **new local namespace** for that call. This means each call has its **own separate storage for local variables**.

We can observe the **local namespace** using `locals()`.

```py
def show():
    x = 5
    y = 20
    print(locals())

show()
```

Output would be `{'x': 5, 'y': 20}`.

This shows the **local namespace** snapshot for that function call.

Now let’s return to the `ID` example. Using `locals()`.

```py
def show():
    x = 5
    print(id(locals()))

show()
show()
```

At first, you might expect the **IDs** to always be different because each call should have **its own namespace**.

But this example can be misleading.

Inside a function, Python does not **store local variables** in a **dictionary**. Instead, it stores them in a internal structure for. When you call `locals()`, Python builds a **temporary dictionary** snapshot of the current `local` variables and returns it.

That **dictionary** is immediately discarded after the line **finishes executing**. Because of this, Python may reuse the same **memory location for the next temporary dictionary**. When that happens, `id(locals())` may print the **same number twice**, even though the function calls are **completely separate**.

So identical **IDs** do not mean the **namespace** is shared. They only mean **memory was reused**.

If we want to clearly see that each call has its own **namespace**, we need to keep those dictionaries alive at the same time.

```py
saved = []

def show():
    x = 5
    d = locals()
    saved.append(d)
    print(id(d))

show()
show()

print(saved[0] is saved[1])
```

Now the **IDs** will be different, and the final comparison prints `False`. That confirms each function call had its own **local namespace** snapshot.

One more important observation. Try modifying `locals()` inside a function.

```py
def test():
    x = 5
    locals()["x"] = 100
    print(x)

test()
```

It still prints `5`. This proves that the dictionary returned by `locals()` is only a view, not the true **internal storage of local variables**.

At the global level, this behaves differently.

```py
globals()["z"] = 500
print(z)
```

This works because the global namespace really is a dictionary.

The important idea is this each function call creates a new **local namespace**. That **namespace** is isolated from other calls. But the way Python **represents it internally** is not always visible **through simple inspection**.

**Namespaces** are separate worlds, even if memory reuse sometimes makes them look similar from the outside.

But having **multiple namespaces** immediately raises an important question. If names live in **different namespaces**, how does Python know which one to use when you reference a variable.

When you write.

```py
print(x)
```

Python must decide where to find `x` and Python follows one strict and predictable rule for resolving names.

## LEGB rule

When Python tries to **look up a name**, it searches namespaces in a fixed order.

1. **Local**
2. **Enclosing**
3. **Global**
4. **Builtins**

This order is known as the **LEGB rule**.

Python checks the **local scope first**.

```py
x = "global"

def test():
    x = "local"
    print(x)

test()
```

And the output you would see like that `local`.

Even though there is a **global** `x`, Python finds the **local** one first.

Now let’s add a nested function.

```py
x = "global"

def outer():
    x = "enclosing"
    def inner():
        print(x)
    inner()

outer()
```

Output would be `enclosing` because, Python looks in **inner first** and if not found then it looks in the **enclosing function** `outer`.

If Python does not find the name in **local** or **enclosing** scopes, it checks the **global** namespace.

```py
x = "global"

def outer():
    def inner():
        print(x)
    inner()

outer()
```

Output you could see `global`, now there is no **local** `x`, no **enclosing** `x`, so Python finds it **globally**.

If the name is not found anywhere else, Python checks **builtins**.

```py
def test():
    print(len([1, 2, 3]))

test()
```

We never defined `len`, but Python finds it in the **builtin namespace**.

Now try overriding it.

```py
len = 100
print(len)
```

Now `len` refers to your **global** variable, not the **builtin** function. That shows **builtins** are the **last step in the search order**.

It explains exactly how Python decides which variable you are referring to. Understanding namespaces tells you **where names live** and **how Python searches for them**.

From this point forward, almost **every scope related behavior** can be explained by this rule.

But there is something very important that **LEGB** alone does not explain.

So far, we have only talked about looking up names. When Python sees

```py
print(x)
```

It searches using the **LEGB rule**. That process is called name **lookup**.

But what happens when you assign to a name.

```py
x = 10
```

This is not **lookup**. This is **binding**.

Python treats **lookup** and assignment very differently. The **LEGB rule** explains how Python finds names when they are read, but assignment changes how Python decides where a n**ame belongs**. This is exactly why code that looks correct sometimes raises unexpected errors.

To understand this behavior clearly, we need to separate two ideas. Looking up a name means searching for an existing **binding**. Assigning to a name means **creating** or **rebinding** that name in a specific namespace.

They are not the same **operation**, and Python handles them differently.

## Assignment vs lookup

The **LEGB rule** explains how Python looks up a name when it is read. But assignment follows a different rule.

When Python sees a name being used, like this

```py
print(x)
```

it performs a lookup. It searches for an existing **binding** using the **LEGB order**.

But when Python sees a name being assigned.

```py
x = 10
```

it does not search for `x`. It **creates** or **updates** a binding.

And here is the key rule, if a name is assigned anywhere inside a function, Python treats that name as **local to that function**, unless explicitly told otherwise.

This decision is made before the function runs. Let’s see why this matters.

```py
x = 10

def test():
    print(x)
    x = 20

test()
```

At first, this looks like Python should print `10` and then reassign `x`. Instead, it raises `UnboundLocalError`

Because Python sees the assignment `x = 20` inside the function and immediately decides that `x` is a **local** variable in test. That means the line `print(x)` tries to read a **local** variable before it has been assigned a value.

The important thing to understand is that this is not decided at runtime. Python analyzes the function body first and determines which names are **local**.

Now compare this with a slightly different example.

```py
x = 10

def test():
    print(x)

test()
```

This works perfectly and prints `10`.

In this case, there is no assignment to `x` inside the function, so Python treats `x` as a global name and performs a normal lookup using **LEGB**.

Now let’s see other example.

```py
nums = [1, 2, 3]

def modify():
    nums.append(4)

modify()
print(nums)
```

This works and prints `[1, 2, 3, 4]`.

There was no assignment to `nums`, only a method call. Python performs a lookup, finds the **global** `nums`, and **mutates** the object.

But now look at this.

```py
nums = [1, 2, 3]

def modify():
    nums = nums + [4]

modify()
```

This raises `UnboundLocalError`.

Even though it looks similar, the second version contains an **assignment to nums**. Python therefore treats **nums** as **local** inside the function. When evaluating `nums + [4]`, it tries to read the **local** variable before it exists.

Lookup searches outward using **LEGB**. Assignment **creates** or **rebinds** names in the current scope.

Whenever something unexpected happens inside a function, ask this question. Is Python performing a **lookup**, or is it treating this name as **local** because of **assignment**?

So far, we have seen that as soon as Python detects an **assignment** inside a function, it assumes the name is **local**. That is why `UnboundLocalError` appears. Python protects outer scopes by default.

However, sometimes we intentionally want to **update** a name defined at the module level.

To do that, we must explicitly tell Python **not** to **create** a **new local binding** and that is where the `global` keyword comes in.

## global

By default, when you assign to a name inside a function, Python creates a **local** variable. It does not **modify** the **global** one.

This is why the following code fails.

```py
x = 10

def change():
    x = x + 5

change()
```

This raises `UnboundLocalError`.

Python sees the assignment to `x` inside the function and decides that `x` is **local** to change. When it tries to evaluate `x + 5`, it attempts to read the **local** `x` before it has been assigned a value.

But sometimes we actually want to modify a variable defined at the module level.

That is what the `global` keyword is for.

```py
x = 10

def change():
    global x
    x = x + 5

change()
print(x)
```

Now the output is `15`.

The keyword `global` tells Python that `x` refers to the name in the **global namespace**. Instead of creating a new **local variable**, Python **updates** the existing **global binding**.

It is important to understand what global **does** and what it **does not do** tt does not **search for a variable**, **create a global variable automatically**. It simply changes where **assignment** happens.

Without `global`, assignment inside a function creates a **local binding**. With `global`, assignment updates the module level binding.

Now consider this example.

```py
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)
```

The output is `2`, wach call modifies the **same global variable**. However, using `global` introduces shared state. Any function can modify that variable, which can make larger programs harder to reason about.

This is why `global` should be used carefully. It is powerful, but it removes isolation between scopes. Python assumes local by default, `global` overrides that assumption and redirects assignment to the module namespace.

However, there is another situation that `global` does not solve.

Consider nested functions. A function defined inside another function can access variables from its **enclosing scope**. This works for lookup because of the **LEGB rule**. But as soon as you try to assign to that name, Python treats it as **local** to the **inner** function.

That is where the `nonlocal` keyword comes in.

## nonlocal

The `global` keyword allows us to modify variables in the module namespace. But it does not help when the variable belongs to an enclosing function.

To understand why `nonlocal` exists, consider this example.

```py
def outer():
    count = 0

    def inner():
        count += 1
        print(count)

    inner()

outer()
```

This raises `UnboundLocalError`.

Because Python sees the assignment `count += 1` inside `inner` and assumes that `count` is **local** to `inner`. When it tries to evaluate `count += 1`, it attempts to read a **local** variable before it has been assigned.

But `count` clearly exists in the enclosing function. Lookup works but assignment does not, this is exactly the same rule we saw earlier. If a **name** is assigned inside a function, Python treats it as **local** unless told otherwise.

To tell Python that we want to modify the variable from the enclosing scope, we use `nonlocal`.

```py
def outer():
    count = 0

    def inner():
        nonlocal count
        count += 1
        print(count)

    inner()

outer()
```

Now it works and prints `1`. The keyword `nonlocal` tells Python that `count` does not belong to the **local** scope of `inner`. Instead, it refers to the nearest **enclosing** function scope where that name exists.

It is important to understand what `nonlocal` does not refer to the **global namespace**, **create a new variable**, it searches outward to the **nearest enclosing function scope** and **reuses** that binding.

If the name does not exist in any **enclosing** function scope, Python raises an error.

Now consider this example.

```py
def make_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment

c1 = make_counter()
c2 = make_counter()

print(c1())
print(c1())
print(c2())
```

Output would be `1,2,1`. Each call to `make_counter` creates a **new enclosing namespace** with its own `count`. The **inner** function remembers and modifies that specific binding.

This is how closures work. Just like `global`, the `nonlocal` keyword changes where assignment happens. Without it, Python assumes local. With it, Python reuses an existing binding in the nearest enclosing function scope.

Python protects outer scopes by default. `nonlocal` is the explicit way to override that protection when working with nested functions.

## Common scope errors

Once you understand name binding, namespaces, lookup, assignment, `global`, and `nonlocal`, most scope behavior becomes predictable.

However, there are a few common errors that repeatedly confuse developers. These errors are not random. They are direct consequences of the rules we have already seen.

The most common one is `UnboundLocalError`.

```py
value = 10

def test():
    print(value)
    value = 20

test()
```

This fails because Python sees the assignment inside the function and decides that value is local. When `print(value)` runs, it tries to read a local variable before it has been assigned.

The code looks correct at first, but the assignment changes the scope decision.

Another very common confusion is the difference between **mutation** and **rebinding**.

```py
items = [1, 2, 3]

def add():
    items.append(4)

add()
print(items)
```

This works because no assignment happens. Python performs a **lookup**, finds the **global** items, and **mutates** the object.

Now compare this,

```py
items = [1, 2, 3]

def add():
    items = items + [4]

add()
```

This raises `UnboundLocalError`.

The second version contains assignment, so Python treats `items` as **local** and tries to read it before assignment.

Another common with loops and functions.

```py
functions = []

for i in range(3):
    functions.append(lambda: i)

print([f() for f in functions])
```

Expect `[0, 1, 2]`, instead, it prints `[2, 2, 2]`.

This happens because the `lambda` does not store the value of `i` at definition time. It performs a **lookup** when executed. By the time the lambdas run, the loop has finished and `i` is `2`.

The fix is to bind the value at definition time.

```py
functions = []

for i in range(3):
    functions.append(lambda i=i: i)

print([f() for f in functions])
```

Now it prints `[0, 1, 2]`.

Another subtle scope related issue appears with **default arguments**.

```py
def add(value, container=[]):
    container.append(value)
    return container

print(add(1))
print(add(2))
```

Output looks like this.

```text
[1]
[1, 2]
```

The **list** is not recreated each time because it was created once when the function was defined. The same object is reused across calls, which is why values **accumulate** instead of resetting. This behavior is not a **bug**. It follows directly from how Python **binds names** and **stores default values** inside the function object at definition time.
