export function formatPrice(price) {
  return `R$ ${((price * 100) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function getPrecoTotal(preco, quantidade) {
  return (preco * quantidade).toFixed(2);
}

export function formatDate(timestamp) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const data = new Date(timestamp);
  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();

  return `${day} de ${months[month]} de ${year}`;
}
