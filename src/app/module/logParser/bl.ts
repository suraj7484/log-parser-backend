import { Response, Request } from "express";
import Utils from "../../utils";
import { apiSuccessMessage, httpConstants } from "../../common/constants";

interface Log
{
    timestamp: number;
    loglevel: string;
    transactionId: string;
    err: string;
}

class bl {
    async parseLogFunc ( request: Request, response: Response ) {
        try {
            const fileContent = request.file?.buffer.toString();
            const logs: Log[] = [];

            const lines = fileContent?.split( '\n' );
            lines?.forEach( ( line ) => {
                const [ timestamp, loglevel, rest ] = line.split( ' - ' );
                if ( loglevel === 'error' || loglevel === 'warn' ) {
                    const logData = JSON.parse( rest );
                    const log: Log = {
                        timestamp: Date.parse( timestamp ),
                        loglevel,
                        transactionId: logData.transactionId,
                        err: logData.err || '',
                    };
                    logs.push( log );
                }
            } );
            return logs;
        } catch ( err:any ) {
            throw Utils.error(
                {},
                err?.message,
                err?.code || httpConstants.RESPONSE_CODES.SERVER_ERROR
              );
        }
    }
}


export default bl;