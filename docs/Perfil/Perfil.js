console.log("Perfil carregado");

document.addEventListener("DOMContentLoaded", async () => {

  const id = localStorage.getItem("clienteId");

  if (!id) {
    alert("Nenhum usuário logado.");
    window.location.href = "../Cadastro/cadastro.html";
    return;
  }

  try {
    const response = await fetch(`http://localhost:8080/clientes/${id}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar cliente");
    }

    const cliente = await response.json();
    console.log("Cliente recebido:", cliente);

    document.getElementById("nomePerfil").textContent = cliente.nome;
    document.getElementById("emailPerfil").textContent = cliente.email;
    document.getElementById("cpfPerfil").textContent = cliente.cpf;

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao carregar perfil.");
  }

});