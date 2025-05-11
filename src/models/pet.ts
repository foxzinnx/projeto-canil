type PetType = 'dog' | 'cat';

type Pet = {
    type: PetType,
    name: string,
    vaccinated: string,
    image: string,
    gender: 'Masculino' | 'Fêmea'
}

const data: Pet[] = [
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
    
]

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};