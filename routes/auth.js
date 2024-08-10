import express from "express"
import authController from "../controller/AuthController.js";
import {isAuthenticatedGlobal} from "../middleware/auth.js";

const router = express.Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);

export {router};

//
// {
//     "files":"video.png",
//       "description":"Ceci est un modele",
//        "duration":"24", 
//        "viewsNB":"0",
//         "categories":"video"
//  }