"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/home', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Seu Gesto Salva Vidas de Quem Não Pode Pedir Ajuda'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros para doação'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatos para doação'
        },
        list
    });
};
exports.cats = cats;
