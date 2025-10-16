document.getElementById("btnCadastrar").addEventListener("click", async () => {
  // Pega referências seguras aos elementos
  const elName = document.getElementById("name");
  const elCpf = document.getElementById("cpf");
  const elEmail = document.getElementById("email");
  const elCategoria = document.getElementById("sub");
  const elPosicao = document.getElementById("pos");

  // Valida existência dos elementos (evita erro ao tentar acessar .value de null)
  if (!elName || !elCpf || !elEmail || !elCategoria || !elPosicao) {
    console.error('Um ou mais elementos do formulário não foram encontrados no DOM.');
    alert('Erro interno: elementos do formulário não encontrados. Veja o console.');
    return;
  }

  // Extrai valores de forma consistente (inputs e selects usam .value)
  const nome = (elName.value || '').toString().trim();
  const cpf = (elCpf.value || '').toString().trim();
  const email = (elEmail.value || '').toString().trim();
  const categoria = (elCategoria.value || '').toString();
  const posicao = (elPosicao.value || '').toString();

  // ----- Validação básica -----
  if (!nome || !cpf || !email || !categoria || !posicao) {
    alert("⚠️ Por favor, preencha todos os campos antes de cadastrar.");
    return;
  }

  // ----- Envia para Realtime Database no padrão da equipe -----
  const novoRegistro = {
    nome,
    cpf: cpf,
    email: email,
    categoria: categoria,
    posicao: posicao
  };

  db.ref('atletas').push(novoRegistro)
    .then(() => {
      alert("Registrado com sucesso!");
      // Reset nos campos existentes do formulário
      elName.value = '';
      elCpf.value = '';
      elEmail.value = '';
      elCategoria.value = '';
      elPosicao.value = '';
    })
    .catch((erro) => {
      console.error("Erro ao cadastrar:", erro);
      alert("❌ Ocorreu um erro ao cadastrar. Verifique o console para mais detalhes.");
    });
});