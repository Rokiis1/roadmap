# API Reference

#### Get home page videos

```http
  GET /search?maxResults=20&q=""&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `isNext`  | `string` | **Required**. isNext  |
| `pageToken` | `boolean`| **Required**. next Page Token |

#### Get recommended videos 

```http
  GET /activities?key=${API_KEY}&channelId=${channelId}&part=snippet,
  contentDetails&maxResults=20&type=video&videoId=${videoId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `channelId`| `number`| **Required**. channelId |
| `videoId`| `string`  | **Required**. videoId |

#### Get search page videos

```http
  GET videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`| `string`| **Required**. id |

#### Get channel

```http
  GET /channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `channelId`| `string`| **Required**. channelId |