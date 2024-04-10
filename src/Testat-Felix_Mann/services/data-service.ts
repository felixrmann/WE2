import Datastore from "nedb-promises";
import {Note, NoteDbo} from "../utils/types";
import {mapNotesToDbo} from "../utils/note-parser";

const db = Datastore.create('./services/notes-app.db');

export function saveNote(note: Note) {
    const parsedNote: NoteDbo = mapNotesToDbo(note);
    if (note.id == undefined) { // entry has no id and is therefore new
        const parsedNote: NoteDbo = mapNotesToDbo(note);
        db.insert(parsedNote)
            .then(res => {
                console.log(res)
                return res;
            });
    } else { // entry has an id and therefore has already been saved
        db.update({_id: note.id}, {$set: parsedNote})
            .then(res => {
                console.log(res)
                return res;
            });
    }
}
