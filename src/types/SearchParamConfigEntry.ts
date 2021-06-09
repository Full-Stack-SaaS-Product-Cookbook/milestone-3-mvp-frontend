import URLSearchParamKey from "../enums/URLSearchParamKey";
import URLSearchParamValue from "../enums/URLSearchParamValue";

export type SearchParamConfigEntry = {
    key: URLSearchParamKey,
    value: URLSearchParamValue,
    action: () => void
}