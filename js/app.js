let itens = [];
let total = 0;

function adicionarItem() {
  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);

  if (!descricao || !valor) return;

  itens.push({ descricao, valor });
  total += valor;

  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";

  renderItens();
}

function renderItens() {
  const ul = document.getElementById("listaItens");
  ul.innerHTML = "";

  itens.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.descricao} — R$ ${item.valor.toFixed(2)}`;
    ul.appendChild(li);
  });

  document.getElementById("total").innerText =
    `Total: R$ ${total.toFixed(2)}`;
}

function gerarRecibo() {
  const recibo = {
    clienteNome: clienteNome.value,
    clienteEndereco: clienteEndereco.value,
    clienteDocumento: clienteDocumento.value,
    itens,
    total,
    data: new Date()
  };

  localStorage.setItem("recibo", JSON.stringify(recibo));
  window.location.href = "recibo.html";
}
