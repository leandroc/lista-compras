import React from 'react';
import PropTypes from 'prop-types';

import './CriarLista.css';

const IconPlus = () => {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M61 37H43V19h-6v18H19v6h18v18h6V43h18"/></svg>
  )
};

const CriarLista = ({formRef, handleSubmit}) => {
  return (
    <form
      className="CriarLista"
      ref={formRef}
      onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <legend>Criar nova lista</legend>

          <div>
            <label htmlFor="listaNome">Nome da nova lista:</label>
            <input
              required
              autoComplete="off"
              placeholder="Nome da nova lista"
              type="text"
              id="listaNome"
              name="listaNome" />
          </div>

          <button title="Criar" type="submit"><IconPlus /></button>
        </fieldset>
    </form>
  )
}

CriarLista.propTypes = {
  formRef: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CriarLista;
