import React from 'react';
import logo from './logo.png';
import './Page1.css';

const Page1 = () => (
  <section className="section text-center">
    <div className="sectionBody">
      <div className="Page1Head">
        <h2 className="Page1HeadTitle">
          Главное управление архитектуры
          <br />
          и градостроительства Московской Области
        </h2>
        <img
          className="Page1Logo"
          src={logo}
          alt="Главное управление архитектуры и градостроительства Московской Области"
        />
      </div>

      <h1 className="Page1Title">
        <div className="Page1TitleHead">
          Концепция стратегии
        </div>
        <div>
          транспортного развития Московской области
        </div>
        <div>
          2019 — 2023 г.г.
        </div>
      </h1>
    </div>
  </section>
);

export default Page1;
