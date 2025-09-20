import {IEvent} from "../../../p01_database_lib";
import {Event} from "../../../p01_database_lib";

class EventService {
    public save(event: IEvent) {
        return new Promise((resolve, reject) => {
            try {
                // @ts-ignore
                const result = Event.create(event);
                resolve(result);
            } catch (e) {
                reject(e);
            }
        })
    }
}

const eventService = new EventService();
export default eventService;