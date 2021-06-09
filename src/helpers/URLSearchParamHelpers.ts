import { searchParamConfig } from "../config/SearchParamConfig"
import { clearSearchParams, isSearchParamValid } from "./WindowHelpers"

export const runSearchParamChecks = () => {
  searchParamConfig.forEach(config => {
    if (isSearchParamValid(config.key, config.value)) {
      config.action()
    }
  })
  clearSearchParams()
}


