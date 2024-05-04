import express from 'express';
import {appController} from '../controller/app-controller';

const router = express.Router();
router.get('/toggleStyle', appController.toggleStyle.bind(appController));

router.get("/", appController.index.bind(appController));
router.get("/:id/done", appController.done.bind(appController));
router.get("/note", appController.new.bind(appController));
router.post("/note", appController.note.bind(appController));
router.post("/note/:id", appController.note.bind(appController));
router.get("/note/:id/edit", appController.edit.bind(appController));

export const appRoutes = router;


