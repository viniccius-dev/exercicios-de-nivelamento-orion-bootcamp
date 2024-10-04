"use strict";
var _a;
// Função para contar as vogais
function countVowels(word) {
    const vowelsFound = word.match(/[aeiouAEIOU]/g);
    return vowelsFound ? vowelsFound.length : 0;
}
// Configuração do formulário de contagem de vogais
(_a = document.getElementById('vowelForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('vowelInput').value;
    const vowelCount = countVowels(input);
    alert(`A palavra "${input}" tem ${vowelCount} vogais.`);
});
