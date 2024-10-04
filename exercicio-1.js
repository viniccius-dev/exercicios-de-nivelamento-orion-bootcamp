"use strict";
var _a;
// Função para contar as vogais
function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let counter = 0;
    for (let letter of word) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }
    return counter;
}
// Configuração do formulário de contagem de vogais
(_a = document.getElementById('vowelForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('vowelInput').value;
    const vowelCount = countVowels(input);
    alert(`A palavra "${input}" tem ${vowelCount} vogais.`);
});
