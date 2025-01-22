# Filter Operations

Filter operations are used to apply specific conditions to the data being queried. They help in narrowing down the
results based on various criteria.  Filter operations are registered in the `config/datagrids.php` file under the
`filter_operations` key. Each filter operation class must extend the `AbstractFilterOperation` class and implement the `FilterOperationContract`
interface.

```php
<?php

return [
    'filter_operations' => [
        // Equality
        EqualsFilterOperation::class,
        DoesNotEqualFilterOperation::class,
    
        // Dates
        DateAfterFilterOperation::class,
        DateBeforeFilterOperation::class,
        DateIsFilterOperation::class,
        DateIsNotFilterOperation::class,
        DateOnOrBeforeFilterOperation::class,
        DateOnOrAfterFilterOperation::class,
    
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
]
```

This configuration ensures that the specified filters are available for use in the application. Each filter class defines the conditions it can handle and the logic to apply those conditions to the query.
