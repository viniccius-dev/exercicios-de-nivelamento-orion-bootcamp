// Função para contar as vogais
function countVowels(word: string): number {
    const vowelsFound: RegExpMatchArray | null = word.match(/[aeiouAEIOU]/g);

    return vowelsFound ? vowelsFound.length : 0;
}

// Exemplo de uso com uma palavra de exemplo (Passada como parâmetro)
const resultOne: number = countVowels("Example");
console.log(`A palavra "Example" tem ${resultOne} vogais.`);

// Exemplo de uso com um formulário
const form: HTMLFormElement = document.createElement('form');
const input: HTMLInputElement = document.createElement('input');
const button: HTMLButtonElement = document.createElement('button');

button.innerHTML = 'Contar Vogais';

form.appendChild(input);
form.appendChild(button);

// Adiciona o formulário ao corpo do documento
document.body.appendChild(form);

form.onsubmit = (event): void => {
    event.preventDefault();
    const inputWord = input.value;
    const resultTwo = countVowels(inputWord);
    alert(`A plavra "${inputWord}" tem ${resultTwo} vogais.`);
}
