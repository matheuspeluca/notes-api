import { Router, Request, Response } from 'express';
import NoteController from './app/controllers/Note.controller';

const routes = Router()

routes.post('/notes', NoteController.create)
routes.get('/notes', NoteController.getAll)
routes.get('/notes/:id', NoteController.get)
routes.put('/notes/:id', NoteController.edit)
routes.delete('/notes/:id', NoteController.delete)

export default routes