import { Link } from 'gatsby';
import * as React from 'react';
import { apiErrorMessageConfig } from '../../../config/ApiErrorMessageConfig';
import EditorID from '../../../enums/EditorID';
import HTTPMethod from '../../../enums/HTTPMethod';
import ResponseForm from '../../../enums/ResponseForm';
import { post } from '../../../helpers/ApiHelpers';
import { showSimpleToast } from '../../../helpers/ToastHelpers';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import IGenerated from '../../../interfaces/IGenerated';
import IGenerateOptions from '../../../interfaces/IGenerateOptions';
import { codeGenerated } from '../../../store/editors/editorsSlice';

export function ActionButtons() {
  const code = useAppSelector(
    state => state.editors.editors[EditorID.TRY_IT_STATE].editorSettings[0].code
  )
  const dispatch = useAppDispatch()

  const onClickGenerate = async () => {
    await post<IGenerateOptions, IGenerated>(
      {
        endpoint: "/CodeGenerator",
        method: HTTPMethod.POST,
        responseForm: ResponseForm.JSON,
        body: {
          stateCode: code,
        }
      },
      generated => {
        dispatch(
          codeGenerated(
            {
              editorID: EditorID.TRY_IT_RESULTS,
              files: generated.files
            }
          )
        )
      },
      apiError => {
        showSimpleToast(apiErrorMessageConfig[apiError.apiErrorMessage])
      }
    )
  }

  return (
    <div className="d-flex justify-content-center mb-4">
      <button onClick={onClickGenerate} className="btn btn-outline-primary m-3">Generate!</button>
      <Link to="/app" className="btn btn-primary m-3">Try Full App</Link>
    </div>
  );
}
