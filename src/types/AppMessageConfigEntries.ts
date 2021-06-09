import AppMessage from "../enums/AppMessage";

export type AppMessageConfigEntries = {
    [key in AppMessage]: string
}