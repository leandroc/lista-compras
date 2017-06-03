import React, { Component } from 'react';

import Service from '../utils/service';

import View from '../components/View';
import ViewHeader from '../components/ViewHeader';
import CriarItem from '../components/CriarItem';
import Content from '../components/Content';
import ListaItens from '../components/ListaItens';
import Total from '../components/Total';
import Alerta from '../components/Alerta';

class ListaCompras extends Component {
  constructor() {
    super();

    this.Service = Service.prototype;

    this.adicionarItem = this.adicionarItem.bind(this);
    this.removerItem = this.removerItem.bind(this);
    this.atualizaPreco = this.atualizaPreco.bind(this);

    this.state = {
      lista: {},
      total: {}
    }
  }

  adicionarItem(e) {
    e.preventDefault();

    const timestamp = new Date().getTime();

    const lista = this.Service.saveItem(this.state.lista, {
      _id: timestamp,
      nome: this.form.itemNome.value,
      quantidade: this.form.itemQuantidade.value,
      dataCriacao: timestamp,
      preco: 0
    });

    this.setState({ lista, total: this.totalCompras(lista) });

    this.form.itemNome.value = '';
    this.form.itemQuantidade.value = 1;
  }

  removerItem(item, e) {
    e.stopPropagation();

    const lista = this.Service.removeItem(this.state.lista, item);

    this.setState({ lista, total: this.totalCompras(lista) });
  }

  atualizaPreco(item, e) {
    const itemAtualizado = item;
    itemAtualizado.preco = e.target.value;

    const lista = this.Service.saveItem(this.state.lista, itemAtualizado);
    this.setState({ lista, total: this.totalCompras(lista) });
  }

  totalCompras(lista) {
    let novoTotal;

    const acc = (p, c) => {
      let pQuantidade = parseInt(p.quantidade, 10);
      let pPreco = parseFloat(p.preco);
      let cQuantidade = parseInt(c.quantidade, 10);
      let cPreco = parseFloat(c.preco);

      return {
        quantidade: pQuantidade + cQuantidade,
        preco: pPreco+ (cPreco * cQuantidade)
      };
    }

    if(lista.itens.length > 0) {
      novoTotal = lista.itens.reduce(acc);
    }

    return novoTotal ? novoTotal : {};
  }

  componentDidMount() {
    let lista = this.Service.getList(this.props.match.params.id);

    window.scrollTo(0, 0);

    if(lista) {
      this.setState({ lista, total: this.totalCompras(lista) });
    } else {
      this.props.history.push('/404')
    }
  }

  render() {
    return (
      <View>
        <ViewHeader title="Lista de Compras" backButton></ViewHeader>

        <CriarItem
          formRef={form => this.form = form}
          handleSubmit={this.adicionarItem} />

        <Content>
          {this.state.lista.itens &&
            (this.state.lista.itens.length > 0)
            ? <div>
                <ListaItens
                  lista={this.state.lista}
                  handleChange={this.atualizaPreco}
                  handleRemove={this.removerItem} />

                <Total total={this.state.total.preco} />
              </div>
            : <Alerta mensagem="Adicione um item à sua lista" />
          }
        </Content>
      </View>
    )
  }
}

export default ListaCompras;
