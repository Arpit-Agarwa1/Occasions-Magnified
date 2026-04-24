import { Router } from 'express'
import { getHealth } from '../controllers/healthController.js'
import { postNewsletter } from '../controllers/newsletterController.js'

/** API route map: wires URLs to controllers (MVC controller layer entry). */
const router = Router()

router.get('/health', getHealth)
router.post('/newsletter', postNewsletter)

export default router
