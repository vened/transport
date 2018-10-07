import React from 'react';
import logo from '../img/logo.png';

const Page1 = () => (
  <section className="section text-center">
    <div className="sectionBody">
      <h2 style={{ margin: 0 }}>
        Главное управление архитектуры
        и градостроительства Московской Области
      </h2>
      <img
        style={{ height: '4em', margin: '0 0 3em' }}
        src={logo}
        alt="Главное управление архитектуры и градостроительства Московской Области"
      />
      <h1 style={{ margin: 0 }}>
        Концепция стратегии транспортного
        <br />
        развития Московской области
        <br />
        2019–2023 г.г.
      </h1>
    </div>
  </section>
);

export default Page1;
