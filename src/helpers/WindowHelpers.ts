export const isSearchParamValid = (key: string, value: string): boolean => {
  const search = typeof window !== "undefined" ? window.location.search : ""
  const searchParam = new URLSearchParams(search)
  return searchParam.has(key) && searchParam.get(key) === value
}

export const clearSearchParams = (): void => {
    if (typeof window !== "undefined") {
        window.history.replaceState("", "", window.location.pathname)
    }
}