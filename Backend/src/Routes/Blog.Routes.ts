import * as express from 'express'
import { getData, postData } from '../controller/Blog.Controller'
import { Upload } from '../Utils/UploadFiles';

const router= express.Router()

router.route('/Blog').get(getData).post(Upload.single('image'),postData);

export default router;