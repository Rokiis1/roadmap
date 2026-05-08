# Content of Python data types 4 level

- [Array Data Type](#array-data-type)
- [Accessing Array Elements](#accessing-array-elements)
- [Modifying Array Elements](#modifying-array-elements)
- [Adding Elements to Arrays](#adding-elements-to-arrays)
- [Removing Elements from Arrays](#removing-elements-from-arrays)
- [Looping Through Arrays](#looping-through-arrays)
- [Array vs List](#array-vs-list)
- [Nested Data Processing with Arrays](#nested-data-processing-with-arrays)
- [Copying vs Referencing](#copying-vs-referencing)

In the previous levels, we explored Python collection data types such as **lists**, **tuples**, **sets**, and **dictionaries**, and we used them to model practical datasets containing nested records, configuration data, user activity, logs, and application state. These structures are extremely flexible because they allow different types of values to exist together inside the same collection, which is why they are commonly used in general application development.

However, not every program works with highly flexible or mixed data. Many systems process large collections of values that all share the same structure and type, especially in areas such as **scientific computing**, **analytics**, **simulations**, **image processing**, **audio processing**. In situations like these, Python **lists** become less efficient because every element inside a list is stored as a full Python object, even when all values are simple numbers.

To solve this problem, Python also provides more specialized collection structures designed for storing uniform data more efficiently. One of these structures is the **array** data type.

Unlike **lists**, arrays are designed to store elements of the same type, which makes them more compact and efficient when processing structured numeric data. This level explores how arrays work, why they exist, how they differ from **lists** and how they are used in programs that work with large collections of consistent values.

At the same time, this level also revisits an important idea introduced earlier **mutable** and **immutable** behavior and extends it into **copying**, **references** and **shared data structures**. As programs grow larger and datasets become more nested, understanding how Python handles shared objects and copies becomes essential for preventing accidental data corruption and unexpected side effects.

## Array Data Type

An **array** is an **ordered**, **mutable** collection designed to store elements of the **same data type**. Unlike Python **lists**, which can contain mixed values such as strings, numbers, booleans, or dictionaries inside the same structure, arrays are optimized for situations where all values follow a consistent format.

This makes arrays especially useful for programs that process large collections of numeric data, such as **sensor measurements**, **audio samples**, **image pixels**, **coordinates**, **statistics**, or **scientific calculations**.

Python provides arrays through the built-in `array` module.

Before using arrays, the module must be imported.

```py
from array import array
```

Unlike lists, arrays require a type code during creation. The type code defines what kind of values the array is allowed to store.

For example, the type code `"i"` represents signed integers.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

print(temperatures)
```

Here, all elements inside the array are integers. Attempting to insert a different type would raise an error because arrays enforce consistent data types.

Arrays are still **ordered**, which means values can be accessed using indexing just like lists.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

print(temperatures[0])
# 21

print(temperatures[-1])
# 22
```

Because arrays are mutable, values can also be modified directly.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

temperatures[2] = 20

print(temperatures)
```

Arrays are commonly processed using loops because programs usually analyze many numeric values rather than individual elements.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

for value in temperatures:
    if value > 23:
        print("High temperature:", value)
```

This pattern appears in programs that monitor thresholds, validate measurements or process streaming numeric data.

Arrays also support slicing, because they are ordered sequences.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

recent = temperatures[1:4]

print(recent)
```

In practice, arrays are most valuable when working with large collections of uniform numeric values. For general application development involving nested records, mixed data or flexible structures, Python lists and dictionaries are still more common.

Arrays focus on consistency and efficiency, while lists focus on flexibility.

Arrays are often processed as part of larger datasets, especially in systems that collect measurements over time.

```py
from array import array

daily_readings = [
    array("i", [21, 22, 20]),
    array("i", [24, 25, 23]),
    array("i", [19, 18, 20])
]

for day in daily_readings:
    for reading in day:
        if reading > 23:
            print("High reading:", reading)
```

Here, each array represents measurements collected for a single day, while the outer list groups multiple days together. This pattern appears in monitoring systems, analytics pipelines and time-series processing.

In practice, arrays are most valuable when working with large collections of uniform numeric values. For general application development involving nested records, mixed data or flexible structures, Python lists and dictionaries are still more common.

Arrays focus on consistency and efficiency, while lists focus on flexibility.

Just like lists, arrays also provide methods for adding, removing, searching and processing values. The next sections explore the most commonly used array operations in practice.

Accessing elements by index is common when processing structured numeric data, especially when specific positions have meaning, such as coordinates, measurements collected over time.

## Accessing Array Elements

Because arrays are **ordered sequences**, each element has a fixed position called an **index**. Indexing works the same way as with **lists** and **strings**.

The first element always starts at index `0`.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

print(temperatures[0])
# 21

print(temperatures[1])
# 24
```

This is common when working with structured numeric data where positions have meaning.

```py
from array import array

coordinates = array("i", [120, 450])

x_position = coordinates[0]
y_position = coordinates[1]

print(x_position)
print(y_position)
```

Arrays also support **negative indexing**.

Negative indexes access elements starting from the end of the sequence.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

print(temperatures[-1])
# 22

print(temperatures[-2])
# 25
```

This is useful when processing streaming data where the latest values are often stored near the end.

```py
from array import array

sensor_readings = array("i", [18, 20, 19, 23, 24])

latest_reading = sensor_readings[-1]

print(latest_reading)
```

Because arrays are frequently processed in loops, indexing is often combined with `range()` to access both the position and the value.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

for index in range(len(temperatures)):
    print(index, temperatures[index])
```

This pattern appears when programs need both the measurement and its position, such as processing time-series data or validating ordered numeric records.

Trying to access an index that does not exist raises an `IndexError`.

```py
from array import array

temperatures = array("i", [21, 24, 19])

print(temperatures[10])
```

Programs usually avoid this by validating indexes before access or by iterating safely with loops.

Arrays support indexing because they are ordered collections, making position-based access predictable for numeric processing tasks.

Because arrays are **mutable**, values inside the array can also be changed after creation. This allows programs to update measurements, replace invalid values, correct calculations or adjust numeric data during processing.

Modifying values still relies on indexing, because elements are updated based on their position inside the array.

## Modifying Array Elements

Because arrays are **mutable**, elements can be updated directly using their index position. This allows programs to correct values, replace invalid measurements, or update numeric data during processing.

Modifying an element works similarly to modifying values inside a list.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

temperatures[2] = 20

print(temperatures)
# array('i', [21, 24, 20, 25, 22])
```

This pattern commonly appears when programs receive corrected data from sensors or validation systems.

```py
from array import array

sensor_readings = array("i", [18, -999, 20, 21])

sensor_readings[1] = 19

print(sensor_readings)
```

Here, `-999` represents an invalid reading placeholder and the program replaces it with a corrected measurement.

Arrays are frequently updated inside loops while processing datasets.

```py
from array import array

scores = array("i", [45, 52, 61, 39])

for index in range(len(scores)):
    if scores[index] < 50:
        scores[index] = 50

print(scores)
```

This example normalizes all scores below `50` to a minimum accepted value.

Because arrays enforce consistent data types, replacement values must match the array type.

```py
from array import array

temperatures = array("i", [21, 24, 19])

temperatures[1] = "high"
```

This raises an error because the array only accepts integers.

Arrays are commonly modified during **data cleaning**, **measurement normalization** and other numeric processing tasks where values change but the overall structure remains stable.

So far, we updated values that already existed inside the array. However, programs often need to grow datasets dynamically as new measurements, readings, or numeric records arrive during execution.

Because arrays are mutable, they also support operations for adding new elements while preserving their ordered structure.

## Adding Elements to Arrays

Arrays often grow over time as programs receive new measurements, process additional numeric data, or collect values continuously during execution.

Because arrays are **mutable**, new elements can be added after creation while preserving the ordered structure of the collection.

One of the most common methods for adding values is `append(x)`.

The `append()` method adds a single element to the end of the array.

```py
from array import array

temperatures = array("i", [21, 24, 19])

temperatures.append(25)

print(temperatures)
# array('i', [21, 24, 19, 25])
```

This pattern commonly appears in systems that collect streaming numeric data over time.

```py
from array import array

sensor_readings = array("i")

sensor_readings.append(18)
sensor_readings.append(20)
sensor_readings.append(19)

print(sensor_readings)
```

Arrays also support `extend(iterable)` for adding multiple values at once.

```py
from array import array

daily_readings = array("i", [21, 24])

daily_readings.extend([19, 25, 22])

print(daily_readings)
```

This is useful when batches of numeric values arrive together.

```py
from array import array

network_latency = array("i", [12, 14])

new_measurements = [16, 13, 15]

network_latency.extend(new_measurements)

print(network_latency)
```

Arrays also support `insert(index, value)` for placing a value at a specific position.

```py
from array import array

temperatures = array("i", [21, 24, 25])

temperatures.insert(2, 19)

print(temperatures)
```

This is less common in high-performance numeric processing, but it can be useful when reconstructing ordered datasets or correcting missing measurements.

Because arrays enforce consistent data types, inserted values must match the array type.

```py
from array import array

temperatures = array("i", [21, 24])

temperatures.append("high")
```

This raises an error because the array only accepts integers.

Adding elements allows arrays to support dynamic numeric workloads while still maintaining consistent structure and efficient storage.

Just as programs often need to add new numeric values, they also frequently need to remove outdated, invalid, processed, or unnecessary data from an array.

Because arrays are mutable, elements can be removed while the remaining values continue to preserve their order inside the collection.

## Removing Elements from Arrays

Programs often remove values from arrays when data becomes invalid, outdated, duplicated, or no longer needed during processing.

Because arrays are **mutable**, elements can be removed while the remaining values continue to preserve their order.

One of the most common methods is `remove(x)`.

The `remove()` method deletes the first matching value from the array.

```py
from array import array

temperatures = array("i", [21, 24, 19, 24, 22])

temperatures.remove(24)

print(temperatures)
# array('i', [21, 19, 24, 22])
```

Only the first matching occurrence is removed.

This pattern commonly appears when invalid measurements or duplicate values must be cleaned from a dataset.

```py
from array import array

sensor_readings = array("i", [18, -999, 20, 21])

sensor_readings.remove(-999)

print(sensor_readings)
```

Arrays also support `pop([index])`.

The `pop()` method removes and returns an element based on its position.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25])

removed = temperatures.pop()

print(removed)
# 25

print(temperatures)
```

If no index is provided, `pop()` removes the last element.

Specific positions can also be removed.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25])

removed = temperatures.pop(1)

print(removed)
# 24

print(temperatures)
```

This pattern appears when processing ordered numeric data sequentially.

Arrays also support deleting elements using the `del` statement.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25])

del temperatures[2]

print(temperatures)
```

The `del` statement removes the element directly by index position.

Entire sections of an array can also be removed using slicing.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

del temperatures[1:3]

print(temperatures)
```

This is useful when removing ranges of outdated or corrupted measurements.

Trying to remove a value that does not exist raises an error.

```py
from array import array

temperatures = array("i", [21, 24, 19])

temperatures.remove(100)
```

Programs usually validate values before removal or handle these situations safely during processing.

Removing elements allows arrays to stay compact and relevant while numeric datasets continue to evolve during execution.

Arrays are rarely processed one value at a time manually. In most programs, arrays contain many numeric elements that must be analyzed, validated, transformed or aggregated together.

Because arrays are ordered collections, they work naturally with loops, allowing programs to process each value sequentially and apply logic consistently across the dataset.

## Looping Through Arrays

Arrays are commonly processed using loops because programs usually work with entire datasets rather than individual numeric values.

Looping allows programs to validate measurements, calculate totals, normalize values, detect thresholds, or analyze sequences of numeric data efficiently.

The most common approach is iterating directly over the array values.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

for value in temperatures:
    print(value)
```

This pattern is useful when only the values themselves matter.

Loops are often combined with conditions to filter or validate numeric data.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25, 22])

for value in temperatures:
    if value > 23:
        print("High temperature:", value)
```

This commonly appears in monitoring systems, alert processing, and threshold validation.

Programs also frequently calculate aggregate values while looping.

```py
from array import array

sensor_readings = array("i", [18, 20, 19, 21, 22])

total = 0

for reading in sensor_readings:
    total += reading

print(total)
```

This pattern appears in analytics, statistics, and reporting systems.

Sometimes both the position and the value are important.

In these situations, loops are commonly combined with `range()` and indexing.

```py
from array import array

temperatures = array("i", [21, 24, 19, 25])

for index in range(len(temperatures)):
    print(index, temperatures[index])
```

This approach is useful when positions have meaning, such as time intervals, ordered measurements, or sensor channels.

Arrays are also commonly processed as nested datasets.

```py
from array import array

weekly_readings = [
    array("i", [21, 22, 20]),
    array("i", [24, 25, 23]),
    array("i", [19, 18, 20])
]

for day in weekly_readings:
    for reading in day:
        if reading > 23:
            print("High reading:", reading)
```

Here, the outer loop processes each day, while the inner loop processes the readings collected during that day.

Nested looping patterns like this are common in time-series processing, analytics pipelines, and monitoring systems.

Because arrays are optimized for sequential numeric processing, looping through arrays is one of the most common operations performed in practical programs.

So far, arrays may seem very similar to Python **lists** because both are ordered, mutable sequences that support indexing, loops, and element modification.

However, the main difference is not how they are used syntactically, but how they are designed internally and what kinds of problems they are optimized to solve.

Understanding these differences helps determine when arrays are appropriate and when regular Python lists remain the better choice.

## Array vs List

At first glance, arrays and Python **lists** look very similar because both are **ordered** and **mutable** collections that support indexing, loops, and element modification. In practice, however, they are designed for different kinds of workloads.

Python **lists** focus on flexibility. A single list can contain completely different types of values at the same time, which makes lists ideal for general application development where data is often nested, mixed, and highly dynamic.

```py
users = [
    {
        "id": 1,
        "name": "Example1",
        "roles": ["admin", "editor"],
        "active": True
    },
    {
        "id": 2,
        "name": "Example2",
        "roles": ["viewer"],
        "active": False
    }
]

for user in users:
    if user["active"]:
        print(user["name"])
```

Here, the dataset contains **dictionaries**, **lists**, **strings**, **integers** and **booleans** all inside the same structure. This is exactly the type of problem Python lists are designed to solve.

Arrays take a different approach. Instead of flexibility, arrays focus on consistency and efficient storage. Every element inside an array must follow the same data type.

```py
from array import array

sensor_readings = array("i", [18, 20, 19, 21, 22])

for reading in sensor_readings:
    if reading > 20:
        print("High reading:", reading)
```

This type of structure is common in programs that process large collections of numeric values such as measurements, coordinates, statistics, simulations, or streaming sensor data.

Unlike lists, arrays reject mixed types.

```py
from array import array

sensor_readings = array("i", [18, 20, 19])

sensor_readings.append("critical")
```

This raises an error because the array only accepts integers.

Internally, Python lists store references to full Python objects, which gives them enormous flexibility but also increases memory usage. Arrays store values in a more compact format, which becomes important when processing very large numeric datasets.

In practical programs, Python lists are still far more common because most applications work with nested records, configuration data, APIs, user generated content and mixed structures rather than raw numeric collections.

Arrays become useful when programs need predictable numeric structure, efficient storage and high volume sequential processing instead of maximum flexibility.

Even though arrays are designed for uniform numeric values, programs rarely process data in isolation. Numeric datasets are often grouped into larger structures representing batches, timelines, channels, regions or collections of measurements gathered over time.

Because of this, arrays are frequently combined with other data structures such as **lists**, allowing programs to organize and process multiple arrays together as part of larger nested datasets.

## Nested Data Processing with Arrays

In practical programs, arrays are rarely used alone. Most systems organize numeric data into larger nested structures so related measurements can be grouped together and processed as collections.

A common pattern is storing multiple arrays inside a **list**, where each array represents a separate dataset, time period, sensor channel, or processing batch.

```py
from array import array

weekly_temperatures = [
    array("i", [21, 22, 20]),
    array("i", [24, 25, 23]),
    array("i", [19, 18, 20])
]

print(weekly_temperatures)
```

Here, each array stores measurements for a single day, while the outer list groups all days together into a weekly dataset.

Nested processing usually combines multiple loops.

```py
from array import array

weekly_temperatures = [
    array("i", [21, 22, 20]),
    array("i", [24, 25, 23]),
    array("i", [19, 18, 20])
]

for day in weekly_temperatures:
    for reading in day:
        print(reading)
```

The outer loop processes each day, while the inner loop processes the readings inside that day.

Conditions are commonly applied during nested processing.

```py
from array import array

weekly_temperatures = [
    array("i", [21, 22, 20]),
    array("i", [24, 25, 23]),
    array("i", [19, 18, 20])
]

for day in weekly_temperatures:
    for reading in day:
        if reading > 23:
            print("High temperature:", reading)
```

This pattern appears in monitoring systems, analytics pipelines, threshold detection, and sensor validation.

Programs also frequently aggregate values across nested datasets.

```py
from array import array

weekly_temperatures = [
    array("i", [21, 22, 20]),
    array("i", [24, 25, 23]),
    array("i", [19, 18, 20])
]

total = 0

for day in weekly_temperatures:
    for reading in day:
        total += reading

print(total)
```

Nested structures are useful because they preserve grouping while still allowing efficient sequential processing.

Arrays can also appear inside dictionaries when datasets need labels or categories.

```py
from array import array

sensor_data = {
    "north_zone": array("i", [18, 20, 19]),
    "south_zone": array("i", [24, 25, 23])
}

for zone, readings in sensor_data.items():
    for reading in readings:
        if reading > 22:
            print(zone, reading)
```

This structure is common when numeric datasets must remain associated with locations, devices, categories or processing regions.

In practice, arrays are often only one part of a larger nested structure. Programs combine arrays with lists, dictionaries, loops and conditions to organize and process large collections of structured numeric data efficiently.

As these structures become larger and more interconnected, another important concept appears how Python handles objects in memory. So far, we have modified arrays, lists, and dictionaries directly, but assigning one variable to another does not automatically create an independent copy of the data.

In many situations, multiple variables may actually reference the same underlying object. Understanding this behavior becomes especially important when working with nested datasets, because changes made in one place can unexpectedly affect other parts of the program.

## Copying vs Referencing

In Python, variables do not store collection data directly. Instead, variables reference objects that exist somewhere in memory.

This becomes especially important when working with mutable structures such as **lists**, **dictionaries**, and **arrays**, because assigning one variable to another does not automatically create a completely separate copy of the data.

Consider a simple list.

```py
temperatures = [21, 24, 19]

backup = temperatures

print(temperatures)
print(backup)
```

At first glance, this may appear to create two independent lists. In reality, both variables reference the same underlying object in memory.

Because of this, modifying one variable also changes the other.

```py
temperatures = [21, 24, 19]

backup = temperatures

backup.append(25)

print(temperatures)
print(backup)
```

The original list changes because both variables point to the same object.

This behavior becomes even more important with nested structures.

```py
weekly_data = [
    [21, 22, 20],
    [24, 25, 23]
]

copied = weekly_data

copied[0][1] = 99

print(weekly_data)
```

Even though the modification happens through `copied`, the original structure also changes because both variables still reference the same nested object hierarchy.

This behavior is called **referencing**.

Python does this intentionally because automatically copying large datasets would waste memory and processing time.

The same reference behavior applies to arrays.

```py
from array import array

sensor_readings = array("i", [18, 20, 19])

archive = sensor_readings

archive.append(21)

print(sensor_readings)
```

Again, both variables reference the same array object.

When programs need an actual independent copy, Python provides explicit copying mechanisms.

A shallow copy creates a new outer collection, but nested objects inside the structure are still shared.

```py
import copy

weekly_data = [
    [21, 22, 20],
    [24, 25, 23]
]

shallow = copy.copy(weekly_data)

shallow[0][0] = 99

print(weekly_data)
print(shallow)
```

Even though the outer list was copied, the nested inner lists are still shared between both structures.

This is why modifying nested values still affects the original dataset.

To fully duplicate nested structures, Python provides **deep copying**.

```py
import copy

weekly_data = [
    [21, 22, 20],
    [24, 25, 23]
]

deep = copy.deepcopy(weekly_data)

deep[0][0] = 99

print(weekly_data)
print(deep)
```

Now the original structure remains unchanged because all nested objects were copied recursively.

This distinction becomes extremely important in practical programs that process nested datasets, analytics pipelines, configuration systems, caching layers, APIs or streaming measurements. Accidentally modifying shared objects can introduce difficult bugs and unexpected side effects across completely different parts of an application.

Understanding how copying and referencing work is essential for safely handling complex mutable data structures in Python.
