import {NoteDbo, Note} from "./types";

export function mapNotesToDbo(note: Note): NoteDbo {
    return {
        title: note.title,
        note: note.note,
        date: note.date,
        importance: note.importance,
        status: note.status
    }
}

export function mapDboToNotes(id: string, noteDbo: NoteDbo): Note {
    return {
        id: id,
        title: noteDbo.title,
        note: noteDbo.note,
        date: noteDbo.date,
        importance: noteDbo.importance,
        status: noteDbo.status
    }
}
