function toggleNumber(event) {
    const numberElement = event.target;
    const number = parseInt(numberElement.textContent);
    
    // Alternar a classe 'active' para colorir/descolorir
    numberElement.classList.toggle('active');

    // Obter a letra correspondente com base no número
    let letter = '';
    if (number >= 1 && number <= 15) {
        letter = 'B';
    } else if (number >= 16 && number <= 30) {
        letter = 'I';
    } else if (number >= 31 && number <= 45) {
        letter = 'N';
    } else if (number >= 46 && number <= 60) {
        letter = 'G';
    } else if (number >= 61 && number <= 75) {
        letter = 'O';
    }

    // Atualizar o texto do último número clicado
    const lastNumberElement = document.getElementById('last-number');
    if (numberElement.classList.contains('active')) {
        lastNumberElement.textContent = `${letter}-${number}`;
    } else {
        lastNumberElement.textContent = 'Nenhum';
    }
}

// Função para reiniciar todos os números
function resetGame() {
    // Exibe uma mensagem de confirmação
    const confirmReset = confirm("Tem certeza de que deseja reiniciar o jogo?");
    if (confirmReset) {
        // Remove a classe 'active' de todos os botões de números
        const numberElements = document.querySelectorAll('.bingo-number');
        numberElements.forEach(element => element.classList.remove('active'));

        // Reseta o último número clicado
        const lastNumberElement = document.getElementById('last-number');
        lastNumberElement.textContent = 'Nenhum';
    }
}

// Adicionar o evento de clique para todos os números
const numberElements = document.querySelectorAll('.bingo-number');
numberElements.forEach(element => {
    element.addEventListener('click', toggleNumber);
});

// Adicionar evento de clique para o botão de reiniciar
document.getElementById('reset-button').addEventListener('click', resetGame);
