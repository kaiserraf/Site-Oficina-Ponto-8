const items = [
  "Bateria","Fluído de freio","Disco de freio","Pastilha de freio",
  "Flexível de freio","Ajuste/regulagem dos freios traseiros",
  "Patim","Campana","Amortecedor dianteiro","Amortecedor traseiro",
  "Balança da suspensão direita","Balança da suspensão esquerda",
  "Braço axial direito","Braço axial esquerdo",
  "Terminal de direção direito","Terminal de direção esquerdo",
  "Pivô direito","Pivô esquerdo",
  "Coifas homocinéticas","Correia de acessórios",
  "Líquido de arrefecimento","Pressão dos pneus / estepe",
  "Palheta dianteira","Palheta traseira","Escapamento",
  "Água do para-brisa","Luzes dianteiras","Luzes traseiras",
  "Possíveis vazamentos de óleo","Possíveis vazamentos de água",
  "Possíveis vazamentos de fluído de freio",
  "Óleo","Filtro de óleo","Filtro de ar","Filtro de combustível",
  "Filtro de cabine","Jogo de velas","Jogo de cabos de vela",
  "Bobina de ignição","TBI","Embreagem"
];

const tbody = document.querySelector("#checklist tbody");

items.forEach(item => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${item}</td>
    <td><input type="checkbox"></td>
    <td><input type="checkbox"></td>
  `;

  tbody.appendChild(row);
});