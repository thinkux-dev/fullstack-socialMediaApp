import express from 'express';
import { getMessages, sendMessage } from '../Controllers/MesageController.js';

const router = express.Router()

router.post('/', sendMessage)
router.get('/:chatId', getMessages)

export default router;