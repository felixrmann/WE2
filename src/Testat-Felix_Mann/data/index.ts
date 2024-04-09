import Datastore from "nedb-promises";

export const db = Datastore.create('./data/notes-app.db');
