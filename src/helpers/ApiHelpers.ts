import { apiErrorMessageConfig } from "../config/ApiErrorMessageConfig"
import ApiErrorMessage from "../enums/ApiErrorMessage"
import HTTPMethod from "../enums/HTTPMethod"
import ResponseForm from "../enums/ResponseForm"
import IApiConnectorParams from "../interfaces/IApiConnectorParams"
import IApiErrorMessage from "../interfaces/IApiErrorMessage"
import { showSimpleToast } from "./ToastHelpers"

export const get = async <T>(
  body: IApiConnectorParams,
  onSuccess: (data: T) => void,
  onError: (data: IApiErrorMessage) => void
): Promise<void> => {
  try {
    const response = await fetch("/.netlify/functions/api-connector", {
      method: HTTPMethod.POST,
      body: JSON.stringify(body),
    })
    if (response.ok) {
      const data =
      body.responseForm === ResponseForm.JSON
        ? await response.json()
        : await response.text()
      return onSuccess(data)
    }
    const errorData = await response.json()
    if (Object.keys(apiErrorMessageConfig).includes(errorData.apiErrorMessage)) {
      return onError(errorData)
    }
  } catch (error) {}
  showSimpleToast(apiErrorMessageConfig[ApiErrorMessage.UNKNOWN_ERROR])
}

export const post = async <T, U>(
  body: IApiConnectorParams & { body: T },
  onSuccess: (data: U) => void,
  onError: (data: IApiErrorMessage) => void
): Promise<void> => {
  try {
    const response = await fetch("/.netlify/functions/api-connector", {
      method: HTTPMethod.POST,
      body: JSON.stringify(body),
    })
    const data =
      body.responseForm === ResponseForm.JSON
        ? await response.json()
        : await response.text()
    if (response.ok) {
      return onSuccess(data)
    }
    if (Object.keys(apiErrorMessageConfig).includes(data.apiErrorMessage)) {
      return onError(data)
    }
  } catch (error) {}
  showSimpleToast(apiErrorMessageConfig[ApiErrorMessage.UNKNOWN_ERROR])
}
