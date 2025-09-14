import { Router } from "express";
import { resourceController } from "./controllers/resource.controller";

const router = Router();

router.get("/", resourceController.getAll);
router.get("/:id", resourceController.getById);
router.post("/", resourceController.create);
router.put("/:id", resourceController.update);
router.delete("/:id", resourceController.delete);

export default router;
