import Datastore from "nedb-promises";
import {Note, NoteDbo} from "../utils/types";
import {Settings} from "../utils/session-middleware.index";

class DataService {

    private db: Datastore;

    constructor() {
        this.db = Datastore.create('./services/notes-app.db');
    }

    public async getNote(id: string): Promise<Note> {
        return this.db.findOne({_id: id});
    }

    public async allNotes(userSettings: Settings | undefined): Promise<Note[]> {
        if (userSettings) {
            return this.db
                .find<Note>(userSettings.excludeCompleted === 'true' ? {status: '0'} : {})
                .sort({ [userSettings.orderBy]: userSettings.orderDirection });
        }
        return this.db.find({});
    }

    public async saveNote(note: NoteDbo): Promise<Note> {
        return this.db.insert(note);
    }

    public async updateNote(id: string, note: NoteDbo): Promise<number> {
        return this.db.update({_id: id}, note);
    }

    public async deleteNote(id: string): Promise<number> {
        return this.db.remove({_id: id}, {});
    }

    public compactData(): void {
        this.db.persistence.compactDatafile();
    }
}

export const dataService: DataService = new DataService();
