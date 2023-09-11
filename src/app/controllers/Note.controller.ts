import { Request, Response } from 'express'
import {Notes} from '../models/Notes.model';
import knex from '../../config/knex';

class NoteController {

    async create(req: Request, res: Response) {
        try {
            const note : Notes = req.body;
            const result = await knex<Notes>('notes').insert(note, '*');
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async get(req: Request, res: Response) {
        try{
            const id = parseInt(req.params.id);
            const note = await knex<Notes>('notes').where('id', id).select();
            res.status(200).json(note);
        } catch(error) {
            res.status(500).json({ error });
        } 
    }

    async getAll(_req: Request, res: Response) {
        try{
            const notes = await knex<Notes>('notes').orderBy('id').select();
            res.status(200).json(notes);
        } catch(error) {
            res.status(500).json({ error });
        }
    }

    async edit(req: Request, res: Response) {
        try{
            const id = parseInt(req.params.id);
            const note: Notes = req.body;
            const result = await knex<Notes>('notes').where({id}).update(note, '*');
            if (result.length) {
                res.status(200).json(result)
              } else {
                res.status(404).json({message: "Note not found"})
              }
        } catch(error) {
            res.status(500).json({ error });
        } 
    }

    async delete(req: Request, res: Response) {
        try{
            const id = parseInt(req.params.id);
            const count = await knex<Notes>('notes').del().where('id', id);
            if(count) {
                res.sendStatus(204);
            } else {
                res.status(404).json({message: "Note not found"})
            }
        } catch(error) {
            res.status(500).json({ error });
        } 
    }
}

export default new NoteController()