import { Router, Request, Response } from "express";
import { createUrl } from "../utils/queries";
import { isValidURL, shortenURL } from "../utils/URLShortener";

const router = Router();

// @route POST /shrinkUrl
// @desc Shrinks one URL and stores it in the DB
// @params fullUrl user inputs a full url to be shrinked
// @access PUBLIC
router.post("/shrinkUrl", async (req: Request, res: Response) => {
  const full: string = req.body.fullUrl;
  if (!isValidURL(full)) {
    req.flash("error", "URL is not valid");
    res.redirect("/");
  } else {
    const short: string = shortenURL(full);
    const { raw: newUrlId } = await createUrl(full, short);

    req.flash("success", "URL Shrinked correctly!");
    res.redirect("/viewUrl/" + newUrlId);
  }
});

export default router;
