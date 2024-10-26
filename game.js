// import capturarTexto from './tratar.js';

var currentLevel = 0;
var selectedDifficulty = ""; // Não há dificuldade selecionada por padrão
var feedbackRating = 0; // Para armazenar a nota de estrelas do feedback
var levelClient = 1;

document.addEventListener("DOMContentLoaded", function () {
    // Seleção de dificuldade
    document.querySelectorAll(".difficulty-button").forEach(button => {
        button.addEventListener("click", function () {
            selectedDifficulty = this.getAttribute("data-difficulty");

            // Atualizar o título da página e o cabeçalho com base na dificuldade escolhida
            updateTitle(selectedDifficulty);
            
            // Ocultar a seleção de dificuldade
            document.querySelector(".difficulty-selection").style.display = "none";
            
            // Exibir a área do jogo
            document.querySelector(".game-area").style.display = "flex";

             // Ao selecionar um nível, chame a função `iniciarLicao(nivelEscolhido)`
            iniciarLicao(selectedDifficulty);
        });
    });

    // Botão "Enviar Código"
    document.querySelector(".enter-button").addEventListener("click", function () {
        let code = document.querySelector("#code-editor").value;
        validateCode(code);
    });

    // Botão "Dica"
    document.querySelector(".hint-button").addEventListener("click", function () {
        showHint();
    });

    // Botão "Me Ajude, Estou Preso"
    document.querySelector(".help-me-button").addEventListener("click", function () {
        showAnswer();
    });

    // Botão "Voltar"
    document.querySelector(".back-button").addEventListener("click", function () {
        // Ocultar a área do jogo
        document.querySelector(".game-area").style.display = "none";
        
        // Exibir a seleção de dificuldade novamente
        document.querySelector(".difficulty-selection").style.display = "block";
        
        // Resetar o estado do jogo
        currentLevel = 0;
        document.querySelector(".feedback").textContent = "";
        document.querySelector("#code-editor").value = "";
        document.querySelector("#hint-text").textContent = "Clique no botão 'Dica' para obter ajuda."; 
        
        // Restaurar o título padrão
        document.querySelector("title").textContent = "PHP Quest - Aprenda PHP Jogando!";
        document.querySelector("header h1").textContent = "PHP Quest";
    });

    // Botão "Próximo" após completar o nível Avançado, transita para a interface de feedback
    document.querySelector(".next-button").addEventListener("click", function () {
        if (selectedDifficulty === "avancado") {
            // Se estiver no nível avançado, exibe a interface de feedback
            document.querySelector(".completion-interface").style.display = "none";
            document.querySelector(".feedback-interface").style.display = "block";
        } else {
            moveToNextDifficulty(); // Função que move para o próximo nível de dificuldade
        }
    });

    // Interação de feedback - selecionar estrelas
    document.querySelectorAll(".star").forEach(star => {
        star.addEventListener("click", function () {
            feedbackRating = this.getAttribute("data-value");
            highlightStars(feedbackRating); // Função para destacar as estrelas selecionadas
        });
    });

    // Botão para enviar o feedback
    document.querySelector(".submit-feedback").addEventListener("click", function () {
        let feedbackText = document.querySelector(".feedback-input").value;
        alert(`Obrigado por seu feedback!\nNota: ${feedbackRating} estrelas\nFeedback: ${feedbackText}`);
        
        // Resetar o feedback e a página para a seleção de dificuldade
        resetFeedback();
        document.querySelector(".feedback-interface").style.display = "none";
        document.querySelector(".difficulty-selection").style.display = "block";
    });
});

// Atualiza o título da página e do cabeçalho com base na dificuldade selecionada
function updateTitle(difficulty) {
    let titleText = "";
    if (difficulty === "basico") {
        titleText = "PHP Básico";
    } else if (difficulty === "intermediario") {
        titleText = "PHP Intermediário";
    } else if (difficulty === "avancado") {
        titleText = "PHP Avançado";
    }

    // Atualizar o título da página (na aba do navegador)
    document.querySelector("title").textContent = titleText + " - Aprenda PHP Jogando!";
    
    // Atualizar o título no cabeçalho
    document.querySelector("header h1").textContent = titleText;
}

// Função para mover para o próximo nível de dificuldade
function moveToNextDifficulty() {
    if (selectedDifficulty === "basico") {
        selectedDifficulty = "intermediario"; // Muda para o próximo nível (Intermediário)
    } else if (selectedDifficulty === "intermediario") {
        selectedDifficulty = "avancado"; // Muda para o próximo nível (Avançado)
    } 

    // Atualizar o título para a nova dificuldade
    updateTitle(selectedDifficulty);

    // Resetar o progresso
    resetProgressBar();

    // Ocultar a interface de conclusão e exibir a área de jogo
    document.querySelector(".completion-interface").style.display = "none";
    document.querySelector(".game-area").style.display = "flex";

    // Reiniciar o nível
    loadLevel(0);
}

