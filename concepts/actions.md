# Actions (Coming Soon)

Actions in the DataGrids package allow users to perform operations on individual rows or collections of rows within a data grid. There are two main types of actions: Inline Actions and External Actions.

### Inline Actions

Inline Actions are designed to be executed against a specific row in the data grid. These actions are typically displayed as a dropdown on the row on the table, allowing users to perform operations directly on that row. If a resource is provided, the row will be passed as the model instance.

#### Example

```php
use Strucura\DataGrid\Actions\Action;
use App\Models\User;

$inlineAction = Action::make('Edit', function (User $user) {
    // Logic to edit the user model
});
```

### Bulk Actions

Bulk Actions are intended to be performed against multiple rows at once. These actions are usually displayed outside 
the data grid, such as in a toolbar or a dropdown menu, and allow users to select multiple rows and apply the action to all of them simultaneously. If a resource is provided, the rows will be passed as model instances, and the action will handle the iteration of each row's record behind the scenes, so the closure will only ever touch a single row/record at a time.

#### Example

```php
use Strucura\DataGrid\Actions\Action;
use App\Models\User;

$bulkAction = Action::make('Delete', function (User $user) {
    // Logic to delete a single user model
    $user->delete();
});
```

In this example, the `Delete` action will iterate over each selected user model and delete them one by one.

### Resource in DataGrids

A resource in the context of a data grid refers to the underlying model that the data grid is representing. When a data grid has a valid resource, actions can be performed directly on the model instances. This changes the flow of an action by allowing it to interact with the database records associated with the rows.

#### Example

```php
use Strucura\DataGrid\Abstracts\AbstractDataGrid;
use App\Models\User;

class UserDataGrid extends AbstractDataGrid
{
    public ?string $resource = User::class;
}
```

### Row Key

The row key is used to identify the resource or give the Action on the backend context for how to identify what should be touched. This is defined on the `AbstractColumn` using the `->asRowKey()` method.

#### Example

```php
use Strucura\DataGrid\Columns\NumberColumn;

$column = NumberColumn::make('id', 'ID')->asRowKey();
```

### Handling Authorization for Actions

Authorization for actions is handled using the `withAuthorization` method. This method allows you to specify a closure, array, or string that determines whether the action is authorized to be executed. The `isAuthorized` method checks the authorization before performing the action.

#### Closure

If the authorization method is a closure, you can write your own custom logic for authorization. The closure receives the current request as a parameter and should return a boolean indicating whether the action is authorized.

```php
$action = Action::make('Delete', function ($row) {
    // Logic to delete the row
})->withAuthorization(function ($request) {
    // Custom authorization logic
    return $request->user()->hasRole('admin');
});
```

#### Array

If the authorization method is an array, it will check against an array of permissions. The action will be authorized if the user has all the specified permissions.

```php
$action = Action::make('Delete', function ($row) {
    // Logic to delete the row
})->withAuthorization(['delete-post', 'edit-post']);
```

#### String

If the authorization method is a string, it will check against a single permission. The action will be authorized if the user has the specified permission.

```php
$action = Action::make('Delete', function ($row) {
    // Logic to delete the row
})->withAuthorization('delete-post');
```

These variations provide flexibility in defining how actions are authorized within the DataGrids package.
