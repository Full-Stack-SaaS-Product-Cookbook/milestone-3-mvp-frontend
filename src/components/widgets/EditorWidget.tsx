import * as React from "react"
import Editor, { Monaco } from "@monaco-editor/react"
import * as styles from "../../styles/modules/editor-widget.module.scss"
import GitHub from "monaco-themes/themes/GitHub.json"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import EditorID from "../../enums/EditorID"
import { codeEdited, tabClicked } from "../../store/editors/editorsSlice"

export interface IEditorWidgetProps {
  editorID: EditorID
}

export function EditorWidget(props: IEditorWidgetProps) {
  const { editorID } = props
  const { editorTitle, editorSettings } = useAppSelector(
    state => state.editors.editors[editorID]
  )
  const dispatch = useAppDispatch()

  const onChangeTab = (fileLabel: string) => {
    dispatch(
      tabClicked({
        editorID,
        fileLabel,
      })
    )
  }

  const onChangeCode = (code: string | undefined) => {
    if (code) {
      dispatch(
        codeEdited({
          editorID,
          code,
        })
      )
    }
  }

  const handleOnMount = (
    _editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    monaco.editor.defineTheme(
      "GitHub",
      GitHub as monaco.editor.IStandaloneThemeData
    )
    monaco.editor.setTheme("GitHub")
  }

  return (
    <div
      className={`d-flex flex-column justify-content-center m-3 ${styles.editorWrapper}`}
    >
      {editorTitle && (
        <h3 className="text-primary">
          <u>{editorTitle}</u>
        </h3>
      )}
      <ul className="nav nav-tabs">
        {editorSettings.map(editorSetting => {
          const { fileLabel, isActive } = editorSetting
          const className = isActive
            ? "nav-link active font-monospace"
            : "nav-link font-monospace"
          return (
            <li className="nav-item" onClick={() => onChangeTab(fileLabel)}>
              <button className={className}>{fileLabel}</button>
            </li>
          )
        })}
      </ul>
      {editorSettings.map(editorSetting => {
        const { code, isActive, fileLabel } = editorSetting
        return (
          <div className={isActive ? "d-block" : "d-none"}>
            <Editor
              path={fileLabel}
              height="500px"
              defaultLanguage="typescript"
              value={code}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
              onMount={handleOnMount}
              onChange={onChangeCode}
            />
          </div>
        )
      })}
    </div>
  )
}
