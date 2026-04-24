import { successBody } from '../views/apiResponse.js'

/** GET /api/health */
export function getHealth(_req, res) {
  res.json(successBody({ service: 'occasions-magnified-api' }))
}
