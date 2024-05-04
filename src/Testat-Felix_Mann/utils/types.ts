export interface Note {
    _id: string;
    title: string;
    content: string;
    creationDate: Date;
    dueDate: Date;
    importance: Importance;
    status: Status;
}

export interface NoteDbo {
    title: string;
    content: string;
    creationDate: Date;
    dueDate: Date;
    importance: Importance;
    status: Status;
}

export interface NoteDto {
    _id: string;
    title: string;
    content: string;
    creationDate: Date;
    dueDate: Date;
    importance: string;
    status: string;
}

export enum Importance {
    Low = '0',
    Medium = '1',
    High = '2'
}

export enum Status {
    Open = '0',
    Done = '1'
}
