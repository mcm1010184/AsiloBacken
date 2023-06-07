import {Router} from 'express';

import {getBenefactor} from '../controllers/benefactor.controller';

const router = Router();

router.get('/benefactor', getBenefactor);
export default router;