import {Request, Response} from "express";
import {NoteDbo, Status} from "../utils/types";
import {dataService} from "../services/data-service";
import {transformNote} from "./controller-helper";

export class AppController {

    toggleStyle(req: Request, res: Response): void {
        if (req.session.userSettings?.theme) {
            req.session.userSettings.theme =
                req.session.userSettings?.theme === "dark" ? "light" : "dark";
        }
        res.redirect('/');
    }

    index(req: Request, res: Response): void {
        dataService.allNotes(req.session?.userSettings).then(entries => {
            res.render('index', {
                notes: transformNote(entries)
            });
        });
    }

    done(req: Request, res: Response): void {
        dataService.getNote(req.params.id).then(note => {
            note.status = Status.Done;

            dataService.deleteNote(req.params.id).then(() => {
                dataService.saveNote(note).then(() => {
                    dataService.compactData();
                    res.redirect('/');
                })
            })
        });
    }

    new(req: Request, res: Response): void {
        res.render('note', {
            newNote: 'true'
        });
    }

    note(req: Request, res: Response): void {
        const id = req.params.id;
        const note: NoteDbo = {
            title: req.body.title,
            content: req.body.content,
            creationDate: new Date(),
            dueDate: req.body.date,
            importance: req.body.importance,
            status: Status.Open
        }
        if (id) {
            dataService.deleteNote(id).then(() => {
                dataService.saveNote(note).then(() => {
                    dataService.compactData();
                    res.redirect('/');
                })
            })
        } else {
            dataService.saveNote(note).then(() => {
                res.redirect(`/`);
            });
        }
    }

    edit(req: Request, res: Response): void {
        dataService.getNote(req.params.id).then(note => {
            res.render('note', {
                newNote: 'false', _id: req.params.id, note: note
            });
        });
    }
}

export const appController: AppController = new AppController();
