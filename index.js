import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// ========== CONFIGURAÇÃO DO FIREBASE ==========
const firebaseConfig = {
  apiKey: "AIzaSyBnrRQ_vsI5unCZPSZ7amH2ghSHomboh-c",
  authDomain: "banco-login-cc2ff.firebaseapp.com",
  databaseURL: "https://banco-login-cc2ff-default-rtdb.firebaseio.com/",
  projectId: "banco-login-cc2ff",
  storageBucket: "banco-login-cc2ff.firebasestorage.app",
  messagingSenderId: "344052622939",
  appId: "1:344052622939:web:485aa800b124eaeebd817e",
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
    const novoCadastroRef = database.ref("atletas").push();
    // ----- Envia pro Firestore -----
    await db.collection("atletas").add({
      nome,
      cpf,
      email,
      categoria,
      posicao,
      dataCadastro: new Date().toISOString()
    });

    alert("✅ Atleta cadastrado com sucesso!");
    document.querySelector("form").reset();

  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);
    alert("❌ Ocorreu um erro ao cadastrar. Verifique o console para mais detalhes.");
  }
});
