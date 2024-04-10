
export interface Note extends NoteDbo {
    id: string;
}

export interface NoteDbo {
    title: string;
    note: string;
    date: Date;
    importance: Importance;
    status: Status;
}

export enum Importance {
    Low = 0,
    Medium = 1,
    High = 2
}

export enum Status {
    Planned = 0,
    Done = 1
}
