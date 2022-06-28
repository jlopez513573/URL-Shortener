import { Router, Request, Response } from "express";
import { Url } from "../entity/Url";
import { getByShortId } from "../utils/queries";

const router = Router();

// @route GET /viewUrl/:id
// @desc Shows all the information for a shrinked URL
// @params id shortened URL id
// @access PUBLIC
router.get("/viewUrl/:id", async (req: Request, res: Response) => {
  const shortUrl: Url = await getByShortId(req.params.id);
  res.render("viewUrl", { shortUrl });
});

export default router;
