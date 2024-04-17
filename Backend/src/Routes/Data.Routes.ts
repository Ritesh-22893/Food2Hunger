import * as express from 'express'

import { Upload } from '../Utils/UploadFiles';
import { getData1, postData1 } from '../controller/Data.Controller';

const router= express.Router()

router.route('/Data').get(getData1).post(Upload.single('document'),postData1);

export default router;