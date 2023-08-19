const perguntas = [
    {
        pergunta: "Qual comando é usado para inicializar um repositório Git?",
        respostas: ["git init", "git start", "git create"],
        index_resposta: 0
    },
    {
        pergunta: "Combinação de duas ramificações para unir as mudanças e resolver conflitos, se houver.",
        respostas: ["Git log", "git status", "git merge"],
        index_resposta: 2
    },
    {
        pergunta: "Como você cria uma nova ramificação e muda imediatamente para ela?",
        respostas: ["git branch nome_da_ramificacao", "git checkout -b nome_da_ramificacao", "git new-branch nome_da_ramificacao"],
        index_resposta: 1
    },
    {
        pergunta: "Como você reverte um commit específico, criando um novo commit que desfaz as mudanças introduzidas?",
        respostas: ["Utilizando git revert HASH_DO_COMMIT", "git undo HASH_DO_COMMIT", "git rollback HASH_DO_COMMIT"],
        index_resposta: 0
    },
    {
        pergunta: "Qual é o objetivo do arquivo .gitignore e como você o utiliza?",
        respostas: ["Especifica padrões de arquivos que o Git deve ignorar ao rastrear alterações.",
         "Armazena credenciais sensíveis que não devem ser rastreadas pelo Git.",
          "Registra as alterações feitas no repositório."],
        index_resposta: 0
    },
    {
        pergunta: "Como você move um commit específico da ramificação atual para outra ramificação?",
        respostas: ["git move-commit HASH_DO_COMMIT nova_ramificacao",
            "git cherry-pick HASH_DO_COMMIT na nova ramificação.",
            "git transfer HASH_DO_COMMIT para nova_ramificacao"],
        index_resposta: 1
    },
    {
        pergunta: "Qual é o propósito do comando git rebase e como ele difere do git merge?",
        respostas: ["git rebase é usado para mesclar alterações de duas ramificações, enquanto git merge recria o histórico de commits linearmente.",
         "git rebase cria um novo commit de mesclagem, enquanto git merge reaplica commits de uma ramificação para outra.",
         "git rebase reaplica commits de uma ramificação para outra, recriando o histórico de commits linearmente. Difere de git merge, que cria um novo commit de mesclagem."],
        index_resposta: 2
    },
    {
        pergunta: "Qual comando é usado para obter as últimas alterações do repositório remoto para o seu repositório local?",
        respostas: ["git log",
         "git pull",
         "git status"],
        index_resposta: 1
    },
    {
        pergunta: "Qual comando é usado para ver um histórico de commits em uma ramificação?",
        respostas: ["git branch status",
         "git status",
         "git log"],
        index_resposta: 2
    },
    {
        pergunta: "Como você desfaz uma mesclagem que ainda não foi confirmada?",
        respostas: ["Execute git merge --abort para cancelar a mesclagem.",
         "Utilize git revert para desfazer a mesclagem.",
         "Utilize git reset --merge para reverter a mesclagem."],
        index_resposta: 0
    },
    
    // Adicione mais perguntas aqui
  ];

  let perguntaAtual = 0;
  let pontuacao_player = 0
  const elemento_total_pergunta = document.getElementById('total-perguntas');
  elemento_total_pergunta.textContent = perguntas.length
  
  
  function mostrar_questao() {
    const questao_elemento = document.querySelector('.pergunta');
    const btn_respostas = document.querySelectorAll('.resposta');

    questao_elemento.textContent = perguntas[perguntaAtual].pergunta;

    btn_respostas.forEach((btn, index) => {
      btn.textContent = perguntas[perguntaAtual].respostas[index];
    });
  }

  function verificar_resposta(index_selecionado) {
    const elemento_pontuacao = document.getElementById('valor_pontuacao');
    const elemento_resultado = document.getElementById('resultado');
    const elemento_pergunta_atual = document.getElementById('pergunta-atual');
    
    
    if (index_selecionado === perguntas[perguntaAtual].index_resposta) {
        alert("Resposta Correta!")
        pontuacao_player += 10
    } else {
        alert("Resposta Incorreta!")
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      mostrar_questao();
      elemento_pergunta_atual.textContent = perguntaAtual + 1
    } else {
      elemento_resultado.textContent = "Quiz concluído!";
      const btn_respostas = document.querySelectorAll('.resposta');
      btn_respostas.forEach(btn => {
        btn.disabled = true;
      });
    }
    elemento_pontuacao.textContent = pontuacao_player
  }

  mostrar_questao();