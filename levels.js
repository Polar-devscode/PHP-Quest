const levels = [
    {
        levelTitle: "Nível 1 - Imprimir Texto",
        doThis: "Use a função `echo` para imprimir a frase 'Olá, Mundo!'.",
        explanation: "No PHP, usamos `echo` para imprimir texto.",
        expectedCode: "<?php\necho 'Olá, Mundo!';\n?>",
        expectedOutput: "Olá, Mundo!",
        hint: "Utilize `echo` seguido por uma string entre aspas simples para imprimir texto."
    },
    {
        levelTitle: "Nível 2 - Variáveis Simples",
        doThis: "Defina uma variável `$nome` e use `echo` para imprimir o valor dessa variável.",
        explanation: "Você pode definir variáveis no PHP com o símbolo `$` e depois usá-las com `echo`.",
        expectedCode: "<?php\n$nome = 'João';\necho $nome;\n?>",
        expectedOutput: "João",
        hint: "Atribua uma string à variável `$nome` e use `echo` para exibi-la."
    },
    {
        levelTitle: "Nível 3 - Condicional If",
        doThis: "Crie uma condição que verifique se `$idade` é maior que 18. Se for, imprima 'Maior de idade'. Caso contrário, imprima 'Menor de idade'.",
        explanation: "Você pode usar `if` e `else` para criar condições no PHP.",
        expectedCode: "<?php\n$idade = 20;\nif ($idade > 18) {\n    echo 'Maior de idade';\n} else {\n    echo 'Menor de idade';\n}\n?>",
        expectedOutput: "Maior de idade",
        hint: "Use `if ($variavel > valor)` para verificar se a variável é maior que o valor."
    },
    {
        levelTitle: "Nível 4 - Estruturas de Repetição",
        doThis: "Imprima os números de 1 a 5 utilizando um loop `for`.",
        explanation: "O loop `for` permite que você repita um bloco de código várias vezes.",
        expectedCode: "<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo $i;\n}\n?>",
        expectedOutput: "12345",
        hint: "A sintaxe básica de um `for` é: for (inicialização; condição; incremento) { código }."
    },
    {
        levelTitle: "Nível 5 - Funções Simples",
        doThis: "Crie uma função chamada `saudar` que imprime 'Olá, PHP!'.",
        explanation: "Funções são blocos de código que podem ser chamados várias vezes.",
        expectedCode: "<?php\nfunction saudar() {\n    echo 'Olá, PHP!';\n}\nsaudar();\n?>",
        expectedOutput: "Olá, PHP!",
        hint: "Use `function nomeDaFuncao() { código }` para definir uma função."
    },
    {
        levelTitle: "Nível 6 - Arrays Simples",
        doThis: "Crie um array com três nomes e imprima o segundo nome.",
        explanation: "Arrays são usados para armazenar múltiplos valores em uma única variável.",
        expectedCode: "<?php\n$nomes = ['Ana', 'Bruno', 'Carlos'];\necho $nomes[1];\n?>",
        expectedOutput: "Bruno",
        hint: "Acesse um valor de array usando o índice, por exemplo, `$array[indice]`."
    },
    {
        levelTitle: "Nível 7 - Loops com Arrays",
        doThis: "Use um loop `foreach` para imprimir todos os itens de um array.",
        explanation: "O `foreach` é uma maneira eficiente de percorrer arrays.",
        expectedCode: "<?php\n$nomes = ['Ana', 'Bruno', 'Carlos'];\nforeach ($nomes as $nome) {\n    echo $nome;\n}\n?>",
        expectedOutput: "AnaBrunoCarlos",
        hint: "Use `foreach ($array as $valor)` para percorrer um array."
    },
    {
        levelTitle: "Nível 8 - Manipulação de Strings",
        doThis: "Converta uma string para maiúsculas usando a função `strtoupper`.",
        explanation: "Funções de manipulação de strings podem transformar texto em PHP.",
        expectedCode: "<?php\n$texto = 'php é divertido';\necho strtoupper($texto);\n?>",
        expectedOutput: "PHP É DIVERTIDO",
        hint: "A função `strtoupper($string)` converte uma string para maiúsculas."
    },
    {
        levelTitle: "Nível 9 - Condicionais com Strings",
        doThis: "Verifique se a string contém a palavra 'PHP'.",
        explanation: "Você pode usar a função `strpos` para verificar a presença de substrings.",
        expectedCode: "<?php\n$frase = 'Eu adoro PHP';\nif (strpos($frase, 'PHP') !== false) {\n    echo 'Contém PHP';\n}\n?>",
        expectedOutput: "Contém PHP",
        hint: "A função `strpos` retorna a posição de uma substring ou `false` se não for encontrada."
    },
    {
        levelTitle: "Nível 10 - Funções com Parâmetros",
        doThis: "Crie uma função que receba um nome como parâmetro e imprima uma saudação.",
        explanation: "Funções podem aceitar parâmetros para torná-las mais dinâmicas.",
        expectedCode: "<?php\nfunction saudar($nome) {\n    echo 'Olá, ' . $nome;\n}\nsaudar('João');\n?>",
        expectedOutput: "Olá, João",
        hint: "Funções podem receber parâmetros dentro dos parênteses: `function nome($parametro)`."
    },
    {
        levelTitle: "Nível 11 - Manipulação de Arrays",
        doThis: "Adicione um novo valor ao final de um array usando a função `array_push`.",
        explanation: "`array_push` adiciona elementos ao final de um array.",
        expectedCode: "<?php\n$numeros = [1, 2, 3];\narray_push($numeros, 4);\nprint_r($numeros);\n?>",
        expectedOutput: "Array\n(\n    [0] => 1\n    [1] => 2\n    [2] => 3\n    [3] => 4\n)\n",
        hint: "Use `array_push($array, $valor)` para adicionar um valor ao final de um array."
    },
    {
        levelTitle: "Nível 12 - Contagem de Itens em Arrays",
        doThis: "Conte o número de itens em um array usando a função `count`.",
        explanation: "A função `count` retorna o número de elementos em um array.",
        expectedCode: "<?php\n$frutas = ['maçã', 'banana', 'laranja'];\necho count($frutas);\n?>",
        expectedOutput: "3",
        hint: "Use `count($array)` para contar os itens em um array."
    },
    {
        levelTitle: "Nível 13 - Funções de Datas",
        doThis: "Imprima a data atual no formato `dia/mês/ano` usando a função `date`.",
        explanation: "A função `date` é usada para formatar a data e hora em PHP.",
        expectedCode: "<?php\necho date('d/m/Y');\n?>",
        expectedOutput: new Date().toLocaleDateString('pt-BR'), // Dinamicamente obtém a data de hoje
        hint: "A função `date('formato')` formata a data. Exemplo: `date('d/m/Y')`."
    },
    {
        levelTitle: "Nível 14 - Funções com Retorno",
        doThis: "Crie uma função que retorne a soma de dois números.",
        explanation: "Funções podem retornar valores usando a palavra-chave `return`.",
        expectedCode: "<?php\nfunction somar($a, $b) {\n    return $a + $b;\n}\necho somar(5, 3);\n?>",
        expectedOutput: "8",
        hint: "Use `return` dentro da função para retornar um valor."
    },
    {
        levelTitle: "Nível 15 - Função `isset`",
        doThis: "Verifique se uma variável está definida usando `isset` e imprima seu valor.",
        explanation: "`isset` verifica se uma variável foi definida e não é `null`.",
        expectedCode: "<?php\n$nome = 'Maria';\nif (isset($nome)) {\n    echo $nome;\n}\n?>",
        expectedOutput: "Maria",
        hint: "Use `isset($variavel)` para verificar se uma variável foi definida."
    },
    {
        levelTitle: "Nível 16 - Operadores Lógicos",
        doThis: "Use operadores lógicos para verificar se `$idade` é maior que 18 e se `$pais` é 'Brasil'.",
        explanation: "Operadores lógicos permitem combinar condições em PHP.",
        expectedCode: "<?php\n$idade = 20;\n$pais = 'Brasil';\nif ($idade > 18 && $pais == 'Brasil') {\n    echo 'Maior de idade no Brasil';\n}\n?>",
        expectedOutput: "Maior de idade no Brasil",
        hint: "Use `&&` para combinar duas condições em um `if`."
    },
    {
        levelTitle: "Nível 17 - Manipulação de Formulários",
        doThis: "Crie um formulário que envia o nome e imprima-o na página usando `$_POST`.",
        explanation: "`$_POST` é usado para capturar dados enviados via formulário HTML.",
        expectedCode: "<?php\nif ($_SERVER['REQUEST_METHOD'] == 'POST') {\n    $nome = $_POST['nome'];\n    echo 'Nome enviado: ' . $nome;\n}\n?>",
        expectedOutput: "Nome enviado: João",
        hint: "Use `$_POST['campo']` para acessar o valor de um campo de formulário."
    },
    {
        levelTitle: "Nível 18 - Sessões",
        doThis: "Inicie uma sessão e armazene o nome do usuário em uma variável de sessão.",
        explanation: "As sessões permitem que você armazene dados entre diferentes páginas.",
        expectedCode: "<?php\nsession_start();\n$_SESSION['usuario'] = 'Maria';\necho 'Usuário: ' . $_SESSION['usuario'];\n?>",
        expectedOutput: "Usuário: Maria",
        hint: "Use `session_start()` para iniciar uma sessão e `$_SESSION` para armazenar valores."
    },
    {
        levelTitle: "Nível 19 - Cookies",
        doThis: "Crie um cookie que armazena a preferência de idioma do usuário.",
        explanation: "Cookies permitem armazenar dados no navegador do usuário por um período de tempo.",
        expectedCode: "<?php\nsetcookie('idioma', 'portugues', time() + 3600);\necho 'Cookie definido';\n?>",
        expectedOutput: "Cookie definido",
        hint: "Use `setcookie('nome', 'valor', tempo)` para definir um cookie."
    },
    {
        levelTitle: "Nível 20 - Upload de Arquivos",
        doThis: "Crie um script que permita o upload de um arquivo e exiba o nome do arquivo carregado.",
        explanation: "O PHP facilita o upload de arquivos via formulário HTML.",
        expectedCode: "<?php\nif (isset($_FILES['arquivo'])) {\n    $arquivo = $_FILES['arquivo']['name'];\n    echo 'Arquivo carregado: ' . $arquivo;\n}\n?>",
        expectedOutput: "Arquivo carregado: exemplo.txt",
        hint: "Use `$_FILES['nomeCampo']['name']` para acessar o nome do arquivo carregado."
    },
    {
        levelTitle: "Nível 21 - Incluindo Arquivos",
        doThis: "Inclua um arquivo externo usando `include` e imprima seu conteúdo.",
        explanation: "A função `include` permite incluir o conteúdo de outros arquivos PHP.",
        expectedCode: "<?php\ninclude 'saudacao.php';\n?>",
        expectedOutput: "Conteúdo do arquivo saudacao.php",
        hint: "Use `include 'arquivo.php';` para incluir outro arquivo PHP."
    },
    {
        levelTitle: "Nível 22 - Funções Anônimas",
        doThis: "Crie uma função anônima que imprima 'Função anônima executada'.",
        explanation: "Funções anônimas são funções sem nome que podem ser armazenadas em variáveis.",
        expectedCode: "<?php\n$funcao = function() {\n    echo 'Função anônima executada';\n};\n$funcao();\n?>",
        expectedOutput: "Função anônima executada",
        hint: "Defina uma função anônima usando `function() { código }`."
    },
    {
        levelTitle: "Nível 23 - Funções Recursivas",
        doThis: "Crie uma função recursiva para calcular o fatorial de um número.",
        explanation: "Funções recursivas chamam a si mesmas para resolver problemas.",
        expectedCode: "<?php\nfunction fatorial($n) {\n    if ($n == 0) return 1;\n    return $n * fatorial($n - 1);\n}\necho fatorial(5);\n?>",
        expectedOutput: "120",
        hint: "Use a recursão chamando a função dentro dela mesma com um valor decrementado."
    },
    {
        levelTitle: "Nível 24 - PDO para Conexão com MySQL",
        doThis: "Conecte-se a um banco de dados MySQL usando PDO.",
        explanation: "O PDO é uma interface segura para acessar bancos de dados em PHP.",
        expectedCode: "<?php\ntry {\n    $pdo = new PDO('mysql:host=localhost;dbname=test', 'usuario', 'senha');\n    echo 'Conexão bem-sucedida';\n} catch (PDOException $e) {\n    echo 'Erro: ' . $e->getMessage();\n}\n?>",
        expectedOutput: "Conexão bem-sucedida",
        hint: "Use `new PDO('mysql:host=host;dbname=banco', 'usuario', 'senha')` para conectar."
    },
    {
        levelTitle: "Nível 25 - Consultas com PDO",
        doThis: "Execute uma consulta SQL que selecione todos os usuários de uma tabela `usuarios`.",
        explanation: "Com PDO, você pode executar consultas SQL com segurança.",
        expectedCode: "<?php\n$stmt = $pdo->query('SELECT * FROM usuarios');\nwhile ($row = $stmt->fetch()) {\n    echo $row['nome'];\n}\n?>",
        expectedOutput: "Usuário1Usuário2Usuário3", // Exemplo de saída esperada
        hint: "Use `$pdo->query('SQL')` para executar uma consulta e `fetch()` para buscar resultados."
    },
    {
        levelTitle: "Nível 26 - Inserção de Dados com PDO",
        doThis: "Insira um novo usuário na tabela `usuarios` com PDO.",
        explanation: "Use consultas `INSERT` com PDO para adicionar dados ao banco.",
        expectedCode: "<?php\n$stmt = $pdo->prepare('INSERT INTO usuarios (nome) VALUES (:nome)');\n$stmt->execute(['nome' => 'Carlos']);\necho 'Usuário inserido';\n?>",
        expectedOutput: "Usuário inserido",
        hint: "Use `$pdo->prepare('SQL')` e `execute(['parametro' => valor])` para consultas preparadas."
    },
    {
        levelTitle: "Nível 27 - Atualização de Dados com PDO",
        doThis: "Atualize o nome de um usuário específico na tabela `usuarios`.",
        explanation: "Use consultas `UPDATE` com PDO para modificar dados no banco.",
        expectedCode: "<?php\n$stmt = $pdo->prepare('UPDATE usuarios SET nome = :nome WHERE id = :id');\n$stmt->execute(['nome' => 'Ana', 'id' => 1]);\necho 'Usuário atualizado';\n?>",
        expectedOutput: "Usuário atualizado",
        hint: "Use `UPDATE tabela SET coluna = valor WHERE condição` para atualizar dados."
    },
    {
        levelTitle: "Nível 28 - Deleção de Dados com PDO",
        doThis: "Remova um usuário específico da tabela `usuarios` usando PDO.",
        explanation: "Use consultas `DELETE` com PDO para remover dados do banco.",
        expectedCode: "<?php\n$stmt = $pdo->prepare('DELETE FROM usuarios WHERE id = :id');\n$stmt->execute(['id' => 1]);\necho 'Usuário removido';\n?>",
        expectedOutput: "Usuário removido",
        hint: "Use `DELETE FROM tabela WHERE condição` para remover dados."
    },
    {
        levelTitle: "Nível 29 - Trabalhando com JSON",
        doThis: "Converta um array PHP em JSON usando `json_encode`.",
        explanation: "O PHP tem funções nativas para converter arrays e objetos em JSON.",
        expectedCode: "<?php\n$dados = ['nome' => 'Carlos', 'idade' => 25];\necho json_encode($dados);\n?>",
        expectedOutput: '{"nome":"Carlos","idade":25}',
        hint: "Use `json_encode($array)` para converter um array em JSON."
    },
    {
        levelTitle: "Nível 30 - Decodificação de JSON",
        doThis: "Decodifique uma string JSON e exiba o valor de `nome`.",
        explanation: "A função `json_decode` converte JSON em arrays ou objetos PHP.",
        expectedCode: "<?php\n$json = '{\"nome\": \"Carlos\", \"idade\": 25}';\n$dados = json_decode($json, true);\necho $dados['nome'];\n?>",
        expectedOutput: "Carlos",
        hint: "Use `json_decode($json, true)` para converter JSON em um array associativo."
    },
    {
        levelTitle: "Nível 31 - Manipulação de Arquivos",
        doThis: "Leia o conteúdo de um arquivo `dados.txt` e exiba-o.",
        explanation: "A função `file_get_contents` lê o conteúdo de um arquivo em PHP.",
        expectedCode: "<?php\n$conteudo = file_get_contents('dados.txt');\necho $conteudo;\n?>",
        expectedOutput: "Conteúdo do arquivo",
        hint: "Use `file_get_contents('arquivo.txt')` para ler o conteúdo de um arquivo."
    },
    {
        levelTitle: "Nível 32 - Escrevendo em Arquivos",
        doThis: "Escreva o texto 'Olá, Arquivo!' em um arquivo chamado `saida.txt`.",
        explanation: "A função `file_put_contents` escreve dados em um arquivo.",
        expectedCode: "<?php\nfile_put_contents('saida.txt', 'Olá, Arquivo!');\necho 'Texto escrito';\n?>",
        expectedOutput: "Texto escrito",
        hint: "Use `file_put_contents('arquivo.txt', 'texto')` para escrever em um arquivo."
    }
];
