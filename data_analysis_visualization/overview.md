# Overview

When working with data, the first thing we need to understand is how raw information can be loaded, inspected, cleaned, transformed and visualized.

This is where **data analysis** comes in.

Data analysis is the process of working with data in order to understand it, find patterns, calculate useful values and prepare it for decision making or further processing.

Python is commonly used for data analysis because it provides powerful libraries for different parts of the workflow.

In this module, we focus on three main tools.

**Jupyter Notebook** is used as an *interactive environment* where we can write code, run cells, inspect results and experiment with data step by step.

**NumPy** is used for *numerical computation*. It provides arrays and efficient operations for working with numbers.

**Pandas** is used for *data manipulation and analysis*. It provides structures such as `Series` and `DataFrame`, which make it easier to work with tabular data.

Later, we also use **Matplotlib** to visualize data and create charts.

The general data analysis workflow looks like this.

![data_analysis_workflow](./assets/images/data_analysis_workflow.png)

We will go through each part step by step in different levels and see how they work.

- **Level 1:** We will start with the basics of `Jupyter Notebook`, `NumPy`, `Pandas`, `Series`, `DataFrame`, reading data from files and inspecting data with methods such as `head()`, `shape`, `info()` and `describe()`.

- **Level 2:** Then we will learn how to select, filter, clean and modify data using column selection, row filtering, `loc`, `iloc`, `replace()`, `map()` and calculated columns.

- **Level 3:** After that, we will work with indexes, sorting, grouping, aggregation, pivot tables and reshaping data using methods such as `groupby()`, `agg()`, `pivot_table()`, `melt()`, `stack()` and `unstack()`.

- **Level 4:** Finally, we will focus on data visualization and exploratory data analysis using `Matplotlib` and charts such as line plots, scatter plots, bar charts, histograms and box plots.