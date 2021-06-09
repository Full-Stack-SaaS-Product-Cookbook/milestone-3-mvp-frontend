import fetch from "node-fetch"
import { Handler } from "@netlify/functions"
import { Event } from "@netlify/functions/src/function/event"
import ApiErrorMessage from "../../src/enums/ApiErrorMessage"

const handler: Handler = async (event: Event) => {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        apiErrorMessage: ApiErrorMessage.UNSPECIFIED_BODY,
      }),
    }
  }
  const { endpoint, method, responseForm, body } = JSON.parse(event.body)
  const headers =
    responseForm === "JSON"
      ? {
          "Content-Type": "application/json",
        }
      : undefined
  try {
    const response = await fetch(
      `${process.env.REDUX_PLATE_API_URL}${endpoint}`,
      {
        method,
        headers,
        body: JSON.stringify(body),
      }
    )
    const data =
      responseForm === "JSON" ? await response.json() : await response.text()
    const bodyRes = responseForm === "JSON" ? JSON.stringify(data) : data
    if (response.ok) {
      return {
        statusCode: 200,
        body: bodyRes,
      }
    }
    return {
      statusCode: response.status,
      body: bodyRes,
    }
  } catch (error) {
    // TODO: do something error.message (log)
    return {
      statusCode: 500,
      body: JSON.stringify({
        apiErrorMessage: ApiErrorMessage.DOTNET_API_ERROR,
      }),
    }
  }
}

export { handler }
