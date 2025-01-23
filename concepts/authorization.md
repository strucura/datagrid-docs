# Authorization

By default, all DataGrids are accessible to the public, but we support tying into Laravel's authorization system to restrict access to specific DataGrids based on user roles and permissions.  Simply add the `getPermissionName` method to your DataGrid class and return the permission name that should be checked.  From there, it will be passed off to Laravel's Gate::authorize() method to check if the user has the required permission.
