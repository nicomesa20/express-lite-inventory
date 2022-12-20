import { Request, Router, Response } from 'express';


const router = Router()

// controllers
router.get('/', (req: Request, res: Response) => {
  res.send('authRoutes')
})
export { router };