const levels = {
    basico: [
        {
            levelDificulty: "basico",
            levelTitle: "Nível 1 - Imprimir Texto",
            levelClient: 1, 
            doThis: "Use a função `echo` para imprimir a frase 'Olá, Mundo!'. Atenção aos sinais de aspas para informar ao computador a frase como texto(string).",
            explanation: "No PHP, usamos `echo` para imprimir texto.",
            expectedCode: [
                "echo 'Olá, Mundo!';", 
                "echo 'Olá Mundo';", 
                "echo 'ola mundo';",
                "echo 'Ola Mundo';"],
            hint: "Utilize `echo` seguido por uma string entre aspas simples para imprimir texto."
        },
        {
            levelDificulty: "basico",
            levelTitle: "Nível 2 - Variáveis Simples",
            levelClient: 2,
            doThis: "Defina uma variável `$nome` e use `echo` para imprimir o valor dessa variável. Vamos criar uma variável nome e mostrar o texto 'João'.",
            explanation: "Você pode definir variáveis no PHP com o símbolo `$` e depois usá-las com `echo`.",
            expectedCode: [
                "$nome = 'João'; echo $nome;",
                "$nome = 'Joao'; echo $nome;",
                "$nome = 'joao'; echo $nome;",
                "$nome = 'João'; echo $nome;"],
            hint: "Atribua uma string à variável `$nome` e use `echo` para exibi-la."
        },
        {
            levelDificulty: "basico",
            levelTitle: "Nível 3 - Tipos de dados",
            levelClient: 3,
            doThis: "Crie uma variável do tipo texto, uma variável do tipo número inteiro e uma variável do tipo número decimal. O texto pode ser o nome 'João', o tipo número inteiro pode ser a idade do João 20 anos, e o tipo decimal pode ser a altura do João 1.80m. Ao final exiba os valores com o 'echo'.",
            explanation: "Na programação podemos utilizar vários tipos de dados, números inteiros, texto, números decimais entre outros. Para o texto colocamos entre aspas(simples ou aspas duplas), para o inteiro apenas o número, para o número decimal colocamos o número seguido de ponto final(.);",
            expectedCode: [
                "$nome = 'João'; $idade = 20; $altura = 1.80; echo $nome, $idade, $altura;",
                "$nome = 'Joao'; $idade = 20; $altura = 1.80; echo $nome, $idade, $altura;",
                "$nome = 'joão'; $idade = 20; $altura = 1.80; echo $nome, $idade, $altura;",
                "$nome = 'joao'; $idade = 20; $altura = 1.80; echo $nome, $idade, $altura;",
            ],
            hint: "Lembre-se de tipo texto com aspas(simples ou duplas), tipo inteiro apenas o número, e o tipo decimal precisa ser com ponto(.) nunca com vírgula."
        },
        {
            levelDificulty: "basico",
            levelTitle: "Nível 4 - Operador Soma",
            levelClient: 4,
            doThis: "Crie a variavel 'a' com o valor 10, a variavel 'b' com o valor 20, some as duas e exiba o resultado com a variavel 'resultado'.",
            explanation: "Para fazer uma soma precisamos de duas variaveis numéricas e uma de resultado, basta adicionar o valor das variaveis com o operador '+' e atribuir o valor com o sinal '='.",
            expectedCode: [
                "$a = 10; $b = 20; $resultado = $a + $b;",
                "$num1 = 10; $num2 = 20; $resultado = $num1 + $num2;",
                "$val1 = 10; $val2 = 20; $resultado = $val1 + $val2;",
                "$var1 = 10; $var2 = 20; $resultado = $var1 + $var2;"],
            hint: "Para fazer a soma é necessário no mínimo de 2 valores e 1 resultado, 'resultado' = 'valor1' + 'valor2'."
        },
        {
            levelDificulty: "basico",
            levelTitle: "Nível 5 - Estruturas Condicionais",
            levelClient: 5,
            doThis: "Crie uma variável de idade com o valor 20, usando o 'if' e 'else', faça uma comparação de 'idade' se o resultado for maior que 18 exiba a frase 'permitido tirar carteira de habilitação', se o resultado for menor que 18 exiba a frase 'proibido tirar carteira de habilitação'.",
            explanation: "Dentro do condicional é verifica se a centença é verdadeira ou falsa, caso seja verdadeira o bloco de código lido é o do interior do 'if', caso for falso o bloco de código lido é o do interior do 'else'.",
            expectedCode: [
                "$idade = 20; if($idade > 18){echo 'permitido tirar carteira de habilitação.';}else{echo 'proibido tirar carteira de habilitação.';}",
                "$idade = 20; if($idade < 18){echo 'permitido tirar carteira de habilitação.';}else{echo 'proibido tirar carteira de habilitação.';}",
                "$idade = 20; if($idade > 18){echo 'permitido tirar carteira de habilitacao.';}else{echo 'proibido tirar carteira de habilitação.';}",
                "$idade = 20; if($idade < 18){echo 'permitido tirar carteira de habilitacao.';}else{echo 'proibido tirar carteira de habilitação.';}"],
            hint: "Observe com atenção a forma que é feito a estrutura de condição, if(valor1 'operador condicional' valor2){ código } else { código }."
        },
        {
            levelDificulty: "basico",
            levelTitle: "Nível 6 - Estruturas de Repetição",
            levelClient: 6,
            doThis: "Crie uma repetição para contar numeros de 1 a 10. O laço de repetição é criado com o comando for seguido de uma variavel de início do laço($i = 1;), seguido de uma verificação condicional para o encerramento do laço($i < 10), seguido da quantidade de passos que será feito a contagem($i++).",
            explanation: "O laço de repetição é criado com três partes principais, a variavel de início, a condição para determinar o término do laço, e o passo. Comumente usado a varivel $i para cada etapa.",
            expectedCode: [
                "for($i=1;$i<=10;$i++){echo $i;}",
                "for($i=0;$i<10;$i++){echo $i;}",
                "for($i=1;$i<11;$i++){echo $i;}",
                "for($i=0;$i<9;$i++){echo $i;}"],
            hint: "Use a condição para indicar qual o término do laço, sinais de >(maior), <(menor), >=(maior e igual), <=(menor e igual)."
        }
    ],
    intermediario: [
        {
            levelDificulty: "intermediario",
            levelTitle: "Nível 1 - Arrays Simples",
            levelClient: 1,
            doThis: "Crie um array com três nomes(Ana, Bruno e Carlos) e imprima o segundo nome.",
            explanation: "Arrays são usados para armazenar múltiplos valores em uma única variável.",
            expectedCode: [
                "$nomes = ['Ana', 'Bruno', 'Carlos']; echo $nomes[1];",
                "$nomes = array('Ana', 'Bruno', 'Carlos'); echo $nomes[1];",
                "$nomes = ['Ana','Bruno','Carlos']; echo $nomes[1];",
                "$nomes = array('Ana','Bruno','Carlos'); echo $nomes[1];"],
            hint: "Acesse um valor de array usando o índice, por exemplo, `$array[indice]`."
        },
        {
            levelDificulty: "intermediario",
            levelTitle: "Nível 2 - Loops com Arrays",
            levelClient: 2,
            doThis: "Crie um array com os valores ['Carro', 'Avião', 'Navio'] e use um loop `foreach` para imprimir todos os itens do array.",
            explanation: "O `foreach` é uma maneira eficiente de percorrer arrays no PHP.",
            expectedCode: [
                "$veiculos = ['Carro', 'Avião', 'Navio']; foreach ($veiculos as $veiculo) { echo $veiculo; }",
                "$veiculos = ['Carro', 'Avião', 'Navio']; foreach($veiculos as $veiculo) { echo $veiculo; }",
                "$veiculos = array('Carro', 'Avião', 'Navio'); foreach ($veiculos as $veiculo) { echo $veiculo; }",
                "$veiculos = array('Carro','Avião','Navio'); foreach($veiculos as $veiculo) { echo $veiculo; }"],
            hint: "Crie um array com `['Carro', 'Avião', 'Navio']` e use o `foreach` para percorrê-lo."
        },
        {
            levelDificulty: "intermediario",
            levelTitle: "Nível 3 - Manipulação de Strings",
            levelClient: 3,
            doThis: "Crie uma variável `$texto` contendo a string 'programar em php é divertido' e use a função `strtoupper` para converter o texto em maiúsculas.",
            explanation: "Funções de manipulação de strings podem transformar texto no PHP.",
            expectedCode: [
                "$texto = 'programar em php é divertido'; echo strtoupper($texto);",
                "$texto = 'programar em php é divertido'; echo strtoupper($texto);",
                "$texto = 'programar em PHP é divertido'; echo strtoupper($texto);",
                "$texto = 'Programar em PHP é Divertido'; echo strtoupper($texto);"],
            hint: "Atribua a string 'programar em php é divertido' à variável `$texto` e utilize `strtoupper($texto)` para convertê-la em maiúsculas."
        },
        {
            levelDificulty: "intermediario",
            levelTitle: "Nível 4 - Condicionais com Strings",
            levelClient: 4,
            doThis: "Crie uma variável `$frase` com o valor 'Eu adoro programar em PHP' e verifique se a string contém a palavra 'PHP' utilizando a função `strpos`. Se a palavra 'PHP' estiver presente, imprima 'Contém PHP'.",
            explanation: "Você pode usar a função `strpos` para verificar a presença de substrings em uma string.",
            expectedCode: [
                "$frase = 'Eu adoro programar em PHP'; if (strpos($frase, 'PHP') !== false) { echo 'Contém PHP'; }",
                "$frase = 'Eu adoro programar em PHP'; if (strpos($frase, 'PHP') !== false) { echo 'Contém PHP'; }",
                "$frase = 'Eu adoro programar em PHP'; if (strpos($frase,'PHP') !== false) { echo 'Contém PHP'; }",
                "$frase = 'Eu adoro programar em PHP'; if (strpos(\$frase, 'PHP')!== false) { echo 'Contém PHP'; }"],
            hint: "Use a função `strpos($frase, 'PHP')` para verificar se a palavra 'PHP' está presente na frase."
        },
        {
            levelDificulty: "intermediario",
            levelTitle: "Nível 5 - Funções com Parâmetros",
            levelClient: 5,
            doThis: "Crie uma função chamada `saudar` que receba um parâmetro `$nome` e imprima a mensagem 'Olá, {nome}', onde `{nome}` é o valor passado como parâmetro. Teste a função chamando `saudar('João')`.",
            explanation: "Funções podem aceitar parâmetros para torná-las mais dinâmicas. Nesse caso, a função deve receber um nome e exibir uma saudação personalizada.",
            expectedCode: [
                "function saudar($nome) { echo 'Olá, ' . $nome; } saudar('João');",
                "function saudar($nome) { echo 'Olá, ' . $nome; } saudar('Joao');",
                "function saudar($nome) { echo 'Olá, ' . $nome; } saudar('joao');",
                "function saudar($nome) { echo 'Olá, ' . $nome; } saudar('JOÃO');"],
            hint: "Use `function saudar($nome)` para definir a função com um parâmetro. Na função, use `echo` para imprimir a saudação."
        }
    ],
    avancado: [
        {
            levelDificulty: "avancado",
            levelTitle: "Nível 1 - PDO para Conexão com MySQL",
            levelClient: 1,
            doThis: "Crie uma conexão com um banco de dados MySQL chamado `test_db` hospedado em `localhost` usando PDO. O nome de usuário é `root` e a senha é `12345`. Exiba a mensagem 'Conexão bem-sucedida' se a conexão for estabelecida com sucesso.",
            explanation: "O PDO é uma interface segura para acessar bancos de dados em PHP. Utilize a classe `PDO` para conectar ao MySQL e tratar possíveis exceções.",
            expectedCode: [
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); echo 'Conexão bem-sucedida'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); echo 'Conexão bem-sucedida'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); echo 'Conexão bem-sucedida'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); echo 'Conexão OK'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }"],
            hint: "Use `new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345')` para criar a conexão. Utilize um bloco `try/catch` para capturar possíveis exceções."
        },
        {
            levelDificulty: "avancado",
            levelTitle: "Nível 2 - Consultas com PDO",
            levelClient: 2,
            doThis: "Utilize PDO para conectar ao banco de dados `test_db` e executar uma consulta que selecione todos os registros da tabela `usuarios`. A tabela contém as colunas `id`, `nome` e `email`. Exiba o nome de cada usuário encontrado.",
            explanation: "Com PDO, você pode executar consultas SQL com segurança. O método `query` permite executar uma consulta simples e `fetch()` busca os resultados.",
            expectedCode: [
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->query('SELECT nome FROM usuarios'); while ($row = $stmt->fetch()) { echo $row['nome']; } } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->query('SELECT nome FROM usuarios'); while ($row = $stmt->fetch()) { echo $row['nome']; } } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->query('SELECT nome FROM usuarios'); while ($row = $stmt->fetch()) echo $row['nome']; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->query('SELECT nome FROM usuarios'); while ($row = $stmt->fetch()) { echo $row['nome']; } } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }"],
            hint: "Use `PDO::query()` para executar a consulta e `fetch()` para percorrer os resultados."
        },
        {
            levelDificulty: "avancado",
            levelTitle: "Nível 3 - Inserção de Dados com PDO",
            levelClient: 3,
            doThis: "Utilize PDO para conectar ao banco de dados `test_db` e inserir um novo registro na tabela `usuarios`. A tabela contém as colunas `id`, `nome`, e `email`. Insira um novo usuário com o nome 'Carlos' e o email 'carlos@email.com'.",
            explanation: "Com PDO, você pode executar consultas `INSERT` para adicionar novos dados ao banco de dados. O método `prepare` ajuda a proteger a consulta e evitar injeção de SQL.",
            expectedCode: [
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('INSERT INTO usuarios (nome, email) VALUES (:nome, :email)'); $stmt->execute(['nome' => 'Carlos', 'email' => 'carlos@email.com']); echo 'Usuário inserido com sucesso'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('INSERT INTO usuarios (nome, email) VALUES (:nome, :email)'); $stmt->execute(['nome' => 'Carlos', 'email' => 'carlos@email.com']); echo 'Usuário inserido'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('INSERT INTO usuarios (nome, email) VALUES (:nome, :email)'); $stmt->execute(['nome' => 'Carlos', 'email' => 'carlos@email.com']); echo 'Usuário adicionado com sucesso'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('INSERT INTO usuarios (nome, email) VALUES (:nome, :email)'); $stmt->execute(['nome' => 'Carlos', 'email' => 'carlos@email.com']); echo 'Novo usuário adicionado'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }"],
            hint: "Use `prepare()` para preparar a consulta SQL e `execute()` para passar os dados de forma segura."
        }
        ,
        {
            levelDificulty: "avancado",
            levelTitle: "Nível 4 - Atualização de Dados com PDO",
            levelClient: 4,
            doThis: "Utilize PDO para conectar ao banco de dados `test_db` e atualizar o email de um usuário na tabela `usuarios`. A tabela contém as colunas `id`, `nome`, e `email`. Atualize o email do usuário com `id = 1` para 'novoemail@email.com'.",
            explanation: "Com PDO, você pode executar consultas `UPDATE` para modificar dados existentes no banco de dados. O método `prepare` ajuda a proteger a consulta e evitar injeção de SQL.",
            expectedCode: [
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('UPDATE usuarios SET email = :email WHERE id = :id'); $stmt->execute(['email' => 'novoemail@email.com', 'id' => 1]); echo 'Usuário atualizado com sucesso'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('UPDATE usuarios SET email = :email WHERE id = :id'); $stmt->execute(['email' => 'novoemail@email.com', 'id' => 1]); echo 'Usuário atualizado'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('UPDATE usuarios SET email = :email WHERE id = :id'); $stmt->execute(['email' => 'novoemail@email.com', 'id' => 1]); echo 'Email atualizado com sucesso'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('UPDATE usuarios SET email = :email WHERE id = :id'); $stmt->execute(['email' => 'novoemail@email.com', 'id' => 1]); echo 'Atualização realizada'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }"],
            hint: "Use `prepare()` para preparar a consulta SQL e `execute()` para atualizar os dados de forma segura."
        }
        ,
        {
            levelDificulty: "avancado",
            levelTitle: "Nível 5 - Exclusão de Dados com PDO",
            levelClient: 5,
            doThis: "Utilize PDO para conectar ao banco de dados `test_db` e excluir um registro na tabela `usuarios`. A tabela contém as colunas `id`, `nome`, e `email`. Exclua o usuário com `id = 1`.",
            explanation: "Com PDO, você pode executar consultas `DELETE` para remover registros do banco de dados. O método `prepare` ajuda a proteger a consulta e evitar injeção de SQL.",
            expectedCode: [
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('DELETE FROM usuarios WHERE id = :id'); $stmt->execute(['id' => 1]); echo 'Usuário excluído com sucesso'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('DELETE FROM usuarios WHERE id = :id'); $stmt->execute(['id' => 1]); echo 'Usuário excluído'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('DELETE FROM usuarios WHERE id = :id'); $stmt->execute(['id' => 1]); echo 'Registro excluído com sucesso'; } catch (PDOException $e) { echo 'Erro: ' . $e->getMessage(); }",
                "try { $pdo = new PDO('mysql:host=localhost;dbname=test_db', 'root', '12345'); $stmt = $pdo->prepare('DELETE FROM usuarios WHERE id = :id'); $stmt->execute(['id' => 1]); echo 'Exclusão realizada'; } catch (PDOException $e) { echo 'Erro: '.$e->getMessage(); }"],
            hint: "Use `prepare()` para preparar a consulta SQL e `execute()` para passar o valor do `id` de forma segura."
        }
        
    ]
};
