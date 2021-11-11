import React from 'react';
import PropTypes from 'prop-types';

/*styles*/
import './../assets/styles/components/Card.css';

const Card = ({ lang, img, fcolor, scolor }) => {
  return (
    <div className="card">
      <img src={img} alt={lang} />
      <h2>{lang}</h2>
    </div>
  );
};

Card.propTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
};

export default Card;
