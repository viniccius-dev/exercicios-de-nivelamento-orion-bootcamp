// Função para contar as vogais
function countVowels(word: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let counter = 0;

    for(let letter of word) {
        if(vowels.includes(letter)) {
            counter++;
        }
    }

    return counter;
}

// Exemplo de uso com uma palavra de exemplo (Passada como parâmetro)
const resultOne = countVowels("Example");
console.log(`A palavra "Example" tem ${resultOne} vogais.`);

// Exemplo de uso com um formulário
const form = document.createElement('form');
const input = document.createElement('input');
const button = document.createElement('button');

button.innerHTML = 'Contar Vogais';

form.appendChild(input);
form.appendChild(button);

// Adiciona o formulário ao corpo do documento
document.body.appendChild(form);

form.onsubmit = (event) => {
    event.preventDefault();
    const inputWord = input.value;
    const resultTwo = countVowels(inputWord);
    alert(`A plavra "${inputWord}" tem ${resultTwo} vogais.`);
}
