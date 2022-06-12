import React from "react";
import FooterLogo from "../../img/footer_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <a href="#" className="footer-button">
          Anunțuri valorificare bunuri
        </a>
        <a href="#" className="footer-button">
          Anunțuri Resurse Umane
        </a>
        <a href="#" className="footer-button">
          Anunțuri de achiziție
        </a>
      </div>
      <div className="footer-row">
        <a href="#" className="footer-button-2">
          Rambursari TVA din UE
        </a>
        <a href="#" className="footer-button-2">
          Solicitare verificare cod TVA
        </a>
        <a href="#" className="footer-button-2">
          Verificarea codului TVA
        </a>
        <a href="#" className="footer-button-2">
          One stop shop
        </a>
        <a href="#" className="footer-button-2">
          Verificarea autorizatiei
        </a>
        <a href="#" className="footer-button-2">
          Brexit
        </a>
      </div>
      <div className="footer-row">
        <div className="footer-footer">
          <img src={FooterLogo} className="footer-img"></img>
          <span className="footer-content">
            © Agenția Națională de Administrare Fiscală - CNIF - Conținutul
            acestui portal este proprietatea Agenției Naționale a domnului
            Serban Nacu.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
