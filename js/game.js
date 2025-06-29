var selectedDifficulty = ""; // Dificuldade selecionada
var feedbackRating = 0; 
var currentLevel = 0; // Agora global para controlar nível atual
var nivelAlcancadoMaximo = 0; // Nível mais alto já acessado pelo usuário
var difficultySelection = document.querySelector(".difficulty-selection");
var btnVoltar = document.querySelector(".btnVoltar");
var body = document.querySelector("body");
var gameArea = document.querySelector(".game-area");
var titulo = document.querySelector("#titulo");
var subtitle = document.querySelector(".subtitle");
var header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", function () {
    // Seleção de dificuldade
    document.querySelectorAll(".difficulty-button").forEach(button => {
        button.addEventListener("click", function () {
            selectedDifficulty = this.getAttribute("data-difficulty");

            updateTitle(selectedDifficulty);
            
            difficultySelection.style.display = "none";
            btnVoltar.style.display = "block";
            body.style.display = "block";
            gameArea.style.display = "flex";
            titulo.classList.remove('titlePop');
            titulo.style.fontSize = "1.3rem";
            subtitle.style.fontSize = "1rem";
            header.style.display = "flex";

            // Carregar progresso do servidor + localStorage sincronizado
            carregarProgressoServidor(selectedDifficulty).then(serverProgress => {
                if(serverProgress !== null) {
                    currentLevel = serverProgress;
                    nivelAlcancadoMaximo = serverProgress;
                    localStorage.setItem('progresso_' + selectedDifficulty, currentLevel);
                } else {
                    // Se erro no servidor, tenta localStorage
                    let progLocal = localStorage.getItem('progresso_' + selectedDifficulty);
                    currentLevel = progLocal ? parseInt(progLocal) : 0;
                    nivelAlcancadoMaximo = currentLevel;
                }
                loadLevel(currentLevel);
                atualizarCoresDosBotoes();
            });
        });
    });

    // Evento para níveis (botões .nivel)
    document.querySelectorAll(".nivel").forEach(btn => {
        btn.addEventListener("click", function () {
            let returnLevel = this.getAttribute("id");
            currentLevel = parseInt(returnLevel.replace("level", "")) - 1;
            localStorage.setItem("progresso_" + selectedDifficulty, currentLevel);
            loadLevel(currentLevel);
            updateProgress(currentLevel + 1);
            atualizarCoresDosBotoes();
        });
    });

    document.querySelector(".enter-button").addEventListener("click", function () {
        let code = document.querySelector("#code-editor").value;
        validateCode(code);
    });

    document.querySelector(".hint-button").addEventListener("click", showHint);
    // document.querySelector(".help-me-button").addEventListener("click", showAnswer);

    document.querySelector(".back-button").addEventListener("click", function () {
        gameArea.style.display = "none";
        btnVoltar.style.display = "none";
        body.style.display = "flex";
        difficultySelection.style.display = "block";
        titulo.classList.add('titlePop');
        titulo.style.fontSize = "3rem";
        header.style.display = "block";

        currentLevel = 0;
        document.querySelector(".feedback").textContent = "";
        document.querySelector("#code-editor").value = "";
        // document.querySelector("#hint-text").textContent = "Clique no botão 'Dica' para obter ajuda.";
        
        document.querySelector("title").textContent = "PHP Quest - Aprenda PHP Jogando!";
        titulo.textContent = "PHP Quest";
    });

    document.querySelector(".next-button").addEventListener("click", function () {
        if (selectedDifficulty === "avancado") {
            document.querySelector(".completion-interface").style.display = "none";
            document.querySelector(".feedback-interface").style.display = "block";
        } else {
            moveToNextDifficulty();
        }
    });

    document.querySelectorAll(".star").forEach(star => {
        star.addEventListener("click", function () {
            feedbackRating = parseInt(this.getAttribute("data-value"));
            highlightStars(feedbackRating);
        });
    });

    document.querySelector(".submit-feedback").addEventListener("click", function () {
        let feedbackText = document.querySelector(".feedback-input").value;
        alert(`Obrigado por seu feedback!\nNota: ${feedbackRating} estrelas\nFeedback: ${feedbackText}`);
        resetFeedback();
        document.querySelector(".feedback-interface").style.display = "none";
        difficultySelection.style.display = "block";
    });
});

