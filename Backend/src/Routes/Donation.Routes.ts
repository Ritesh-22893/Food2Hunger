import * as express from 'express'

import { Upload } from '../Utils/UploadFiles';
import { getDataDonation, postDataDonation } from '../controller/Donation.Controller';

const router= express.Router()

router.route('/Donation').get(getDataDonation).post(Upload.single('photo'),postDataDonation);

export default router;