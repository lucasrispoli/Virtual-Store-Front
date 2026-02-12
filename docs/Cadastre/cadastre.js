console.log("JS carregado");


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    console.log("Botão cadastrar clicado");

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;

    const cliente = {
      nome,
      email,
      cpf,
      dataNascimento 
    };

    console.log("Enviando para API:", cliente);

    try {
      const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
      });

      if (!response.ok) {
        const erro = await response.text();
        throw new Error(erro);
      }

    const resultado = await response.json();
    localStorage.setItem("clienteId", resultado.id);
    alert("Cadastro realizado com sucesso!");
    console.log("ID salvo:", localStorage.getItem("clienteId"));


    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao realizar cadastro. Veja o console.");
    }
  });
});
