import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import session from "express-session";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import expressLayouts from "express-ejs-layouts";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import routes from "./routes/index";

const createServer = (): Application => {
  const app: Application = express();

  AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error));

  app.use(express.urlencoded({ extended: false }));
  app.use(expressLayouts);
  app.set("layout", path.join(__dirname, "views/layouts/layout"));
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  app.use(cookieParser("secret"));
  app.use(
    session({
      cookie: { maxAge: 60000 },
      secret: "woot",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(flash());

  app.use((req: Request, res: Response, next: NextFunction) => {
    const { success, error } = req.flash();
    res.locals.success = success;
    res.locals.error = error;

    next();
  });

  app.use(routes);

  return app;
};

export default createServer;