function updateTitle(difficulty) {
    let titleText = "";
    if (difficulty === "basico") titleText = "PHP Básico";
    else if (difficulty === "intermediario") titleText = "PHP Intermediário";
    else if (difficulty === "avancado") titleText = "PHP Avançado";

    document.querySelector("title").textContent = titleText + " - Aprenda PHP Jogando!";
    titulo.textContent = titleText;
}

function moveToNextDifficulty() {
    if (selectedDifficulty === "basico") selectedDifficulty = "intermediario";
    else if (selectedDifficulty === "intermediario") selectedDifficulty = "avancado";
    else return; // Já está no avançado

    updateTitle(selectedDifficulty);
    resetProgressBar();
    document.querySelector(".completion-interface").style.display = "none";
    gameArea.style.display = "flex";

    currentLevel = 0;
    loadLevel(currentLevel);
}

function loadLevel(level) {
    currentLevel = level;
    let levelObj = levels[selectedDifficulty][currentLevel];

    document.querySelector(".current-order").textContent = levelObj.levelTitle;
    document.querySelector(".do-this").textContent = levelObj.doThis;
    document.querySelector(".explanation").textContent = levelObj.explanation;

    updateProgress(currentLevel + 1);

    document.querySelector("#code-editor").value = "";
    // document.querySelector("#hint-text").textContent = "Clique no botão 'Dica' para obter ajuda.";
    document.querySelector(".feedback").textContent = "";

    resetLevels(levelObj);
    resetStyles();
}

async function salvarProgresso(nivel, licaoAtual) {
    localStorage.setItem('progresso_' + nivel, licaoAtual);

    try {
        const response = await fetch("../php/salvar_progresso.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `dificuldade=${encodeURIComponent(nivel)}&progresso=${encodeURIComponent(licaoAtual)}`,
            credentials: "include" // Importante: isso garante o envio do cookie da sessão
        });

        const data = await response.json();
        if (data.erro) {
            console.error("Erro ao salvar no servidor:", data.erro);
        }
        return data;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
}


// Função que busca o progresso salvo no backend
async function carregarProgressoServidor(nivel) {
    try {
        let response = await fetch('../php/carregar_progresso.php', { method: 'GET' });
        if (!response.ok) throw new Error('Erro ao carregar progresso');
        let data = await response.json();
        if(data.progresso_basico !== undefined && data.progresso_intermediario !== undefined && data.progresso_avancado !== undefined) {
            // Atualiza localStorage com valores do servidor
            localStorage.setItem('progresso_basico', data.progresso_basico);
            localStorage.setItem('progresso_intermediario', data.progresso_intermediario);
            localStorage.setItem('progresso_avancado', data.progresso_avancado);
            return parseInt(data['progresso_' + nivel]) || 0;
        }
        return null;
    } catch (e) {
        console.error(e);
        return null;
    }
}

function validateCode(code) {
    let levelObj = levels[selectedDifficulty][currentLevel];

    if (levelObj.expectedCode.some(expected => code.trim() === expected.trim())) {
        document.querySelector(".feedback").textContent = "Correto!";
        document.querySelector(".feedback").classList.add("success");

        setTimeout(() => {
            currentLevel++;
            if (currentLevel > nivelAlcancadoMaximo) {
                nivelAlcancadoMaximo = currentLevel;
            }
            if (currentLevel < levels[selectedDifficulty].length) {
                salvarProgresso(selectedDifficulty, currentLevel)
                    .then(() => {
                        loadLevel(currentLevel);
                        atualizarCoresDosBotoes();
                    })
                    .catch(() => {
                        alert("Não foi possível salvar o progresso, mas você pode continuar.");
                        loadLevel(currentLevel);
                        atualizarCoresDosBotoes();
                    });
            } else {
                gameArea.style.display = "none";
                document.querySelector(".completion-interface").style.display = "block";
            }
        }, 1000);
    } else {
        document.querySelector(".feedback").textContent = "Solução Incorreta. Tente Novamente!";
        document.querySelector(".feedback").classList.add("shake");
        setTimeout(() => {
            document.querySelector(".feedback").classList.remove("shake");
        }, 500);
    }
}


