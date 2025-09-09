import { Router } from "express";
//import getBuildRandom from "./controllers/builds.js";
const router = Router();
import getBuildRandom,{getOneItem} from "./controllers/builds.js";
import { getChampions } from "./controllers/champions.js";

//aca te dara la build completa
router.get("/build", (req, res) => {
  const buildRes = getBuildRandom();
   res.status(200).json(buildRes);
});

//aca te dara un itemn aleatorio
router.get("/item",(req,res)=>{
    res.status(200).json(getOneItem())

})


//aca te solo champion
router.get("/champion", (req, res) => {
  const champion = getChampions();
  res.status(200).json(champion);
});

//esta de debe de delvolver build y champ
router.get("/all", (req, res) => {
  const buildRes = getBuildRandom();
  const champion = getChampions();
  res.status(200).json({ build: buildRes, champion });
});

export default router;
