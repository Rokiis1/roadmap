# Content of Date and Time

- [What date and time represent](#what-date-and-time-represent)
- [Why date and time handling matters in programming](#why-date-and-time-handling-matters-in-programming)
- [Date and time formats](#date-and-time-formats)
- [Working with dates](#working-with-dates)
- [Working with times](#working-with-times)
- [Combining date and time](#combining-date-and-time)
- [Getting the current date and time](#getting-the-current-date-and-time)
- [Formatting date and time values](#formatting-date-and-time-values)
- [Parsing date and time from strings](#parsing-date-and-time-from-strings)
- [Date and time arithmetic](#date-and-time-arithmetic)
- [Comparing dates and times](#comparing-dates-and-times)
- [Timezones](#timezones)
- [Naive and aware datetime objects](#naive-and-aware-datetime-objects)
- [Timestamps](#timestamps)

In programming, working with date and time is very common. Applications often need to know when something happened, how long something lasted, or when something should happen in the future.

For example, an application may store when a user created an account, show the current time, calculate a deadline, compare two dates, or schedule an event. Even simple systems often need to work with calendars, clocks, durations, and timestamps.

Because of this, date and time are fundamental concepts in software development. They appear in databases, APIs, logging systems, authentication, reporting, booking systems, and many other parts of an application.

Before working with formatting, calculations, timezones, or programming tools, it is important to first understand what date and time actually represent.

We begin with the basic meaning of these concepts.

## What date and time represent

Date and time are used to describe specific points or periods in the timeline of real-world events.

A **date** represents a calendar day. It identifies a position in time using components such as year, month and day. For example, a date can represent a specific day like `2026-03-24`.

A **time** represents a moment within a single day. It is usually described using hours, minutes, seconds and sometimes smaller units. For example, a time can represent a specific moment like `14:30:00`.

When combined, date and time describe an exact moment. For example, `2026-03-24 14:30:00` represents a precise point in time.

These concepts are based on standard systems used worldwide. Dates follow calendar systems, most commonly the **Gregorian calendar**, and time is typically measured using a 24-hour clock.

In programming, date and time values are not just text. They represent structured data that can be stored, compared, and manipulated. For example, a program can determine whether one date comes before another, calculate the difference between two times, or add a number of days to a given date.

It is also important to understand that date and time may depend on location. The same moment can be represented differently in different regions due to timezones. For example, when it is `14:00` in one country, it may be `12:00` or `16:00` in another.

Because of this, date and time are not only about representing moments, but also about interpreting them correctly depending on context.

Before working with calculations or programming tools, it is important to understand why handling date and time correctly is essential in real applications.

In the next section, we look at why date and time handling matters in programming.

## Why date and time handling matters in programming

Date and time handling is important because many parts of an application depend on knowing *when* something happens or *how long* something takes.

In systems, time is often directly connected to application logic. For example, an application may need to determine whether a user session is still valid, whether a deadline has passed, or when a scheduled task should run. These decisions depend on accurate handling of date and time values.

Date and time are also essential for storing and organizing data. Many records include timestamps that indicate when they were created or updated. This allows applications to sort data, filter results, generate reports, and track changes over time.

Another important use case is measuring duration. Applications often need to calculate the difference between two moments, such as how long a request took to process, how many days remain until an event, or how much time has passed since a specific action.

Handling date and time correctly is also important when working across different regions. Users in different parts of the world may see different local times for the same event. Without proper handling of timezones, an application may display incorrect information or behave unexpectedly.

In addition, incorrect date and time logic can lead to subtle bugs that are difficult to detect. For example, errors may occur when comparing values in different formats, when handling daylight saving time changes, or when working with incomplete or inconsistent data.

Because of these reasons, date and time handling is not just a technical detail. It is a core part of building reliable applications that behave correctly in real-world scenarios.

Before working with operations such as calculations or comparisons, it is important to understand how date and time values are represented in different formats.

In the next section, we look at date and time formats.

## Date and time formats

Date and time values can be represented in many different ways. These representations are called **formats**.

A format defines how a date or time is written as text. Even though the underlying value represents the same moment, the way it is displayed can vary depending on region, system, or use case.

For example, the same date can be written in different formats.

- `2026-03-24` (ISO format)
- `24-03-2026` (day-month-year)
- `03/24/2026` (month-day-year)
- `March 24, 2026` (long format)

All of these represent the same date, but the order and style are different.

Time can also be represented in different formats.

- `14:30` (24-hour format)
- `02:30 PM` (12-hour format)
- `14:30:45` (including seconds)

When date and time are combined, formats may look like this.

- `2026-03-24 14:30:00`
- `2026-03-24T14:30:00` (ISO 8601 format)
- `03/24/2026 02:30 PM`

One of the most important standards is **ISO 8601**. It defines a consistent and unambiguous way to represent date and time.

```text
YYYY-MM-DDTHH:MM:SS
```

For example `2026-03-24T14:30:00`

This format is widely used in **APIs**, **databases** and **data exchange** because it avoids confusion between different regional formats.

In programming, it is important to distinguish between **display formats** and **internal representations**.

- The **internal representation** is how date and time are stored and processed in the program.
- The **display format** is how they are shown to users.

For example, a program may store a datetime value internally, but display it as `24/03/2026` or `March 24, 2026` depending on user preferences.

Because multiple formats exist, programs often need to convert between them. This includes formatting values for output and parsing strings into structured date and time objects.

Understanding formats is essential before working with real date and time values in code.

In the next section, we begin working with dates.

## Working with dates

After understanding how date values are represented, the next step is to work with them in code.

In programming, a date is not just text such as `2026-03-24`. It is usually represented as a structured object that stores separate components such as year, month, and day. This allows programs to perform operations like comparison, validation, and calculations.

In Python, dates are handled using the `date` class from the `datetime` module.

```py
from datetime import date
```

A specific date can be created by passing the year, month, and day.

```py
today = date(2026, 3, 24)
print(today)
```

The output will be `2026-03-24`

Each part of the date can be accessed separately.

```py
print(today.year) # 2026
print(today.month) # 3
print(today.day) # 24
```

This makes it possible to work with individual components when needed.

Python also provides a way to get the current date.

```py
current_date = date.today()
print(current_date)
```

This returns the current date based on the system clock.

Dates can be compared using standard comparison operators.

```py
date1 = date(2026, 3, 24)
date2 = date(2026, 4, 1)

print(date1 < date2) # True
print(date1 == date2) # False
```

This allows programs to determine ordering, check deadlines, or filter data.

Dates are immutable, which means their values cannot be changed after creation. If a different date is needed, a new object must be created.

Working with dates is a fundamental step before combining them with time or performing more advanced operations such as formatting and calculations.

In the next section, we focus on working with time values.

## Working with times

In addition to dates, programs often need to work with **time values** that represent a moment within a single day.

A time typically consists of hours, minutes, seconds, and optionally smaller units such as microseconds. Unlike a full datetime value, a time does not include information about the date.

In Python, time values are represented using the `time` class from the `datetime` module.

```py
from datetime import time
```

A specific time can be created by providing hour, minute, and optional second values.

```py
meeting_time = time(14, 30)
print(meeting_time)
```

The output will be `14:30:00`

Seconds and microseconds can also be included.

```py
precise_time = time(14, 30, 45)
print(precise_time)
```

Each component of the time can be accessed separately.

```py
print(precise_time.hour) # 14
print(precise_time.minute) # 30
print(precise_time.second) # 45
```

Time values can be compared using standard comparison operators.

```py
time1 = time(9, 0)
time2 = time(14, 30)

print(time1 < time2) # True
print(time1 == time2) # False
```

This allows programs to determine ordering within a single day, such as checking whether a store is open or whether a scheduled task should run.

It is important to note that a `time` object does not contain any information about a specific day. It only represents a clock time. Because of this, it cannot be used on its own to describe an exact moment in real-world time.

Like dates, time objects are immutable. Once created, their values cannot be changed.

Working with time becomes more useful when it is combined with a date to represent a complete point in time.

In the next section, we combine date and time into a single value.

## Combining date and time

Working with dates and times separately is useful, but many real-world scenarios require both together to represent an exact moment.

A date alone represents a day, and a time alone represents a moment within a day. When combined, they form a **datetime**, which describes a precise point in time.

In Python, this is done using the `datetime` class from the `datetime` module.

```py
from datetime import datetime
```

A datetime value can be created by providing both date and time components.

```py
dt = datetime(2026, 3, 24, 14, 30)
print(dt)
```

The output will be `2026-03-24 14:30:00`

Each part of the datetime can be accessed individually.

```py
print(dt.year) # 2026
print(dt.month) # 3
print(dt.day) # 24
print(dt.hour) # 14
print(dt.minute) # 30
```

This makes it possible to work with both date and time information in a single object.

In many cases, date and time values already exist separately and need to be combined. This can be done using the `combine` method.

```py
from datetime import date, time, datetime

d = date(2026, 3, 24)
t = time(14, 30)

dt = datetime.combine(d, t)
print(dt)
```

Datetime values can be compared just like dates and times.

```py
dt1 = datetime(2026, 3, 24, 10, 0)
dt2 = datetime(2026, 3, 24, 14, 30)

print(dt1 < dt2) # True
```

This allows programs to determine ordering between exact moments, which is important for scheduling, logging, and time-based logic.

Unlike separate date or time values, a datetime represents a complete point in time. Because of this, it is one of the most commonly used objects when working with time-related data.

In the next section, we look at how to get the current date and time from the system.

## Getting the current date and time

In many applications, it is necessary to work with the **current date and time**. This is commonly used for logging events, creating timestamps, measuring durations, or recording when an action occurred.

Python provides built-in methods to retrieve the current date and time from the system clock.

To get the current date, the `date.today()` method is used.

```py
from datetime import date

today = date.today()
print(today)
```

This returns the current date based on the system time.

To get the current date and time together, the `datetime.now()` method is used.

```py
from datetime import datetime

now = datetime.now()
print(now)
```

The output includes both the date and time `2026-03-24 14:30:45.123456`

The value may also include microseconds, which represent very small fractions of a second.

If only the current time is needed, it can be extracted from a datetime object.

```py
current_time = now.time()
print(current_time)
```

In some cases, it is important to work with the current time in a standardized format. For example, systems that operate across different regions often use **UTC (Coordinated Universal Time)**.

Python provides a way to get the current UTC datetime.

```py
utc_now = datetime.utcnow()
print(utc_now)
```

This returns the current time in UTC rather than local system time.

It is important to understand that the values returned by these methods depend on the system clock. If the system time is incorrect, the returned date and time will also be incorrect.

Getting the current date and time is often the starting point for many operations, such as formatting values, performing calculations, or storing timestamps.

In the next section, we look at how to format date and time values for display.

## Formatting date and time values

Date and time values are often stored as structured objects, but they are usually displayed to users as formatted text.

Formatting is the process of converting a date or datetime object into a string that follows a specific pattern.

In Python, this is done using the `strftime` method.

```py
from datetime import datetime
```

A datetime value can be formatted into different representations depending on the format string provided.

```py
now = datetime(2026, 3, 24, 14, 30)

formatted = now.strftime("%Y-%m-%d")
print(formatted)
```

The output will be `2026-03-24`

The format string contains directives, which are placeholders that define how each part of the date and time should appear.

Some common directives include.

- `%Y` year for example 2026  
- `%m` month as a number from 01 to 12  
- `%d` day of the month from 01 to 31  
- `%H` hour in 24-hour format from 00 to 23  
- `%M` minutes from 00 to 59  
- `%S` seconds from 00 to 59

These can be combined to create custom formats.

```py
formatted = now.strftime("%d/%m/%Y %H:%M")
print(formatted)
```

Output `24/03/2026 14:30`

Another example with a more descriptive format.

```py
formatted = now.strftime("%B %d, %Y")
print(formatted)
```

Output `March 24, 2026`

Formatting is useful when displaying data to users, generating reports, or preparing values for output in APIs.

It is important to remember that formatting converts a date or datetime into a string. Once converted, it is no longer a date object and cannot be used directly for calculations or comparisons.

Because of this, programs often convert values back and forth between structured date/time objects and formatted strings.

In the next section, we look at how to parse date and time values from strings.

## Parsing date and time from strings

In many applications, date and time values are received as text. For example, user input, API responses, or data stored in files are often represented as strings.

Parsing is the process of converting these strings into structured date or datetime objects that can be used in code.

In Python, parsing is done using the `strptime` method.

```py
from datetime import datetime
```

A string can be converted into a datetime object by providing the string and the format that matches its structure.

```py
date_string = "2026-03-24 14:30"
dt = datetime.strptime(date_string, "%Y-%m-%d %H:%M")

print(dt)
```

The output will be `2026-03-24 14:30:00`.

The format string must exactly match the structure of the input string. If the format does not match, parsing will fail.

For example, parsing a different format.

```py
date_string = "24/03/2026"
dt = datetime.strptime(date_string, "%d/%m/%Y")

print(dt)
```

It is also possible to parse only a date without time.

```py
from datetime import datetime

date_string = "2026-03-24"
d = datetime.strptime(date_string, "%Y-%m-%d").date()

print(d)
```

Parsing is the opposite of formatting. Formatting converts a datetime object into a string, while parsing converts a string into a datetime object.

Because input data often comes from external sources, parsing is an important step in making sure the data can be used safely and correctly inside the program.

In the next section, we look at how to perform calculations with date and time values.

## Date and time arithmetic

Working with date and time often involves performing calculations. This includes finding the difference between two values or adding and subtracting time.

In Python, date and datetime arithmetic is handled using the `timedelta` class from the `datetime` module.

```py
from datetime import datetime, date, timedelta
```

A `timedelta` represents a duration, such as a number of days, hours, or minutes.

A difference between two dates produces a timedelta.

```py
d1 = date(2026, 3, 24)
d2 = date(2026, 4, 1)

difference = d2 - d1
print(difference)
```

The output will be `8 days, 0:00:00`.

The number of days can be accessed directly.

```py
print(difference.days)
```

Timedeltas can also be used to add or subtract time.

```py
today = date(2026, 3, 24)

future = today + timedelta(days=7)
past = today - timedelta(days=3)

print(future)
print(past)
```

Timedeltas support different units.

```py
duration = timedelta(days=1, hours=2, minutes=30)
print(duration)
```

Date and time arithmetic also works with datetime objects.

```py
now = datetime(2026, 3, 24, 14, 30)

later = now + timedelta(hours=5)
earlier = now - timedelta(minutes=45)

print(later)
print(earlier)
```

These operations allow programs to calculate deadlines, measure durations and shift time values forward or backward.

It is important to remember that date and datetime objects are immutable. Arithmetic operations always return new objects rather than modifying the original values.

Date and time arithmetic is a core part of working with time-based data, especially in applications that involve scheduling, tracking, or time intervals.

In the next section, we look at how to compare date and time values.

## Comparing dates and times

In many situations, programs need to compare date and time values to make decisions.

For example, an application may need to check whether a deadline has passed, whether one event happened before another, or whether two timestamps are equal.

In Python, date, time and datetime objects can be compared using standard comparison operators.

```py
from datetime import date, time, datetime
```

Dates can be compared directly.

```py
d1 = date(2026, 3, 24)
d2 = date(2026, 4, 1)

print(d1 < d2) # True
print(d1 > d2) # False
print(d1 == d2) # False
```

Time values can also be compared.

```py
t1 = time(9, 0)
t2 = time(14, 30)

print(t1 < t2) # True
print(t1 == t2) # False
```

Datetime values allow comparison of exact moments.

```py
dt1 = datetime(2026, 3, 24, 10, 0)
dt2 = datetime(2026, 3, 24, 14, 30)

print(dt1 < dt2) # True
```

Comparison operators include

- `<` less than
- `>` greater than
- `==` equal to
- `!=` not equal to
- `<=` less than or equal to
- `>=` greater than or equal to

It is important that values being compared are of the same type. For example, comparing a `date` with a `datetime` directly may not behave as expected.

```py
d = date(2026, 3, 24)
dt = datetime(2026, 3, 24, 10, 0)

# Convert datetime to date before comparing
print(d == dt.date())
```

Comparisons are commonly used for filtering data, checking conditions, and controlling program flow based on time.

In the next section, we look at how timezones affect date and time values.

## Timezones

So far, date and time values have been treated as if they represent a single universal clock. In reality, time depends on location.

A **timezone** defines how a specific region relates to a standard reference time. The most common reference is **UTC (Coordinated Universal Time)**.

Different regions use different offsets from UTC. For example, one region may use UTC+2 while another uses UTC-5. This means the same moment in time can be represented differently depending on location.

For example, the same moment could be

- `2026-03-24 12:00` in one timezone  
- `2026-03-24 14:00` in another timezone  

Both represent the same point in time, but with different local representations.

In Python, timezones can be handled using the `timezone` class from the `datetime` module.

```py
from datetime import datetime, timezone
```

A datetime can be created with timezone information.

```py
now_utc = datetime.now(timezone.utc)
print(now_utc)
```

This creates a datetime in UTC.

A datetime that includes timezone information is called **aware**, while one without it is called **naive**.

```py
naive = datetime.now()
aware = datetime.now(timezone.utc)

print(naive)
print(aware)
```

Timezones are important when working with applications that serve users in different regions. Without proper handling, the same event may appear at incorrect times for different users.

A common approach is to store all datetime values in UTC and convert them to local time only when displaying them to users.

Timezones also affect comparisons and calculations. Two datetime values that look different may actually represent the same moment if they belong to different timezones.

Because of this, timezone handling is an important part of working with real-world date and time data.

In the next section, we look more closely at naive and aware datetime objects.

## Naive and aware datetime objects

When working with datetime values, it is important to understand the difference between **naive** and **aware** objects.

A **naive datetime** does not contain any timezone information. It represents a date and time, but it does not specify where that time applies.

```py
from datetime import datetime

naive = datetime(2026, 3, 24, 14, 30)
print(naive)
```

This value looks complete, but it does not indicate whether it is **UTC**, **local time** or **any specific timezone**.

An aware datetime includes timezone information. It represents a specific moment in time with a defined reference.

```py
from datetime import datetime, timezone

aware = datetime(2026, 3, 24, 14, 30, tzinfo=timezone.utc)
print(aware)
```

Because aware datetimes include timezone data, they can be interpreted consistently across different systems and locations.

The difference between naive and aware objects becomes important when comparing or converting values.

Naive datetimes should not be directly compared with aware datetimes, because they do not share the same reference.

```py
from datetime import datetime, timezone

naive = datetime(2026, 3, 24, 14, 30)
aware = datetime(2026, 3, 24, 14, 30, tzinfo=timezone.utc)

# This may lead to incorrect results or errors
# print(naive == aware)
```

To work safely with time across different regions, it is recommended to use aware datetimes.

A common approach is

- store all datetime values in UTC as aware objects
- convert them to local time only when displaying to users

This avoids ambiguity and ensures that all systems interpret the same moment consistently.

Naive datetimes are still useful in simple applications where timezone differences are not relevant, but they can lead to problems in larger systems.

Understanding this distinction is essential before working with timestamps and more advanced time handling.

In the next section, we look at timestamps.

## Timestamps

A **timestamp** is a way of representing a specific moment in time as a single number.

Instead of storing separate values such as year, month, day, hour, and minute, a timestamp represents time as the number of seconds that have passed since a fixed reference point.

This reference point is called the **Unix epoch**, which is

```text
1970-01-01 00:00:00 UTC
```

For example, a timestamp may look like this `1711281000`

This number represents how many seconds have passed since the Unix epoch.

Timestamps are widely used in programming because they are simple, compact, and easy to compare. Two timestamps can be compared directly as numbers to determine which moment comes first.

In Python, a timestamp can be obtained from a datetime object.

```py
from datetime import datetime

now = datetime.now()
ts = now.timestamp()

print(ts)
```

This returns a floating-point number representing seconds since the epoch.

A timestamp can also be converted back into a datetime object.

```py
from datetime import datetime

ts = 1711281000
dt = datetime.fromtimestamp(ts)

print(dt)
```

If working with UTC, a specific method can be used.

```py
dt = datetime.utcfromtimestamp(ts)
print(dt)
```

At this point, it is important to understand how date and time values behave when working with data structures and external systems.

Inside Python, datetime is a proper object. However, when data is sent or stored using formats such as JSON, only a limited set of types is supported. These include **text**, **numbers**, `true` or `false` values, `null` values, `arrays` and `objects`.

Date and time are not included in this set.

Because of this, datetime values cannot be used directly and must be converted into a supported format. In practice, they are usually converted into a string or a timestamp.

For example, storing as a string

```py
data = {
    "created_at": "2026-03-24T14:30:00"
}
```

Or storing as a timestamp

```py
data = {
    "created_at": 1711281000
}
```

When the data is read again, it should be converted back into a datetime object.

```py
from datetime import datetime

dt = datetime.strptime("2026-03-24T14:30:00", "%Y-%m-%dT%H:%M:%S")
```

or

```py
dt = datetime.fromtimestamp(1711281000)
```

This approach ensures that date and time values can be safely transferred and then restored for use in calculations and comparisons.

In practice, applications convert datetime values before sending or storing them and convert them back after receiving them.
