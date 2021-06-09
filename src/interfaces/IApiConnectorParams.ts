import HTTPMethod from "../enums/HTTPMethod";
import ResponseForm from "../enums/ResponseForm";

export default interface IApiConnectorParams {
    endpoint: string;
    method: HTTPMethod;
    responseForm: ResponseForm;
}