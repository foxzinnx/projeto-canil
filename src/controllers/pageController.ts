import { Request, Response } from "express";
import { Pet } from '../models/pet';
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    
    res.render('pages/home', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Seu Gesto Salva Vidas de Quem Não Pode Pedir Ajuda'
        },
        list
    })
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros para doação'
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos para doação'
        },
        list
    })
}
