import React from 'react';
import PropTypes from 'prop-types';

import './CriarItem.css';

const IconPlus = () => {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M61 37H43V19h-6v18H19v6h18v18h6V43h18"/></svg>
  )
};

const CriarItem = ({formRef, handleSubmit}) => {
  return (
    <form
      className="CriarItem"
      ref={formRef}
      onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <legend>Adicionar novos itens</legend>

          <div>
            <label htmlFor="itemQuantidade">Qtd. desejada:</label>
            <input
              required
              placeholder="Qtd"
              defaultValue={1}
              min="1"
              pattern="\d*"
              id="itemQuantidade"
              name="itemQuantidade"
              type="number" />
          </div>

          <div>
            <label htmlFor="itemNome">Nome do item:</label>
            <input
              required
              autoComplete="off"
              placeholder="Nome do item"
              id="itemNome"
              name="itemNome"
              type="text" />
          </div>

          <button title="Adicionar" type="submit"><IconPlus /></button>
        </fieldset>
    </form>
  )
}

CriarItem.propTypes = {
  formRef: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CriarItem;
