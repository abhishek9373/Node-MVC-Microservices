import { Express } from "express";
import usersRoute from "./sample.routes";
import addOnRoutes from './addOn.routes';


const urlSegment = "/sample_service/v1";

const registerRoutes = (app: Express, options: any) => {
    addOnRoutes(app, urlSegment, options);
    app.use(usersRoute);
};

export default registerRoutes;
