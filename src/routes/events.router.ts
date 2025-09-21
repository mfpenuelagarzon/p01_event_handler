import express from "express";
import eventController from "../controllers/event.controller";
const eventsRouter = express.Router();

eventsRouter.post('', eventController.save);
eventsRouter.get('', eventController.query);

export default eventsRouter;
