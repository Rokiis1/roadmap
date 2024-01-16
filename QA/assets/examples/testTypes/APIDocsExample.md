# Content of table

- [API Reference](#api-reference)
- [Demo](#demo)

## API Reference

#### Create user

```http
  POST /Account/v1/User
```

| Object | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userName` | `string` | **Required**. user Name |
| `password` | `string` | **Required**. user password |

#### Update one book

```http
  PUT /BookStore/v1/Books/{ISBN}
```



| Authentification | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`   | `string` | **Required**. Bearer Token must be  |

| Parameters | Type     | Description                     |
| :-------- | :------- | :-------------------------------- |
| `isbn`      | `string` | **Required**. isbn must be to update a book  |

| Object | Type     | Description                     |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. userId is required  |  
| `isbn`      | `string` | **Required**. isbn must be to update a book  |

## Demo

- [Dosc: BookstoreAPI](https://bookstore.toolsqa.com/swagger/)
