import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import {appRoutes} from './routes/app-routes';
import {helpers} from './utils/handlebar-util'


import exphbs from 'express-handlebars';
import {sessionUserSettings, Settings} from "./utils/session-middleware.index";

declare module 'express-session' {
    interface SessionData {
        userSettings: Settings;
    }
}

declare global {
    namespace Express {
        interface Request {
            userSettings: Settings;
        }
    }
}

export const app = express();
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: "default",
    helpers: {
        ...helpers
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));

app.use(express.static(path.resolve('public')));
app.use(session({secret: 'casduichasidbnuwezrfinasdcvjkadfhsuilfuzihfioda', resave: false, saveUninitialized: true}));

app.use(sessionUserSettings)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", appRoutes);
