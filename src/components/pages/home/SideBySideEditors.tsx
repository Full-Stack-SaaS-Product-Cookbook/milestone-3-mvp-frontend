import * as React from "react"
import EditorID from "../../../enums/EditorID"
import { EditorWidget } from "../../widgets/EditorWidget"

export function SideBySideEditors() {
  return (
    <div className="container text-center">
      <div className="d-flex flex-wrap justify-content-center">
        <EditorWidget
          editorID={EditorID.TRY_IT_STATE}
        />
        <EditorWidget
          editorID={EditorID.TRY_IT_RESULTS}
        />
      </div>
    </div>
  )
}
