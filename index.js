// ========== CONFIGURAÇÃO DO FIREBASE ==========
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SUA_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ========== LÓGICA DO CADASTRO ==========
document.getElementById("btnCadastrar").addEventListener("click", async () => {
  const nome = document.getElementById("name").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const email = document.getElementById("email").value.trim();
  const categoria = document.getElementById("sub").value;
  const posicao = document.getElementById("pos").value;

  // ----- Validação básica -----
  if (!nome || !cpf || !email || !categoria || !posicao) {
    alert("⚠️ Por favor, preencha todos os campos antes de cadastrar.");
    return;
  }

  try {
    // ----- Envia pro Firestore -----
    await db.collection("atletas").add({
      nome,
      cpf,
      email,
      categoria,
      posicao,
      dataCadastro: new Date()
    });

    alert("✅ Atleta cadastrado com sucesso!");
    document.querySelector("form").reset();

  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);
    alert("❌ Ocorreu um erro ao cadastrar. Verifique o console para mais detalhes.");
  }
});
