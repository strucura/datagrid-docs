# Columns

[[toc]]

Columns in DataGrids are used to define the structure and behavior of the data displayed in the grid. Each column represents a specific attribute of the data and can be customized to control how the data is presented and interacted with.

## Column Types

DataGrids support various column types, each designed to handle different kinds of data. The available column types include:

| Column Type       | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **StringColumn**  | For textual data.                                                           |
| **NumberColumn**  | For numerical data, with options for floating-point, signed, and unsigned numbers. |
| **BooleanColumn** | For boolean values, with customizable display formats for true and false values. |
| **DateColumn**    | For date values, with customizable display formats.                         |
| **DateTimeColumn**| For date and time values, with customizable display formats.                |
| **TimeColumn**    | For time values, with customizable display formats.                         |
| **PointColumn**   | For geographical point data, represented as latitude and longitude.         |

## Customizing Columns

Columns in DataGrids support macros, allowing for extendability and customization. Macros enable you to add custom methods to the column classes, providing a flexible way to extend their functionality.

### Defining a Macro

To define a macro, use the `macro` method on the column class. Here is an example of how to define a custom macro:

```php
use Strucura\DataGrid\Columns\StringColumn;

// Define a custom macro
StringColumn::macro('customMethod', function ($param) {
    // Custom logic here
    return $this;
});
```

### Using a Macro

Once a macro is defined, you can use it like any other method on the column instance:

```php
$column = \Strucura\DataGrid\Columns\StringColumn::make('users.name', 'Name')->customMethod('value');
```

By leveraging macros, you can easily extend the functionality of columns to meet your specific requirements.

## Generic Column Helper Methods

All columns share some common helper methods that control their behavior:

### Hiding a Column

To hide a column by default:

```php
$column->hidden();
```

### Disabling Sorting

To disable sorting for a column:

```php
$column->withoutSorting();
```

### Disabling Filtering

To disable filtering for a column:

```php
$column->withoutFiltering();
```

### Adding Prefix or Postfix

To add a prefix or postfix to the column values:

```php
$column->prefix('Prefix');
$column->postfix('Postfix');
```
