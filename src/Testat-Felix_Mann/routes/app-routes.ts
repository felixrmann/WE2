import express from 'express';
import {appController} from '../controller/app-controller';

const router = express.Router();
router.get("/", appController.index.bind(appController));
router.post("/notes", appController.note.bind(appController));

export const appRoutes = router;


