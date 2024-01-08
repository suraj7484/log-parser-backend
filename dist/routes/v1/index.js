"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logParser_1 = __importDefault(require("../../app/module/logParser"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const route = (0, express_1.Router)();
route.post("/log-parser", upload.single('file'), new logParser_1.default().parseLogFunc);
exports.default = route;
