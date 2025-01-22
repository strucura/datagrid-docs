# Normalizers

Normalizers are used to perform data manipulations on the value of a filter before applying it to the query.
They ensure that the filter values are in the correct format and type required by the database query.  Value
normalizers are registered in the `config/datagrids.php` file under the `normalizers` key. Each normalizer class must
implement the `NormalizerContract` interface.

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
]
```

This configuration ensures that the specified normalizers are applied to filter values in the order they are listed.
