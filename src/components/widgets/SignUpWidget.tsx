import * as React from "react"

export interface ISignUpWidgetProps {
  formActionURL: string
  formValidationValue: string
}

export function SignUpWidget(props: ISignUpWidgetProps) {
  const { formActionURL, formValidationValue } = props
  return (
    <form action={formActionURL} method="post">
      <div className="row m-3 align-items-center">
        <div className="col-auto">
          <input
            type="email"
            name="EMAIL"
            placeholder="dev@company.com"
            className="form-control"
          ></input>
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input type="text" name={formValidationValue} tabIndex={-1} />
        </div>
        <div className="col-auto">
          <input
            type="submit"
            value="Get Notified"
            name="subscribe"
            className="btn btn-primary"
          />
        </div>
      </div>
    </form>
  )
}
