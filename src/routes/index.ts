import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router()

const cleanFileName = (fileName: string): string | undefined => {
  return fileName.split('.').shift()
}

readdirSync(__dirname).forEach(fileName => {
  const file = cleanFileName(fileName)
  if (file !== 'index') {
    import(`./${file}`).then(moduleRouter => {
      router.use(`api/${file}`, moduleRouter.router)
    })
  }
})

export default router;