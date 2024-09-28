const levels = {
    basico: [
        {
            levelTitle: "Nível 1 - Imprimir Texto",
            levelClient: 1, 
            doThis: "Use a função `echo` para imprimir a frase 'Olá, Mundo!'.",
            explanation: "No PHP, usamos `echo` para imprimir texto.",
            expectedCode: [
                "echo 'Olá, Mundo!';", 
                "echo 'Olá Mundo';", 
                "echo 'ola mundo';",
                "echo 'Ola Mundo';"],
            hint: "Utilize `echo` seguido por uma string entre aspas simples para imprimir texto."
        },
        {
            levelTitle: "Nível 2 - Variáveis Simples",
            levelClient: 2,
            doThis: "Defina uma variável `$nome` e use `echo` para imprimir o valor dessa variável.",
            explanation: "Você pode definir variáveis no PHP com o símbolo `$` e depois usá-las com `echo`.",
            expectedCode: "<?php $nome = 'João';\necho $nome; ?>",
            hint: "Atribua uma string à variável `$nome` e use `echo` para exibi-la."
        },
        {
            levelTitle: "Nível 3 - Condicional If",
            levelClient: 3,
            doThis: "Crie uma condição que verifique se `$idade` é maior que 18. Se for, imprima 'Maior de idade'. Caso contrário, imprima 'Menor de idade'.",
            explanation: "Você pode usar `if` e `else` para criar condições no PHP.",
            expectedCode: "<?php\n$idade = 20;\nif ($idade > 18) {\n    echo 'Maior de idade';\n} else {\n    echo 'Menor de idade';\n}\n?>",
            hint: "Use `if ($variavel > valor)` para verificar se a variável é maior que o valor."
        },
        {
            levelTitle: "Nível 4 - Estruturas de Repetição",
            levelClient: 4,
            doThis: "Imprima os números de 1 a 5 utilizando um loop `for`.",
            explanation: "O loop `for` permite que você repita um bloco de código várias vezes.",
            expectedCode: "<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo $i;\n}\n?>",
            hint: "A sintaxe básica de um `for` é: for (inicialização; condição; incremento) { código }."
        },
        {
            levelTitle: "Nível 5 - Funções Simples",
            levelClient: 5,
            doThis: "Crie uma função chamada `saudar` que imprime 'Olá, PHP!'.",
            explanation: "Funções são blocos de código que podem ser chamados várias vezes.",
            expectedCode: "<?php\nfunction saudar() {\n    echo 'Olá, PHP!';\n}\nsaudar();\n?>",
            hint: "Use `function nomeDaFuncao() { código }` para definir uma função."
        }
    ],
    intermediario: [
        {
            levelTitle: "Nível 1 - Arrays Simples",
            doThis: "Crie um array com três nomes(Ana, Bruno e Carlos) e imprima o segundo nome.",
            explanation: "Arrays são usados para armazenar múltiplos valores em uma única variável.",
            expectedCode: "<?php\n$nomes = ['Ana', 'Bruno', 'Carlos'];\necho $nomes[1];\n?>",
            hint: "Acesse um valor de array usando o índice, por exemplo, `$array[indice]`."
        },
        {
            levelTitle: "Nível 2 - Loops com Arrays",
            doThis: "Use um loop `foreach` para imprimir todos os itens de um array.",
            explanation: "O `foreach` é uma maneira eficiente de percorrer arrays.",
            expectedCode: "<?php\n$nomes = ['Ana', 'Bruno', 'Carlos'];\nforeach ($nomes as $nome) {\n    echo $nome;\n}\n?>",
            hint: "Use `foreach ($array as $valor)` para percorrer um array."
        },
        {
            levelTitle: "Nível 3 - Manipulação de Strings",
            doThis: "Converta uma string para maiúsculas usando a função `strtoupper`.",
            explanation: "Funções de manipulação de strings podem transformar texto em PHP.",
            expectedCode: "<?php\n$texto = 'php é divertido';\necho strtoupper($texto);\n?>",
            hint: "A função `strtoupper($string)` converte uma string para maiúsculas."
        },
        {
            levelTitle: "Nível 4 - Condicionais com Strings",
            doThis: "Verifique se a string contém a palavra 'PHP'.",
            explanation: "Você pode usar a função `strpos` para verificar a presença de substrings.",
            expectedCode: "<?php\n$frase = 'Eu adoro PHP';\nif (strpos($frase, 'PHP') !== false) {\n    echo 'Contém PHP';\n}\n?>",
            hint: "A função `strpos` retorna a posição de uma substring ou `false` se não for encontrada."
        },
        {
            levelTitle: "Nível 5 - Funções com Parâmetros",
            doThis: "Crie uma função que receba um nome como parâmetro e imprima uma saudação.",
            explanation: "Funções podem aceitar parâmetros para torná-las mais dinâmicas.",
            expectedCode: "<?php\nfunction saudar($nome) {\n    echo 'Olá, ' . $nome;\n}\nsaudar('João');\n?>",
            hint: "Funções podem receber parâmetros dentro dos parênteses: `function nome($parametro)`."
        }
    ],
    avancado: [
        {
            levelTitle: "Nível 1 - PDO para Conexão com MySQL",
            doThis: "Conecte-se a um banco de dados MySQL usando PDO.",
            explanation: "O PDO é uma interface segura para acessar bancos de dados em PHP.",
            expectedCode: "<?php\ntry {\n    $pdo = new PDO('mysql:host=localhost;dbname=test', 'usuario', 'senha');\n    echo 'Conexão bem-sucedida';\n} catch (PDOException $e) {\n    echo 'Erro: ' . $e->getMessage();\n}\n?>",
            hint: "Use `new PDO('mysql:host=host;dbname=banco', 'usuario', 'senha')` para conectar."
        },
        {
            levelTitle: "Nível 2 - Consultas com PDO",
            doThis: "Execute uma consulta SQL que selecione todos os usuários de uma tabela `usuarios`.",
            explanation: "Com PDO, você pode executar consultas SQL com segurança.",
            expectedCode: "<?php\n$stmt = $pdo->query('SELECT * FROM usuarios');\nwhile ($row = $stmt->fetch()) {\n    echo $row['nome'];\n}\n?>",
            hint: "Use `$pdo->query('SQL')` para executar uma consulta e `fetch()` para buscar resultados."
        },
        {
            levelTitle: "Nível 3 - Inserção de Dados com PDO",
            doThis: "Insira um novo usuário na tabela `usuarios` com PDO.",
            explanation: "Use consultas `INSERT` com PDO para adicionar dados ao banco.",
            expectedCode: "<?php\n$stmt = $pdo->prepare('INSERT INTO usuarios (nome) VALUES (:nome)');\n$stmt->execute(['nome' => 'Carlos']);\necho 'Usuário inserido';\n?>",
            hint: "Use `$pdo->prepare('SQL')` e `execute(['parametro' => valor])` para consultas preparadas."
        },
        {
            levelTitle: "Nível 4 - Atualização de Dados com PDO",
            doThis: "Atualize o nome de um usuário específico na tabela `usuarios`.",
            explanation: "Use consultas `UPDATE` com PDO para modificar dados no banco.",
            expectedCode: "<?php\n$stmt = $pdo->prepare('UPDATE usuarios SET nome = :nome WHERE id = :id');\n$stmt->execute(['nome' => 'Ana', 'id' => 1]);\necho 'Usuário atualizado';\n?>",
            hint: "Use `UPDATE tabela SET coluna = valor WHERE condição` para atualizar dados."
        },
        {
            levelTitle: "Nível 5 - Deleção de Dados com PDO",
            doThis: "Remova um usuário específico da tabela `usuarios` usando PDO.",
            explanation: "Use consultas `DELETE` com PDO para remover dados do banco.",
            expectedCode: "<?php\n$stmt = $pdo->prepare('DELETE FROM usuarios WHERE id = :id');\n$stmt->execute(['id' => 1]);\necho 'Usuário removido';\n?>",
            hint: "Use `DELETE FROM tabela WHERE condição` para remover dados."
        }
    ]
};
