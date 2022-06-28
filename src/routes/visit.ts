import { Router, Request, Response } from "express";
import { getByShortUrl, updateUrlVisits } from "../utils/queries";

const router = Router();

// @route GET /:shortUrl
// @desc Shrinks one URL and stores it in the DB
// @access PUBLIC
router.get("/:shortUrl", async (req: Request, res: Response) => {
  const shortUrl: string = req.params.shortUrl;
  try {
    const url = await getByShortUrl(shortUrl);
    await updateUrlVisits(url.id, url.clicks + 1);
    res.redirect(url.full);
  } catch (error: any) {
    if (error) {
      req.flash("error", "URL not found");
    }
    res.redirect("/");
  }
});

export default router;
