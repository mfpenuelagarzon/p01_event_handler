import {Request, Response} from 'express';
import {IEvent} from "../../../p01_database_lib";
import {getCurrentDate} from "../utils/utilities";
import {DATE_TIME_FORMAT} from "../utils/constants";
import eventService from "../services/event.service";

class EventController {
    public async save(req: Request, res: Response) {
        try {
            const event: IEvent = req.body;
            event.payload = JSON.parse(req.body.payload);
            event.created_at = new Date(getCurrentDate(DATE_TIME_FORMAT));
            const result = await eventService.save(event);
            return res.status(200).json({
                message: 'ok',
                body: result
            });
        } catch (e) {
            return res.status(409).json(e);
        }
    }

    public query(req: Request, res: Response) {
        return res.status(200).json({message: 'Events list!'});
    }
}

const eventController = new EventController();
export default eventController;