import { CSSTransition } from "react-transition-group";
import React, { useState, useEffect, useRef } from "react";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button toggle">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="despre-anaf">
            Despre ANAF
          </DropdownItem>
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="asistenta">
            Asistență Contribuabili
          </DropdownItem>
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="servicii">
            Servicii online
          </DropdownItem>
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="info-publice">
            Info publice
          </DropdownItem>
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="info-anaf">
            Info ANAF
          </DropdownItem>
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="info-ue">
            Info UE
          </DropdownItem>
          <DropdownItem leftIcon={">"} rightIcon={">"} goToMenu="contact">
            Contact
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "despre-anaf"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            Inapoi la meniul principal
          </DropdownItem>
          <DropdownItem>Conducere ANAF</DropdownItem>
          <DropdownItem>Organizare</DropdownItem>
          <DropdownItem>Strategii ANAF</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "asistenta"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Informații privind obligațiile fiscale</DropdownItem>
          <DropdownItem>Declararea obligaţiilor fiscale</DropdownItem>
          <DropdownItem>Plata obligaţiilor fiscale</DropdownItem>
          <DropdownItem>Programe utile</DropdownItem>
          <DropdownItem>Legislaţie</DropdownItem>
          <DropdownItem>Acorduri internaționale</DropdownItem>
          <DropdownItem>Servicii oferite contribuabililor</DropdownItem>
          <DropdownItem>Carta contribuabilului</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "servicii"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Inregistrare utilizatori</DropdownItem>
          <DropdownItem>Descărcare declaraţii electronice</DropdownItem>
          <DropdownItem>Programări online</DropdownItem>
          <DropdownItem>Registre</DropdownItem>
          <DropdownItem>Rapoarte tranzacții și transferuri</DropdownItem>
          <DropdownItem>Servicii WEB - ANAF</DropdownItem>
          <DropdownItem>Obligaţii restante către bugete</DropdownItem>
          <DropdownItem>Rambursare TVA din UE</DropdownItem>
          <DropdownItem>Notificări</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "info-publice"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Informaţii de interes public</DropdownItem>
          <DropdownItem>Codul de conduită al personalului ANAF</DropdownItem>
          <DropdownItem>Formular de contact</DropdownItem>
          <DropdownItem>Strategia Națională Anticorupție</DropdownItem>
          <DropdownItem>Trasabilitate produse din TUTUN</DropdownItem>
          <DropdownItem>Situaţia deconturilor de TVA</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "info-anaf"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Consultare publică</DropdownItem>
          <DropdownItem>Protecția datelor cu caracter personal</DropdownItem>
          <DropdownItem>Relaţii internaţionale</DropdownItem>
          <DropdownItem>Granturi Norvegiene 2009 - 2014</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "info-ue"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Sancţiuni internaţionale</DropdownItem>
          <DropdownItem>Info Brexit</DropdownItem>
          <DropdownItem>Rambursări TVA din UE</DropdownItem>
          <DropdownItem>VIES solicitare verificare cod TVA</DropdownItem>
          <DropdownItem>VIES verificarea codului TVA</DropdownItem>
          <DropdownItem>EMCS</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "contact"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<"}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem>Formular de contact</DropdownItem>
          <DropdownItem>Relaţii Publice şi Mass-Media</DropdownItem>
          <DropdownItem>Contact unități fiscale</DropdownItem>
          <DropdownItem>Afişare sediu unitate fiscală</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
