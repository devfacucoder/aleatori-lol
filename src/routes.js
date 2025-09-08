import { Router } from "express";
//import getBuildRandom from "./controllers/builds.js";
const router = Router();
import getBuildRandom from "./controllers/builds.js";
import { getChampions } from "./controllers/champions.js";
router.get("/build", (req, res) => {
  const buildRes = getBuildRandom();
  return res.status(200).json(buildRes);
});

router.get("/champion", (req, res) => {
  const champion = getChampions();
  res.status(200).json(champion);
});

router.get("/all", (req, res) => {
  const buildRes = getBuildRandom();
  const champion = getChampions();
  res.status(200).json({ build: buildRes, champion });
});

export default router;
