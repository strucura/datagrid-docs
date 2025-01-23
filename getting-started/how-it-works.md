# How It Works

[[toc]]

## Schema and Data

Every DataGrid is broken up into Schema and Data. The schema for every DataGrid contains column definitions which are used to communicate to the front end how to render the data. It identifies the type of data, the label to display, metadata which can be used to communicate to the front end any data manipulations that need to be done, and whether the column is sortable, hidden, or filterable. Additionally, the schema contains the definition of filter inputs that can be used to filter the data.

### Sample Schema

```json
{
    "columns": [
        {
            "alias": "Name",
            "type": "string",
            "is_sortable": true,
            "is_filterable": true,
            "is_hidden": false,
            "meta": []
        }
    ],
    "external_filter_inputs": [
        {
            "alias": "Registration Date",
            "type": "date_range",
            "meta": []
        }
    ]
}
```

## Database Query Expressions

We use the columns and filter inputs to create database query expressions that will be mapped to an alias which can then be referenced by the front end to easily perform sorting and filtering operations.

## Requesting Data

From here, the front end can request data from the server using filters and filter sets as well as sorting information through a RESTful API.

### Sample Request

```json
{
  "first": 0,
  "last": 1000,
  "sorts": [
    {
      "alias": "Name",
      "sort_operator": "asc"
    }
  ],
  "filter_sets": [
    {
      "filter_set_operator": "and",
      "filters": [
        {
          "alias": "Name",
          "filter_operator": "stringContains",
          "value": "Andrew"
        }
      ]
    }
  ]
}
```

## Server Response

The server will then take this request and apply the filters to the query, returning the data to the front end. The front end will then render the data using the schema provided. This process is repeated every time the user interacts with the DataGrid.

### Sample Response

```json
{
    "rows": [
        {
            "ID": 1,
            "Name": "Andrew",
            "Email": "andrew@leachcreative.com",
            "Created At": "2025-01-21 20:55:55",
            "Updated At": "2025-01-21 20:55:55"
        }
    ],
    "total_row_count": 1
}
```
