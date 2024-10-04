// Define a interface Profile que descreve a estrutura de um perfil
interface Profile {
    id: number;
    name: string;
    bio: string;
}

// Inicializando a lista
let listProfile: Array<Profile> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

/**
 * Retorna a biografia do perfil dado seu ID de forma funcional.
 * 
 * @param id - ID do perfil.
 * @returns A biografia do perfil ou undefined se não encontrado.
 */
const getBioByIdFunctional = (id: number): string | undefined =>
    listProfile.find(item => item.id === id)?.bio;

/**
 * Retorna a biografia do perfil dado seu ID de forma imperativa.
 * 
 * @param id - ID do perfil.
 * @returns A biografia do perfil ou undefined se não encontrado.
 */
const getBioByIdImperative = (id: number): string | undefined => {
    for (const item of listProfile) {
        if(item.id === id) {
            return item.bio;
        }
    }
};

/**
 * Retorna nome do perfil dado o ID - Forma funcional.
 * 
 * @param id - ID do perfil.
 * @return O nome do perfil ou undefined se não encontrado.
 */
const getNameByIdFunctional = (id: number): string | undefined =>
    listProfile.find(item => item.id === id)?.name;

/**
 * Retorna nome do perfil dado o ID - Forma imperativa.
 * 
 * @param id - ID do perfil.
 * @return O nome do perfil ou undefined se não encontrado.
 */
const getNameByIdImperative = (id: number): string | undefined => {
    for (const item of listProfile) {
        if(item.id === id) {
            return item.name;
        }
    }
};

/**
 * Apaga um item da lista dado seu ID - Forma Funcional.
 * 
 * @param id - ID do perfil que vai ser apagado.
 * @returns Nova lista sem o perfil que foi apagado
 */
const deleteItemByIdFunctional = (id: number): Array<Profile> =>
    listProfile.filter(item => item.id !== id);

/**
 * Apaga um item da lista dado seu ID - Forma Funcional.
 * 
 * @param id - ID do perfil que vai ser apagado.
 * @returns Nova lista sem o perfil que foi apagado
 */
const deleteItemByIdImperative = (id: number): void => {
    for (let i = 0; i < listProfile.length; i++) {
        if (listProfile[i].id === id) {
            listProfile.splice(i, 1);
            break;
        }
    }
};

/**
 * Atualiza a biografia ou o nome do perfil pelo ID - Forma Funcional.
 * 
 * @param id - ID do perfil que vai ser atualizado.
 * @param newName - Novo nome (Pode ser opcional).
 * @param newBio - Nova biografia (Pode ser opcional).
 */
const updateItemByIdFunctional = (id: number, newName?: string, newBio?: string): void => {
    listProfile = listProfile.map(item => 
        item.id === id ? { ...item, name: newName || item.name, bio: newBio || item.bio } : item
    );
};

/**
 * Atualiza a biografia ou o nome do perfil pelo ID - Forma Imperativa.
 * 
 * @param id - ID do perfil que vai ser atualizado.
 * @param newName - Novo nome (Pode ser opcional).
 * @param newBio - Nova biografia (Pode ser opcional).
 */
const updateItemByIdImperative = (id: number, newName?: string, newBio?: string): void => {
    for (const item of listProfile) {
        if(item.id === id) {
            if (newName) item.name = newName;
            if (newBio) item.bio = newBio;
            break;
        }
    }
};

// Exemplos
console.log(getBioByIdFunctional(1)); // Paradigma Funcional
console.log(getBioByIdImperative(1)); // Paradigma Imperativo

console.log(getNameByIdFunctional(1)); // Paradigma Funcional
console.log(getNameByIdImperative(1)); // Paradigma Imperativo

listProfile = deleteItemByIdFunctional(3); // Paradigma Funcional
console.log(listProfile);

deleteItemByIdImperative(4); // Paradigma Imperativo
console.log(listProfile);

updateItemByIdFunctional(1, "Marcos Vinícius", "Gosto de colocar as mãos ao código"); // Paradigma Funcional
updateItemByIdImperative(2, "Lucas Santos", "Nova bio"); // Paradigma Imperativo
console.log(listProfile);