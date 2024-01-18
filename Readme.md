# FLICKR API

FLICKR API is a API which will serve an images with its information for example : Title, Description,etc.

## How To Run

Run API in Development Mode

```
    npm start
```

Run API in Production Mode

```
    npm run start:prod
```

## API ENDPOINT

To Check Server Status

```
/
```

To Get Images Data

```
/images
```

Available Query :

1. tags
2. page
3. itemsPerPage

To Get Single Image Data

```
/images/:id
```

## Response Example

Endpoint:

```
/images/
```

Response:

```
{
    "statusCode": 200,
    "message": "Data Fetched",
    "body": {
        "CurrentPage": 1,
        "pages": 100,
        "perpage": 10,
        "total": 1000,
        "photos": [
            {
                "id": "53470464632",
                "secret": "8eaf22d5d1",
                "server": "65535",
                "farm": 66,
                "title": "",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53470464632_8eaf22d5d1.jpg"
            },
            {
                "id": "53471372496",
                "secret": "17afa97d3d",
                "server": "65535",
                "farm": 66,
                "title": "95-5-(6)-copy",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471372496_17afa97d3d.jpg"
            },
            {
                "id": "53471372736",
                "secret": "4847310169",
                "server": "65535",
                "farm": 66,
                "title": "Sshhh",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471372736_4847310169.jpg"
            },
            {
                "id": "53471510048",
                "secret": "707dd9a489",
                "server": "65535",
                "farm": 66,
                "title": "",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471510048_707dd9a489.jpg"
            },
            {
                "id": "53471510118",
                "secret": "024ea7913b",
                "server": "65535",
                "farm": 66,
                "title": "DSC_0319~2",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471510118_024ea7913b.jpg"
            },
            {
                "id": "53471682079",
                "secret": "9e2d48520b",
                "server": "65535",
                "farm": 66,
                "title": "",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471682079_9e2d48520b.jpg"
            },
            {
                "id": "53471788375",
                "secret": "895655d65c",
                "server": "65535",
                "farm": 66,
                "title": "Bicester North",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471788375_895655d65c.jpg"
            },
            {
                "id": "53471789345",
                "secret": "021b7f8481",
                "server": "65535",
                "farm": 66,
                "title": "Silencer is in place! Now it‘s time to settle the bill!",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471789345_021b7f8481.jpg"
            },
            {
                "id": "53471789365",
                "secret": "7c334c4f16",
                "server": "65535",
                "farm": 66,
                "title": "World Economic Forum Annual Meeting",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471789365_7c334c4f16.jpg"
            },
            {
                "id": "53471789610",
                "secret": "93ef7c7575",
                "server": "65535",
                "farm": 66,
                "title": "240114-06705.jpg",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0,
                "url": "https://live.staticflickr.com/65535/53471789610_93ef7c7575.jpg"
            }
        ]
    }
}
```
