
export interface RouterType{
    "home": {
        "href": string
    },
    "todo": {
        "href": string,
        "children": {
            "my-day": {
                "href": string
            },
            "important": {
                "href": string
            }
        }
    }

}