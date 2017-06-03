import React from 'react';

import './Alerta.css';

const Alerta = ({mensagem}) => {
  return (
    <div className="Alerta">
      {mensagem}
    </div>
  )
}

export default Alerta;
