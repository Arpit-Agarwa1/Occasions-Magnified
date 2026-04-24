import { NewsletterSubscription } from '../models/NewsletterSubscription.js'
import { errorBody, successBody } from '../views/apiResponse.js'

/** POST /api/newsletter */
export function postNewsletter(req, res) {
  const result = NewsletterSubscription.create(req.body?.email)

  if (!result.ok) {
    return res.status(400).json(errorBody(result.error))
  }

  return res.status(201).json(successBody({ message: result.message }))
}
