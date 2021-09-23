import express from "express";
import { upload } from "./multerconfig";
import { homepage, uploadpicture } from "./controller";


const router1 = express.Router();

router1.get("/", homepage);


  ​

  
router1.post("/images",  upload.array("pictures", 10), uploadpicture);

export const router = router1;