# Quick Start

You can install the package via composer:

```bash
composer require strucura/datagrids
```

## Configuration

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="datagrids-config"
```

### Discovery of DataGrids

The discovery of grids in the application is configured in the `config/datagrids.php` file. This configuration allows
the package to automatically discover grid classes within specified paths and under certain conditions.

Here is how the discovery process is set up:

1. **Paths**: The `paths` array specifies the directories where the package will look for grid classes. By default, it includes the `app` directory.
2. **Conditions**: The `conditions` array defines the criteria that a class must meet to be considered a grid. In this case, it uses the `DiscoverCondition` class to find classes that implement the `GridContract` interface.

```php
<?php

return [
    'route_registration' => [
        'enabled' => true,
        'discovery' => [
            'paths' => [
                app_path(''),
            ],
            'conditions' => [
                ConditionBuilder::create()
                    ->classes()
                    ->extending(AbstractDataGrid::class),
            ],
        ],
    ],
]
```

This setup ensures that any class within the specified paths that implements the `AbstractDataGrid` interface will be
automatically discovered and registered as a grid in the application.

## Usage

To create a new grid, you need to define a class that extends the `AbstractDataGrid` class and implements the required
methods. To make this easier, we've added a make command that can be invoked with `php artisan make:datagrid {name}`. 
Below is an sample of a grid class:

```php
<?php

namespace Strucura\DataGrid\Tests\Fakes;

use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Strucura\DataGrid\Abstracts\AbstractDataGrid;
use Strucura\DataGrid\Columns\DateTimeColumn;
use Strucura\DataGrid\Columns\NumberColumn;
use Strucura\DataGrid\Columns\StringColumn;
use Strucura\DataGrid\Contracts\DataGridContract;

class ActiveUserDataGrid extends AbstractDataGrid implements DataGridContract
{
    public function getColumns(): Collection
    {
        return collect([
            NumberColumn::make('users.id', 'ID'),
            StringColumn::make('users.name', 'Name'),
            StringColumn::make('users.email', 'Email'),
            DateTimeColumn::make('users.created_at', 'Created At'),
            DateTimeColumn::make('users.created_at', 'Updated At'),
        ]);
    }

    public function getQuery(): Builder
    {
        return DB::table('users');
    }
}
```

In this example, the `ActiveUserDataGrid` class defines the columns and the query for the grid. The `getColumns` method
returns a collection of columns, and the `getQuery` method returns the query builder instance for the grid.

Once created, and picked up by the discovery process, new routes will be registered for the grid.  These routes will
allow for fetching the data for the grid, and for fetching the column schema for the grid.  Using the
`ActiveUserDataGrid`
as an
example, the following routes will be registered:

```
POST       grids/active-users/data ............... grids.active-users.data
POST       grids/active-users/schema ............. grids.active-users.schema
```
