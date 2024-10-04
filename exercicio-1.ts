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