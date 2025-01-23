# Normalizers

Normalizers are used to perform data manipulations on the value of a filter before applying it to the query. They ensure that the filter values are in the correct format and type required by the database query. Value normalizers are registered in the `config/datagrids.php` file under the `normalizers` key. Each normalizer class must implement the `NormalizerContract` interface.

## Use Case
Consider a scenario where you have a data grid that filters user records based on their active status. The filter input might come from a form where the user selects "Active" or "Inactive" from a dropdown. The form submission sends these values as strings ('true' or 'false'). The BooleanNormalizer ensures that these string values are converted to actual boolean types (true or false) before applying the filter to the database query. This conversion is crucial for the database to correctly interpret and apply the filter, ensuring accurate query results.

## Configuration

The normalizers are configured in the `config/datagrids.php` file:

```php
<?php

return [
    'normalizers' => [
        BooleanNormalizer::class,
        TimezoneNormalizer::class,
        FloatNormalizer::class,
        IntegerNormalizer::class,
        NullNormalizer::class,
    ],
];
```
This configuration ensures that the specified normalizers are applied to filter values in the order they are listed.  

## Available Normalizers

### Boolean
The BooleanNormalizer converts string representations of boolean values to actual boolean types.  Example:  
- 'true' or 'on' will be converted to true
- 'false' or 'off' will be converted to false

### Float
The FloatNormalizer converts numeric strings containing a decimal point to float values.  Example:  
'123.45' will be converted to 123.45

### Integer
The IntegerNormalizer converts numeric strings without a decimal point to integer values.  Example:  
'123' will be converted to 123

### Null
The NullNormalizer converts specific string values to null.  Example:  
'null' or an empty string '' will be converted to null
