import React from 'react';
import Card from './Card';

import './../assets/styles/components/Cards.css';
/*data*/
import initalData from './../cards.json';
const Cards = () => {
  console.log(initalData);

  return (
    <article className="cards">
      {initalData.map(({ lang, url, fcolor, scolor }) => (
        <Card
          key={lang}
          lang={lang}
          img={url}
          fcolor={fcolor}
          scolor={scolor}
        />
      ))}
    </article>
  );
};

export default Cards;
