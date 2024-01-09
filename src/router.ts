import {Request, Response} from "express";
import {Router as createRouter} from "express";
import workTimeController from "./controllers/workTimeController";
const router = createRouter();

// Here will be all our routes
router.get("/worktime/all", workTimeController.getAllWorkTime);

router.get("/project/getall", workTimeController.getAllProjects);
router.post("/project/add", workTimeController.addOneProject);
router.patch("/project/modify", workTimeController.changeOneProject);
router.delete("/project/delete", workTimeController.deleteOneProject);

router.get("/project/gettasks", workTimeController.getProjectTasks);
router.post("/tasks/add", workTimeController.addOneTasks);
router.patch("/tasks/modify", workTimeController.modifyOneTasks);
router.delete("/tasks/delete", workTimeController.deleteOneTasks);

router.get("/project/getworktime", workTimeController.getProjectWorkTime);
router.post("/worktime/add", workTimeController.addOnetWorkTime);
router.patch("/worktime/modify", workTimeController.modifyOnetWorkTime);
router.delete("/worktime/delete", workTimeController.deleteOnetWorkTime);

// Handling all other route unassigned to a controller method
router.use((_req: Request, res: Response): void => {
    res.status(404).json(
        "404 - Pas de route gérée par le serveur sur cette adresse"
    );
});

export default router;
