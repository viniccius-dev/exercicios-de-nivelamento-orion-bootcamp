
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

// Função para contar as vogais
function countVowels(word: string): number {
    const vowelsFound: RegExpMatchArray | null = word.match(/[aeiouAEIOU]/g);

    return vowelsFound ? vowelsFound.length : 0;
}

// Configuração do formulário de contagem de vogais
document.getElementById('vowelForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = (document.getElementById('vowelInput') as HTMLInputElement).value;
    const vowelCount = countVowels(input);
    alert(`A palavra "${input}" tem ${vowelCount} vogais.`);
});

/**********************/

/**
 * Função para retornar a bio pelo id (Imperativo).
 * @param id - ID do perfil.
 * @returns A biografia do perfil ou undefined se não encontrado.
 */
const getBioByIdImperative = (id: number): string | undefined => {
    for (const item of listProfile) {
        if (item.id === id) {
            return item.bio;
        }
    }
};

/**
 * Função para retornar o nome pelo id (Imperativo).
 * @param id - ID do perfil.
 * @returns O nome do perfil ou undefined se não encontrado.
 */
const getNameByIdImperative = (id: number): string | undefined => {
    for (const item of listProfile) {
        if (item.id === id) {
            return item.name;
        }
    }
};

/**
 * Função para deletar um item pelo id (Imperativo).
 * @param id - ID do perfil a ser deletado.
 * @returns void.
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
 * Função para atualizar um item pelo id (Imperativo).
 * @param id - ID do perfil a ser atualizado.
 * @param newName - Novo nome (opcional).
 * @param newBio - Nova biografia (opcional).
 * @returns void.
 */
const updateItemByIdImperative = (id: number, newName?: string, newBio?: string): void => {
    for (const item of listProfile) {
        if (item.id === id) {
            if (newName) item.name = newName;
            if (newBio) item.bio = newBio;
            break;
        }
    }
};

// Função para exibir perfis
function displayProfiles() {
    const profilesDiv = document.getElementById('profiles');
    if (profilesDiv) {
        profilesDiv.innerHTML = '';
        listProfile.forEach(profile => {
            profilesDiv.innerHTML += `<p><strong>${profile.name}</strong>: ${profile.bio}</p>`;
        });
    }
}

// Manipulação dos formulários
document.getElementById('getBioForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const bioId = parseInt((<HTMLInputElement>document.getElementById('bioId')).value);
    const bio = getBioByIdImperative(bioId);
    document.getElementById('output')!.innerText = bio ? `Bio: ${bio}` : 'Perfil não encontrado.';
});

document.getElementById('getNameForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameId = parseInt((<HTMLInputElement>document.getElementById('nameId')).value);
    const name = getNameByIdImperative(nameId);
    document.getElementById('output')!.innerText = name ? `Nome: ${name}` : 'Perfil não encontrado.';
});

document.getElementById('deleteItemForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const deleteId = parseInt((<HTMLInputElement>document.getElementById('deleteId')).value);
    deleteItemByIdImperative(deleteId);
    document.getElementById('output')!.innerText = `Perfil com ID ${deleteId} foi deletado.`;
    displayProfiles();
});

document.getElementById('updateItemForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const updateId = parseInt((<HTMLInputElement>document.getElementById('updateId')).value);
    const newName = (<HTMLInputElement>document.getElementById('newName')).value;
    const newBio = (<HTMLInputElement>document.getElementById('newBio')).value;
    updateItemByIdImperative(updateId, newName || undefined, newBio || undefined);
    document.getElementById('output')!.innerText = `Perfil com ID ${updateId} foi atualizado.`;
    displayProfiles();
});

// Inicializa a página exibindo os perfis
displayProfiles();