


export const router: any = {
    "home": {
        "href": "/"
    },
    "todo": {
        "href": "/todo",
        "children": {
            "my-day": {
                "href": "/todo/my-day"
            },
            "important": {
                "href": "/todo/important"
            }
        }
    }

}