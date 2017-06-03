export function formatPrice(price) {
  return `R$ ${((price * 100) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function getPrecoTotal(preco, quantidade) {
  return (preco * quantidade).toFixed(2);
}

export function formatDate(timestamp) {
  // const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const data = new Date(timestamp);
  // const weekDay = data.getDay();
  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();

  // console.log(`${day} de ${months[month]} de ${year} | ${weekDays[weekDay]}`);

  return `${day} de ${months[month]} de ${year}`;
}
