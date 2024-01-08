import { apiFailureMessage, apiSuccessMessage, httpConstants, genericConstants } from "../../common/constants"
import { Response, Request } from "express";
import bl from "./bl";
import Utils from "../../utils";

class LogParserController {
    async parseLogFunc (request:Request , response:Response) {
        try {
            const callResponse = await new bl().parseLogFunc( request, response );
             // return final response
            return Utils.response(
                response,
                callResponse,
                apiSuccessMessage.FETCH_SUCCESS,
                httpConstants.RESPONSE_STATUS.SUCCESS,
                httpConstants.RESPONSE_CODES.OK
            );
        } catch ( err ) {
            Utils.handleError(err, request, response)
        }
    }
}

export default LogParserController