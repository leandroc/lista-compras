import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ViewHeader.css';

const IconBack = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" /></svg>
  )
}

const ViewHeader = ({title, backButton}) => {
  return (
    <header className="ViewHeader">
      {backButton &&
        <Link to="/">
          <button title="Voltar" type="button"><IconBack /></button>
        </Link>
      }

      <h1>{title}</h1>
    </header>
  )
}

ViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backButton: PropTypes.bool
}

export default ViewHeader;
