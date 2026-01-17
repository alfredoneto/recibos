const recibo = JSON.parse(localStorage.getItem("recibo"));

// Data atual
document.getElementById("dataAtual").innerText =
  new Date().toLocaleDateString("pt-BR");

// Dados do cliente
document.getElementById("cliente").innerText = recibo.clienteNome;
document.getElementById("documento").innerText = recibo.clienteDocumento;
document.getElementById("endereco").innerText = recibo.clienteEndereco;

// Itens
const ul = document.getElementById("itens");
recibo.itens.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.descricao} — R$ ${item.valor.toFixed(2)}`;
  ul.appendChild(li);
});

// Total
document.getElementById("total").innerText =
  `Total: R$ ${recibo.total.toFixed(2)}`;

function gerarPDF() {
  const elemento = document.getElementById("recibo");
  const img = document.getElementById("imgAssinatura");

  if (!img.complete) {
    img.onload = () => gerarPDF();
    return;
  }

  const opt = {
    margin: 0,
    filename: 'recibo.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 1,
      useCORS: true,
      backgroundColor: '#ffffff'
    },
    jsPDF: {
      unit: 'px',
      format: [794, 1123],
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['avoid-all']
    }
  };

  html2pdf().set(opt).from(elemento).save();
}

