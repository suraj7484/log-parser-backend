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
const utils_1 = __importDefault(require("../../utils"));
const constants_1 = require("../../common/constants");
class bl {
    parseLogFunc(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fileContent = (_a = request.file) === null || _a === void 0 ? void 0 : _a.buffer.toString();
                const logs = [];
                const lines = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split('\n');
                lines === null || lines === void 0 ? void 0 : lines.forEach((line) => {
                    const [timestamp, loglevel, rest] = line.split(' - ');
                    if (loglevel === 'error' || loglevel === 'warn') {
                        const logData = JSON.parse(rest);
                        const log = {
                            timestamp: Date.parse(timestamp),
                            loglevel,
                            transactionId: logData.transactionId,
                            err: logData.err || '',
                        };
                        logs.push(log);
                    }
                });
                return logs;
            }
            catch (err) {
                throw utils_1.default.error({}, err === null || err === void 0 ? void 0 : err.message, (err === null || err === void 0 ? void 0 : err.code) || constants_1.httpConstants.RESPONSE_CODES.SERVER_ERROR);
            }
        });
    }
}
exports.default = bl;
