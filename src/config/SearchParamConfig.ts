import AppMessage from "../enums/AppMessage"
import URLSearchParamKey from "../enums/URLSearchParamKey"
import URLSearchParamValue from "../enums/URLSearchParamValue"
import { showSimpleToast } from "../helpers/ToastHelpers"
import { SearchParamConfigEntry } from "../types/SearchParamConfigEntry"
import { appMessageConfig } from "./AppMessageConfig"

export const searchParamConfig: Array<SearchParamConfigEntry> = [
  {
    key: URLSearchParamKey.FROM,
    value: URLSearchParamValue.MAILCHIMP_SUBSCRIPTION_SUCCESSFUL,
    action: () =>
      showSimpleToast(
        appMessageConfig[AppMessage.MAILCHIMP_SUBSCRIPTION_SUCCESSFUL]
      ),
  },
]