function loadLevel(levelAtual) {
    let level = levels[selectedDifficulty][levelAtual];
    document.querySelector(".current-order").textContent = level.levelTitle;
    document.querySelector(".do-this").textContent = level.doThis;
    document.querySelector(".explanation").textContent = level.explanation;
    
    // Limpar o campo de texto (editor)
    document.querySelector("#code-editor").value = ""; // Limpa o campo de texto
    
    // Resetar o texto de ajuda
    document.querySelector("#hint-text").textContent = "Clique no botão 'Dica' para obter ajuda."; 

    // Limpar qualquer feedback anterior
    document.querySelector(".feedback").textContent = "";
   
    resetLevels(level);
    resetStyles();
}

// Função para salvar o progresso da lição de um nível específico
function salvarProgresso(nivel, licaoAtual) {
    // Ex: 'progresso_básico' ou 'progresso_intermediario'
    let chave = 'progresso_'+nivel;
    localStorage.setItem(chave, licaoAtual);
}

// Função para carregar o progresso salvo de um nível
function carregarProgresso(nivel) {
    let chave = 'progresso_'+nivel;
    return localStorage.getItem(chave);
}

// Função para continuar de onde parou ou iniciar do zero
function iniciarLicao(nivel) {
    updateProgress();
    let licaoSalva = carregarProgresso(nivel);
    if (licaoSalva) {
    loadLevel(licaoSalva);
    } else {
    loadLevel(0);
    }
}

function validateCode(code) {
    let level = levels[selectedDifficulty][currentLevel];
    if (code.trim() === level.expectedCode[0].trim() || 
        code.trim() === level.expectedCode[1].trim() || 
        code.trim() === level.expectedCode[2].trim() ||
        code.trim() === level.expectedCode[3].trim()) {

        document.querySelector(".feedback").textContent = "Correto!";
        document.querySelector(".feedback").classList.add("success");
        updateProgress();
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < levels[selectedDifficulty].length) {
                salvarProgresso(level.levelDificulty, currentLevel);
                loadLevel(currentLevel);
            } else {
                // Exibir a interface de conclusão do nível
                document.querySelector(".game-area").style.display = "none";
                document.querySelector(".completion-interface").style.display = "block";
            }
        }, 1000);
    } else {
        document.querySelector(".feedback").textContent = "Tente novamente!";
        document.querySelector(".feedback").classList.add("shake");
        setTimeout(() => {
            document.querySelector(".feedback").classList.remove("shake");
        }, 500);
    }
}

// Função para destacar as estrelas selecionadas
function highlightStars(rating) {
    document.querySelectorAll(".star").forEach(star => {
        if (star.getAttribute("data-value") <= rating) {
            star.style.color = "#FFD700"; // Destacar as estrelas selecionadas
        } else {
            star.style.color = "#ccc"; // Desmarcar as estrelas acima do valor
        }
    });
}

function resetStyles() {
    document.querySelector(".feedback").classList.remove("shake");
    document.querySelector(".feedback").classList.remove("success");
}

function showHint() {
    let level = levels[selectedDifficulty][currentLevel];
    document.querySelector("#hint-text").textContent = `Dica: ${level.hint}`;
}

function showAnswer() {
    let level = levels[selectedDifficulty][currentLevel];
    
    // Preencher o campo de texto com a resposta correta
    document.querySelector("#code-editor").value = level.expectedCode;
}

function updateProgress() {
    let progressBar = document.querySelector(".progress");
    let progressPercent = ((currentLevel + 1) / levels[selectedDifficulty].length) * 100;
    progressBar.style.width = progressPercent + "%";
}

function resetProgressBar() {
    let progressBar = document.querySelector(".progress");
    progressBar.style.width = "0%"; // Reseta a barra de progresso para 0%
}

// Função para resetar o feedback
function resetFeedback() {
    feedbackRating = 0;
    highlightStars(feedbackRating); // Resetar as estrelas
    document.querySelector(".feedback-input").value = ""; // Limpar o campo de feedback
}

function resetLevels(level) {
    let levelSelected = document.querySelectorAll(".nivel");
    levelSelected.forEach(function(value){
        value.classList.remove('active');
    });
    let currentLevel = level.levelClient;
    document.querySelector("#level"+currentLevel).classList.add('active');
}