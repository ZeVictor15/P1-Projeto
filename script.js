function realizarReserva() {
    // Recupera os dados do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const mesa = document.getElementById("mesa").value;

    // Valida os dados
    if (nome === "" || cpf === ""  || email === "" || numero === "" || data === "" || horario === "" || mesa === "") {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    // Realiza a reserva
    const reserva = {
      nome,
      cpf,
      email,
      numero,
      data,
      horario,
      mesa,
    };

    // Cria o array global de reservas - Função anônima - Vetor/Matriz
    (function() {
      window.reservas = window.reservas || [];

    // Armazena a reserva no array global
     window.reservas.push(reserva);})();

    // Verifica se a reserva foi realizada com sucesso
    if (reserva) {
        // Desabilita a opção de mesa
        document.querySelector("select[name='mesa'] option[value='" + mesa + "']").setAttribute("disabled", true);
    }
  
    alert("Reserva realizada com sucesso!");
    console.log(window.reservas);

    return reserva;
}
  
function verificarReserva() {
    // Encontra a primeira reserva com o cpf passado como parâmetro
    const cpf = document.getElementById("cpfcheck").value;
    const p = document.getElementById("print");

    if (cpf === ""){
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    // Verifica se a reserva existe - Função de seta
    const reserva = window.reservas.find((r) => r.cpf === cpf);
    console.log(reserva);
    // Se a reserva não existir, retorna undefined - Estrutura de decisão
    if (!reserva) {
      alert("Nenhuma reserva encontrada com o CPF informado.");
      return undefined;
    }else{
        alert("reserva encontrada com o CPF informado.");
        p.innerHTML = "Essa é a sua reserva: <br> Nome: " + reserva.nome + "<br> CPF: " + reserva.cpf + "<br> Email: " + reserva.email + "<br> Número de cadeiras: " + reserva.numero + "<br> Data: " + reserva.data + "<br> Horário: " + reserva.horario + "<br> Mesa: " + reserva.mesa + "<br>";
    }
}
   
function cancelarReserva() {
  // Recupera o CPF
  const cpf = document.querySelector("input[name='cpfcan']").value;
  const motivo = document.querySelector("input[name='motivo']").value;
  const p = document.getElementById("print");

  if (cpf === "" || motivo === ""){
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  // Verifica se a reserva existe - Função de seta
  const reserva = window.reservas.find((r) => r.cpf === cpf);
 
  if (!reserva) {
    alert("Nenhuma reserva encontrada com o CPF informado.");
    return;
  }

  // Remove a reserva do array
  window.reservas = window.reservas.filter((r) => r.cpf !== cpf);

  // Mostra a mensagem de cancelamento
  alert("Reserva cancelada com sucesso!");
  p.innerHTML = "Reserva para o CPF: " + cpf + " cancelada com sucesso! <br> Motivo: " + motivo + "<br>";
  console.log(window.reservas);
}
  

  
 
  
