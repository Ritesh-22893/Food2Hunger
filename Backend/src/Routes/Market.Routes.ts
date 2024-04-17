import * as express from 'express'

import { Upload } from '../Utils/UploadFiles';
import { getDataMarket, postDataMarket } from '../controller/Marketplace.Controller';

const router= express.Router()

router.route('/Market').get(getDataMarket).post(Upload.single('image'),postDataMarket);

export default router;