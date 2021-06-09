import ApiErrorMessage from "../enums/ApiErrorMessage";

export type ApiErrorMessageConfigEntries = {
    [key in ApiErrorMessage]: string
}