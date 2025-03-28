# Filter Operations

[[toc]]

Filter operations are used to apply specific conditions to the data being queried. They help in narrowing down the
results based on various criteria. Filter operations are registered in the `config/datagrids.php` file under the
`filter_operations` key. Each filter operation class must extend the `AbstractFilterOperation` class and implement the
`FilterOperationContract` interface.

## Configuration

The filter operations are configured in the `config/datagrids.php` file:

```php
<?php

return [
    'filter_operations' => [
         // Equality
        EqualsFilterOperation::class,
        DoesNotEqualFilterOperation::class,

        // In
        InFilterOperation::class,
        NotInFilterOperation::class,

        // Numeric
        GreaterThanFilterOperation::class,
        GreaterThanOrEqualToFilterOperation::class,
        LessThanFilterOperation::class,
        LessThanOrEqualToFilterOperation::class,

        // String
        ContainsFilterOperation::class,
        DoesNotContainFilterOperation::class,
        EndsWithFilterOperation::class,
        StartsWithFilterOperation::class,
    ],
];
```

This configuration ensures that the specified filters are available for use in the application. Each filter class
defines the conditions it can handle and the logic to apply those conditions to the query.

## Available Filter Operations

### Equality

| Filter Operation            | Description                                            |
|-----------------------------|--------------------------------------------------------|
| EqualsFilterOperation       | Checks if a value is equal to the specified value.     |
| DoesNotEqualFilterOperation | Checks if a value is not equal to the specified value. |

### Strings

| Filter Operation              | Description                                                  |
|-------------------------------|--------------------------------------------------------------|
| ContainsFilterOperation       | Checks if a string contains the specified substring.         |
| DoesNotContainFilterOperation | Checks if a string does not contain the specified substring. |
| EndsWithFilterOperation       | Checks if a string ends with the specified substring.        |
| StartsWithFilterOperation     | Checks if a string starts with the specified substring.      |

### Numeric

| Filter Operation                    | Description                                                        |
|-------------------------------------|--------------------------------------------------------------------|
| GreaterThanFilterOperation          | Checks if a value is greater than the specified value.             |
| GreaterThanOrEqualToFilterOperation | Checks if a value is greater than or equal to the specified value. |
| LessThanFilterOperation             | Checks if a value is less than the specified value.                |
| LessThanOrEqualToFilterOperation    | Checks if a value is less than or equal to the specified value.    |

### Sets

| Filter Operation     | Description                                                |
|----------------------|------------------------------------------------------------|
| InFilterOperation    | Checks if a value is within a specified set of values.     |
| NotInFilterOperation | Checks if a value is not within a specified set of values. |
