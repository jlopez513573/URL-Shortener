import { Router, Request, Response } from "express";
import deleteRoute from "./delete";
import shrinkRoute from "./shrink";
import visitRoute from "./visit";
import viewRoute from "./viewUrl";
import { getAllUrls } from "../utils/queries";

const router = Router();

// @route GET /
// @desc Root endpoint
// @access PUBLIC
router.get("/", async (_req: Request, res: Response) => {
  const shortUrls = await getAllUrls();

  res.render("index", { shortUrls });
});

router.use(deleteRoute);
router.use(shrinkRoute);
router.use(visitRoute);
router.use(viewRoute);

export default router;
