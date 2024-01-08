import { Router } from "express";
import LogParserController from "../../app/module/logParser";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const route = Router()

route.post( "/log-parser", upload.single('file'), new LogParserController().parseLogFunc )

export default route;