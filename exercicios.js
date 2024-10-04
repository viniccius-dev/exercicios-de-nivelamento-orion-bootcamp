"use strict";
var _a, _b, _c, _d, _e;
// Inicializando a lista
let listProfile = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 * Conta o número de vogais em uma palavra fornecida.
 *
 * @param word - A palavra na qual as vogais serão contadas.
 * @returns O número de vogais encontradas na palavra.
 */
function countVowels(word) {
    const vowelsFound = word.match(/[aeiouAEIOU]/g);
    return vowelsFound ? vowelsFound.length : 0;
}
/**
 * Configura o evento de submissão do formulário de contagem de vogais.
 *
 * O evento previne o comportamento padrão do formulário e exibe um alerta
 * com o número de vogais na palavra inserida pelo usuário.
 */
(_a = document.getElementById('vowelForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('vowelInput').value;
    const vowelCount = countVowels(input);
    alert(`A palavra "${input}" tem ${vowelCount} vogais.`);
});
/**********************/
/**
 * Função para retornar a bio pelo id (Imperativo).
 * @param id - ID do perfil.
 * @returns A biografia do perfil ou undefined se não encontrado.
 */
const getBioByIdImperative = (id) => {
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
const getNameByIdImperative = (id) => {
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
const deleteItemByIdImperative = (id) => {
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
const updateItemByIdImperative = (id, newName, newBio) => {
    for (const item of listProfile) {
        if (item.id === id) {
            if (newName)
                item.name = newName;
            if (newBio)
                item.bio = newBio;
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
(_b = document.getElementById('getBioForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', (event) => {
    event.preventDefault();
    const bioId = parseInt(document.getElementById('bioId').value);
    const bio = getBioByIdImperative(bioId);
    document.getElementById('output').innerText = bio ? `Bio: ${bio}` : 'Perfil não encontrado.';
});
(_c = document.getElementById('getNameForm')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameId = parseInt(document.getElementById('nameId').value);
    const name = getNameByIdImperative(nameId);
    document.getElementById('output').innerText = name ? `Nome: ${name}` : 'Perfil não encontrado.';
});
(_d = document.getElementById('deleteItemForm')) === null || _d === void 0 ? void 0 : _d.addEventListener('submit', (event) => {
    event.preventDefault();
    const deleteId = parseInt(document.getElementById('deleteId').value);
    deleteItemByIdImperative(deleteId);
    document.getElementById('output').innerText = `Perfil com ID ${deleteId} foi deletado.`;
    displayProfiles();
});
(_e = document.getElementById('updateItemForm')) === null || _e === void 0 ? void 0 : _e.addEventListener('submit', (event) => {
    event.preventDefault();
    const updateId = parseInt(document.getElementById('updateId').value);
    const newName = document.getElementById('newName').value;
    const newBio = document.getElementById('newBio').value;
    updateItemByIdImperative(updateId, newName || undefined, newBio || undefined);
    document.getElementById('output').innerText = `Perfil com ID ${updateId} foi atualizado.`;
    displayProfiles();
});
// Inicializa a página exibindo os perfis
displayProfiles();
