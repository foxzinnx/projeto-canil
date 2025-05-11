"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const data = [
    {
        type: 'dog',
        name: 'Husky Siberiano',
        vaccinated: 'Vacinado e castrado',
        image: 'husky.jpg',
        gender: 'Masculino'
    },
    {
        type: 'dog',
        name: 'Golden Retriever',
        vaccinated: 'Vacinado',
        image: 'golden.jpg',
        gender: 'Masculino'
    },
    {
        type: 'dog',
        name: 'Lhasa Apso',
        vaccinated: 'Vacinado e castrado',
        image: 'lhasa.webp',
        gender: 'Fêmea'
    },
    {
        type: 'dog',
        name: 'Zwergspitz',
        vaccinated: 'Vacinado e castrado',
        image: 'spitz.jpg',
        gender: 'Masculino'
    },
    {
        type: 'cat',
        name: 'Siamês',
        vaccinated: 'Vacinado',
        image: 'siames.jpg',
        gender: 'Fêmea'
    },
    {
        type: 'cat',
        name: 'Persa',
        vaccinated: 'Vacinado',
        image: 'persa.avif',
        gender: 'Fêmea'
    },
    {
        type: 'cat',
        name: 'Angorá',
        vaccinated: 'Vacinado e castrado',
        image: 'angora.avif',
        gender: 'Masculino'
    },
];
exports.Pet = {
    getAll: () => {
        return data;
    },
    getFromType: (type) => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name) => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};
