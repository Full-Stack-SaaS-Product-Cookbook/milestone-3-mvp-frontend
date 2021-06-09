import { Link } from "gatsby"
import * as React from "react"
import { LogoWidget } from "../widgets/LogoWidget"

export interface INavProps {
  siteTitle: string
}

export function Nav(props: INavProps) {
  const { siteTitle } = props
  return (
    <nav className="navbar bg-primary">
      <Link className="navbar-brand text-light" to="/">
        <LogoWidget/>
        {siteTitle}
      </Link>
    </nav>
  )
}
