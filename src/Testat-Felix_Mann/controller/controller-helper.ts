import {NoteDto} from "../utils/types";

export function transformNote(entries: any[]): NoteDto[] {
    const result: NoteDto[] = [];
    for (let entry of entries) {
        result.push({
            _id: entry._id,
            title: entry.title,
            content: entry.content,
            creationDate: entry.creationDate,
            dueDate: entry.dueDate,
            importance: getImportance(entry.importance),
            status: getStatus(entry.status),
        });
    }
    return result;
}

function getImportance(importance: string): string {
    switch (importance) {
        case '0':
            return 'Low';
        case '1':
            return 'Medium';
        case '2':
            return 'High';
        default:
            return 'Low';
    }
}

function getStatus(status: string): string {
    switch (status) {
        case '0':
            return 'Open';
        case '1':
            return 'Done';
        default:
            return 'Open';
    }
}