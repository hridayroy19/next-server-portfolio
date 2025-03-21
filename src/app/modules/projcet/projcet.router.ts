import express from 'express';
import { ProjcetController } from './projcet.controller';

const router = express.Router();

router.post('/create', ProjcetController.createProjcet);
router.get('/all', ProjcetController.allprojcet);
router.delete('/:productId', ProjcetController.deletprojcet);
router.get('/:productId', ProjcetController.getIdByProjcet);

export const ProjcetRouter = router;
