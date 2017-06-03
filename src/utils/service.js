const _DATABASE = 'listas';

class Service {
  _isNew(arr, name) {
    return arr.find(item => item._id === name._id ) ? false : true;
  }

  _set(arr) {
    return localStorage.setItem(_DATABASE, JSON.stringify(arr));
  }

  _get() {
    return JSON.parse( localStorage.getItem(_DATABASE) );
  }

  getList(id) {
    let listas = this._get();

    return listas.find( item => item._id === parseInt(id, 10) );
  }

  getAll() {
    const listas = this._get();

    if(listas) {
      return listas;
    }

    localStorage.setItem(_DATABASE, JSON.stringify([]));

    return [];
  }

  save(novaLista) {
    let listas = this._get();
    let novaListas = [];

    if( this._isNew(listas, novaLista) ) {
      novaListas = [...listas, novaLista];
    } else {
      listas.map((item, index) => {
        if(item._id === novaLista._id) {
          listas[index] = novaLista;
        }

        return item;
      });

      novaListas = listas;
    }

    this._set([...novaListas]);

    return novaListas;
  }

  remove(oldLista) {
    let listas = this._get();

    listas = listas.filter(item => item._id !== oldLista._id);

    this._set(listas);

    return listas;
  }

  saveItem(lista, novoItem) {
    let listaCompras = this.getList(lista._id);
    let novosItens = [];

    if( this._isNew(listaCompras.itens, novoItem) ) {
      novosItens = [...listaCompras.itens, novoItem];
    } else {
      listaCompras.itens.map((item, index) => {
        if(item._id === novoItem._id) {
          listaCompras.itens[index] = novoItem;
        }

        return item;
      });

      novosItens = listaCompras.itens;
    }

    listaCompras.itens = novosItens;

    this.save(listaCompras)

    return listaCompras;
  }

  removeItem(lista, oldItem) {
    let listaCompras = this.getList(lista._id);

    listaCompras.itens = listaCompras.itens.filter(item => item._id !== oldItem._id);

    this.save(listaCompras);

    return listaCompras;
  }
}

export default Service;
