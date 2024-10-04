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

// Configuração do formulário de contagem de vogais
document.getElementById('vowelForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = (document.getElementById('vowelInput') as HTMLInputElement).value;
    const vowelCount = countVowels(input);
    alert(`A palavra "${input}" tem ${vowelCount} vogais.`);
});