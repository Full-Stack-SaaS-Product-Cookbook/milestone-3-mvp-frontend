import ApiErrorMessage from "../enums/ApiErrorMessage";
import { ApiErrorMessageConfigEntries } from "../types/ApiErrorMessageConfigEntries";

export const apiErrorMessageConfig: ApiErrorMessageConfigEntries = {
    [ApiErrorMessage.UNKNOWN_ERROR]: 'Unknown error with the API. Please try again.',
    [ApiErrorMessage.UNSPECIFIED_BODY]: "Invalid call to Netlify serverless function. A 'body' is required.",
    [ApiErrorMessage.DOTNET_API_ERROR]: 'Unknown error with the .NET API. Please try again.',
    [ApiErrorMessage.FIX_SYNTAX_ERRORS]: 'Your state code has syntax errors. Code generation will not work on code with syntax errors.',
    [ApiErrorMessage.ONE_INTERFACE_LIMIT]: 'Sorry, the free version of ReduxPlate only supports a single interface for the state.',
    [ApiErrorMessage.STATE_IDENTIFIER_IN_INTERFACE_REQUIRED]: "The value 'State' must occur at the end of your name for your state. i.e. 'export interface ReduxPlateState'.",
    [ApiErrorMessage.STATE_NAME_MUST_BE_CAPITALIZED]: "Your state name must be capitalized. i.e. 'ReduxPlateState', not 'reduxPlateState'.",
    [ApiErrorMessage.MAX_FIVE_PROPERTIES_ALLOWED_IN_STATE]: 'You can only generate Redux code for a maximum of five state properties.',
    [ApiErrorMessage.ONLY_PRIMITIVES_SUPPORTED_AS_STATE_PROPERTY_TYPES]: 'You can only provide JavaScript primitives or arrays of primitives as state property types.'
}