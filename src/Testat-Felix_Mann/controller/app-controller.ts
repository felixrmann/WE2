import {Request, Response} from "express";

export class AppController {
    index(req: Request, res: Response) {
        res.render("index", {data: "Hello World"});
    };

    note(req: Request, res: Response) {
        console.log(req.body)
        res.render("index")
    }
}

export const appController = new AppController();
