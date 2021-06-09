import * as React from "react"
import { ActionButtons } from "./ActionButtons"
import { Header } from "./Header"
import { SideBySideEditors } from "./SideBySideEditors"

export function Home() {
  return (
    <>
      <Header />
      <SideBySideEditors/>
      <ActionButtons/>
    </>
  )
}