function highlightStars(rating) {
    document.querySelectorAll(".star").forEach(star => {
        star.style.color = star.getAttribute("data-value") <= rating ? "#FFD700" : "#ccc";
    });
}

function resetStyles() {
    document.querySelector(".feedback").classList.remove("shake", "success");
}

function showHint() {
    const hint = levels[selectedDifficulty][currentLevel].hint;
    const modal = document.getElementById("hintModal");
    const hintText = document.getElementById("hintTextModal");

    hintText.textContent = hint || "Nenhuma dica disponível para esta lição.";
    modal.style.display = "block";
}


document.querySelector(".close-button").addEventListener("click", function () {
    document.getElementById("hintModal").style.display = "none";
});

// Fecha o modal se clicar fora da área de conteúdo
window.addEventListener("click", function (event) {
    const modal = document.getElementById("hintModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


function showAnswer() {
    let levelObj = levels[selectedDifficulty][currentLevel];
    document.querySelector("#code-editor").value = levelObj.expectedCode[0];
}

function updateProgress(currentLevel) {
    const totalLevels = levels[selectedDifficulty].length;
    const progressBar = document.querySelector(".progress");

    // Se o usuário está no nível 1, barra em 0%
    // Se está no nível 2, barra em 20%... até nível 5 = 80%
    const progressPercent = ((currentLevel - 1) / (totalLevels - 1)) * 100;

    // Garante que não seja menor que 0 nem maior que 100
    const clampedProgress = Math.max(0, Math.min(progressPercent, 100));
    progressBar.style.width = clampedProgress + "%";
}


function resetProgressBar() {
    document.querySelector(".progress").style.width = "0%";
}

function resetFeedback() {
    feedbackRating = 0;
    highlightStars(feedbackRating);
    document.querySelector(".feedback-input").value = "";
}

function resetLevels(level) {
    // Limpar área de código, dicas, feedback, etc, se necessário
    document.querySelector("#code-editor").value = "";
    // document.querySelector("#hint-text").textContent = "Clique no botão 'Dica' para obter ajuda.";
    document.querySelector(".feedback").textContent = "";
}

function atualizarCoresDosBotoes() {
    document.querySelectorAll(".nivel").forEach(btn => {
        const btnLevel = parseInt(btn.getAttribute("id").replace("level", ""));
        if (btnLevel <= nivelAlcancadoMaximo + 1) {
            btn.classList.add("active");
            btn.disabled = false; // Habilita clique
            btn.style.pointerEvents = "auto"; // Garante que seja clicável
            btn.style.opacity = "1"; // Totalmente visível
        } else {
            btn.classList.remove("active");
            btn.disabled = true; // Impede clique
            btn.style.pointerEvents = "none"; // Impede clique (redundância segura)
            btn.style.opacity = "0.5"; // Visualmente bloqueado
        }
    });

    // Marcar dificuldade como concluída, se todos os níveis foram feitos
    if (currentLevel >= levels[selectedDifficulty].length - 1) {
        const diffBtn = document.querySelector(`.difficulty-button[data-difficulty="${selectedDifficulty}"]`);
        if (diffBtn) {
            diffBtn.classList.add("dificuldade-concluida");
        }
    }
}


document.getElementById("btnLogout").addEventListener("click", function () {
    fetch("../php/logout.php", {
        method: "POST",
        credentials: "include"
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "../index.html"; // redireciona para a tela de login
        } else {
            alert("Erro ao encerrar sessão.");
        }
    })
    .catch(error => {
        console.error("Erro ao sair:", error);
        alert("Erro ao sair. Tente novamente.");
    });
});

document.getElementById("btnLogout").addEventListener("click", function () {
    fetch("../php/logout.php", {
        method: "POST",
        credentials: "include"
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "../index.html"; // redireciona para a tela de login
        } else {
            alert("Erro ao encerrar sessão.");
        }
    })
    .catch(error => {
        console.error("Erro ao sair:", error);
        alert("Erro ao sair. Tente novamente.");
    });
});

