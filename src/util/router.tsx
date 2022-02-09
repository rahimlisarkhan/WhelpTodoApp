import { RouterType } from "../interface/router";



export const router: RouterType = {
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