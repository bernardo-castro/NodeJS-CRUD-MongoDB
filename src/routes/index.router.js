import { Router } from "express";
import { renderTask, createTask, editTask, updateTask, deleteTask, toggleDoneTask } from "../controllers/task.controller";

const router = Router();

router.post("/tasks/add", createTask);
router.get("/", renderTask);

router.get("/task/:id/edit", editTask);
router.post("/task/:id/edit", updateTask);

router.get("/task/:id/delete", deleteTask);
router.get("/task/:id/toggleDone", toggleDoneTask);

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
