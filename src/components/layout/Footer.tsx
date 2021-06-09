import * as React from "react"
import { useEffect, useState } from "react"
import HTTPMethod from "../../enums/HTTPMethod"
import ResponseForm from "../../enums/ResponseForm"
import { get } from "../../helpers/ApiHelpers"

export function Footer() {

  const [apiVersion, setApiVersion] = useState<string>("")

  const fetchApiVersion = async () => {
    await get<string>(
      {
        endpoint: "/",
        method: HTTPMethod.GET,
        responseForm: ResponseForm.TEXT
      },
      apiVersion => setApiVersion(apiVersion),
      () => setApiVersion("API Version Unknown")
    )
  }

  useEffect(() => {
    fetchApiVersion()
  }, [])

  return (
    <footer className="fixed-bottom bg-primary text-light text-center text-lg-start">
      © {new Date().getFullYear()}{" "}
      <a className="link-light" href="https://fullstackcraft.com">
        Full Stack Craft
      </a>
      {" - "}
      {apiVersion}
    </footer>
  )
}
