import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IEditorSettings from "../../interfaces/IEditorSettings"
import EditorID from "../../enums/EditorID"
import { updateArray } from "../../utils/updateArray"
import IFile from "../../interfaces/IFile"
import { mergeArrays } from "../../utils/mergeArrays"

interface EditorsState {
  editors: {
    [EditorID: string]: {
      editorTitle?: string
      editorSettings: Array<IEditorSettings>
    }
  }
}

const initialState: EditorsState = {
  editors: {
    [EditorID.TRY_IT_STATE]: {
      editorTitle: "Desired Redux State",
      editorSettings: [
        {
          fileLabel: "state.ts",
          code: `// Feel free to edit with whatever state you need.
export interface ReduxPlateState {
    firstName: string
    lastName: string
    isLoggedIn: boolean
    roles: Array<string>
}`,
          isActive: true,
        },
      ],
    },
    [EditorID.TRY_IT_RESULTS]: {
      editorTitle: "Generated Code",
      editorSettings: [
        {
          fileLabel: "types.ts",
          code: `// types.ts`,
          isActive: true,
        },
        {
          fileLabel: "reducers.ts",
          code: `// reducers.ts`,
          isActive: false,
        },
        {
          fileLabel: "actions.ts",
          code: `// actions.ts`,
          isActive: false,
        },
      ],
    },
  },
}

export const editorsSlice = createSlice({
  name: "editors",
  initialState,
  reducers: {
    tabClicked: (
      state,
      action: PayloadAction<{ editorID: EditorID; fileLabel: string }>
    ) => {
      const { editorID, fileLabel } = action.payload
      state.editors[editorID].editorSettings = updateArray({
        array: state.editors[editorID].editorSettings,
        testKey: "fileLabel",
        testValue: fileLabel,
        updateKey: "isActive",
        updateValue: true,
        testFailValue: false,
      })
    },
    codeEdited: (
      state,
      action: PayloadAction<{ editorID: EditorID; code: string }>
    ) => {
      const { editorID, code } = action.payload
      state.editors[editorID].editorSettings = updateArray({
        array: state.editors[editorID].editorSettings,
        testKey: "isActive",
        testValue: true,
        updateKey: "code",
        updateValue: code,
      })
    },
    codeGenerated: (
      state,
      action: PayloadAction<{editorID: EditorID; files: Array<IFile>}>
    ) => {
      const { editorID, files } = action.payload
      state.editors[editorID].editorSettings = mergeArrays({
        mergeArray: files,
        existingArray: state.editors[editorID].editorSettings,
        matchKey: "fileLabel"
      })
    }
  },
})

export const { tabClicked, codeEdited, codeGenerated } = editorsSlice.actions

export default editorsSlice.reducer
