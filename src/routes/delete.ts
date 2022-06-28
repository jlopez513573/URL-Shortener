import { Router, Request, Response } from "express";
import { deleteUrlById } from "../utils/queries";

const router = Router();

// @route GET /deleteUrl/:id
// @desc Deletes one shortened URL
// @access PUBLIC
router.get("/deleteUrl/:id", async (req: Request, res: Response) => {
  try {
    await deleteUrlById(req.params.id);
    req.flash("success", "URL deleted successfully!");
  } catch (error: any) {
    if (error) {
      req.flash("error", error.message);
    }
  }
  res.redirect("/");
});

export default router;
