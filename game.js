var currentLevel = 0;

document.addEventListener("DOMContentLoaded", function () {
    loadLevel();

    document.querySelector(".enter-button").addEventListener("click", function () {
        let code = document.querySelector("#code-editor").value;
        validateCode(code);
    });

    document.querySelector(".hint-button").addEventListener("click", function () {
        showHint();
    });

    document.querySelector(".help-me-button").addEventListener("click", function () {
        showAnswer();
    });

    // Ouvinte para detecção de "?" seguido de Enter no editor
    document.querySelector("#code-editor").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const textarea = event.target;
            const code = textarea.value;
            const cursorPosition = textarea.selectionStart;

            // Verifica se o caractere anterior ao cursor é "?"
            if (code.charAt(cursorPosition - 1) === "?") {
                event.preventDefault(); // Evita a quebra de linha padrão
                const beforeCursor = code.substring(0, cursorPosition - 1);
                const afterCursor = code.substring(cursorPosition);

                // Substitui "?" por "<?php\n\n?>"
                textarea.value = beforeCursor + "<?php\n\n?>" + afterCursor;

                // Coloca o cursor entre as tags <?php e ?>
                textarea.selectionStart = textarea.selectionEnd = beforeCursor.length + 7; // Posiciona entre <?php e ?>
            }
        }
    });
});

function loadLevel() {
    let level = levels[currentLevel];
    document.querySelector(".current-order").textContent = level.levelTitle;
    document.querySelector(".do-this").textContent = level.doThis;
    document.querySelector(".explanation").textContent = level.explanation;
    document.querySelector("#code-editor").value = ""; // O campo de texto começa vazio
    document.querySelector(".feedback").textContent = "";
    resetStyles();
}

function validateCode(code) {
    let level = levels[currentLevel];
    const expectedOutput = getExpectedOutput(level);  // Saída esperada para o nível atual

    fetch('validate.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `code=${encodeURIComponent(code)}&expected_output=${encodeURIComponent(expectedOutput)}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector(".feedback").textContent = "Correto!";
            document.querySelector(".feedback").classList.add("success");
            updateProgress();
            setTimeout(() => {
                currentLevel++;
                if (currentLevel < levels.length) {
                    loadLevel();
                } else {
                    document.querySelector(".feedback").textContent = "Você completou todos os níveis!";
                }
            }, 1000);
        } else {
            document.querySelector(".feedback").textContent = data.message || "Tente novamente!";
            document.querySelector(".feedback").classList.add("shake");
            setTimeout(() => {
                document.querySelector(".feedback").classList.remove("shake");
            }, 500);
        }
    });
}

function getExpectedOutput(level) {
    // Aqui, definimos como obter a saída esperada para cada nível.
    // Isso pode ser configurado no objeto `levels` no `levels.js`.
    return level.expectedOutput || '';  // Retorna a saída esperada definida no nível
}

function resetStyles() {
    document.querySelector(".feedback").classList.remove("shake");
    document.querySelector(".feedback").classList.remove("success");
}

function showHint() {
    let level = levels[currentLevel];
    document.querySelector("#hint-text").textContent = `Dica: ${level.hint}`;
}

function showAnswer() {
    let level = levels[currentLevel];
    document.querySelector("#hint-text").textContent = `Resposta: ${level.expectedCode}`;
}

function updateProgress() {
    let progressBar = document.querySelector(".progress");
    let progressPercent = ((currentLevel + 1) / levels.length) * 100;
    progressBar.style.width = progressPercent + "%";
}
