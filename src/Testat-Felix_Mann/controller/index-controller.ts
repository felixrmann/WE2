import {Request, Response} from "express";
import {db} from '../data'

export class IndexController {
    index(req: Request, res: Response) {
        res.render("index", {data: "Hello World"});
    };
}

export const indexController = new IndexController();
