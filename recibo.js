const recibo = JSON.parse(localStorage.getItem("recibo"));

document.getElementById("cliente").innerText = recibo.clienteNome;
document.getElementById("documento").innerText = recibo.clienteDocumento;
document.getElementById("endereco").innerText = recibo.clienteEndereco;

const ul = document.getElementById("itens");
recibo.itens.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.descricao} - R$ ${item.valor.toFixed(2)}`;
  ul.appendChild(li);
});

document.getElementById("total").innerText = `Total: R$ ${recibo.total.toFixed(2)}`;
