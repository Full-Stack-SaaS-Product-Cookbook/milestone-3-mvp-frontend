import * as React from "react"
import { SignUpWidget } from "../../widgets/SignUpWidget"

export function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center m-5">
        <h1>Full App Coming Soon</h1>
        <p>
          Are you a developer or company that has been waiting for a service
          like ReduxPlate?
        </p>
        <p className="m-0">
          Sign up to be the first to know when the full product is released!
        </p>
        <SignUpWidget
          formActionURL="https://fullstackcraft.us6.list-manage.com/subscribe/post?u=9ff6890e14b655b0f43d40566&amp;id=6f8162c63b"
          formValidationValue="b_9ff6890e14b655b0f43d40566_6f8162c63b"
        />
        <p className="fw-bold">
          I take email spam seriously and will only email you once when
          ReduxPlate is released.
        </p>
      </div>
    </>
  )
}
