import {Request, Response} from "express";

// import {worktimeModel} from "./../models/worktime";

const workTimeController = {
    "getAllWorkTime": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            res.status(200).json(error);
        }
    },
    "getAllProjects": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "addOneProject": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "changeOneProject": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "deleteOneProject": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "getProjectTasks": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "addOneTasks": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "modifyOneTasks": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "deleteOneTasks": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "getProjectWorkTime": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "addOnetWorkTime": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "modifyOnetWorkTime": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
    "deleteOnetWorkTime": async (_req: Request, res: Response) => {
        try {
            // CODE HERE
            res.json("LOL");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
};

export default workTimeController;
