import React, { Component } from 'react';

import Service from '../utils/service';

import View from '../components/View';
import ViewHeader from '../components/ViewHeader';
import CriarLista from '../components/CriarLista';
import Content from '../components/Content';
import ListaListas from '../components/ListaListas';
import Alerta from '../components/Alerta';

class Home extends Component {
  constructor() {
    super();

    this.Service = Service.prototype;

    this.criarLista = this.criarLista.bind(this);
    this.removerLista = this.removerLista.bind(this);
    this.abrirLista = this.abrirLista.bind(this);

    this.state = {
      listas: []
    }
  }

  criarLista(e) {
    e.preventDefault();

    const timestamp = new Date().getTime();

    const listas = this.Service.save({
      _id: timestamp,
      nome: this.form.listaNome.value,
      dataCriacao: timestamp,
      itens: []
    });

    this.form.listaNome.value = '';

    this.setState({ listas });
  }

  removerLista(lista, e) {
    e.stopPropagation();
    const listas = this.Service.remove(lista);

    this.setState({ listas });
  }

  abrirLista(lista, e) {
    e.stopPropagation();

    this.props.history.push(`/lista/${lista._id}`)
  }

  componentDidMount() {
    const listas = this.Service.getAll();

    window.scrollTo(0, 0);

    this.setState({ listas });
  }

  render() {
    return (
      <View>
        <ViewHeader title="Lista de Compras" />

        <CriarLista
          formRef={form => this.form = form}
          handleSubmit={this.criarLista} />

        <Content>
          { !(this.state.listas.length === 0)
            ? <ListaListas
                listas={this.state.listas}
                handleRemove={this.removerLista}
                abrirLista={this.abrirLista} />
            : <Alerta mensagem="Crie uma nova lista para iniciar" />
          }
        </Content>
      </View>
    )
  }
}

export default Home;
