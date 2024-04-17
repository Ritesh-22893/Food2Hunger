import * as express from 'express'

import { Upload } from '../Utils/UploadFiles';
import { getData1, postData1, postDatalogin } from '../controller/Data.Controller';
import Auth from '../Utils/Validate.Routes';

const router= express.Router()

router.route('/Data').get(Auth,getData1).post(Upload.single('document'),postData1);
router.route('/login').post(postDatalogin)
export default router;