"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../common/constants");
const bl_1 = __importDefault(require("./bl"));
const utils_1 = __importDefault(require("../../utils"));
class LogParserController {
    parseLogFunc(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const callResponse = yield new bl_1.default().parseLogFunc(request, response);
                // return final response
                return utils_1.default.response(response, callResponse, constants_1.apiSuccessMessage.FETCH_SUCCESS, constants_1.httpConstants.RESPONSE_STATUS.SUCCESS, constants_1.httpConstants.RESPONSE_CODES.OK);
            }
            catch (err) {
                utils_1.default.handleError(err, request, response);
            }
        });
    }
}
exports.default = LogParserController;
