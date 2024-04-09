import {NextFunction, Request, Response} from "express";

export const sessionUserSettings = (req: Request, res: Response, next: NextFunction): void => {
    const userSettings = req.session?.userSettings || {orderBy: 'title', orderDirection: -1, theme: 'dark'};
    const {orderBy, orderDirection, theme} = req.query;

    if (theme) {
        userSettings.theme = theme as string;
    }
    if (orderBy) {
        userSettings.orderBy = orderBy as string;
    }
    if (orderDirection) {
        userSettings.orderDirection = parseInt(orderDirection as string);
    }
    req.userSettings = req.session.userSettings = userSettings;
    res.locals = req.userSettings; // visible within views

    next();
};

export interface Settings {
    orderBy: string;
    orderDirection: number;
    theme: string;
}
