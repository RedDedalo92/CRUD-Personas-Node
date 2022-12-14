import {Request, Response} from 'express';
import connection from '../db/connection';

export const getPersonas = (req: Request, res: Response) =>{
    
    connection.query('Select * from persona', (err, data) =>{
        if (err)  throw err;
        res.json(data);
    });
}

export const getPersona = (req: Request, res: Response) =>{
    
    const {id} = req.params;

    connection.query('Select * from persona where id = ?', id, (err,data) =>{
        res.json(data[0])
    });
}

export const deletePersona = (req: Request, res: Response) =>{
    
    const {id} = req.params;

    connection.query('DELETE FROM persona where id= ?', id, (err, data) =>{
        if(err) throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    })
}

export const postPersona = (req: Request, res: Response) =>{
    const {body} = req;

    connection.query('INSERT INTO persona set ?', [body], (err, data) =>{
        if(err) throw err;
        res.json({
            msg: 'Persona agregada con exito'
        });
    })
}

export const putPersona = (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.body

    connection.query('UPDATE persona set ? WHERE id =?', [body, id], (err,data) =>{
        if(err) throw err;

        res.json({
            msg: 'Persona actualizada con exito'
        });
    })
}